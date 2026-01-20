{% assign feature = "Image gallery" %}{% include templates/mqtt-broker/pe-tbmq-feature-banner.md %}

* TOC
{:toc}

The Image Gallery serves as a centralized repository for managing images in the TBMQ application.
It provides the source for logo and favicon images used in the **White labeling** feature on the [application](/docs/pe/mqtt-broker/white-labeling/#customize-tbmq-web-interface) and [login](/docs/pe/mqtt-broker/white-labeling/#customize-the-login-page) pages.

![image](/images/pe/mqtt-broker/user-guide/white-labeling/image-gallery.png)

## Add image

Add your images to the Image gallery serves in [image file format](#upload-image) (PNG, JPEG, GIF, etc.) or [JSON file format](#import-image-from-json).

### Upload image

To upload new image in **image file format**, follow these steps:

{% include images-gallery.html imageCollection="upload-image-1" showListImageTitles="true" %}

### Import image from JSON

To import your images in **JSON file format**, follow these steps:

{% include images-gallery.html imageCollection="upload-image-2" showListImageTitles="true" %}

## Change the image view mode

You can view images in one of two modes: list or grid.
To change the image viewing mode, simply select the mode that suits you in the top left corner of the Image gallery window.

{% include images-gallery.html imageCollection="image-viewing-mode" %}

## Image operations

You can [download](#download-image), [export to JSON](#export-image-to-json), [edit](#edit-image), and [delete](#delete-image) image using the corresponding icon opposite the image's name.
Let's take a closer look at each operation.

### Download image

Downloading an image in image file format can be done in two ways, depending on the selected image viewing format:

- If you're using the list view of images, click the "Download image" icon next to the image name that you want to export.
- If you're using the grid view, hover your mouse pointer over the image you want to export and click the "Download image" icon.

The image in image file format will be saved to your PC.

{% include images-gallery.html imageCollection="download-image-1" %}

### Export image to JSON

Exporting an image to JSON can be done in two ways, depending on the selected image viewing format:

- If you're using the list view of images, click the "Export image to JSON" icon next to the image name that you want to download.
- If you're using the grid view, hover your mouse pointer over the image you want to download and click the "Export image to JSON" icon.

The image in JSON format will be saved to your PC.

{% include images-gallery.html imageCollection="export-image-1" %}

### Edit image

To open editing an image window, click the "Edit image" icon next to the image name that you want to edit (if you're using the grid view, hover your mouse pointer over the image you want to edit and click the "Edit image" icon).
An editing window will open. In this window you can change the name, download, export it to JSON, and also [update the image](#update-image).

To change the name of the image, enter a new name and click the "Save" icon in the "Edit image" window.

{% include images-gallery.html imageCollection="edit-image-1" %}

#### Update image

Updating the image can be useful, for example, when one picture serves as the background for multiple places. 
This allows you to make changes just once, and all places using that image will automatically receive the updated version, saving you the effort of editing each place individually.

To update the image, click the "Update image" button in the editing window. Select a new image or simply drag it to the "Update image" window and click "Update". 

{% include images-gallery.html imageCollection="update-image-1" %}

### Delete image

To delete an image from the image list, follow these steps:

{% include images-gallery.html imageCollection="delete-image-1" showListImageTitles="true" %}

To delete an image that is displayed as an image grid, follow these steps:

{% include images-gallery.html imageCollection="delete-image-2" showListImageTitles="true" %}

You can also delete multiple images (only via the image list view) at once:

{% include images-gallery.html imageCollection="delete-image-3" showListImageTitles="true" %}
