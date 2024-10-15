
Download installation package for the [Reports Server](/docs/user-guide/reporting/#reports-server) component:

```bash
wget https://dist.thingsboard.io/tb-web-report-{{ site.release.pe_ver }}.rpm
```
{: .copy-code}

Install third-party libraries:

```bash
sudo yum install pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 \
     libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 \
     alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 ipa-gothic-fonts xorg-x11-fonts-100dpi xorg-x11-fonts-75dpi \
     xorg-x11-utils xorg-x11-fonts-cyrillic xorg-x11-fonts-Type1 xorg-x11-fonts-misc unzip nss -y
```
{: .copy-code}

Install Roboto fonts:

```bash
sudo yum install google-roboto-fonts -y
```
{: .copy-code}

Install Noto fonts (Japanese, Chinese, etc.):

```bash
mkdir ~/noto
cd ~/noto
wget https://src.fedoraproject.org/repo/extras/chromium/NotoSansCJKjp-hinted.zip/sha512/e7bcbc53a10b8ec3679dcade5a8a94cea7e1f60875ab38f2193b4fa8e33968e1f0abc8184a3df1e5210f6f5c731f96c727c6aa8f519423a29707d2dee5ada193/NotoSansCJKjp-hinted.zip
unzip NotoSansCJKjp-hinted.zip
sudo mkdir -p /usr/share/fonts/noto
sudo cp *.otf /usr/share/fonts/noto
sudo chmod 655 -R /usr/share/fonts/noto/
sudo fc-cache -fv
cd ..
rm -rf ~/noto
```

Install and start Web Report service:

```bash
sudo rpm -Uvh tb-web-report-{{ site.release.pe_ver }}.rpm
sudo service tb-web-report start
```
