# APFW — Advanced AJAX Product Filter for WooCommerce & Elementor

> **Author:** Joshua Etok (wpmetawizard)  
> **Type:** High-Performance WooCommerce & Elementor Extension  
> **Compatibility:** WooCommerce 7.0 - 9.5+, WordPress 6.0 - 6.9+, PHP 7.4+  
> **Tech Stack:** PHP (OOP), WooCommerce REST / Query Engine, Elementor Widget API, Vanilla JS (AJAX, History API), Scoped CSS3 / Custom Properties  
> **Repository:** `advanced-product-filter-for-woocommerce`

---

## 1. Executive Summary & Value Proposition

Online shoppers expect instant, no-reload product discovery. Traditional WooCommerce catalog filtering requires slow full-page refreshes, resets user scroll positions, and often shows confusing dead-end attribute combinations (`0 results`).

**APFW (Advanced Product Filter for WooCommerce)** provides an intelligent, automated, zero-config AJAX product filtering experience. Unlike complicated competitors that require manual shortcode mapping, manual CSS selector declarations, or tedious attribute slug setup, APFW works **100% automatically out of the box** upon activation. It automatically scans the active catalog, identifies populated attributes, and renders modern e-commerce visual facets (swatches, tiles, sliders, and toggles).

---

## 2. Core Features & UI Architecture

### 2.1. 100% Automated Out-of-the-Box Injection
* **Auto-Injected on Archives:** Automatically mounts right above the standard WooCommerce product grid (`woocommerce_before_shop_loop`) on Shop, Search, and Product Category/Tag archives.
* **Shortcode & Elementor Widget Ready:** Supports `[apfw_filters]` (and dedicated Elementor Widget) for placement anywhere on custom landing pages or sales funnels. Automatically disables auto-injection when a manual shortcode/widget is detected to prevent duplication.

### 2.2. Modern Visual Facet Types
* **Auto-Discovered Color Swatches (`pa_color`, `pa_colour`):** Scans product taxonomies and renders visual color circles. Bundles 60+ pre-mapped color hex values, supports custom third-party swatch plugin metadata, and renders a conic rainbow gradient for multicolor items.
* **Auto-Detected Size & Capacity Tiles (`pa_size`, `pa_capacity`):** Compact square tiles for sizing, shoe dimensions, storage capacities, or tech specs.
* **Dynamic Range Slider with Anti-Trap Logic:** Dynamically queries catalog bounds from `wc_product_meta_lookup` (e.g., $10 to $1,500). Features synchronized dual-thumb handles, live price badge pills, and an intelligent z-index manager (`apfw-thumb-top`) so the minimum handle never gets trapped behind the maximum handle at extreme values.
* **Instant Debounced Keyword Search:** Search bar embedded in the toolbar header that live-filters products on typing with optimized debounce timing (300ms).
* **Click-to-Deselect Star Ratings:** Interactive rating filters with live `"4★ & up"` badges and one-tap deselection.
* **iOS-Style Animated Pill Toggles:** Clean switches for "In stock only" and "On sale" (auto-hides the sale toggle if no active discounts exist in the store via `wc_get_product_ids_on_sale()`).

### 2.3. Smart Mobile UI: Off-Canvas Bottom Sheet Drawer
* Responsive slide-over bottom sheet on mobile screens (`<= 768px`).
* Modern UI details: blurred backdrop overlay, body scroll lock while open, smooth hardware-accelerated slide-up transition, and native Escape key / swipe dismissal.
* Sticky mobile footer action: displays live filtered product count (`"Show Products (14)"`) so mobile shoppers know their results before closing the drawer.

### 2.4. Live Facet Counts & Zero Dead-Ends
* **Real-time AJAX Count Recalculation:** After every filter interaction, counts next to each facet (`(N)`) are recalculated based on the remaining active dataset.
* **Zero-Result Dimming:** Empty attribute combinations are visibly dimmed and disabled (`apfw-zero-results`) to prevent shoppers from clicking into empty catalog pages.

### 2.5. Browser History API & URL State Sync
* Seamlessly syncs filter criteria to the browser URL query string (`?pa_color=black&min_price=50&on_sale=1`).
* Full browser **Back / Forward** button compatibility (`popstate` listener).
* Allows shoppers to copy, bookmark, or share exact filtered views with friends or on social media.

---

## 3. Technical Specifications & Performance

| Specification | Details |
|---|---|
| **Architecture** | Object-Oriented PHP 7.4+, PSR-compliant code style |
| **CSS Isolation** | 100% scoped under `.apfw-wrapper` utilizing CSS Custom Properties (`--apfw-*`). Zero style bleed into active theme styles. |
| **JavaScript Weight** | Pure lightweight vanilla JavaScript. Zero heavy jQuery UI / slider library dependencies. |
| **Database Performance** | Utilizes index-optimized tables (`wc_product_meta_lookup`, term relationships) with cached facet counts. |
| **Security** | Strict nonce validation on all AJAX calls, sanitized URL query parameters, and prepared SQL lookups. |
