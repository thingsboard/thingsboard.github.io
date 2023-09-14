#!/bin/sh
find . -name '*.md' -exec sed -i -e '/https/! s/\/images\//https:\/\/img.thingsboard.io\//g' {} \;
