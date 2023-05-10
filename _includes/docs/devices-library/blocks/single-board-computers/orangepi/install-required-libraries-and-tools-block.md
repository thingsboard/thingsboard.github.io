First, you must have Python installed on your OrangePI, we recommend using python 3.9 as a mainstream python version, if you haven’t installed Python, you can do it by the following command:

```bash
sudo apt update
sudo apt install software-properties-common
```
{:.copy-code}

```bash
sudo apt-get install -y python3 python3-pip python3-venv git
```
{:.copy-code}

Also, you should have installed thingsboard-python-client-sdk which can be installed using the following command. Still, we recommend installing packages outside the global environment (we will do it in step 3):

```bash
pip3 install tb-mqtt-client Adafruit-Blinka
```
{:.copy-code}

And you should have tools that allow editing code, for example, you can use Nano editor that is going out of the box or install any other code editor you are familiar with.