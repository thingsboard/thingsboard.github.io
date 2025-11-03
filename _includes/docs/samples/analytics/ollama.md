* TOC
{:toc}

## Introduction to Ollama

[Ollama](https://ollama.com/){:target="_blank"} is an open-source tool that allows you to run Large Language Models (LLMs) locally on your own infrastructure. Think of it as
bringing the power of AI models like Llama, Mistral, or Gemma directly to your servers instead of sending requests to external cloud services.

Unlike cloud-based AI providers such as OpenAI, Anthropic, or Google Gemini that require API calls over the internet, Ollama runs entirely within your environment. This fundamental
difference opens up new possibilities for enterprises looking to leverage AI while maintaining control over their data and infrastructure.

## Why Consider Ollama for Your ThingsBoard Deployment?

If you already have a ThingsBoard deployment and are exploring AI integration, Ollama addresses several key concerns:

**Cost Reduction**: Ollama eliminates per-token charges common with cloud AI services. Once you have GPU-enabled infrastructure, you pay only for hardware and operations, making
costs predictable regardless of usage volume.

**Data Privacy**: All data processing happens within your infrastructure. Your telemetry data and AI analysis never leave your network, helping you maintain compliance with
regulations like GDPR, HIPAA, or industry-specific requirements.

**Network Independence**: Ollama doesn't depend on external internet connectivity or third-party service availability, making it suitable for facilities with limited internet
access or critical infrastructure where reliability is paramount.

## Understanding Ollama Deployment Options

The way you integrate Ollama with ThingsBoard depends largely on your current deployment architecture. Let's explore how Ollama fits with the most common ThingsBoard deployment
patterns.

### Single Server Monolithic Deployment

If you're running ThingsBoard as a single service on one server (such as an EC2 instance), Ollama can be deployed directly on the same machine as an additional service. This works
well if:

- Your server has GPU capabilities (recommended for acceptable performance)
- You have sufficient memory and CPU resources to run both services
- Your AI workload is moderate and doesn't require dedicated hardware

In this scenario, Ollama runs alongside ThingsBoard, and communication happens through localhost connections, keeping everything simple and contained.

### Single Server Docker Compose Deployment

For ThingsBoard deployments using Docker Compose in cluster mode (microservices), you have two options for adding Ollama:

- **As a Docker container**: Add Ollama to your existing docker-compose.yml file, making it part of your container stack. Note that this approach may require additional
  configuration to enable GPU support through Docker.
- **As a system service**: Install Ollama directly on the host system, running it as a regular Linux service. This approach often configures GPU support automatically during
  installation, making it simpler to get hardware acceleration working.

Both approaches work well for this deployment type, but the system service installation typically provides easier GPU access out of the box.

### Kubernetes Cluster Deployment

In Kubernetes environments, it's recommended to run Ollama on a separate node pool with GPU support. This approach offers several benefits:

- **Scalability**: Kubernetes makes it straightforward to scale your Ollama deployment to meet demand. You can add GPU-enabled nodes to your node pool as your AI workload grows,
  and Kubernetes will automatically distribute Ollama pods across available resources. This allows you to scale AI capabilities independently from your ThingsBoard infrastructure.
- **Security**: Kubernetes provides various features to secure your Ollama deployment, including network policies to control traffic between pods, pod security standards to enforce
  security best practices, and ingress controllers to manage external access with TLS termination and authentication.
- **Complexity**: Keep in mind that Kubernetes deployments are considerably more complex to set up and maintain. You'll need to configure components like the Nvidia GPU operator
  for GPU access, set up proper node selectors or taints/tolerations for pod scheduling, and manage resource quotas and limits. This requires solid Kubernetes expertise.

### Remote Ollama Deployment

Perhaps the most flexible approach is running Ollama on completely separate infrastructure from your ThingsBoard deployment. In this model:

- Ollama runs on dedicated GPU-enabled servers optimized for AI workloads
- ThingsBoard makes HTTP/HTTPS requests to the remote Ollama instance

This separation of concerns allows you to scale your AI infrastructure independently from your IoT platform and optimize each for its specific workload.

## Understanding Authentication Requirements

Here's an important consideration: Ollama itself does not include built-in authentication mechanisms. The software is designed to be fast and simple, leaving security
implementation to the deployment architecture around it.

This means that without additional security layers, anyone who can reach your Ollama endpoint can use it freely. Depending on your deployment scenario, this presents different
levels of concern:

**When authentication is critical:**

- Ollama is exposed to untrusted networks or the internet
- Multiple teams or projects share the same Ollama instance
- Compliance requirements mandate access controls
- You need to track or limit usage

**When authentication might be less critical:**

- Ollama runs within a fully trusted, isolated network (e.g., Docker Compose setups or Kubernetes clusters without external access to Ollama)
- Only ThingsBoard has network access to the Ollama endpoint
- Your infrastructure already provides network-level security

Even in trusted network scenarios, implementing authentication provides defense in depth and enables better access control and auditing.

## ThingsBoard's Authentication Support for Ollama

Understanding the need for flexible security options, ThingsBoard provides three authentication methods when connecting to Ollama endpoints:

### None (No Authentication)

This option makes unauthenticated requests to the Ollama endpoint. While this might seem insecure, it's appropriate for specific scenarios:

- Ollama runs on the same server as ThingsBoard with localhost-only access
- Network-level security (firewalls, VPNs) already isolates the Ollama endpoint
- You're in a development or testing environment

When using this option, you're relying on network architecture and infrastructure controls to secure access to Ollama.

### Basic Authentication (Username and Password)

HTTP Basic authentication provides a straightforward security layer using username and password credentials. When using this method, ThingsBoard encodes your credentials in Base64
format and passes them in the Authorization header as `Basic <encoded-credentials>`.

This method:

- Is simple to implement and understand
- Works well for smaller teams or single-user scenarios
- Requires credential management (password rotation, secure storage)

**Important**: Always use HTTPS when using Basic authentication to ensure credentials are encrypted in transit and not sent in plain text over the network.

### Token Authentication (Bearer Token/API Key)

Token-based authentication uses API keys (bearer tokens) to authenticate requests. When using this method, ThingsBoard passes your token in the Authorization header as
`Bearer <your-token>`.

This approach:

- Is familiar to anyone who has worked with cloud AI services
- Allows for easy credential rotation without changing passwords
- Supports multiple tokens for different applications or environments
- Enables fine-grained access control when combined with reverse proxy capabilities

**Important**: Always use HTTPS when using Token authentication to ensure your API keys are encrypted in transit and not sent in plain text over the network.

## Setting Up Authentication for Ollama

If you need to implement Basic or Token authentication for your Ollama deployment, we provide
a [guide for setting up Nginx as a reverse proxy with authentication](/docs/samples/analytics/ollama/nginx). This guide serves as a starting point to help you get moving with
authentication implementation.

The guide covers configuring both authentication methods with Docker Compose, providing a foundation you can adapt and expand for your specific environment.

## Choosing the Right Authentication Method

Selecting the appropriate authentication method depends on your specific deployment scenario:

**Use "None" when:**

- Ollama and ThingsBoard are on the same server communicating via localhost
- Your network architecture already provides complete isolation

**Use "Basic Authentication" when:**

- User management overhead should be minimal
- You have a small team or single-user access
- You have HTTPS properly configured

**Use "Token Authentication" when:**

- You want to align with AI industry standards
- Multiple applications or teams will access Ollama
- You need to support credential rotation without disruption
- You require better audit trails for access
- Your team is already familiar with API key management

For most production deployments, especially remote Ollama scenarios, Token authentication offers the best balance of security and usability.

## Configuring Ollama in ThingsBoard

Once you have Ollama deployed and optionally secured with authentication, connecting it to ThingsBoard is straightforward. You'll configure Ollama as an AI model provider through
the ThingsBoard interface.

### Accessing the Configuration Form

Navigate to the AI models configuration section in ThingsBoard by following the instructions
at [Adding AI Models to ThingsBoard](/docs/{{docsPrefix}}samples/analytics/ai-models/#adding-ai-models-to-thingsboard){:target="_blank"}. This will open the AI model configuration
form where you can add your Ollama endpoint.

### Configuration Parameters

The Ollama configuration form includes the following key settings:

**Provider**: Select "Ollama" from the AI provider dropdown.

**Base URL**: This is the HTTP/HTTPS endpoint where your Ollama instance is accessible. Examples:

- `http://localhost:11434` - Ollama running locally on the same server
- `http://192.168.1.100:8880` - Ollama on another server in your network
- `https://ollama.yourdomain.com` - Ollama behind a reverse proxy with HTTPS

**Authentication**: Choose one of three options:

- **None**: No authentication will be used. ThingsBoard will make direct, unauthenticated requests to the Ollama endpoint.

- **Basic**: HTTP Basic authentication using username and password credentials.
    - **Username**: Your authentication username
    - **Password**: Your authentication password

- **Token**: Bearer token authentication using an API key.
    - **Token**: Your API key or bearer token

**Model ID**: The specific Ollama model you want to use (e.g., `llama3:8b`, `mistral:7b`, `gemma3:1b`). This should match exactly with a model you've pulled into your Ollama
instance.

**Temperature, Top P, Top K, Maximum Output Tokens**: These parameters control the model's response behavior and are common across AI providers. Configure them according to your
specific use case requirements.

**Context Length**: This critical setting determines how much context (conversation history, system prompts, input data) the model can process in a single request.

### Understanding Context Length

The context length setting deserves special attention when working with Ollama, as it significantly impacts both the model's capabilities and your server's resource utilization.

Context length (also called context window) is the total number of tokens the model can process in a single request, including your system prompts, input data, and the model's
generated response. You need to set this value high enough to accommodate all your inputs plus the expected output without losing any data.

**Memory considerations:**
Unlike cloud services where infrastructure scales automatically, with Ollama you're managing fixed hardware resources. Context length significantly affects GPU memory usage -
larger context windows require substantially more memory. The exact relationship varies by model size and architecture, but the impact is considerable.

**Determining the right value:**
The appropriate context length for your use case is best determined empirically. Start with a reasonable estimate based on your typical input size plus expected output length, then
adjust based on:

- Whether requests are being truncated
- Actual memory usage on your GPU
- Performance and response times

If you find data being cut off, increase the context length. If memory usage is too high or performance suffers, consider reducing it or using a smaller model.

### Testing Your Configuration

After filling in all required fields, click the **Check connectivity** button at the bottom of the form. A successful test will show a green checkbox confirming that ThingsBoard
can communicate with your Ollama endpoint and the specified model is available.

## Using Ollama in ThingsBoard

For a practical example of using AI models in ThingsBoard, including Ollama, check out
our [Predictive Maintenance with AI guide](https://thingsboard.io/docs/samples/analytics/ai-predictive-maintenance/){:target="_blank"}. This guide demonstrates how to use AI for
anomaly detection and predictive maintenance scenarios, showcasing real-world applications of AI integration in IoT systems.
