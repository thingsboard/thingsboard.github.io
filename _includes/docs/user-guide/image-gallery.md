* TOC
{:toc}

{% assign sinceVersion = "3.6.2" %}
{% include templates/since.md %}

The Image gallery serves as a centralized repository for storing and managing images. 
This is an important resource for improving the visual appeal and functionality of widgets, dashboards, devices, and asset profiles in a mobile application. 
Users can easily upload, organize, and select images to customize their interface and user experience, ensuring an integrity and branded look across the platform.

{% if (docsPrefix == "pe/") or (docsPrefix contains "paas/") %}
![image](https://img.thingsboard.io/user-guide/image-gallery/image-gallery-pe.png)
{% endif %}
{% if docsPrefix == null %}
![image](https://img.thingsboard.io/user-guide/image-gallery/image-gallery-ce.png)
{% endif %}

{% unless docsPrefix contains 'paas/' %}
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
{% endunless %}

## Add image

Add your images to the Image gallery serves in [image file format](#upload-image) (PNG, JPEG, GIF, etc.) or [JSON file format](#import-image-from-json).

### Upload image

To upload new image in **image file format**, follow these steps:

{% include images-gallery.html imageCollection="upload-image-1" showListImageTitles="true" %}

### Import image from JSON

To import your images in **JSON file format**, follow these steps:

{% include images-gallery.html imageCollection="upload-image-2" showListImageTitles="true" %}

## System images

The image gallery contains system images that you can also use to design your dashboards, widgets, etc. By default, only your images are displayed in the image list.
To display your and system images, enable the Enable System Images option.

{% include images-gallery.html imageCollection="include-system-images" %}

{% capture difference %}
**Please note:**
Only the system administrator can delete, rename or update system images.
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Change the image view mode

You can view images in one of two modes: list or grid.
To change the image viewing mode, simply select the mode that suits you in the top left corner of the Image gallery window.

{% include images-gallery.html imageCollection="image-viewing-mode" %}

## Image operations

You can [download](#download-image), [export to JSON](#export-image-to-json), [edit](#edit-image), [embed](#embed-image), and [delete](#delete-image) image using the corresponding icon opposite the image's name.
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

### Embed image

After you've added an image to the Image gallery, you can embed this image into HTML card widgets, in HTML section in the widget editor, in cell content functions, in custom actions, etc.

Images provided at the system level are available to all users using the platform, while tenant images may only be available to specific tenants.
Each image on the ThingsBoard platform has a unique URL that allows you to download the image both with and without authentication.

Using the code snippet provided below, you can embed the image into components that operate based on plain HTML, without authentication. For example, in *HTML Card* widget, cell content functions, etc.

```java
<img src="relative link to the image" alt="text description of the image" />
```

To embed your image into an Angular HTML template, for example in the *Markdown/HTML Card* widget or HTML section in the widget editor, use the following code snippet:

```java
<img [src]="'image URL' | image | async" />
```

This specific method ensures that the authentication headers is automatically adds in the image request, allowing the same image URL to return different images for different users.

<br>
To obtain a link to the image for further embedding, follow these steps.

- Go to the "Image gallery" page in the "Resources" section;
- Click the "Embed image" of the corresponding image that you want to embed (if you’re using the grid view, hover your mouse pointer over the image you want to embed and click the "Embed image" icon);
- Select the code snippet for the Angular HTML template or for the components based on plain HTML, and copy the corresponding unique link for this image.

{% include images-gallery.html imageCollection="embed-image" %}

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

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}