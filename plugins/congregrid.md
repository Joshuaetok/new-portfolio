# CongreGrid & CongreGrid Pro — Modular Church Management Platform

> **Author:** Joshua Etok  
> **Type:** WordPress Plugin & Elementor Integration (Free Core + Commercial Pro Add-on)  
> **Tech Stack:** PHP 7.4+ (OOP, PSR-4), WordPress Plugin API, Elementor / Elementor Pro Widget API, MySQL / `$wpdb`, HTML5/CSS3 (BEM, CSS Variables), Vanilla JS, PHPUnit, PHPCS / WPCS  
> **Repository:** `congregrid` & `congregrid-pro`

---

## 1. Executive Summary & Value Proposition

**CongreGrid** is an enterprise-grade, modular church management and ministry platform built for WordPress and Elementor. Unlike bloated church plugins that lock churches into sluggish, monolithic codebases, CongreGrid is engineered from the ground up on three architectural pillars:

1. **True Modularity:** Every single module (Sermons, Events, Attendance, Members, Small Groups, Plan a Visit, FAQ, Prayer Requests, Giving) can be independently enabled or disabled. When a module is turned off, its menus, database hooks, scripts, and endpoints are completely dormant, keeping the site lean.
2. **Zero-Drift Unified Rendering Architecture:** Every front-end feature is built as a native Shortcode whose exact same rendering logic is shared 1:1 by a companion Elementor Widget. Elementor widgets simply delegate their `render()` call to the static shortcode renderer, guaranteeing 100% visual and functional parity without maintaining duplicate code.
3. **Data Integrity & Speed:** All queries use prepared statements (`$wpdb->prepare()`), financial figures are stored as pure integer cents/minor units (eliminating floating-point inaccuracies), and administrative actions are protected by strict nonces, sanitization, and WordPress capability checks (`manage_church_all`).

---

## 2. Core Modules & Front-End UI Breakdown

### 2.1. Sermons & Preachers
* **Audio Player & Media Delivery:** Inline HTML5 gapless audio streaming player with timestamp scrubbing, speed adjustment (1x, 1.25x, 1.5x, 2x), and download links.
* **Taxonomy Organization:** Filterable by Series, Topic, Book of the Bible, and Speaker.
* **Preacher Directory & Profiles:** Dedicated speaker profiles linking to social media, biography, and an automated archive of all messages delivered by that speaker.
* **Scripture Auto-Linking:** Bundled Bible reference linker (`Reference_Linker`) that automatically parses Scripture citations (e.g., *John 3:16*, *Romans 8:28*) in sermon notes and transforms them into interactive Bible gateway links.

### 2.2. Events & Human-Friendly Recurring Calendar
* **Natural Recurrence Engine:** Daily, Weekly, Monthly, and Yearly recurrence without requiring users to understand obscure RFC 5545 RRULE syntax.
* **Layouts:**
  * Interactive Calendar Grid with category color tags.
  * Upcoming Events Agenda List with date badges and countdown timers.
  * Single Event Page with location mapping, calendar export (.ics, Google Calendar), and registration triggers.

### 2.3. Plan a Visit & Interactive FAQ (Visit Phase)
* **First-Time Visitor Registration:** Streamlined form allowing newcomers to schedule their arrival, designate kids' ages for children’s church, and request a tour guide or host.
* **Automated Confirmation & Reminder Pipeline:** Asynchronous email dispatch providing service times, parking directions, and what to expect, with customizable reminder intervals.
* **Responsive Church FAQ Showcase:**
  * **Split Layout:** Category navigation sidebar with instant content switching.
  * **Accordion Layout:** Accessible collapsible questions with smooth CSS animations.
  * **Boxed & Open Grid Layouts:** Clean grid cards optimized for hero or sub-section placement.

### 2.4. Members & Self-Service Member Portal
* **Directory & Profile Management:** Controlled privacy settings allowing congregants to manage their profile details, contact info, and family household members.
* **Member Dashboard:** A unified frontend hub (`[cgrid_member_dashboard]`) where congregants view their enrolled small groups, active volunteer shifts, and prayer wall submissions without accessing `/wp-admin`.

### 2.5. Small Groups & Life Groups
* **Interactive Directory:** Visual group cards showcasing meeting schedules (e.g., "Tuesdays at 7:00 PM"), geographic regions, demographic focus (Young Adults, Men, Women, Married Couples), and current capacity.
* **Leader-Mediated Join Requests:** Congregants submit join requests directly through the UI. Group leaders receive notifications to approve or connect via email/WhatsApp.

