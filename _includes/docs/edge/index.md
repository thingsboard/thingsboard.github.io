{% if docsPrefix == 'pe/' %}
{% assign platformName = 'Edge Computing add-on' %}
{% else %}
{% assign platformName = 'Open-source IoT edge computing' %}
{% endif %}

{% if docsPrefix != 'pe/' %}
<div class="ce-banner" id="ceBanner">
  <span>Looking for white-labeling or premium features? <a href="/docs/pe/edge/" target="_blank">Explore Edge Professional Edition documentation →</a></span>
  <button class="banner-close" aria-label="Close banner">×</button>
</div>
{% endif %}

<ul class="benefits-list">
  <li>Your devices operate in locations with unreliable or expensive connectivity</li>
  <li>You need sub-second response times that cloud round-trips can't provide</li>
  <li>Local operators need dashboards and controls without depending on internet access</li>
  <li>You want to filter or aggregate data before sending it to the cloud</li>
</ul>

<p class="learn-more">
  Learn how Edge handles offline operation, local alarms, and data synchronization → <a href="/docs/{{docsPrefix}}edge/getting-started-guides/what-is-edge/" target="_blank">What is ThingsBoard Edge?</a>
</p>

<h2>IoT Edge Computing Documentation & Guides</h2>

<div class="doc-features row mt-4">
    <div class="col-12 col-sm-6 col-lg col-xxl-6 col-4xl mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}edge/getting-started/" target="_blank">
            <img class="feature-logo" src="/images/feature-logo/getting-started.svg" alt="Getting started icon">
            <h3 class="feature-title">Getting started</h3>
            <div class="feature-text">
                Set up your first Edge instance and connect a device. Takes 15-30 minutes.
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg col-xxl-6 col-4xl mb-4">
        <a class="feature-card" href="/docs/user-guide/install/{{docsPrefix}}edge/installation-options/" target="_blank">
            <img class="feature-logo" src="/images/feature-logo/install.svg" alt="Install icon">
            <h3 class="feature-title">Installation</h3>
            <div class="feature-text">
                Deploy on Docker, Ubuntu, CentOS, Windows, or Raspberry Pi.
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg col-xxl-6 col-4xl mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}edge/use-cases/overview/" target="_blank">
            <img class="feature-logo" src="/images/feature-logo/tutorials.svg" alt="Tutorials icon">
            <h3 class="feature-title">Edge Use Cases</h3>
            <div class="feature-text">
                Deployment scenarios, traffic reduction, and local data processing.
            </div>
        </a>
    </div>
    <div class="col-12 col-sm-6 col-lg col-xxl-6 col-4xl mb-4">
        <a class="feature-card" href="/docs/{{docsPrefix}}edge/faq/" target="_blank">
            <img class="feature-logo" src="/images/feature-logo/faq.svg" alt="Question icon">
            <h3 class="feature-title">FAQ</h3>
            <div class="feature-text">
                Common questions about Edge capabilities, limitations, and configuration.
            </div>
        </a>
    </div>
</div>

{% if docsPrefix != 'pe/' %}
<div class="commercial-banner">
  <h2>Need more opportunities?</h2>
  <p>Start with pre-built solution templates, connect legacy equipment via 30+ integration protocols, and white-label everything as your own product.</p>
  <div class="banner-actions">
    <a href="/docs/contact-us/" class="btn-primary" target="_blank">Request a Demo</a>
  </div>
</div>
{% endif %}

<script>
(function() {
  'use strict';
  
  function closeBanner() {
    const banner = document.getElementById('ceBanner');
    if (!banner) return;
    
    banner.style.opacity = '0';
    banner.style.transition = 'opacity 0.3s ease';
    
    setTimeout(() => {
      banner.style.display = 'none';
    }, 300);
    
    try {
      sessionStorage.setItem('ceBannerClosed', 'true');
    } catch (e) {
      console.warn('Could not save banner state:', e);
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('ceBanner');
    if (!banner) return;
    
    try {
      if (sessionStorage.getItem('ceBannerClosed') === 'true') {
        banner.style.display = 'none';
        return;
      }
    } catch (e) {
      console.warn('Could not read banner state:', e);
    }
    
    const closeBtn = banner.querySelector('.banner-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeBanner);
    }
  });
})();
</script>

<style>
/* Top banner */
.ce-banner {
  position: relative;
  top: -10px; 
  background: linear-gradient(135deg, #f8fbff 0%, #ffffff 100%);
  border: 1px solid #e3f2fd;
  border-left: 4px solid #1976D2;
  border-radius: 8px;
  padding: 8px 12px;
  margin: 0 0 0 0;
  font-size: 13px;
  color: #424242;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.ce-banner a {
  color: #1976D2;
  text-decoration: none;
  font-weight: 500;
}

.ce-banner a:hover {
  text-decoration: underline;
}

.banner-close {
  background: none;
  border: none;
  font-size: 20px; 
  color: #757575;
  cursor: pointer;
  padding: 0;
  width: 20px; 
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
  flex-shrink: 0;
  line-height: 1;
}

.banner-close:hover {
  color: #1976D2;
}

.banner-close:focus {
  outline: 2px solid #1976D2;
  outline-offset: 2px;
}

/* Lead text */
.lead-text {
  font-size: 16px;
  line-height: 1.6;
  color: #424242;
}

/* Benefits list */
.benefits-list {
  padding: 0;
}

.benefits-list li {
  position: relative;
  padding-left: 24px;
  margin-bottom: 8px;
  font-size: 15px;
  line-height: 1.5;
  color: #424242;
}

/* Learn more link */
.learn-more {
  font-size: 15px;
  color: #424242;
  margin: 0 0 20px 0;
}

.learn-more a {
{% if docsPrefix != 'pe/' %}
  color: #1976D2;
{% else %}
  color: #009688;
{% endif %}
  text-decoration: none;
  font-weight: 500;
}

.learn-more a:hover {
  text-decoration: underline;
}

/* Section heading */
h2 {
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 20px 0 24px 0;
}
/* Cards */

.doc-features .feature-card {
  display: block;
  text-decoration: none;
  color: inherit;
  height: 100%;
  padding: 16px;
}

.doc-features .feature-title {
  font-size: 18px !important;
  font-weight: 400;
  color: #1a1a1a;
  margin: 0 0 4px 0 !important;
}

/* Commercial banner */
.commercial-banner {
  background: linear-gradient(135deg, #f8fbff 0%, #ffffff 100%);
  border: 1px solid #e3f2fd;
  border-left: 4px solid #1976D2;
  border-radius: 8px;
  padding: 15px;
  margin: 5px 0;
}

.commercial-banner h2 {
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 12px 0;
}

.commercial-banner p {
  font-size: 15px;
  line-height: 1.6;
  color: #424242;
  margin: 0 0 20px 0;
}

.banner-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn-secondary,
.btn-primary {
  display: inline-block;
  padding: 12px 24px;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
}

.btn-secondary {
  color: #1976D2;
  background: white;
  border: 1px solid #1976D2;
}

.btn-secondary:hover {
  background: #e3f2fd;
}

.btn-primary {
  color: white;
  background: #1976D2;
  border: 1px solid #1976D2;
}

.btn-primary:hover {
  background: #1565C0;
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
  h1 {
    font-size: 28px;
  }
  
  h2 {
    font-size: 22px;
  }
  
  .commercial-banner {
    padding: 24px;
  }
}
</style>