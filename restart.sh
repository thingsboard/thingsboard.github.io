#!/bin/sh
rm -rf _site .jekyll-metadata &&  ruby _scripts/generate_url_map.rb && bundle exec jekyll serve --config _config.yml --host 0.0.0.0
