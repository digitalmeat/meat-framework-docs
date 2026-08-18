// Inject sidebar into every docs page
const sidebar = `
<div class="docs-sidebar">
  <div class="sidebar-section">
    <div class="sidebar-section-title">General</div>
    <ul class="sidebar-nav">
      <li><a href="introduction.html">Introduction</a></li>
      <li><a href="contributing.html">Contribution guide</a></li>
      <li><a href="upgrade.html">Upgrade guide</a></li>
      <li><a href="changelog.html">Changelog</a></li>
    </ul>
  </div>
  <div class="sidebar-section">
    <div class="sidebar-section-title">Get started</div>
    <ul class="sidebar-nav">
      <li><a href="installation.html">Installation</a></li>
      <li><a href="configuration.html">Configuration</a></li>
      <li><a href="structure.html">Application structure</a></li>
      <li><a href="routing.html">Routing</a></li>
      <li><a href="middleware.html">Middleware</a></li>
      <li><a href="controllers.html">Controllers</a></li>
      <li><a href="models.html">Models</a></li>
      <li><a href="hooks.html">Hooks</a></li>
    </ul>
  </div>
  <div class="sidebar-section">
    <div class="sidebar-section-title">Views &amp; Templates</div>
    <ul class="sidebar-nav">
      <li><a href="views.html">Views</a></li>
      <li><a href="blade.html">Blade</a></li>
      <li><a href="twig.html">Twig</a></li>
    </ul>
  </div>
  <div class="sidebar-section">
    <div class="sidebar-section-title">WordPress</div>
    <ul class="sidebar-nav">
      <li><a href="action.html">Action</a></li>
      <li><a href="ajax.html">Ajax</a></li>
      <li><a href="asset.html">Asset</a></li>
      <li><a href="dropins.html">Drop-ins</a></li>
      <li><a href="field.html">Field</a></li>
      <li><a href="filter.html">Filter</a></li>
      <li><a href="form.html">Form</a></li>
      <li><a href="metabox.html">Metabox</a></li>
      <li><a href="page.html">Page</a></li>
      <li><a href="posttype.html">PostType</a></li>
      <li><a href="taxonomy.html">Taxonomy</a></li>
      <li><a href="user.html">User</a></li>
      <li><a href="widgets.html">Widgets</a></li>
    </ul>
  </div>
  <div class="sidebar-section">
    <div class="sidebar-section-title">Handbooks</div>
    <ul class="sidebar-nav">
      <li><a href="theme.html">Theme</a></li>
      <li><a href="plugin.html">Plugin</a></li>
      <li><a href="multisite.html">Multisite</a></li>
      <li><a href="woocommerce.html">WooCommerce</a></li>
      <li><a href="wp-cli.html">WP-CLI</a></li>
    </ul>
  </div>
  <div class="sidebar-section">
    <div class="sidebar-section-title">Advanced</div>
    <ul class="sidebar-nav">
      <li><a href="authentication.html">Authentication</a></li>
      <li><a href="console.html">Console</a></li>
      <li><a href="database.html">Database</a></li>
      <li><a href="errors.html">Error handling</a></li>
    </ul>
  </div>
</div>`;

document.addEventListener('DOMContentLoaded', function () {
  const placeholder = document.getElementById('sidebar-placeholder');
  if (placeholder) {
    placeholder.outerHTML = sidebar;
  }

  // Highlight active
  const current = window.location.pathname.split('/').pop();
  document.querySelectorAll('.sidebar-nav a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === current) {
      link.classList.add('active');
    }
  });
});
