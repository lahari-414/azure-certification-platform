# Microsoft Azure Fundamentals Certification Platform


A complete web-based certification training platform for **Microsoft Azure Fundamentals **, built as a direct equivalent of the AWS Cloud Practitioner platform — same structure, same features, fully rebranded and updated with Azure-specific content.



## Project Structure


azure-cert-platform/
├── index.html         — Main application (all 4 screens)
├── app.js             — All logic, question banks, video scripts, certificate
├── style.css          — Azure-themed styling (blue #0078d4 brand colors)
├── server.js          — Node.js local server (optional)
├── package.json       — Node dependencies
├── HOW_TO_GET_FREE_API_KEY.html
└── DOCUMENTATION.md




## Features (identical to AWS platform)

| Feature | Details |
|---|---|
| 📹 2 Video Modules | 3-minute each with subtitles & Text-to-Speech narration |
| 🔒 Module Lock | Module 2 unlocks only after Module 1 is watched |
| 📋 Registration Form | Name, qualification, email before exam |
| ❓ 10-Question Quiz | Randomized from 3 rotating question banks (A/B/C) |
| ⏱️ 10-Minute Timer | Visual countdown bar with warning & danger states |
| 📊 Score & Result | Pass = 8+/10; certificate generated on pass |
| 📄 PDF Certificate | Auto-opens print dialog with Azure-branded certificate |
| 🔄 Retry System | Each retry uses a different question bank (A→B→C→A…) |



## Azure Content Summary

### Module 1 — Cloud Concepts & Azure Core Services
- What is Microsoft Azure and cloud computing
- IaaS, PaaS, and SaaS service models
- Azure Virtual Machines
- Azure Blob Storage
- Azure App Service
- Azure Functions (Serverless)
- Azure SQL Database
- Azure Cosmos DB
- Azure Kubernetes Service (AKS)
- Azure Virtual Network & CDN

### Module 2 — Azure Security, Governance & Pricing
- Azure Active Directory / Microsoft Entra ID
- Single Sign-On (SSO) & Multi-Factor Authentication (MFA)
- Azure RBAC (Role-Based Access Control)
- Principle of Least Privilege
- Microsoft Defender for Cloud (Security Center)
- Shared Responsibility Model
- Azure Policy & Azure Blueprints
- Pay-as-you-go and Azure Reservations pricing
- Azure Pricing Calculator & Cost Management
- Azure Regions and Availability Zones

### Question Banks (30 unique questions across 3 banks)
- Bank A: Core service identification, pricing, infrastructure
- Bank B: Service models, security features, monitoring tools
- Bank C: Networking, governance, compliance, deployment models

---

## How to Run

### Option 1: Open Directly in Browser
Double-click `index.html` — works without any server.

### Option 2: Local Node.js Server
```bash
npm install
node server.js
# Open http://localhost:3000
```

---

## Branding
- **Color**: Azure Blue `#0078d4` (replaces AWS Orange `#FF9900`)
- **Top bar**: Azure blue gradient
- **Waveform**: Blue animated bars
- **Certificate**: Azure blue borders, "MICROSOFT AZURE FUNDAMENTALS (AZ-900)" title
- **Progress bar**: Cyan gradient `#50e6ff`

---

## Differences from AWS Platform

| Item | AWS Platform | Azure Platform |
|---|---|---|
| Course Title | AWS Cloud Practitioner | Microsoft Azure Fundamentals (AZ-900) |
| Brand Color | `#FF9900` Orange | `#0078d4` Blue |
| Top Bar | Dark `#232F3E` | Azure Blue `#0078d4` |
| Module 1 | EC2, S3, Lambda, RDS, DynamoDB | VMs, Blob Storage, App Service, Functions, SQL DB, Cosmos DB |
| Module 2 | IAM, Shared Responsibility, Pricing, Regions | Azure AD / Entra ID, RBAC, Defender, Policy, Pricing, Regions |
| Certificate | AWS CLOUD PRACTITIONER ESSENTIAL | MICROSOFT AZURE FUNDAMENTALS (AZ-900) |
| Exam Button | 🎯 Start Certification Test | 🎯 Start AZ-900 Certification Test |
