# BeyondChats – Full Stack Engineering Assignment

This repository contains my submission for the BeyondChats technical assignment.  
The project demonstrates an end-to-end system involving **web scraping, backend APIs, LLM-based content transformation, and a frontend UI**, built under time and system constraints with clear trade-offs.

---

##  Problem Overview

The goal of this assignment is to:

1. Scrape old blog articles from the BeyondChats website.
2. Store them in a database and expose CRUD APIs.
3. Fetch the latest article, compare it with top-ranking external articles, and generate an updated version using LLM logic.
4. Display both original and updated articles in a frontend UI.

Partial completion is acceptable, with emphasis on **engineering judgment, system design, and clarity of execution**.

---

##  Tech Stack

### Backend
- **Laravel 12**
- **PHP 8.2**
- **MySQL**
- Laravel Console Commands for scraping
- RESTful CRUD APIs

### LLM / Automation
- **Node.js**
- Axios (HTTP requests)
- Cheerio (HTML scraping)
- Simulated LLM logic (documented trade-off)

### Frontend
- **ReactJS (Vite)**
- Fetch API
- Simple responsive UI

### Tooling
- Git & GitHub
- VS Code
- Composer
- npm

---

##  System Architecture (High Level)

1. **Laravel Scraper**
   - Scrapes the 5 oldest blogs from BeyondChats
   - Stores them in MySQL

2. **Laravel APIs**
   - Exposes CRUD APIs for articles
   - Differentiates original vs updated articles

3. **NodeJS Script**
   - Fetches the latest article from Laravel API
   - Uses the article title to simulate Google search
   - Scrapes 2 external blog articles
   - Rewrites the content using LLM-style logic
   - Publishes updated article back via API

4. **React Frontend**
   - Fetches articles from Laravel
   - Displays original and updated versions

---

##  Data Flow

BeyondChats Website  
→ Laravel Scraper Command  
→ MySQL Database  
→ Laravel API  
→ NodeJS Script  
→ Updated Article Stored  
→ React Frontend Display  

---

##  Phase-wise Implementation

###  Phase 1: Backend & Scraping
- Scraped 5 oldest blogs from `https://beyondchats.com/blogs/`
- Stored articles in MySQL
- Implemented CRUD APIs using Laravel

###  Phase 2: NodeJS + LLM Logic
- Fetched latest article from Laravel API
- Simulated Google search using top external blogs
- Scraped content from:
  - Intercom Blog
  - Salesforce Blog
- Generated updated article content
- Published updated article via API
- Added references at the bottom

###  Phase 3: Frontend
- Built React app
- Displayed articles in a clean UI
- Marked updated articles clearly

---

##  External Reference Articles Used

The following two external blogs were used as reference articles for content comparison and rewriting:

- https://www.intercom.com/blog/ai-chatbots/
- https://www.salesforce.com/blog/what-is-an-ai-chatbot/

---

### Assumptions & Trade-offs

- Google Search scraping was **simulated** by manually selecting the top two relevant external blog articles due to:
  - Google scraping restrictions
  - API quota and time constraints
- LLM rewriting was implemented using **simplified logic** instead of a paid API to avoid billing and setup overhead.
- Focus was placed on **system correctness, clarity, and data flow** rather than perfect NLP output.

These decisions were made intentionally to deliver a reliable and reviewable solution within the given time limits.

---

##  Local Setup Instructions

###  Clone Repository
```bash
git clone <your-github-repo-url>
cd beyondchats-assignment

###  Backend (Laravel)
cd backend-laravel
composer install
cp .env.example .env
php artisan key:generate

### Configure database in .env:

DB_CONNECTION=mysql
DB_DATABASE=beyondchats
DB_USERNAME=root
DB_PASSWORD=


### Run migrations:

php artisan migrate


### Run scraper:

php artisan scrape:beyondchats


### Start server:

php artisan serve

### NodeJS Script
cd node-llm
npm install
node index.js

### Frontend (React)
cd frontend-react
npm install
npm run dev


### Open browser:

http://localhost:5173
http://127.0.0.1:8000/api/articles
http://127.0.0.1:8000

### Repository Structure
beyondchats-assignment/
├── backend-laravel/
├── node-llm/
├── frontend-react/
└── README.md
