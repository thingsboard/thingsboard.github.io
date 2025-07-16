import os
import requests
from urllib.parse import urlparse

include_block_template = """
{% assign deviceName = page.title | remove: "How to connect " | remove: "to ThingsBoard?" %}
{% assign deviceVendorLink = "[]vendor_url[]" %}
{% assign thingsboardHost = "https://" | append: hostName %}
{% assign officialManualLink = "[]official_manual_link[]" %}
{% assign prerequisites = '
- <a href="' | append: deviceVendorLink | append: '" target="_blank">' | append: deviceName | append: '</a>
- [[]device_name[] user manual](' | append: officialManualLink | append: '){: target="_blank"}
- LoRaWAN® gateway (in our case [UG56 LoRaWAN® Gateway](/docs/pe/devices-library/ug56-lorawan-gateway/){:target="_blank"})
- Configured integration on networks server and ThingsBoard
- [Network Server account](#device-connection)
'
 %}

## Introduction

![{{deviceName}}](/images/devices-library/{{page.deviceImageFileName}}){: style="float: left; max-width: 200px; max-height: 200px; margin: 0px 10px 0px 0px"}
[[]device_name[]]({{deviceVendorLink}}){: target="_blank"} []device_description[]  

{% assign feature = "Platform Integrations" %}{% include templates/pe-feature-banner.md %}
<br>

## Prerequisites

To continue with this guide we will need the following:  
{{ prerequisites }}
- [ThingsBoard account]({{ thingsboardHost }}){: target="_blank"}


## Device connection

{% if page.hasIntegrationDeviceConfiguration | downcase == "true"%}

{% assign articleFilename = page.name |  replace: ".md", "" %}
{% assign guideFilePath = "/docs/devices-library/blocks/ready-to-go-devices/" | append: articleFilename | append: "-configuration-block.md" %}

{% include {{ guideFilePath }} %}

{% endif %}

To configure the device we also need to add it to a network server, so select the network server your gateway is connected to:  

{% assign targetIntegrationTypes = '
ChirpStack,
TheThingsStack,
TheThingsIndustries,
Loriot
'%}

{% include /docs/devices-library/blocks/basic/thingsboard-add-lorawan-device-through-integration-block.liquid target-integration-types=targetIntegrationTypes %}


## Check data on ThingsBoard

After the device is connected to the network server and ThingsBoard, you can check received and converted data on the platform for this device.  

To do this, open **Entities** menu section and select **Devices**.  
Click on the device name to open the device details page.  
Go to the **Latest telemetry** tab to see the latest telemetry data received from the device.  

![LoRaWAN device data](/images/devices-library/lorawan-device-data.png)


## Conclusion

{% include /docs/devices-library/blocks/basic/conclusion-block.md %}
"""

docs_block_template = """---
layout: devices-library-article
title: How to connect []device_name[] to ThingsBoard?
category: Other devices
connectivity: LoRaWAN®
vendor: []vendor[]
hasIntegrationDeviceConfiguration: true
deviceImageFileName: []filename[].png
converters20: true
model: []model[]
docsPrefix: []docs_prefix[]/
---

* TOC
{:toc}

{% include get-hosts-name.html docsPrefix=page.docsPrefix %}
{% include /docs/devices-library/guides/[]filename[].md %}
"""


class DeviceInfo:
    def __init__(self, device_url: str, device_name: str, device_vendor: str, model: str,
                 device_description: str, official_manual_link: str = None):

        self.device_url = device_url
        self.device_name = self.form_device_name(device_name)
        self.model = model
        self.device_vendor = device_vendor
        self.device_description = device_description
        self.official_manual_link = official_manual_link
        self.filename = self.form_filename(device_name)
        self.device_image_file = self.filename + ".png"

    @staticmethod
    def form_filename(device_name: str) -> str:
        return (device_name.replace(" ", "-").replace("(", "").replace(")", "")
                .replace("'", "").replace(",", "").replace("`", "")
                .replace("!", "").replace("?", "").replace(";", "")
                .replace("'", "").replace(":", "").replace("&", "and").lower())

    @staticmethod
    def form_device_name(device_name: str) -> str:
        return (device_name.replace("(", "").replace(")", "").replace("'", "")
                .replace(",", "").replace("`", "").replace("!", "")
                .replace("?", "").replace(";", "").replace("'", "")
                .replace(":", ""))


