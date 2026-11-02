# OrderSpell — Conversational Commerce & Chat Orders for WooCommerce

> **Author:** Joshua Etok (wpmetawizard)  
> **Type:** High-Performance WooCommerce Extension  
> **Compatibility:** WooCommerce 6.3 - 7.1+, WordPress 6.3+, HPOS Compatible, PHP 7.4+  
> **Tech Stack:** PHP (OOP, PSR-4), WooCommerce REST/Order Engine, Gutenberg Block API, Elementor Widget API, Vanilla JS, HTML5/CSS3, SVG, WPML/Polylang  
> **Repository:** `orderspell`

---

## 1. Executive Summary & Problem Solved

In emerging e-commerce markets across Africa, Southeast Asia, and Latin America, traditional multi-step checkouts experience massive cart abandonment (often 70–80%+). Mobile shoppers overwhelmingly prefer conversational buying via WhatsApp.

However, standard "Buy via WhatsApp" plugins have a fatal architectural flaw: they merely construct a `wa.me` message string and launch the app without creating a database record in WooCommerce. When a customer closes WhatsApp, runs out of data, or forgets to tap "Send", **the sale is permanently lost with zero record of the buyer's intent or contact number.**

**OrderSpell** solves this by engineering a two-tap conversational commerce pipeline:
1. **Immediate WooCommerce Order Creation:** A genuine WooCommerce order is created in the database first, capturing item quantities, variable pricing, coupons, stock deductions, and customer phone/name.
2. **Deep-Link WhatsApp Dispatch:** The customer is immediately forwarded to WhatsApp with an itemized, beautifully formatted receipt ready to send.
3. **Send-Tracking & Anti-Dropoff Telemetry:** OrderSpell registers when WhatsApp was opened and when the customer confirms dispatch. If the customer never sends the message, the store owner still has the complete order and phone number in WooCommerce to follow up directly.

---

## 2. Core Features & Front-End UI Architecture

### 2.1. Two-Tap Quick Order Modal
* **Frictionless UI:** Replaces cumbersome billing/shipping forms with a clean modal requesting only essential fields (Name + Phone Number/WhatsApp).
* **Smart Phone Validation:** Derived from Google's `libphonenumber` metadata for real-time international dialing code auto-detection and number validation.
* **Local Storage Auto-Fill:** Optional "Remember my details" checkbox storing data locally in the browser (no cookies or external tracking) for 1-tap reorders.

### 2.2. Multi-Channel Placement & Responsive UI
* **Single Product Pages:** High-visibility "Order on WhatsApp" CTA alongside or replacing the default Add to Cart button.
* **Shop & Archive Grids:** Quick-order buttons on category, search, and catalog pages.
* **Sticky Mobile Order Bar:** A persistent, sleek mobile bottom bar that docks to the phone screen with one-tap checkout access.
* **Desktop QR Code Modal:** On desktop screens, OrderSpell displays an instant, dynamically generated QR code (using bundled `qrcode-generator`) that shoppers scan to immediately continue their checkout in WhatsApp on their phone.
* **Gutenberg Block & Shortcode:** Modular blocks and `[orderspell_button]` shortcode for integration anywhere across custom landing pages.
* **Custom Payment Gateway Mode:** Can operate as a formal checkout gateway in both classic WooCommerce checkout and modern Block Checkout.

### 2.3. Conversion Rate Optimization & Smart Retention
* **Floating Chat & Support Widget:** Floating launcher with business hours availability indicator ("Usually replies in 10 minutes"), team member routing by category, and pre-set FAQs.
* **Exit-Intent & Idle Reminder:** Subtle, non-intrusive notification triggered when an interested shopper lingers or attempts to leave the checkout modal (capped strictly to a maximum of 2 per session).
* **Category-Based Team Routing:** Assigns specific product inquiries and orders to dedicated sales reps' phone numbers based on product taxonomy.

---

## 3. Merchant Dashboard & Back-End Workflow

### 3.1. Native WooCommerce Order Screen Integration
* **WhatsApp Command Box:** Adds a dedicated meta box on the single order edit screen (`shop_order` & HPOS custom tables) with one-click canned WhatsApp responses:
  * *Confirm Order & Send Payment Details*
  * *Request Delivery Address / GPS Pin*
  * *Notify Out for Delivery*
  * *Follow up on Unconfirmed / Abandoned Order*
* **Send-Tracking Status Badges:** Visual indicator tags showing:
  * 🟢 *WhatsApp Message Confirmed Sent*
  * 🟡 *WhatsApp Link Opened (Pending Confirmation)*
  * ⚪ *Unsent (Cart Recoverable)*

### 3.2. Privacy-First Analytics Funnel
* Built-in conversion telemetry:
  * Product Page Views ➔ WhatsApp Button Clicks ➔ Modal Submissions ➔ WhatsApp App Launches ➔ Verified Confirmations.
  * Stored 100% locally on the merchant's server with zero external data harvesting.
  * Fully integrated with Google Analytics and Meta Pixel events, with full support for the official WordPress Consent API.

---

## 4. Technical Specifications & Performance

| Specification | Details |
|---|---|
| **Architecture** | Object-Oriented PHP 7.4+, PSR-4 Autoloading |
| **Database Model** | Native WooCommerce `WC_Order` integration, High-Performance Order Storage (HPOS) compliant |
| **API Dependencies** | **Zero.** Does not require expensive WhatsApp Business API or third-party gateways; messages trigger natively via `wa.me` deep links |
| **Performance Overhead** | < 12KB vanilla CSS/JS bundle; zero jQuery dependency on modern themes; deferred asset loading |
| **Internationalization** | 100% translatable via `.pot` files; fully tested with WPML, Polylang, and Right-to-Left (RTL) languages |
| **Security & Anti-Spam** | Nonce verification on all AJAX endpoints, rate-limiting using hashed transient IP records (purged in 10 minutes) |
