* TOC
{:toc}

{% assign sinceVersion = "3.6.2" %}
{% include templates/since.md %}

The Image gallery serves as a centralized repository for storing and managing images. This is an important resource for improving the visual appeal and functionality of widgets, dashboards, devices, and asset profiles in a mobile application. 
Users can easily upload, organize, and select images to customize their interface and user experience, ensuring an integrity and branded look across the platform.

{% if (docsPrefix == "pe/") or (docsPrefix == "paas/") %}
![image](https://img.thingsboard.io/user-guide/image-gallery/image-gallery-pe.png)
{% endif %}
{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/image-gallery/image-gallery-ce.png)
{% endif %}

{% unless docsPrefix == 'paas/' %}
## Configuration


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

<br>
Additionally, the system administrator can set restrictions on the maximum size of a single image and the total size of images by configuring [tenant profiles](/docs/{{docsPrefix}}user-guide/tenant-profiles/#files-limits).
Values are specified in bytes.
{% endunless %}

## Managing image gallery

Learn about the image gallery interface to identify the functionalities of various features.

The toolbar in the Image Gallery provides options to [upload images](#upload-image), [toggle between list and grid viewing modes](#change-the-image-view-mode), [filter system images](#system-images), search for images by name, and refresh the display. All accessible through specific icons on the toolbar.

### Add image

You can add your images to the Image gallery serves in [image file format](#upload-image) (PNG, JPEG, GIF, etc.) or [JSON file format](#import-image).

#### Upload image

To upload your images in **image file format**, follow these steps:

{% include images-gallery.html imageCollection="upload-image-1" showListImageTitles="true" %}

#### Import image

To import your images in **JSON file format**, follow these steps:

{% include images-gallery.html imageCollection="upload-image-2" showListImageTitles="true" %}

### Change the image view mode

To change the image viewing mode, simply select one of the two modes in the top left corner of the Image gallery window: an image list or an image grid.

{% include images-gallery.html imageCollection="image-viewing-mode" %}

### System images

By default, the list of images displays only your images.

To view your and system images, enable the "Include system images" option.

{% include images-gallery.html imageCollection="include-system-images" %}

## Image operations

You can perform operations with images such as [downloading in a JSON format](#download-image), [exporting in an image file format](#export-image), as well as [editing](#edit-image) and [deleting](#delete-image) an image using the corresponding icon opposite the image's name.

Let’s look at each operation.

### Download image

You can download an image as a JSON file.

If you're using the list view of images, click the "Download image" icon next to the image name that you want to download. 
Or, if you're using the grid view, hover your mouse pointer over the image you want to download and click the "Download image" icon.
The image in JSON format will be saved to your PC.

{% include images-gallery.html imageCollection="download-image-1" %}

### Export image

You can export an image in an image file format.

If you're using the list view of images, click the "Export image" icon next to the image name that you want to export.
Or, if you're using the grid view, hover your mouse pointer over the image you want to export and click the "Export image" icon.
The image in image file format will be saved to your PC.

{% include images-gallery.html imageCollection="export-image-1" %}

### Edit image

To edit an image, do the following:

 - In the list view, click the "Edit image" icon next to the image name you want to edit. In the grid view, hover your mouse cursor over the image you want to edit and click the "Edit image" button.
 
{% include images-gallery.html imageCollection="edit-image-1"%}

 - In the "Edit image" window, you can change the image's name, copy the image link, download, export, or update the image.

{% include images-gallery.html imageCollection="edit-image-2"%}

### Delete image

To delete an image from the image list, follow these steps:

{% include images-gallery.html imageCollection="delete-image-1" showListImageTitles="true" %}

To delete an image that is displayed as an image grid, follow these steps:

{% include images-gallery.html imageCollection="delete-image-2" showListImageTitles="true" %}

You can also delete multiple images (only via the image list view) at once:

{% include images-gallery.html imageCollection="delete-image-3" showListImageTitles="true" %}

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}