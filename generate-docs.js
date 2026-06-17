const fs = require('fs');
const path = require('path');

const pages = [
  {
    filename: 'docs-setup.html',
    title: 'Company Setup',
    activeState: 'setup',
    prevUrl: 'docs.html',
    prevTitle: 'Introduction',
    nextUrl: 'docs-support.html',
    nextTitle: 'Support',
    content: `
      <h1>Company Setup</h1>
      <p>This chapter describes how to start the Business process, explore the administration interface.</p>
      <hr>
      <p>The Administration module allows you to control the operation of Business Process, and manage all users and groups. This chapter describes how to start the Business process, explore the administration interface. It covers the base data that is linked into the other modules for transactional purpose.</p>
      <h2>Let's Setup the Company</h2>
      <p>Here we can see the company setup. Firstly we'll define the company profile in which the first item is company profile. Company profile is used for the company information. The purpose of this tab is how to establish or create company information to use this tab.</p>
      <p>When you click on the company profile option you can see there are two option:</p>
      <ul><li>Edit profile</li><li>Accounts preferences</li></ul>
      <p>When you open the Edit profile, now you can add your company information like</p>
      <ul><li>Company Name</li><li>Address</li><li>Email</li><li>GST Number</li><li>NTN Number</li><li>Company code</li><li>Business type</li><li>Phone number</li><li>Logo</li></ul>
      <p>Now you can simply add this information and click on saves changes.</p>
      <h2>Accounting References</h2>
      <p><strong>Accounting References</strong> typically refers to the settings and options that control how financial transactions are recorded, processed, and reported.</p>
      <ul><li><strong>Payable Account</strong> – Tracks money your business owes to suppliers.</li><li><strong>Receivable Account</strong> – Tracks money owed to your business by customers.</li><li><strong>COGS/Expense Account</strong> – Records the cost of goods sold or business expenses.</li><li><strong>Income Account</strong> – Records revenue earned from sales or services.</li><li><strong>Inventory Asset Account</strong> – Tracks the value of inventory held by the business.</li><li><strong>Stock Adjustment Account</strong> – Records adjustments made to inventory levels.</li><li><strong>Suspense Account</strong> – Temporarily holds transactions until they are properly classified.</li><li><strong>WIP Account</strong> – Tracks costs related to Work In Process.</li><li><strong>Gain Loss Account</strong> – Records gains or losses from financial transactions.</li><li><strong>Employee Payable</strong> – Tracks amounts owed to employees.</li></ul>
      <h2>Inventory Preferences</h2>
      <p><strong>Inventory Preferences</strong> control how inventory is tracked, valued, and managed across your business operations.</p>
      <ul><li><strong>Enable Multi UOM</strong> – Allows the use of multiple units of measurement.</li><li><strong>Enable Multi Item Pricing</strong> – Enables different pricing tiers for the same item.</li><li><strong>Enable FOC Product</strong> – Allows Free of Cost products in transactions.</li><li><strong>Show MRP Fields</strong> – Displays MRP fields on inventory forms.</li></ul>
      <h2>Transaction Preferences</h2>
      <p><strong>Transaction Preferences</strong> define the default behavior of transactions across the ERP system.</p>
      <ul><li><strong>Enable Transaction Line Description</strong> – Allows adding a description to each line item.</li><li><strong>Enable Transaction Line Tax</strong> – Enables tax at the individual transaction line level.</li></ul>
      <h2>Integration Setup</h2>
      <p><strong>Integration Setup</strong> allows you to connect Bins ERP with third-party government and digital invoicing services.</p>
      <ul><li><strong>Enable FBR POS Integration</strong> – Connects with FBR for tax compliance.</li><li><strong>Enable IRIS Live Digital Invoicing</strong> – Enables live digital invoicing.</li><li><strong>Enable Sandbox Testing</strong> – Activates a testing environment.</li></ul>
    `
  },
  {
    filename: 'docs-support.html',
    title: 'Support',
    activeState: 'support',
    prevUrl: 'docs-setup.html',
    prevTitle: 'Setup',
    nextUrl: 'docs-financial.html',
    nextTitle: 'Financial Module',
    content: `
      <h1>Support</h1>
      <p>Bins ERP Customer Support & Onboarding Guide</p>
      <hr>
      <h2>Support</h2>
      <p>Welcome to Bins ERP Support. We provide structured onboarding and dedicated assistance to ensure every client gets the most out of their ERP experience.</p>
      <h2>Onboarding Sessions</h2>
      <p>Upon purchasing Bins ERP, every client is entitled to <strong>3 dedicated onboarding sessions</strong> with a member of the Bins ERP team.</p>
      <p>During these sessions, our expert team will:</p>
      <ul><li>Walk you through the complete system setup and configuration</li><li>Guide you through each module relevant to your business</li><li>Answer all your questions in real time</li><li>Help you understand workflows, reports, and best practices</li><li>Resolve any issues or concerns on the spot</li></ul>
      <h2>After Your 3 Sessions</h2>
      <p>Once your <strong>3 onboarding sessions are complete</strong>, additional one-on-one sessions will no longer be available. However, you will continue to receive full support through our <strong>Support Ticket System</strong>.</p>
      <h2>Support Ticket System</h2>
      <p>For any issues, queries, or guidance needed after your onboarding sessions, you can submit a <strong>Support Ticket</strong> directly through your Bins ERP dashboard.</p>
      <h3>How to Submit a Ticket</h3>
      <ol><li>Log in to your Bins ERP account</li><li>Click the <strong>Support</strong> button in the top navigation bar</li><li>Click <strong>Create Ticket</strong> on the Support Tickets page</li><li>Fill in the following details: Subject, Module Name, Message, Attach Image (optional)</li><li>Click <strong>Submit</strong></li></ol>
      <h2>Support Summary</h2>
      <ul><li><strong>Onboarding Sessions</strong> — 3 sessions included with every purchase</li><li><strong>Session Format</strong> — Live, 1-on-1 with a Bins ERP team member</li><li><strong>Post-Session Support</strong> — Via Support Ticket System</li><li><strong>Ticket Response</strong> — Handled by the Bins ERP support team</li></ul>
    `
  },
  {
    filename: 'docs-financial.html',
    title: 'Financial Module',
    activeState: 'financial',
    prevUrl: 'docs-support.html',
    prevTitle: 'Support',
    nextUrl: 'docs-inventory.html',
    nextTitle: 'Inventory Management',
    content: `
      <h1>Financial Module</h1>
      <p>A financial module is a software component that manages and automates financial transactions, accounting, and reporting.</p>
      <hr>
      <p>The financial module provides a centralized platform for financial data management, enabling accurate and timely financial decision-making.</p>
      <p>Key features include general ledger, accounts payable, accounts receivable, trail balance, profit and loss, and balance sheet.</p>
      <p>In Bins ERP, here are some key components and features of a financial module:</p>
      <div class="docs-card"><h4>Journal Voucher</h4><p>The Journal Voucher feature allows you to record financial transactions manually or automatically.</p></div>
      <div class="docs-card"><h4>Payment Voucher</h4><p>The Payment Voucher feature allows you to create multiple expense vouchers to track various types of expenses.</p></div>
      <div class="docs-card"><h4>Sales/Receivable</h4><p>The Sales/Receivable helps in managing sales operations, including invoices, returns, payments, and customer management.</p></div>
      <div class="docs-card"><h4>Purchase/Payable</h4><p>The Purchase/Payable helps in managing purchase operations, including invoices, returns, payments, and vendor management.</p></div>
      <div class="docs-card"><h4>Manage Accounts</h4><p>The Accounts Management module is used to manage all financial accounts.</p></div>
      <div class="docs-card"><h4>Reports</h4><p>The Reports module provides a variety of financial reports to assist in decision-making.</p></div>
      <div class="docs-card"><h4>Post Dated Cheque</h4><p>The Post Dated Cheque feature allows you to manage and track post-dated cheques for future payments and receipts.</p></div>
    `
  },
  {
    filename: 'docs-inventory.html',
    title: 'Inventory Management',
    activeState: 'inventory',
    prevUrl: 'docs-financial.html',
    prevTitle: 'Financial Module',
    nextUrl: 'docs-purchase.html',
    nextTitle: 'Purchase Management',
    content: `
      <h1>Inventory Management</h1>
      <p>An inventory management system is a tool that allows you to track goods across your business supply chain.</p>
      <hr>
      <p>It optimizes the entire spectrum spanning from order placement with your vendor to order delivery to your customer, mapping the complete journey of a product.</p>
      <p>In Bins ERP, here are some key components and features of inventory management:</p>
      <div class="docs-card"><h4>Inventory Setup</h4><p>The Inventory Setup section allows you to configure Items, Item Categories, Warehouses, Item UOM, Item Price Types, and more.</p></div>
      <div class="docs-card"><h4>Material Receive</h4><p>The Material Receive feature allows you to record the receipt of inventory items into a warehouse.</p></div>
      <div class="docs-card"><h4>Material Issue</h4><p>The Material Issue feature allows you to record the issuance of inventory items from a warehouse to an employee or project.</p></div>
      <div class="docs-card"><h4>Project Wise Material Issue</h4><p>The Project Wise Material Issue feature allows you to issue inventory items against a specific project.</p></div>
      <div class="docs-card"><h4>Inventory Adjustment</h4><p>The Inventory Adjustment feature allows you to adjust inventory quantities and values at the end of the month.</p></div>
      <div class="docs-card"><h4>Inventory Transfer</h4><p>The Inventory Transfer feature allows you to transfer stock between warehouses within the same organization.</p></div>
      <div class="docs-card"><h4>Reports</h4><p>The Reports section provides a variety of inventory reports to assist in decision-making.</p></div>
    `
  },
  {
    filename: 'docs-purchase.html',
    title: 'Purchase Management',
    activeState: 'purchase',
    prevUrl: 'docs-inventory.html',
    prevTitle: 'Inventory Management',
    nextUrl: 'docs-sale.html',
    nextTitle: 'Sale Management',
    content: `
      <h1>Purchase Management</h1>
      <p>This module enables organizations to manage Purchase.</p>
      <hr>
      <p>Purchase management is a system that is used for order placement for the timely receipt of inventory stock. It streamlines the purchasing and inventory control process of an organization for greater efficiency and lower costs.</p>
      <p>In Bins ERP, here are some key components and features of the Purchase module:</p>
      <div class="docs-card"><h4>Vendors</h4><p>The Vendors section allows you to manage all vendors including their categories, contact details, and addresses.</p></div>
      <div class="docs-card"><h4>Vendor Category</h4><p>The Vendor Category section allows you to define and manage vendor categories linked to payable accounts.</p></div>
      <div class="docs-card"><h4>Purchase Order</h4><p>The Purchase Order section allows you to create and manage purchase orders for inventory procurement.</p></div>
      <div class="docs-card"><h4>Reports</h4><p>The Reports section provides a variety of purchase reports to assist in decision-making.</p></div>
    `
  },
  {
    filename: 'docs-sale.html',
    title: 'Sale Management',
    activeState: 'sale',
    prevUrl: 'docs-purchase.html',
    prevTitle: 'Purchase Management',
    nextUrl: 'docs-hr.html',
    nextTitle: 'HR Management',
    content: `
      <h1>Sale Management</h1>
      <p>This module enables organizations to manage Sales.</p>
      <hr>
      <p>Sale management is becoming increasingly complex as almost every business has multiple customer interaction points which keep orders flowing in from different sales channels.</p>
      <p>In Bins ERP, here are some key components and features of the Sale module:</p>
      <div class="docs-card"><h4>Customers</h4><p>The Customers section allows you to manage all customers including their categories and contact details.</p></div>
      <div class="docs-card"><h4>Customer Category</h4><p>The Customer Category section allows you to define and manage customer categories.</p></div>
      <div class="docs-card"><h4>Quotations</h4><p>The Quotations section allows you to create and manage sales quotations for customers.</p></div>
      <div class="docs-card"><h4>Sale Order</h4><p>The Sale Order section allows you to create and manage sales orders for customers.</p></div>
      <div class="docs-card"><h4>Routes</h4><p>The Routes section allows you to define and manage delivery routes for sales operations.</p></div>
      <div class="docs-card"><h4>Van Loading</h4><p>The Van Loading section allows you to manage van loading operations for delivery routes.</p></div>
      <div class="docs-card"><h4>Reports</h4><p>The Reports section provides a variety of sales reports to assist in decision-making.</p></div>
    `
  },
  {
    filename: 'docs-hr.html',
    title: 'HR Management',
    activeState: 'hr',
    prevUrl: 'docs-sale.html',
    prevTitle: 'Sale Management',
    nextUrl: 'docs-manufacturing.html',
    nextTitle: 'Manufacturing',
    content: `
      <h1>HR Management</h1>
      <p>The HR Management module centralizes employee records, classifications, and departmental structures to streamline workforce operations.</p>
      <hr>
      <p>The HR Management module consolidates personnel data and HR functions into a single, efficient platform—enabling seamless integration with payroll, attendance, and departmental workflows.</p>
      <p>Key features include employee profiles, employee category, tasks, department, and workforce organization.</p>
      <p>In Bins ERP, here are some key components and features of the HR Management module:</p>
      <div class="docs-card"><h4>Employee Detail</h4><p>Catalog employee records with personal and job-related information.</p></div>
      <div class="docs-card"><h4>Employee Category</h4><p>Classify employees by department, role, or custom labels for structured reporting.</p></div>
      <div class="docs-card"><h4>Department</h4><p>Define organizational units and associate employees accordingly.</p></div>
      <div class="docs-card"><h4>Reports</h4><p>The Reports section provides HR reports to assist in workforce decision-making.</p></div>
    `
  },
  {
    filename: 'docs-manufacturing.html',
    title: 'Manufacturing Module',
    activeState: 'manufacturing',
    prevUrl: 'docs-hr.html',
    prevTitle: 'HR Management',
    nextUrl: 'docs-project.html',
    nextTitle: 'Project Management',
    content: `
      <h1>Manufacturing Module</h1>
      <p>The Manufacturing module centralizes production processes such as item management, work orders, and assembly builds for streamlined operations.</p>
      <hr>
      <p>The Manufacturing module consolidates production data and workflows into a single, efficient platform—enabling better control over inventory, assembly, and reporting.</p>
      <p>Key features include item management, item categories, work orders, assembly builds, and manufacturing reports.</p>
      <p>In Bins ERP, here are some key components and features of the Manufacturing module:</p>
      <div class="docs-card"><h4>Item</h4><p>Manage individual production items with detailed specifications.</p></div>
      <div class="docs-card"><h4>Item Category</h4><p>Organize items into logical categories for streamlined production.</p></div>
      <div class="docs-card"><h4>Work Order</h4><p>Track and manage production workflows, timelines, and responsibilities.</p></div>
      <div class="docs-card"><h4>BOM</h4><p>Manage Bill of Materials for production items, defining the components and quantities required for manufacturing.</p></div>
      <div class="docs-card"><h4>Assembly Build</h4><p>Coordinate and oversee assembly processes with component-level tracking.</p></div>
      <div class="docs-card"><h4>Reports</h4><p>Generate detailed manufacturing reports for analysis and decision-making.</p></div>
    `
  },
  {
    filename: 'docs-project.html',
    title: 'Project Management System',
    activeState: 'project',
    prevUrl: 'docs-manufacturing.html',
    prevTitle: 'Manufacturing',
    nextUrl: 'docs-pos.html',
    nextTitle: 'POS',
    content: `
      <h1>Project Management System</h1>
      <p>This module enables organizations to manage projects efficiently, integrating with other ERP functions.</p>
      <hr>
      <p>Key features include:</p>
      <h2>1. Project Creation</h2>
      <ul><li>Define project scope, objectives, and timelines</li><li>Assign project managers and team members</li></ul>
      <h2>2. Task Management</h2>
      <ul><li>Create and assign tasks to team members</li><li>Track task status, progress, and deadlines</li></ul>
      <h2>3. Reporting and Analytics</h2>
      <ul><li>Generate project status reports and dashboards</li><li>Analyze project performance metrics (e.g., time, cost, quality)</li></ul>
      <p>In Bins ERP, here are some key components and features of the Project Management System:</p>
      <div class="docs-card"><h4>Project Management</h4><p>Create and manage projects, assign tasks to team members, and track progress.</p></div>
      <div class="docs-card"><h4>Team Management</h4><p>Manage team members, assign roles, configure permissions, and track task progress.</p></div>
    `
  },
  {
    filename: 'docs-pos.html',
    title: 'POS Module',
    activeState: 'pos',
    prevUrl: 'docs-project.html',
    prevTitle: 'Project Management',
    nextUrl: 'docs-order-booking.html',
    nextTitle: 'Order Booking App',
    content: `
      <h1>POS Module</h1>
      <p>The POS module centralizes retail functions, enabling transaction management and customer tracking for seamless operations.</p>
      <hr>
      <p>The POS module consolidates retail data and workflows into a single, integrated platform—enabling better control over fulfillment, checkout, and reporting.</p>
      <p>Key features include item management, customer profiles, POS terminals, payment methods, and retail reports.</p>
      <p>In Bins ERP, here are some key components and features of the POS module:</p>
      <div class="docs-card"><h4>Items</h4><p>Manage individual POS items with detailed specifications.</p></div>
      <div class="docs-card"><h4>Item Category</h4><p>Organize items into logical categories for streamlined management.</p></div>
      <div class="docs-card"><h4>Customer</h4><p>Track and maintain customer profiles and purchase history.</p></div>
      <div class="docs-card"><h4>POS Terminal</h4><p>Operate POS terminals with secure, real-time checkout.</p></div>
      <div class="docs-card"><h4>POS Payment</h4><p>Customize payment options including cash, card, and digital wallets.</p></div>
      <div class="docs-card"><h4>Reports</h4><p>Generate detailed POS reports for insights and optimization.</p></div>
    `
  },
  {
    filename: 'docs-order-booking.html',
    title: 'Order Booking App',
    activeState: 'orderbooking',
    prevUrl: 'docs-pos.html',
    prevTitle: 'POS',
    nextUrl: 'docs.html',
    nextTitle: 'Back to Introduction',
    content: `
      <h1>Order Booking App</h1>
      <p>Bins ERP Order Booking Mobile Application Guide</p>
      <hr>
      <h2>What is the Order Booking App?</h2>
      <p>The <strong>Bins Order Booking App</strong> is a mobile application designed for sales representatives, distributors, and field teams. It allows them to book orders directly from their phones while on the go — and all orders automatically sync with <strong>Bins ERP</strong> in real time, with no manual data entry required.</p>
      <h2>Key Features</h2>
      <ul><li><strong>Mobile Order Booking</strong> — Sales reps can create orders from anywhere using their mobile device</li><li><strong>Auto Sync with ERP</strong> — All orders placed in the app are automatically received inside Bins ERP</li><li><strong>Customer & Item Sync</strong> — Customers and items from ERP are available directly in the mobile app</li><li><strong>No Double Entry</strong> — Data flows seamlessly between the app and ERP, eliminating duplicate work</li><li><strong>Real-Time Sales Visibility</strong> — Office teams get live updates on orders as they are placed in the field</li><li><strong>Faster Sales Operations</strong> — Speed up your entire sales process from order placement to processing</li></ul>
      <h2>Who Is It For?</h2>
      <p>This app is ideal for businesses that have:</p>
      <ul><li>Field sales representatives</li><li>Distributors managing orders on the go</li><li>Teams that need real-time order visibility between field and office</li></ul>
      <h2>How It Works</h2>
      <ol><li>Sales rep opens the <strong>Bins Order Booking App</strong> on their mobile</li><li>Customers and items are synced from Bins ERP into the app</li><li>Rep selects a customer, adds items, and places the order</li><li>The order is <strong>automatically received in Bins ERP</strong> — no manual entry needed</li><li>Office team can view and process the order in real time</li></ol>
    `
  }
];

