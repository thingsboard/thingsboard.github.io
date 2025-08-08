#!/usr/bin/env ruby

# frozen_string_literal: true

require 'yaml'
require 'find'

puts "--- Page Information Generation Started ---"

# This script scans all .md and .html files within the ./docs/ directory.
# For each file, it creates a map where the key is the page's canonical URL,
# and the value is an object containing the URL and any associated redirects.

# --- Configuration ---
# The directory to scan for documentation files.
DOCS_DIRECTORY = './docs/'.freeze

# The output path for the generated YAML file.
OUTPUT_FILE_PATH = './_data/pages_info.yml'.freeze
OUTPUT_REDIRECT_FILE_PATH = './_data/pages_redirect_info.yml'.freeze

# --- Logic ---

# This hash will store the final mapping.
# The key will be the canonical URL.
# The value will be a hash containing the url and its redirects.
#
# Example structure for the output file:
# {
#   "/docs/topic/page/": {
#     "url": "/docs/topic/page/",
#     "redirect_from": ["/old-url/", "/another-old-url/"]
#   }
# }
pages_map = {}
pages_map_redirect = {}

puts "\nScanning files in #{DOCS_DIRECTORY} and building URL map..."

# Use Find.find to recursively search for files in the docs directory.
Find.find(DOCS_DIRECTORY) do |path|
  # We are only interested in Markdown and HTML files.
  next unless path.end_with?('.md', '.html')

  # --- 1. Generate the Canonical URL from the File Path ---
  # This logic converts a file path like './docs/topic/index.md'
  # into a clean, web-friendly URL like '/docs/topic/'.
  canonical_url = path
                  .gsub(%r{^\./}, '/') # Replace leading './' with '/'
                  .gsub(/(\/index)?\.(md|html)$/, '/') # Remove file extension and '/index'

  # --- 2. Parse YAML Front Matter to Find 'redirect_from' ---
  front_matter = {}
  redirects = [] # Default to an empty array

  begin
    File.open(path) do |f|
      # Check if the first line is the start of a YAML block.
      if f.readline.strip == '---'
        yaml_lines = []
        # Read lines until we hit the closing '---'
        while (line = f.readline)
          break if line.strip == '---'
          yaml_lines << line
        end
        # Safely load the YAML content into a hash.
        front_matter = YAML.safe_load(yaml_lines.join) || {}
        raw_redirects = front_matter['redirect_from']

        # Ensure redirects are always processed as an array for consistency.
        redirects = if raw_redirects.is_a?(Array)
                      raw_redirects
                    elsif raw_redirects
                      [raw_redirects]
                    else
                      [] # Use an empty array if redirects are nil or not found
                    end
      end
    end
  rescue EOFError
    # This handles empty files or files that end unexpectedly.
  rescue StandardError => e
    puts "Warning: Could not parse front matter for '#{path}'. Error: #{e.message}"
  end

  # --- 3. Add the page information to the map ---
  # The canonical URL serves as the main key.
  pages_map[canonical_url] = {
    'url' => canonical_url,
    'redirect_from' => redirects
  }

  pages_map.each do |canonical_url, data|
    data['redirect_from'].each do |redirect_url|
      pages_map_redirect[redirect_url] = {
               'url' => canonical_url,
               'redirect_from' => redirect_url
             }
    end
  end
end

# --- Output ---

# Ensure the output directory exists.``
output_dir = File.dirname(OUTPUT_FILE_PATH)
Dir.mkdir(output_dir) unless Dir.exist?(output_dir)

output_dir_redirect = File.dirname(OUTPUT_REDIRECT_FILE_PATH)
Dir.mkdir(output_dir_redirect) unless Dir.exist?(output_dir_redirect)

# Write the collected data to the specified YAML file.
# The .to_yaml method provides a clean, human-readable output.
File.write(OUTPUT_FILE_PATH, pages_map.to_yaml)
File.write(OUTPUT_REDIRECT_FILE_PATH, pages_map_redirect.to_yaml)

puts "\n✅ Page information map with #{pages_map.keys.length} entries successfully generated."
puts "\n✅ Page information map with #{pages_map_redirect.keys.length} entries successfully generated."
puts "File saved at: #{OUTPUT_FILE_PATH}"
puts "\n--- Page Information Generation Finished ---"
