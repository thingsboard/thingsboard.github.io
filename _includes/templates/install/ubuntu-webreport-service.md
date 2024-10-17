
Download installation package for the [Reports Server](/docs/user-guide/reporting/#reports-server) component:

```bash
wget https://dist.thingsboard.io/tb-web-report-{{ site.release.pe_ver }}.deb
```
{: .copy-code}

Install third-party libraries:

```bash
sudo apt install -yq  libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 \
     libexpat1 libfontconfig1 libgcc1  libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 \
     libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 \
     libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 \
     ca-certificates fonts-liberation libnss3 lsb-release xdg-utils unzip wget libgbm-dev
```
{: .copy-code}

Install Roboto fonts:

```bash
sudo apt install fonts-roboto
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
sudo dpkg -i tb-web-report-{{ site.release.pe_ver }}.deb
sudo service tb-web-report start
```
{: .copy-code}
