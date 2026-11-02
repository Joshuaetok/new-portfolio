# Client Projects Manager — Standalone CRM & Project Management Plugin

> **Author:** Joshua Etok  
> **Type:** WordPress CRM & Project Management System  
> **Target:** Client Onboarding, Status Tracking, Agency Portals, Workcity Africa Assessment  
> **Tech Stack:** PHP (Pure OOP), WordPress Custom Post Types, Meta Boxes, Admin List Tables, REST API, AJAX, Responsive CSS  
> **Repository:** `client-projects-manager`

---

## 1. Executive Summary & Value Proposition

**Client Projects Manager** is a standalone, object-oriented WordPress plugin engineered to manage client engagements, project timelines, deliverables, and budgets directly inside the WordPress admin dashboard without relying on heavy external CRM SaaS subscriptions or bulky third-party page builders.

Built originally for the Workcity Africa Technical Assessment, the plugin demonstrates strict adherence to WordPress coding standards, custom capability management, clean database hygiene, and secure AJAX/REST API data exposure.

---

## 2. Core Features & UI Breakdown

### 2.1. Dedicated Custom Post Type (`client_project`)
* Structured data modeling for client projects with support for custom taxonomies (Project Types, Departments).
* Custom admin menu with high-visibility dashicon branding (`📁 Client Projects`).

### 2.2. Custom Meta Box System & Field Architecture
* Clean, non-intrusive metadata input panels on the project edit screen:
  * **Client Name:** Text input with sanitization.
  * **Project Status:** Select dropdown with standardized workflow states:
    * 🟡 `Pending` (Initial discovery / proposal stage)
    * 🔵 `Ongoing` (Active development & milestone execution)
    * 🟢 `Completed` (Delivered and archived)
  * **Project Deadline:** HTML5 Datepicker with format validation.
  * **Budget & Deliverables:** Structured inputs for scope tracking.

### 2.3. Enhanced Admin List Table
* Custom sortable columns in the WordPress admin list table for rapid overview:
  * Project Title & Excerpt
  * Client Name
  * Status Badge (color-coded UI pills for instant visual scanning)
  * Deadline (with warning highlights for approaching or past-due dates)
  * Date Created
* Status dropdown filter above the table to quickly slice projects by current operational status.

### 2.4. Front-End Project Showcase & AJAX Filtering
* **Shortcode Integration (`[client_projects]`):** Embeds a clean, responsive card grid of public or client-facing projects on any WordPress page.
* **Attributes Supported:**
  * `status="ongoing|completed|pending"`
  * `posts_per_page="6"`
  * `columns="2|3|4"`
* **Instant AJAX Status Filter:** Interactive dropdown on the frontend allowing clients or stakeholders to filter project cards dynamically without page reloads.

### 2.5. Custom REST API Integration
* Custom REST API endpoint (`/wp-json/cpm/v1/projects`) exposing sanitized project data for headless frontend applications, mobile apps, or external reporting dashboards.
* Supports filtering parameters (`?status=ongoing`) and pagination.

---

## 3. Security, Roles & Clean Lifecycle Management

* **Role-Based Access Control (RBAC):** Registers granular custom capabilities upon activation (`manage_client_projects`, `edit_client_projects`, `delete_client_projects`) mapped to site administrators.
* **Security & Nonce Verification:** Nonce tokens on all AJAX handlers and form posts to defend against CSRF attacks. Data sanitized with `sanitize_text_field()` and escaped with `esc_html()`, `esc_attr()`, and `wp_kses_post()`.
* **Zero-Trace Uninstallation (`uninstall.php`):** Implements proper WordPress cleanup routines. When uninstalled, the plugin cleanly purges all `client_project` post records, postmeta entries, custom options, and registered capabilities, ensuring zero orphan data in the database.
