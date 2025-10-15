---
layout: docwithnav
title: Versioning and Release Policy

---

* TOC
{:toc}

This guide explains how ThingsBoard versions are numbered, how long each version is supported, what kind of upgrade requires downtime, and which Docker tags to use in different environments. 
It’s written for platform administrators, SREs, DevOps engineers, and technical users who deploy and maintain ThingsBoard.

---
## Thingsboard versioning
ThingsBoard version numbers reflect the scope of changes introduced in each release. This follows semantic versioning principles, helping you gauge the potential impact of upgrading.
Thingsboard version numbers have four parts: <span class="code-light">MAJOR.MINOR.MAINTENANCE.PATCH</span>. For example, version <span class="code-light">4.2.1.0</span> indicates major version 4, minor version 2, maintenece 1 and patch level 0.

The version number is incremented based on the level of change included in the release.

<table style="width:70%">
  <thead>
    <tr>
      <td style="width: 20%"><b>Level</b></td>
      <td style="width: 60%"><b>Changes</b></td>
      <td style="width: 20%"><b>Upgrade scripts required</b></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MAJOR</td>
      <td>Breaking changes, removed/deprecated APIs, major migrations, new features</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>MINOR</td>
      <td>New features with backward compatibility</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>MAINTENANCE</td>
      <td>Bug fixes/security vulnerabilities/framework upgrades that may require upgrade scripts</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>PATCH</td>
      <td>Hotfix releases that do not require upgrade scripts (critical bugs/security fixes; no env/DB changes).</td>
      <td>No</td>
    </tr>
  </tbody>
</table>

**Examples**

<span class="code-light">4.2.0.0</span> — Initial 4.2 LTS release

<span class="code-light">4.2.0.2</span> — Two hotfixes later, no upgrade scripts required to move within <span class="code-light">4.2.0.x</span>

<span class="code-light">4.2.1.0</span> — First maintenance release; expect upgrade scripts

<span class="code-light">4.2.1.3</span> — Hotfixes on top of <span class="code-light">4.2.1.0</span>; zero‑downtime within <span class="code-light">4.2.1.x</span>


## Lifecycle & Support (How long versions are supported)

ThingsBoard maintains **Long‑Term Support (LTS)** lines for production users. Customers using LTS releases can be confident that their critical systems will be protected and operate reliably.

* **LTS declaration:** We announce a new **LTS** line each year; each LTS line is supported for **18 months** from initial LTS GA (e.g., from <span class="code-light">4.2.0.0</span> release date)
  
  Active support includes:
    - Bug fixes, security patches
    - New MAINTENANCE (…x.0) and PATCH (…x.y) releases as needed

* **Major releases:** When breaking changes are introduced.

* **Minor releases:** Typically every **three** months.

* **Maintenance releases:** When bug fixes need an upgrade script.

* **Patch releases:** When bug fixes don`t need an upgrade script.

## Choosing the Right Version

**If you run production:**

1. **Prefer the latest LTS line** in Active Support.

2. To stay up to date with hotfixes, track the line’s PATCH updates only (same MAINTENANCE number, e.g., <span class="code-light">4.2.1.0</span> → <span class="code-light">4.2.1.3</span>).

3. **Schedule maintenance windows** to adopt new **MAINTENANCE** releases when needed (e.g., <span class="code-light">4.2.0.x</span> → <span class="code-light">4.2.1.0</span>).


## Docker Hub Tagging Strategy

<table style="width:70%">
  <thead>
    <tr>
      <td style="width: 20%"><b>Tag</b></td>
      <td style="width: 20%"><b>Example</b></td>
      <td style="width: 30%"><b>Purpose</b></td>
      <td style="width: 30%"><b>Update Policy</b></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>M.m.P.p</td>
      <td>4.2.1.0</td>
      <td>Production</td>
      <td>Immutable</td>
    </tr>
    <tr>
      <td>M.m.P</td>
      <td>4.2.1-latest</td>
      <td>Automatic safe patches</td>
      <td> Floating (within 4.2.1.x)</td>
    </tr>
    <tr>
      <td>latest</td>
      <td>latest</td>
      <td>For development/testing (non-LTS)</td>
      <td>Floating (latest master release)</td>
    </tr>
  </tbody>
</table>

**Recommendations**

 - **Production:** Pin to the immutable full tag (e.g., 4.2.1.0). You update only when you change the tag.

 - **Auto security hotfixes (no downtime):** Use 4.2.1.1, 4.2.1.2, … , but never jump to 4.2.2.0.

 - **Avoid latest in production.** It may include breaking changes and is not covered by the LTS policy.

## Compatibility & Deprecations

 - **API/behavior compatibility** is maintained within a MAJOR version whenever feasible. Minor releases may deprecate features but should not break existing integrations without a migration path.

 - **Deprecation policy:** Features flagged as deprecated in a Minor release will remain for at least one subsequent Minor before removal (or be guarded by feature flags when possible). Deprecations and removals are always called out in Release Notes.