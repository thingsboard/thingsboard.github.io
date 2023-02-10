Firstly, you have to have Python installed on your OrangePI, we recommend using python 3.9 as a mainstream python version, if you haven’t installed Python, you can do it by the following command:

`sudo apt-get install -y python3 git python3-pip`

`sudo update-alternatives --install /usr/bin/python python /usr/bin/python2.7 1`

`sudo update-alternatives --install /usr/bin/python python /usr/bin/python3.5 2`

`sudo update-alternatives --config python`

Also, you should have installed thingsboard-python-client-sdk which can be installed using the following command. Still, we recommend installing packages outside the global environment (we will do it in step 3):

`pip3 install tb-mqtt-client board digitalio`

And you have to have tools that allow editing code, for example, you can use Nano editor that is going out of the box or install any other code edit you are familiar with.