### 2.6. Attendance Matrix & Kiosk Check-In
* **Spreadsheet-Style "One Sheet" Matrix:** Admin interface allowing staff to rapidly record attendance across dozens or hundreds of members within seconds on Sunday mornings.
* **Self-Service Kiosk / QR Check-In:** Touchscreen kiosk and QR code landing page enabling congregants to self-check-in upon arrival on their mobile devices.

### 2.7. Child Safety Check-In
* **Secure PIN-Based Verification:** Parents authenticate with a unique security PIN to check in children into nursery and kids' church classes.
* **Security Badges & Incident Logging:** Generates pickup security codes for parents and printed name badges for children with medical/allergy alerts.
* **Audit Trail:** Time-stamped logs of every check-in and checkout event, ensuring child safety compliance.

### 2.8. Prayer Requests & Moderated Prayer Wall
* **Public & Anonymous Submissions:** Form allows church family to submit prayer requests with visibility flags (Public, Church Staff Only, or Anonymous).
* **Community Prayer Counter:** Front-end "I Prayed for This" interactive reaction button providing real-time spiritual encouragement to believers.

---

## 3. CongreGrid Pro (Commercial Add-On Modules)

### 3.1. Donations & Online Giving
* **Multi-Campaign Progress:** Visual donation bars with progress percentages, goal amounts, and real-time calculation.
* **Cover-the-Fees Feature:** Optional checkbox allowing donors to contribute an additional percentage to cover payment processor transaction costs (Stripe/PayPal).
* **Gift Breakdown Donut & Stacked Bars:** Beautiful SVG/Canvas charts illustrating fund allocations (General Fund, Missions, Building Campaign, Youth Ministry).
* **Yearly Donor Tax Statement (PDF):** One-click generation of professional annual giving receipts and tax deduction certificates generated server-side using bundled `dompdf`.

### 3.2. Volunteer Scheduling & Rosters
* Multi-team scheduling (Worship Team, Ushers, Sound/Media, Hospitality, Children’s Ministry).
* Automated email/SMS callouts and availability confirmation toggles.

### 3.3. Birthday Engagement AI
* Smart automated birthday messaging engine with AI template expansion for personalized spiritual greetings to members on their special days.

---

## 4. Technical Architecture & Design Patterns

```
congregrid/
├── congregrid.php               # Main plugin bootstrap, constants, text domain
├── includes/
│   ├── class-activator.php      # Activation hooks, DB migration triggers
│   ├── class-deactivator.php    # Clean deactivation routines
│   ├── admin/                   # Admin UI controllers, Settings, Attendance Matrix
│   │   ├── class-attendance-admin.php
│   │   ├── class-visitors.php
│   │   └── class-settings-privacy.php
│   ├── bible/                   # Scripture parsing and auto-hyperlinking
│   │   └── class-reference-linker.php
│   ├── cpt/                     # Custom Post Types (Sermons, Events, Members, Groups)
│   ├── privacy/                 # GDPR / Privacy data exporter & eraser integrations
│   ├── shortcodes/              # Front-end shortcode renderers (Pure PHP & HTML)
│   │   ├── class-church-faq.php
│   │   ├── class-info-cards.php
│   │   └── class-plan-a-visit.php
│   ├── visit/                   # Visit planning, cron schedules, email dispatch
│   └── widgets/                 # Elementor Widget wrappers (1:1 shortcode delegation)
│       ├── class-widgets.php
│       ├── class-church-faq-widget.php
│       ├── class-info-cards-widget.php
│       └── class-plan-a-visit-widget.php
├── assets/                      # Scoped stylesheets & lightweight vanilla JS
│   ├── css/components/
│   └── js/components/
└── tests/phpunit/               # Automated unit tests (PHPUnit)
```

### Architectural Highlights:
* **Shortcode-to-Widget Proxy Pattern:**
  ```php
  // In class-church-faq-widget.php
  protected function render() {
      $settings = $this->get_settings_for_display();
      echo Church_FAQ::render( $settings );
  }
  ```
* **Strict Currency and Money Primitives:** Stored as integer cents (`minor_units`), avoiding floating point rounding bugs in donations and fee computations.
* **Hardened Security:** Capability checks (`manage_church_all`, `read`), explicit nonce verification on all `admin_post_*` and AJAX actions, and comprehensive WPCS compliance.
