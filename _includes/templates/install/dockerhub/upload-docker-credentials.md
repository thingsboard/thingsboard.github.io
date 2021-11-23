Make sure your have [logged in](https://docs.docker.com/engine/reference/commandline/login/) to docker hub using command line.

Then, we need to create *thingsboard* namespace, where secret must be stored:

```
kubectl apply -f tb-namespace.yml
```
{: .copy-code}

To upload Docker credentials, please execute next command:

```
./k8s-upload-docker-credentials.sh
```
{: .copy-code}

Script above will create the secret in the *thingsboard* namespace from host file *$HOME/.docker/config.json*.

Or you can use the following command, as alternative for `k8s-upload-docker-credentials.sh`:

```
kubectl create -n thingsboard secret docker-registry regcred --docker-server=https://index.docker.io/v1/ --docker-username=$YOUR_USERNAME --docker-password=$YOUR_PASSWORD --docker-email=$YOUR_EMAIL
```
{: .copy-code}