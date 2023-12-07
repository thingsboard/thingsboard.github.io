* TOC
{:toc}

{% assign sinceVersion = "3.6.2" %}
{% include templates/since.md %}

Create your own image gallery to use them for widget design and as images for dashboard, device and asset profiles in the mobile application.

![image](/images/user-guide/image-gallery/image-gallery-pe.png)

## Managing image gallery

Get familiar with the image gallery interface to understand which features are responsible for what actions.

The Image Gallery toolbar allows you to [upload image](#upload-image), [change the image viewing mode (list or grid)](#change-the-image-view-format), [include/exclude system images](#system-images), search images by name, and refresh window using the corresponding icons in the toolbar.

### Upload image

You can upload your image in image file format (PNG, JPEG, GIF, etc.) and JSON format.

To upload your images in image file format, follow these steps:

{% include images-gallery.html imageCollection="upload-image-1" showListImageTitles="true" %}

To import your images in JSON file format, follow these steps:

{% include images-gallery.html imageCollection="upload-image-2" showListImageTitles="true" %}

### Change the image view mode

To change the image viewing mode, simply select one of the two modes in the top left corner of the Image gallery window: an image list or an image grid.

{% include images-gallery.html imageCollection="image-viewing-mode" %}

### System images

By default, the list of images displays only your images.

To view your and system images, enable the "Include system images" option.

{% include images-gallery.html imageCollection="include-system-images" %}

## Image operations

You can perform operations with images such as [downloading in a JSON format](#download-image), [exporting in an image file format](#export-image), and [editing](#edit-image) and [deleting](#delete-image) an image using the corresponding icon opposite the image's name.

Let’s look at each operation.

### Download image

You can download an image as a JSON file.

If you're using the list view of images, click the "Download image" icon next to the image name that you want to download. 
Or, if you're using the grid view, hover your mouse pointer over the image you want to download and click the "Download image" icon.
The image in JSON format will be saved to your PC.

{% include images-gallery.html imageCollection="download-image-1" %}

### Export image

You can export an image as an image file format.

If you're using the list view of images, click the "Export image" icon next to the image name that you want to export.
Or, if you're using the grid view, hover your mouse pointer over the image you want to export and click the "Export image" icon.
The image in image file format will be saved to your PC.

{% include images-gallery.html imageCollection="export-image-1" %}

### Edit image

To edit an image, do the following:

 - If you're using the list view of images, click the "Edit image" icon opposite the image&#39;s name you want to edit.
Or, if you're using the grid view, hover your mouse pointer over the image you want to edit and click the "Export image" button.
- In the "Edit image" window, you can change the image's name, copy the image link, download, export, or update the image.
- 
{% include images-gallery.html imageCollection="edit-image-1" showListImageTitles="true" %}

In the image grid view:

{% include images-gallery.html imageCollection="edit-image-2" showListImageTitles="true" %}

### Delete image

You can delete an image using one of the following ways.

In the image list view:

{% include images-gallery.html imageCollection="delete-image-1" showListImageTitles="true" %}

In the image grid view:

{% include images-gallery.html imageCollection="delete-image-2" showListImageTitles="true" %}

You can also delete multiple images (only the image list view) at once:

{% include images-gallery.html imageCollection="delete-image-3" showListImageTitles="true" %}

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}