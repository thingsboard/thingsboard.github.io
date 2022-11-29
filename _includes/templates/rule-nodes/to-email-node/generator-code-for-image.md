_To send an image you need to encode the image to Base64. To do this you need to find some service that can do this and set the result string for `encodedImage` in the next example._

Example of generator JS code
```js
var encodedImage = 'HERE_YOU_BASE_64_ENCODED_IMAGE';
var images = {
    "tb.example.png": encodedImage
};
var metadata = { 
    userEmail: 'info@thingsboard.org', 
    images: JSON.stringify(images), 
    isHtml: true 
};
var msgType = "POST_TELEMETRY_REQUEST";
return { msg: {}, metadata: metadata, msgType: msgType }
```
{% include images-gallery.html imageCollection="image_generator" %}