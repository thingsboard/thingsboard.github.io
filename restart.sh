#!/bin/sh
rm -rf _site .jekyll-metadata && bundle exec jekyll serve --config _config.yml,_config_dev.yml --host 0.0.0.0