function getActiveClass(pageState, currentState) {
  return pageState === currentState ? 'sidebar-link active' : 'sidebar-link';
}

function generateSidebar(activeState) {
  return `
    <aside class="docs-sidebar">
      <div class="sidebar-section">
        <div class="sidebar-label">Getting Started</div>
        <a href="docs.html" class="${getActiveClass('intro', activeState)}">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          Introduction
        </a>
        <a href="docs-setup.html" class="${getActiveClass('setup', activeState)}">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          Setup
        </a>
        <a href="docs-support.html" class="${getActiveClass('support', activeState)}">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
          Support
        </a>
      </div>
      <div class="sidebar-section">
        <div class="sidebar-label">Documentation</div>
        <a href="docs-financial.html" class="${getActiveClass('financial', activeState)}">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
          Financial Module
        </a>
        <a href="docs-inventory.html" class="${getActiveClass('inventory', activeState)}">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/></svg>
          Inventory Management
        </a>
        <a href="docs-purchase.html" class="${getActiveClass('purchase', activeState)}">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          Purchase Management
        </a>
        <a href="docs-sale.html" class="${getActiveClass('sale', activeState)}">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          Sale Management
        </a>
        <a href="docs-hr.html" class="${getActiveClass('hr', activeState)}">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
          HR Management
        </a>
        <a href="docs-manufacturing.html" class="${getActiveClass('manufacturing', activeState)}">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 4V8L7 12V8L2 12Z"/></svg>
          Manufacturing
        </a>
        <a href="docs-project.html" class="${getActiveClass('project', activeState)}">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          Project Management
        </a>
        <a href="docs-pos.html" class="${getActiveClass('pos', activeState)}">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          POS
        </a>
        <a href="docs-order-booking.html" class="${getActiveClass('orderbooking', activeState)}">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
          Order Booking App
        </a>
      </div>
    </aside>
  `;
}

