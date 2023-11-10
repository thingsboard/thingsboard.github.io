## Introduction to thingsboard.io

Our website is open-sourced. You may find the code of in this [repo](https://github.com/thingsboard/thingsboard.github.io). Everyone can contribute to the website. The flow is as follows...

* TOC
{:toc}

## What is fork

If you are not familiar with GitHub, please read their documentation or ask a colleague who has an expertise before you proceed.
If you have enough knowledge then go through further steps. Ensure that you already have a [GitHub](https://github.com/) account, and you successfully logged in.

* [Step 1. Optional] Install Git on your computer, please refer to [Set up Git](https://docs.github.com/en/github/getting-started-with-github/set-up-git) guide.
* [Step 2. Optional] [Connect to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh).
* [Step 3] Open [thingsboard.github.io](https://github.com/thingsboard/thingsboard.github.io) documentation (site) repository.
* [Step 4] Fork a repo(refer to [Fork a repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) guide) of the [thingsboard.github.io](https://github.com/thingsboard/thingsboard.github.io) project.

  ![image](https://img.thingsboard.io/user-guide/fork_button.jpg)

Whe-e! Starting now you have a copy of our website in your private GitHub repository.

## Local deployment of ThingsBoard documentation repo (website)

Now you can launch the website on your local machine to see the up-to-date version.
thingsboard.io uses jekyll site generator. So, in order to run the website on localhost you need a jekyll server installed.

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
* If you're on a Windows machine you can use the [Ruby Installer](https://rubyinstaller.org/downloads/). During the installation make sure to check the option for *Add Ruby executables to your PATH*.

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

Your copy of the site will then be viewable at: **http://localhost:4000**
(or wherever Jekyll tells you).

## Integration guide pattern

Use this [Sample](/docs/samples/sample/sample) as a base for your guide. This page is located in a path "/docs/samples/sample/sample.md"

Once you open the .md file perform further necessary steps

* [Step 1] Add new directories to the website structure "/docs/samples/YOUR_INTEGRATION_NAME/".
* [Step 2] Add new directories to the website structure "https://img.thingsboard.io/samples/YOUR_INTEGRATION_NAME/".
* [Step 3] Create a "YOUR_INTEGRATION_NAME.md" file using the [Sample](/docs/samples/sample/sample) as a base in your newly created directory from [Step 1].
* [Step 4] Store all of your images for your guide in a path "https://img.thingsboard.io/samples/YOUR_INTEGRATION_NAME/".
* [Step 5] Add your company logo to path "https://img.thingsboard.io/partners/".
* [Step 6] Add your visit-card to "partners.json" which is located via path "/_includes/" & insert name of your company logo file ([Step 5]) into the "logo" in code bellow.  

        {
          "type": "hardware",
          "program": "",
          "name": "YOUR_INTEGRATION_NAME",
          "logo": "YOUR_LOGO.png",
          "links": {
            "Site": {
              "href": "https://www.YOUR_SITE.com/",
              "target": "_blank"
            },
            "Integration guide": {
              "href": "/docs/samples/PATH_TO_YOUR_GUIDE-FILE_FROM_STEP_3/GUIDE-FILE/"
            }
          },
          "blurb": "YOUR_INTEGRATION_DESCRIPTION."
        }

Where:

    "YOUR_INTEGRATION_NAME" - Name of your integration guide
    "YOUR_LOGO.png" - Your company/integration logo file from [Step 5]
    "https://www.YOUR_SITE.com/" - Site of your company/integration.
    "/docs/samples/PATH_TO_YOUR_GUIDE-FILE_FROM_STEP_3/GUIDE-FILE/" - Full path with file name from Repository root.

## Push changes & create Pull Request

* [Step 1] [Push changes to your fork](/docs/user-guide/contribution/how-to-contribute/#push-changes-to-your-fork).
* [Step 2] [Create pull request](/docs/user-guide/contribution/how-to-contribute/#create-pull-request).

## Optional steps

You may notify us about your Pull Request (with Pull Request #) via [Contact us](/docs/contact-us/) form or in any other way.
