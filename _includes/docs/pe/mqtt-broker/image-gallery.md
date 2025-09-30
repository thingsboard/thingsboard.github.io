{% assign feature = "Image gallery" %}{% include templates/mqtt-broker/pe-tbmq-feature-banner.md %}

* TOC
{:toc}

The Image gallery serves as a centralized repository for storing and managing images. 
This is an important resource for improving the visual appeal and functionality of widgets, dashboards, devices, and asset profiles in a mobile application. 
Users can easily upload, organize, and select images to customize their interface and user experience, ensuring an integrity and branded look across the platform.

![image](/images/user-guide/image-gallery/image-gallery-pe.png)

## Cache configuration

Our image API uses *ETags* to optimize caching, ensuring images are only downloaded when they have changed, thus saving bandwidth.
By default, we do not apply Cache-Control headers, relying on the efficiency of ETags.
However, you can customize caching behavior through environment variables: 

- *CACHE_SPECS_IMAGE_ETAGS_TTL* - image ETags cache TTL. The default value is 44640 minutes, after which the cache will be deleted;

- *CACHE_SPECS_IMAGE_ETAGS_MAX_SIZE* - maximum cache size, in bytes. 0 means the cache is disabled;

- *CACHE_SPECS_IMAGE_SYSTEM_BROWSER_TTL* - browser cache TTL for system images, in minutes. Default value is 0 minutes - the cache is disabled;

- *CACHE_SPECS_IMAGE_TENANT_BROWSER_TTL* - browser cache TTL for tenant images, in minutes. Default value is 0 minutes - the cache is disabled.

These configurations control the Time To Live (TTL) for your system and tenant images in a user's browser cache.
Setting a longer TTL improves load time for repeated visits and reduces server load, while a shorter TTL ensures users receive more frequent content updates.
Adjust these settings based on the update frequency of your images. How to do it, read [here](/docs/user-guide/install/{{docsPrefix}}how-to-change-config/).

Additionally, the system administrator can set restrictions on the maximum size of a single image and the total size of images by configuring [tenant profiles](/docs/{{docsPrefix}}user-guide/tenant-profiles/#files-limits).
Values are specified in bytes.

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
An editing window will open. In this window you can change the name, download, export it to JSON, embed, and also [update the image](#update-image).

{% include images-gallery.html imageCollection="edit-image-1" %}

To change the name of the image, enter a new name and click the "Save" icon in the "Edit image" window.

{% include images-gallery.html imageCollection="edit-image-2" %}

#### Update image

Updating the image can be useful, for example, when one picture serves as the background for multiple dashboards. 
This allows you to make changes just once, and all dashboards using that image will automatically receive the updated version, saving you the effort of editing each dashboard individually.

To update the image, click the "Update image" button in the editing window. Select a new image or simply drag it to the "Update image" window and click "Update". 

{% include images-gallery.html imageCollection="update-image-1" %}

### Delete image

To delete an image from the image list, follow these steps:

{% include images-gallery.html imageCollection="delete-image-1" showListImageTitles="true" %}

To delete an image that is displayed as an image grid, follow these steps:

{% include images-gallery.html imageCollection="delete-image-2" showListImageTitles="true" %}

You can also delete multiple images (only via the image list view) at once:

{% include images-gallery.html imageCollection="delete-image-3" showListImageTitles="true" %}
