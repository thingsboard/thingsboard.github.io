* TOC
{:toc}

{% assign sinceVersion = "4.1" %}
{% include templates/since.md %}

**Secrets storage** is a place for secure storage and convenient management of sensitive information such as API keys, tokens, passwords, certificates, etc.
All information is stored as **Secrets**, with their values securely encrypted and inaccessible to end users.
This allows confidential data to be shared or used without directly exposing its contents.

Once created, Secrets can be safely used in [integrations](/docs/user-guide/integrations/){:target="_blank"} and [rule nodes](/docs/{{docsPrefix}}user-guide/rule-engine-2-0/overview/#rule-node){:target="_blank"}, eliminating the need to enter sensitive data directly in the configuration. This greatly enhances system security and reduces the risk of unauthorized access or data leakage.

**Using Secrets storage allows you to:**
- Store and manage confidential data in a centralized way.
- Manage secrets with flexible, role-based access control.
- Securely share sensitive information with your clients without revealing its contents.
- Enhance security and minimize the risk of information leaks.

**Best practices**

- Always use Secrets storage instead of hard-coding sensitive information.
- Regularly update Secrets and manage access according to the principle of least privilege.

## Creating the Secret

- Go to the" **Secrets storage**" page in the "**Security**" section.
- Click the "**plus**" icon (**Add secret**) in the top-right corner.
- Select **secret type**:
  - **File** — the value is provided by uploading a file, for example, a certificate.
  - **Text** — the value is entered directly as text, for example, password, token, or API key.
- Enter the secret&#39;s **name** and its **text value** (for the "Text" type) or **upload a certificate file** (for the "File" type).
- Click "**Add**".

ThingsBoard automatically encrypts Secret values using the AES-256 encryption algorithm.

{% include images-gallery.html imageCollection="creating-secret" %}

## Update the Secret's value

If needed, you can update the value and description of the Secret. 
> The Secret&#39;s name cannot be modified.

- Click the "**Change value**" icon next to the Secret you want to update.
- Enter the new value and click "**Save**".

{% include images-gallery.html imageCollection="update-secret-value" %}

## How to use Secrets in ThingsBoard

Once Secrets are created, you and other users with the appropriate permissions can use them in:
- **Rule chains** – in specific nodes that support secret injection.
- **Integrations** – for example, in fields where you enter passwords for external services and system accounts.

Fields that support using a Secret display a key icon.

<object width="35%" data="https://img.thingsboard.io/user-guide/security/secrets-storage/password.png"></object> 

<br>

Let&#39;s look at an example of using a Secret in a [Loriot integration](/docs/user-guide/integrations/loriot/){:target="_blank"}. Instead of manually entering your Loriot account password, we&#39;ll use a pre-created Secret for secure access.

- In the "Password" field, click the "key" icon to select and use the Secret.
- If the Secret has already been created, select "**Use storage**", pick the desired **Secret** from the dropdown menu, and click "**Use**".

{% include images-gallery.html imageCollection="use-secret" %}

## Managing access to Secrets storage

ThingsBoard enables user access management to Secrets storage through [role-based access control (RBAC)](/docs/{{docsPrefix}}user-guide/rbac/){:target="_blank"}.
Only users with appropriate permissions can create, use, edit, or delete Secrets.

## Delete the Secret

To delete a Secret:
- Click the trash bin icon at the end of its row.
- Confirm the deletion.

{% include images-gallery.html imageCollection="delete-secret" %}

> **Note**: The Secret cannot be deleted if it&#39;s used by other entities on the platform.   
First, remove all references to the Secret from the listed entities, then try deleting it again.

<object width="70%" data="https://img.thingsboard.io/user-guide/security/secrets-storage/delete-secret-3-pe.png"></object>

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/multi-project-guides-banner.md %}