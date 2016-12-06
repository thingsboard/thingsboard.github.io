/** TODO **/

FROM starefossen/ruby-node:2-4

RUN gem install github-pages

VOLUME /TODO

EXPOSE 4000

WORKDIR /TODO

CMD bundle && jekyll clean && jekyll serve -H 0.0.0.0 -P 4000

# For instructions, see http://thingsboard.io/editdocs/
