# WordPress Plugin Engineering Portfolio & Technical Write-Ups

> **Developer:** Joshua Etok  
> **Specialization:** Advanced WordPress & WooCommerce Plugin Engineering, Elementor Widget Architecture, Gutenberg Blocks, High-Performance Database Systems, and Conversational Commerce.  
> **Directory:** `/plugins/`

This directory contains technical write-ups, UI breakdowns, specifications, and architectural documentation for production-ready WordPress plugins engineered from scratch.

---

## 📚 Plugin Directory Index

| Plugin | Primary Focus | Key Technologies | Documentation File |
|---|---|---|---|
| **CongreGrid & CongreGrid Pro** | Enterprise Church Management & Ministry Platform | PHP 7.4+ OOP, Elementor Widget API, `$wpdb`, Dompdf, Shortcodes | [`congregrid.md`](./congregrid.md) |
| **OrderSpell** | Two-Tap Chat & WhatsApp Commerce for WooCommerce | WooCommerce HPOS, Gutenberg Blocks, WhatsApp Deep-Link, Send-Tracking, Vanilla JS | [`orderspell.md`](./orderspell.md) |
| **APFW (Advanced Product Filter)** | Automated AJAX Product Filtering for WooCommerce | WooCommerce Query Engine, Elementor Widgets, History API, Scoped CSS3, Swatches | [`advanced-product-filter.md`](./advanced-product-filter.md) |
| **Client Projects Manager** | Custom CRM & Project Management System | Custom Post Types, Meta Boxes, Admin List Tables, REST API, RBAC Capabilities | [`client-projects-manager.md`](./client-projects-manager.md) |

---

## 🛠️ Architectural Principles Across All Plugins

### 1. Strict Object-Oriented Programming (OOP) & PSR Standards
All plugins adhere to modern PHP OOP standards with clean separation of concerns, PSR-4 compliant autoloading, modular directory structures, and namespace encapsulation to eliminate function/class naming collisions.

### 2. Zero-Drift Shortcode & Page Builder Parity
In plugins targeting page builders (like **CongreGrid** and **APFW**), Elementor widgets and Gutenberg blocks delegate rendering directly to central, static PHP rendering controllers. This guarantees 100% visual and functional parity across visual builder environments and classic shortcode embeds with zero duplicate maintenance overhead.

### 3. Database Integrity & Performance First
- High-Performance Order Storage (HPOS) compatibility in WooCommerce extensions.
- Zero floating-point arithmetic on currency: all money values are represented as integer minor units (cents) to avoid IEEE 754 precision errors.
- All database queries strictly use `$wpdb->prepare()`.
- Table indexing optimizations and automated transients with cached facet counts.

### 4. Hardened WordPress Security
- Strict Nonce verification (`wp_verify_nonce`, `check_ajax_referer`) on every state-changing POST and AJAX request.
- Role-Based Access Control (RBAC) and explicit user capability checks (`current_user_can()`).
- Strict input sanitization (`sanitize_text_field`, `sanitize_key`, `absint`) and contextual output escaping (`esc_html`, `esc_attr`, `esc_url`, `wp_kses_post`).

### 5. Clean Lifecycle Management & Zero-Trace Uninstallation
Every plugin includes a dedicated `uninstall.php` script that cleans up custom database tables, postmeta, options, and transient caches when uninstalled, leaving the client's WordPress database pristine.
