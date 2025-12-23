<<<<<<< HEAD
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


Live deployment was skipped due to time constraints.
The application runs fully in local development.


### Repository Structure
beyondchats-assignment/
├── backend-laravel/
├── node-llm/
├── frontend-react/
└── README.md
=======
<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework. You can also check out [Laravel Learn](https://laravel.com/learn), where you will be guided through building a modern Laravel application.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Redberry](https://redberry.international/laravel-development)**
- **[Active Logic](https://activelogic.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
>>>>>>> fc7a9845b886285877d98300d08ab15a8c05b2a9