function generatePage(page) {
  const sidebar = generateSidebar(page.activeState);
  const nextArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>`;
  const prevArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${page.title} - Bins ERP Documentation</title>
  <link rel="icon" href="images/favicon.ico" type="image/x-icon" sizes="16x16">
  <link rel="stylesheet" href="css/styles.css">
  <link rel="stylesheet" href="css/pages.css">
</head>
<body>
  <!-- Header -->
  <header class="header">
    <div class="container header-inner">
      <a href="index.html" class="logo">
        <img src="images/logo.png" alt="Bins ERP" class="light-logo" width="40" height="54">
        <img src="images/logo.png" alt="Bins ERP" class="dark-logo" width="40" height="54">
      </a>
      <nav class="nav-links">
        <a href="index.html#about" class="nav-link">Company</a>
        <a href="docs.html" class="nav-link">Docs</a>
        <a href="community.html" class="nav-link">Community</a>
        <a href="our-clients.html" class="nav-link">Our Clients</a>
      </nav>
      <div class="header-actions">
        <button class="theme-toggle" onclick="themeToggle()">
          <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
        </button>
        <a href="#" class="btn btn-primary">Buy Now</a>
        <a href="#" class="btn btn-outline">Get Demo</a>
        <button class="mobile-toggle" onclick="toggleMobileNav()">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </div>
  </header>
  <!-- Mobile Nav -->
  <div class="mobile-nav" id="mobileNav">
    <div class="mobile-nav-header">
      <a href="index.html" class="logo">
        <img src="images/logo.png" alt="Bins ERP" class="light-logo" width="40" height="54">
        <img src="images/logo.png" alt="Bins ERP" class="dark-logo" width="40" height="54">
      </a>
      <button class="mobile-nav-close" onclick="toggleMobileNav()">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    </div>
    <a href="index.html#about">Company</a>
    <a href="docs.html">Docs</a>
    <a href="community.html">Community</a>
    <a href="our-clients.html">Our Clients</a>
    <a href="index.html#features">Features</a>
    <a href="index.html#modules">Modules</a>
    <a href="#" class="btn btn-primary" style="text-align:center;margin-top:1rem;">Buy Now</a>
  </div>
  <div class="docs-layout">
    ${sidebar}
    <main class="docs-content">
      ${page.content}
      <div class="docs-nav-bottom">
        <a href="${page.prevUrl}">${prevArrow} ${page.prevTitle}</a>
        <a href="${page.nextUrl}">${page.nextTitle} ${nextArrow}</a>
      </div>
    </main>
  </div>
  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="index.html" class="logo">
            <img src="images/logo.png" alt="Bins ERP" class="light-logo" width="40" height="54">
            <img src="images/logo.png" alt="Bins ERP" class="dark-logo" width="40" height="54">
          </a>
          <p>POWERED BY</p>
          <a href="https://www.multi-techno.com/" target="_blank">
            <img src="images/3.png" alt="Partner" height="24" class="light-logo">
            <img src="images/dark.png" alt="Partner" height="24" class="dark-logo">
          </a>
        </div>
        <div class="footer-col">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Terms & Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Pages</h4>
          <ul>
            <li><a href="index.html#about">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="index.html#pricing">Pricing</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; Bins ERP. All rights reserved 2026</span>
      </div>
    </div>
  </footer>
  <script src="js/main.js"></script>
</body>
</html>`;
}

const outputDir = path.join(__dirname);

pages.forEach(page => {
  const html = generatePage(page);
  const filePath = path.join(outputDir, page.filename);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Created: ${page.filename}`);
});

console.log(`\nSuccessfully generated ${pages.length} documentation pages.`);
