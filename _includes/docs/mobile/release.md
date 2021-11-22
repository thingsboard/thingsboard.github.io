* TOC
{:toc}

## Build and release an Android version

Follow [Build and release an Android app](https://docs.flutter.dev/deployment/android){:target="_blank"} article when you’re ready to prepare a release version of your app,
for example to [publish to the Google Play Store](https://developer.android.com/distribute/googleplay/start){:target="_blank"}.

{% capture android_build_notice %}
**Improtant notice:** When building app for release, for example build app bundle you must provide **----no-tree-shake-icons** flag to your build command:
{% endcapture %}
{% include templates/info-banner.md content=android_build_notice %}

```bash
flutter build appbundle --no-tree-shake-icons
```
{: .copy-code}

## Build and release an iOS version

Follow [Build and release an iOS app](https://docs.flutter.dev/deployment/ios){:target="_blank"} article when you’re ready to release your app to the
[App Store](https://developer.apple.com/app-store/submissions/){:target="_blank"} and [TestFlight](https://developer.apple.com/testflight/){:target="_blank"}.

{% capture ios_build_notice %}
**Improtant notice:** When building app for release, for example producing a build archive you must provide **----no-tree-shake-icons** flag to your build command:
{% endcapture %}
{% include templates/info-banner.md content=ios_build_notice %}

```bash
flutter build ipa --no-tree-shake-icons
```
{: .copy-code}
