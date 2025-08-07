#!/bin/bash

echo "$(date +"%H:%M") Replacing image urls.. "

extensions=( "*.md" "*.yml" "*.html" "*.liquid" "*.sass" "*.css" "*.js" "*.json" "*.sql" "*.cql")
cleanup_dirs=( "user-guide" "reference" "edge" "lwm2m")

# Detect OS and set sed in-place edit flags
if [[ "$OSTYPE" == "darwin"* ]]; then
  # macOS
  SED_OPTS=(-i '')
else
  # Linux and others
  SED_OPTS=(-i)
fi

for ext in "${extensions[@]}"
do
  echo "Replacing the image url in $ext files"
  find . -type f -iname "$ext" -not -path "./_site/*" -exec sed "${SED_OPTS[@]}" -e '/https/! s/\/images\//https:\/\/img.thingsboard.io\//g' {} \;
  find . -type f -iname "$ext" -not -path "./_site/*" -exec sed "${SED_OPTS[@]}" -e 's/https:\/\/thingsboard.io\/images\//https:\/\/img.thingsboard.io\//g' {} \;
  find . -type f -iname "$ext" -not -path "./_site/*" -exec sed "${SED_OPTS[@]}" -e '/https:\/\/img.thingsboard.io\/partners\/map-of-distributors\.svg/ s/https:\/\/img.thingsboard.io\/partners\/map-of-distributors\.svg/\/images\/partners\/map-of-distributors.svg/g' {} \;
done

echo "$(date +"%H:%M") Replacing image urls.. done."

echo "$(date +"%H:%M") Uploading images to s3.."
cd images
aws s3 sync . s3://tb-website-images --size-only --quiet
echo "$(date +"%H:%M") Uploading images to s3.. done."

echo "$(date +"%H:%M") Cleanup images.."
for cleanup_dir in "${cleanup_dirs[@]}"
do
  git rm -r $cleanup_dir
done

cd -

git restore blog
git restore --staged images/reference/architecture-in-brief.svg
git restore images/reference/architecture-in-brief.svg

echo "$(date +"%H:%M") Cleanup images.. done."

echo "$(date +"%H:%M") Uploading static resources to s3.."
cd js
aws s3 sync . s3://tb-website-static/js --size-only --quiet
cd -
echo "$(date +"%H:%M") Uploading static to s3.. done."

#echo "$(date +"%H:%M") Update configuration pages for CE:"
#  python3 generate_config_pages.py ce ../ce3

#echo "$(date +"%H:%M") Update configuration pages for PE:"
#  python3 generate_config_pages.py pe ../pe3

git commit -m "Release script"

echo "$(date +"%H:%M") Please review changes and push."
