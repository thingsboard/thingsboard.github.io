---
layout: docwithnav
title: How to create an integration guide - Hardware partners
description: Integration sample
hidetoc: "true"

---

* TOC
{:toc}

## Fork a repo

Ensure that you already have a [GitHub](https://github.com/) account.

* [Step 1] Install Git on your computer, please refer to [Set up Git](https://docs.github.com/en/github/getting-started-with-github/set-up-git) guide.
* [Step 2] [Connect to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh).
* [Step 3] Open [thingsboard.github.io](https://github.com/thingsboard/thingsboard.github.io) documentation (site) repository.
* [Step 4] Fork a repo(refer to [Fork a repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) guide) of the [thingsboard.github.io](https://github.com/thingsboard/thingsboard.github.io) project.

## Deployment of the site locally

The below commands set up your environment for running GitHub pages locally.
Any edits you make will be viewable on a lightweight webserver that runs on your local machine.

Install Ruby 2.2 or higher. If you're on Ubuntu 20.04.1 LTS, run these commands:

	sudo apt-get install software-properties-common
	sudo apt-add-repository ppa:brightbox/ruby-ng
	sudo apt-get update
	sudo apt-get install make ruby ruby-dev libffi-dev g++ zlib1g-dev
	sudo gem install github-pages
	sudo gem install jekyll bundler

* If you're on a Mac, follow [these instructions](https://gorails.com/setup/osx/).
* If you're on a Windows machine you can use the [Ruby Installer](http://rubyinstaller.org/downloads/). During the installation make sure to check the option for *Add Ruby executables to your PATH*.

Clone our site:

	git clone https://github.com/thingsboard/thingsboard.github.io.git

Make any changes you want. Then, to see your changes locally:

	cd thingsboard.github.io
	bundle install
	bundle exec jekyll serve --host 0.0.0.0

In case you change the layout or website structure you might need to execute following command:

    rm -rf _site .jekyll-metadata && bundle exec jekyll serve --host 0.0.0.0

or execute the below script from the project root directory:

    ./restart.sh

Your copy of the site will then be viewable at: [http://localhost:4000](http://localhost:4000)
(or wherever Jekyll tells you).

## Create a guide

* [Step 1] Add new directories via paths "/docs/samples/YOUR_INTEGRATION_NAME/" & "/images/samples/YOUR_INTEGRATION_NAME/".
* [Step 2] Create a "YOUR_INTEGRATION_NAME.md" file in your newly created directory from [Step 1].
* [Step 3] Use this [Sample](/docs/samples/sample/sample.md) as a base for your guide.
* [Step 4] Store all of your images for your guide in a path "/images/samples/YOUR_INTEGRATION_NAME/".
* [Step 5] Add your company logo to path "/images/partners/".
* [Step 6] Add your visit-card to "partners.json" which is located via path "/_includes/" & insert name of your company logo file ([Step 5]) into the "logo" in code bellow.  

        {
            "type": "hardware",
            "program": "",
            "name": "YOUR_INTEGRATION_NAME",
            "logo": "YOUR_LOGO.png",
            "links": {
                "Site": {
                    "href": "YOUR_SITE",
                    "target": "_blank"
                }
            },
            "blurb": "Presentation of your integration."
        }

## Push changes & create Pull Request

* [Step 1] [Push changes to your fork](https://thingsboard.io/docs/user-guide/contribution/how-to-contribute/#push-changes-to-your-fork).
* [Step 2] [Create pull request](https://thingsboard.io/docs/user-guide/contribution/how-to-contribute/#create-pull-request).

## Wait until your changes would be merged.

If you'll have any additional questions, please [Contact us](https://thingsboard.io/docs/contact-us/) for further support.