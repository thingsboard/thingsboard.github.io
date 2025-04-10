---
layout: common
title: SVG Namespaces and Custom Attributes
notitle: "true"
description: This page documents the use of a custom SVG namespace and the attribute for enriching SVG graphics with semantic, application-specific metadata. Learn how to extend standard SVGs in a structured and standards-compliant way.

---

# SVG with Custom Namespace and XSD Schema Definition

Defines how to declare and apply a custom XML namespace in SVG. Includes guidance on using namespaced attributes for semantic tagging and metadata.

## Standard SVG Namespace

```xml
<svg xmlns="http://www.w3.org/2000/svg">...</svg>
```

This is the default namespace used in all valid SVG documents. It identifies the XML vocabulary that defines the structure and semantics of SVG elements.

### Purpose of the Standard SVG Namespace

The standard namespace URI [SVG Specification](http://www.w3.org/2000/svg) is defined by the W3C SVG specification. It ensures:
 - Correct interpretation of elements by browsers, rendering engines, and XML parsers;
 - Validation against the SVG schema, enabling linting, formatting, and error checking in tools and IDEs;
 - Compatibility with all major browsers and tools that support SVG 1.1 and later.

### How It Works

Declaring the SVG namespace at the root `<svg>` element informs the parser that elements like `<path>`, `<rect>`, `<circle>`, `<g>`, `<text>`, etc., belong to the SVG vocabulary.
Without this declaration, the document would be interpreted as plain XML, and the elements might not be rendered or handled correctly by browsers.

### Best Practices
 - Always declare the standard namespace on the `<svg>` root element.
 - Even when embedding SVG inline in HTML, using the namespace is recommended to ensure strict compatibility.
 - When combining multiple XML vocabularies (e.g. SVG + custom namespaces), declare each with a unique prefix (or use the default `xmlns` for SVG).

### Summary
The standard SVG namespace:
- Is essential for proper rendering.
- Defines the scope of SVG-specific elements and attributes.
- Enables interop between editors, browsers, and parsers.
- Should always be declared at the root of any standalone SVG file or embedded snippet.

{% capture difference %}
**Note**: For full SVG specifications, refer to [SVG 1.1](https://www.w3.org/TR/SVG11/)
{% endcapture %}
{% include templates/info-banner.md content=difference %}

## Custom Namespace

```xml
<svg xmlns:tb="https://thingsboard.io/svg">...</svg>
```

The custom namespace `https://thingsboard.io/svg`, declared with the prefix `tb`, enables the use of custom attributes within an SVG document. These attributes are not part of the official SVG specification but allow developers to enrich their SVGs with additional metadata or semantic information.

### Why Use a Custom Namespace?
Standard SVG attributes are limited to graphical and structural properties defined by the SVG specification. However, in many projects — especially those involving interactive graphics, dynamic rendering, or design systems — there is a need to associate additional, domain-specific data with SVG elements.

Using a custom namespace allows:
- Clear Separation of Concerns

  You can attach metadata to elements without interfering with standard rendering behavior.
- Semantic Tagging

  Identify elements by purpose (e.g. `background`, `clickArea`, `warning`) instead of relying on class names or IDs.
- Machine Readability

  Scripts and external systems (like UI engines, validators, or editors) can easily process and react to tagged elements.
- Standard Compliance

  By defining your custom attributes within a namespaced URI, the SVG remains valid XML and doesn’t violate the SVG spec.

### Declaring the Namespace

To declare a custom namespace in SVG, you use the `xmlns:prefix="url"` syntax on the `<svg>` element. This tells the SVG parser that any attribute prefixed with `tb:` belongs to your custom namespace located at `https://thingsboard.io/svg`.

Example:

```xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:tb="https://thingsboard.io/svg">
  <path d="..." tb:tag="background" />
  <g tb:tag="critical">...</g>
  <g tb:tag="warning">...</g>
</svg>
```

Each `tb:tag` defines the role or semantic meaning of the element. This can be useful for:

- Rendering different elements in different styles depending on the tag.
- Handling elements differently in JavaScript (e.g., only bind events to `tb:tag="clickArea"`).
- Debugging or auto-generating documentation or design specs from the SVG.

### Best Practices

- Use Clear, Descriptive Values

  Keep tag values meaningful and self-explanatory, like `primary`, `overlay`, `actionTarget`.
- Avoid Conflicts

  Make sure your namespace and prefixes don't clash with other libraries or specs.
- Validate Your SVG

  Most XML/SVG parsers will ignore unknown attributes as long as they are namespaced, but always test across browsers and tools.
- Keep Metadata Lightweight

  Don’t overload elements with too much data — use `tb:tag` for labels, and consider `<metadata>` or `<desc>` for longer descriptions.

### Real-World Scenarios

- Interactive Applications

  Use `tb:tag="clickArea"` to define user-interactive regions in a complex SVG interface.
- Design Tokens

  Mark parts of the SVG with `tb:tag="themeColor"` to link them to configurable visual styles.
- Error Visualization

  Dynamically show/hide elements like `<g tb:tag="critical">` or `<g tb:tag="warning">` based on app state.

### Summary

Custom namespaces are a powerful way to extend SVG in a clean, structured, and standards-compliant way. By using a namespace like `https://thingsboard.io/svg`, you give meaning to your graphics beyond what is visually rendered — turning SVG into a semantic, machine-readable document suitable for rich UI systems, design tools, and automated workflows.

## XML Schema Definition (XSD)

XSD (XML Schema Definition) is a language used to define the structure of XML documents, as well as to specify the data types of elements and attributes within the document. Using XSD, you can:
- Define the allowed structure of XML documents.
- Describe the data types of elements and attributes.
- Validate documents by checking for errors.

### XSD Basics

SD files describe the structure of XML documents through elements, data types, and attributes. The key concepts of XSD include:

- Elements — the primary data units in XML (e.g., <path>, <circle>).

- Attributes — additional properties of elements (e.g., fill, stroke, width).

- Data Types — specify what type the values of elements and attributes should be (e.g., strings, numbers, dates).

Here is an example of an XSD structure:

```xml
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="svg">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="path" minOccurs="1" maxOccurs="unbounded">
          <xs:complexType>
            <xs:attribute name="d" type="xs:string" use="required"/>
            <xs:attribute name="fill" type="xs:string"/>
            <xs:attribute name="stroke" type="xs:string"/>
            <xs:attribute name="stroke-width" type="xs:decimal"/>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>
```

{% capture difference %}
**Note**: See default XSD Schema for SVG [XMLSchema](https://www.w3.org/2001/XMLSchema).
{% endcapture %}
{% include templates/info-banner.md content=difference %}

### XSD File for SVG with Custom Namespace

[XSD File](https://thingsboard.io/svg/svg.xsd)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
           targetNamespace="https://thingsboard.io/svg"
           xmlns="https://thingsboard.io/svg"
           elementFormDefault="qualified"
           attributeFormDefault="unqualified">

  <!-- Global definition of the attribute -->
  <xs:attribute name="tag" type="xs:string"/>

  <!-- Allow attribute for any element through wildcards -->
  <xs:complexType name="anyElementExtension" mixed="true">
    <xs:sequence minOccurs="0" maxOccurs="unbounded">
      <xs:any processContents="lax"/>
    </xs:sequence>
    <xs:anyAttribute namespace="##any" processContents="lax"/>
  </xs:complexType>

</xs:schema>
```

Key Points:
- Custom Namespace (`tb:tag`): The `tb:tag` attribute is part of the custom `https://thingsboard.io/svg` namespace, which is defined in the schema.

- Element Flexibility: You can extend the schema to include more SVG elements or custom attributes as needed.

- Compatibility with Default SVG Schema: This schema can be used alongside the standard SVG schema by referencing both in the `xsi:schemaLocation`.

### Usage

In the example above, the xsi:schemaLocation attribute is used to associate the SVG document with both the default SVG schema and a custom schema. This setup allows validation of standard SVG elements as well as the custom tb:tag attribute from your custom namespace.

The provided XSD schema is designed to be flexible and extensible, enabling support for a wide range of standard SVG elements in addition to user-defined extensions via the tb namespace.

You can use xsi:schemaLocation to link your SVG file to multiple schema definitions without overriding the default namespace (http://www.w3.org/2000/svg). By including both the standard SVG namespace and your custom namespace in the xsi:schemaLocation, you ensure that your custom schema augments—rather than replaces—the default specification.

Here is an example of how to structure the xsi:schemaLocation to support both schemas:

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:tb="https://thingsboard.io/svg"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="https://thingsboard.io/svg  https://thingsboard.io/svg/svg.xsd">...</svg>
```

{% capture difference %}
**Note**: For more details, see the symbol development [guide](https://thingsboard.io/docs/user-guide/scada/scada-symbols-dev-guide/).
{% endcapture %}
{% include templates/info-banner.md content=difference %}
