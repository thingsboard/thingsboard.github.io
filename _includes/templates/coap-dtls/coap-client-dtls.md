Install the CoAP client with DTLS support on Linux by following the next steps:
 
- step 1: clone libcoap git repo: 

```bash
git clone https://github.com/obgm/libcoap --recursive --depth 1
```
{: .copy-code}

- step 2: navigate into libcoap directory:

```bash
cd libcoap
```
{: .copy-code}

- step 3: execute next commands and then run ./autogen.sh script:

```bash
sudo apt-get update
```
{: .copy-code}


```bash
sudo apt-get install autoconf libtool libssl-dev
```
{: .copy-code}


```bash
./autogen.sh
```
{: .copy-code}

- step 4: run ./configure script with next options:

```bash
./configure --with-openssl --disable-doxygen --disable-manpages --disable-shared
```
{: .copy-code}

- step 5: execute next command:

```bash
make
```
{: .copy-code}

- step 6: execute next command:

```bash
sudo make install
```
{: .copy-code}