class Article:
    def __init__(self, info: DeviceInfo):
        self.filename = info.filename
        self.include_block = include_block_template
        if info.official_manual_link is None or not info.official_manual_link:
            self.include_block = self.include_block.replace("{% assign officialManualLink = \"[]official_manual_link[]\" %}\n", "")
            self.include_block = self.include_block.replace("- [[]device_name[] user manual](' | append: officialManualLink | append: '){: target=\"_blank\"}\n", "")
        self.include_block = (
            self.include_block
            .replace("[]vendor_url[]", info.device_url)
            .replace("[]vendor[]", info.device_vendor)
            .replace("[]device_name[]", info.device_name)
            .replace("[]device_description[]", info.device_description)
            .replace("[]filename[]", info.filename)
        )
        self.docs_block = (docs_block_template
                           .replace("[]vendor[]", info.device_vendor)
                           .replace("[]device_name[]", info.device_name)
                           .replace("[]filename[]", info.filename)
                           .replace("[]model[]", info.model)
                           )

def parse_github_link(link: str):
    p = urlparse(link)
    parts = p.path.lstrip("/").split("/")
    assert parts[0]=="thingsboard" and parts[1]=="data-converters" and parts[2]=="tree"
    branch = parts[3]
    repo_path = "/".join(parts[4:])
    path_parts = repo_path.split("/")
    device_folder = path_parts[-1]
    vendor = path_parts[-2]
    return branch, repo_path, vendor, device_folder

def fetch_info_json(branch: str, repo_path: str) -> dict:
    raw = (
        f"https://raw.githubusercontent.com/"
        f"thingsboard/data-converters/"
        f"{branch}/{repo_path}/info.json"
    )
    resp = requests.get(raw); resp.raise_for_status()
    return resp.json()

def fetch_and_save_image(branch: str, repo_path: str, filename: str) -> str:
    dest_dir = "images/devices-library"
    if not os.path.exists(dest_dir):
        raise FileNotFoundError(f"Destination directory {dest_dir} does not exist. "
                                f"Please check that you run script from root of thingsboard.github.io repository.")
    raw = f"https://raw.githubusercontent.com/thingsboard/data-converters/{branch}/{repo_path}/photo.png"
    r = requests.get(raw); r.raise_for_status()
    image_name_for_saving = filename + '.png'
    out_path = os.path.join(dest_dir, image_name_for_saving)
    with open(out_path, "wb") as f:
        f.write(r.content)
    print("Image saved to", out_path)
    return out_path

def collect_required_information():
    link = ""
    while not link or "https://github.com/thingsboard/data-converters/tree" not in link:
        if link:
            print("Invalid link provided. Please provide a valid GitHub link.")
        link = input("Paste the GitHub link to the device directory:\n").strip()
    branch, repo_path, vendor, device_folder = parse_github_link(link)
    data = fetch_info_json(branch, repo_path)

    info = DeviceInfo(
        device_url           = data["url"],
        device_name          = data["label"],
        model                = device_folder,
        device_vendor        = vendor,
        device_description   = data.get("description", ""),
        official_manual_link = data.get("officialManual") or data.get("manual")
    )
    fetch_and_save_image(branch, repo_path, info.filename)
    return info


if __name__ == "__main__":
    info    = collect_required_information()
    article = Article(info)
    include_path = os.path.join("_includes", "docs", "devices-library", "guides", info.filename + ".md")
    with open(include_path, "w", encoding="utf-8") as f:
        f.write(article.include_block)
    print(f"Include block saved to {include_path}")

    for prefix in ('ce', 'pe', 'paas'):
        docs_path = 'docs'
        data_to_save = article.docs_block
        if prefix != 'ce':
            docs_path = os.path.join(docs_path, prefix)
            data_to_save = data_to_save.replace("[]docs_prefix[]", prefix)
        else:
            data_to_save = data_to_save.replace("[]docs_prefix[]", "pe")
        docs_path = os.path.join(docs_path, "devices-library", info.filename + ".md")
        with open(docs_path, "w", encoding="utf-8") as f:
            f.write(data_to_save)
        print(f"Docs block saved to {docs_path}")

    path_to_device_configuration_block = os.path.join("_includes", "docs", "devices-library", "blocks",
                                                      "ready-to-go-devices", info.filename + "-configuration-block.md")
    with open(path_to_device_configuration_block, "w", encoding="utf-8") as f:
        f.write("\n\n\n\n!!!!! REPLACE THIS WITH YOUR DEVICE CONFIGURATION BLOCK HERE !!!!!\n\n\n\n")
    print(f"\nTemplate for device configuration block saved to {path_to_device_configuration_block} - Don't forget to fill it in!!!\n")
    print("You can use search over files and find the following string - !!!!! REPLACE THIS WITH YOUR DEVICE CONFIGURATION BLOCK HERE !!!!!\n")
