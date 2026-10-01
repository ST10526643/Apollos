// Render the same footer from one source wherever its mount point is present.
const footerRoot = document.querySelector('#site-footer-root');

if (footerRoot) {
  footerRoot.outerHTML = `
    <footer class="site-footer global-footer" id="footer">
      <div class="global-footer-inner">
        <div class="global-footer-brand">
          <a class="wordmark footer-wordmark" href="index.html#home" aria-label="Apollo home">APOLLO<span class="wordmark-dot">.</span></a>
          <p>BUILT FOR MOVEMENT.<br>DESIGNED FOR EVERYWHERE.</p>
          <div class="global-footer-social" aria-label="Follow Apollo">
            <span aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v5h4v-5h3l1-4h-4V9c0-.7.3-1 1-1Z"/></svg></span>
            <span aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle class="social-dot" cx="17.5" cy="6.8" r=".8"/></svg></span>
            <span aria-label="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="4"/><path class="social-fill" d="m10 9 5 3-5 3z"/></svg></span>
          </div>
        </div>
        <nav class="global-footer-nav" aria-label="Footer navigation">
          <section class="global-footer-group">
            <h2><button type="button" aria-expanded="false" aria-controls="footer-products">PRODUCTS<span aria-hidden="true">+</span></button></h2>
            <div class="global-footer-panel" id="footer-products" inert><div class="global-footer-links"><a href="shop.html?sort=newest#collection">New Arrivals</a><a href="shop.html?sort=featured#collection">Best Sellers</a><a href="shop.html#collection">Clothing</a><a href="info.html#shoes">Shoes</a><a href="accessories.html">Accessories</a></div></div>
          </section>
          <section class="global-footer-group">
            <h2><button type="button" aria-expanded="false" aria-controls="footer-shop">SHOP<span aria-hidden="true">+</span></button></h2>
            <div class="global-footer-panel" id="footer-shop" inert><div class="global-footer-links"><a href="men.html">Men</a><a href="women.html">Women</a><a href="summer-specials.html">Summer Specials</a><a href="shop.html#collection">All Products</a></div></div>
          </section>
          <section class="global-footer-group">
            <h2><button type="button" aria-expanded="false" aria-controls="footer-collections">COLLECTIONS<span aria-hidden="true">+</span></button></h2>
            <div class="global-footer-panel" id="footer-collections" inert><div class="global-footer-links"><a href="shop.html?sort=newest#collection">Latest Collection</a><a href="shop.html?q=essential#collection">Essentials</a><a href="summer-specials.html">Summer Collection</a><a href="shop.html#collection">Featured Collection</a></div></div>
          </section>
          <section class="global-footer-group">
            <h2><button type="button" aria-expanded="false" aria-controls="footer-company">COMPANY INFO<span aria-hidden="true">+</span></button></h2>
            <div class="global-footer-panel" id="footer-company" inert><div class="global-footer-links"><a href="info.html#about-apollo">About Apollo</a><a href="info.html#contact-us">Contact Us</a><a href="info.html#careers">Careers</a><a href="info.html#store-locator">Store Locator</a></div></div>
          </section>
          <section class="global-footer-group">
            <h2><button type="button" aria-expanded="false" aria-controls="footer-support">SUPPORT<span aria-hidden="true">+</span></button></h2>
            <div class="global-footer-panel" id="footer-support" inert><div class="global-footer-links"><a href="info.html#help-centre">Help Centre</a><a href="info.html#shipping-delivery">Shipping &amp; Delivery</a><a href="info.html#returns-refunds">Returns &amp; Refunds</a><a href="info.html#size-guide">Size Guide</a><a href="info.html#faqs">FAQs</a></div></div>
          </section>
          <section class="global-footer-group">
            <h2><button type="button" aria-expanded="false" aria-controls="footer-world">OUR WORLD<span aria-hidden="true">+</span></button></h2>
            <div class="global-footer-panel" id="footer-world" inert><div class="global-footer-links"><a href="info.html#sustainability">Sustainability</a><a href="info.html#people">People</a><a href="info.html#community">Community</a><a href="info.html#planet">Planet</a></div></div>
          </section>
        </nav>
        <div class="global-footer-bottom">
          <nav class="global-footer-legal" aria-label="Legal and information"><a href="info.html#data-settings">Data Settings</a><a href="info.html#cookie-settings">Cookie Settings</a><a href="info.html#privacy-policy">Privacy Policy</a><a href="info.html#terms-conditions">Terms &amp; Conditions</a><a href="info.html#imprint">Imprint</a></nav>
          <p>© 2026 Apollo. All Rights Reserved.</p>
        </div>
      </div>
    </footer>`;

  const footer = document.querySelector('.global-footer');
  const accordionButtons = footer.querySelectorAll('.global-footer-group h2 button');
  const mobileFooter = window.matchMedia('(max-width: 720px)');

  // Keep desktop links open; make the same groups accessible as accordions on mobile.
  function updateFooterAccordion() {
    accordionButtons.forEach(button => {
      const panel = document.getElementById(button.getAttribute('aria-controls'));
      const expanded = mobileFooter.matches ? button.getAttribute('aria-expanded') === 'true' : true;
      button.setAttribute('aria-expanded', String(expanded));
      button.closest('.global-footer-group').classList.toggle('is-open', expanded);
      panel.inert = !expanded;
    });
  }

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (!mobileFooter.matches) return;
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      button.closest('.global-footer-group').classList.toggle('is-open', !expanded);
      document.getElementById(button.getAttribute('aria-controls')).inert = expanded;
    });
  });

  mobileFooter.addEventListener('change', updateFooterAccordion);
  updateFooterAccordion();
}