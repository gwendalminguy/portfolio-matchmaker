<p align="center">
  <img src="./public/logo_full.png" width="300" style="display:block; margin:0 auto;">
</p>

<h2 align="center">
	Portfolio - MatchMaker<br>Holberton School Toulouse
</h2>

Welcome to the [MatchMaker](https://matchmaker.ovh/) project!

MatchMaker is a web application designed to make tournament organization effortless. It provides a simple and intuitive interface for creating and managing competitions, automatically generating matches, and updating scores in real time. Built to help associations and event organizers move beyond pen-and-paper methods, MatchMaker offers an accessible and dynamic experience for both organizers and spectators, through a responsive interface.

## 🌐 Landing Page & Web Application

Discover the **public landing page** of MatchMaker — introducing the concept, features, and visuals of the application:  
[MatchMaker Landing Page](https://gwendalminguy.github.io/portfolio-matchmaker/)

Or simply access and use MatchMaker:  
[matchmaker.ovh](https://matchmaker.ovh/)

## 🛠 Application Features

MatchMaker supports the following features:

### Tournament Organizers

* Account Creation
* Secure Login & Logout
* Password Recovery
* Tournament Management:
	* Creation
	* Teams & Participants Handling
	* Different Modes (Random - Bracket - Swiss)
	* Score Edition
	* Matches Generation

### Tournament Spectators & Participants

* Easy Scoreboard Access (QR Code)
* Tournament Ranking Table
* Bracket Tree Visualization
* Real-time Scores Update

### Interface

* Intuitive & Responsive UI
* Dark & Light Modes
* Full Multilingual Support:
  * English
  * French
  * Spanish

### Upcoming Features

* Sports Support:
  * Adapting tournaments details to the sport type
  * Adding new sports
* Participants Accounts: 
  * Allowing participants to create an account.
  * Keeping a history of the tournaments attended.
* Tournament Hub:
  * Seeing public nearby tournaments.
  * Requesting to join a tournament.
* Ranking Exportation:
  * Saving final results as PDF/CSV.
  * Sharing the document easily.
* Stripe Integration:
  * Allowing donations for financial support.

## 📂 Project Structure

The project contains several files and directories, which are the following:

| File | Description |
| :---- | :---------- |
| [`public/`](https://github.com/gwendalminguy/portfolio-matchmaker/blob/main/public/) | Directory for sample data and images. |
| [`src/`](https://github.com/gwendalminguy/portfolio-matchmaker/blob/main/src/) | Directory for the source files of the application. |
| [`eslint.config.js`](https://github.com/gwendalminguy/portfolio-matchmaker/blob/main/eslint.config.js) | The configuration file for ESLint. |
| [`index.html`](https://github.com/gwendalminguy/portfolio-matchmaker/blob/main/index.html) | The HTML file of the application. |
| [`package.json`](https://github.com/gwendalminguy/portfolio-matchmaker/blob/main/package.json) | The JSON file listing all dependencies.  |
| [`vite.config.js`](https://github.com/gwendalminguy/portfolio-matchmaker/blob/main/vite.config.js) | The configuration file for Vite. |

## 🔧 Technologies Used

<br>
<p align="center">
    <b>BACKEND</b>
    <br><br>
    <!-- BACKEND -->
	<img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" alt="DJANGO" />
	<img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" alt="POSTGRESQL" />
	<img src="https://img.shields.io/badge/Redis-D92D2A?style=for-the-badge&logo=redis&logoColor=white " alt="REDIS" />
	<img src="https://img.shields.io/badge/Celery-37814A?style=for-the-badge&logo=celery&logoColor=white" alt="CELERY" />
</p>

<br>
<p align="center">
    <b>FRONTEND</b>
    <br><br>
    <!-- FRONTEND -->
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="REACT" />
<img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TAILWINDCSS" />
<img src="https://img.shields.io/badge/DaisyUI-9333EA?style=for-the-badge&logo=daisyui&logoColor=white" alt="DAISYUI" />
<img src="https://img.shields.io/badge/Vite-FFB92E?style=for-the-badge&logo=vite&logoColor=black" alt="VITE" />
</p>

<br>
<p align="center">
    <b>OS & TOOLS</b>
    <br><br>
    <!-- OS & TOOLS -->
	<img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="LINUX" />
	<img src="https://img.shields.io/badge/Docker-3B82F6?style=for-the-badge&logo=docker&logoColor=white" alt="DOCKER" />
	<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="GIT" />
	<img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white" alt="VSCODE" />
</p>

## 🧩 Architecture Overview

MatchMaker follows a **containerized architecture** designed for scalability, consistency, and real-time communication.

- **Infrastructure**
  - Fully containerized with **Docker**, ensuring reproducibility across environments.
  - **NGINX** acts as a reverse proxy and web server, serving both frontend and backend.
  - Hosted on **OVH Cloud**, with **Celery** managing automated email tasks (registration & password reset).

- **Backend**
  - Built with **Django**, chosen for its robustness, security, and flexibility.
  - Supports two protocols:
    - **HTTP** for standard API requests.
    - **WebSocket** (via **Django Channels** + **Redis**) for real-time updates of matches and rankings.
  - **PostgreSQL** ensures relational consistency and scalability.

- **Frontend**
  - Developed with **React** and powered by **Vite** during development for fast hot-reloading and build performance.
  - Styled with **Tailwind CSS** and **DaisyUI**, offering a modern, responsive and maintainable interface.
  - Organized as a **single-page application**, structured around reusable React components.

## 🧭 Project Timeline

The project was developed through three main phases:

| Phase | Description |
|-------|--------------|
| **Idea Development** | Brainstorming of the application concept, definition of key features, and drafting of the project charter and technical documentation. |
| **Core Features** | Four development sprints focusing on: secure authentication (HttpOnly cookies), tournament and team CRUD management, WebSocket integration for real-time updates, and Celery-based email automation. |
| **Public Release V1** | Final UX improvements, full deployment with SEO optimization, and creation of the responsive landing page to showcase the project. |

## 🧑‍🤝‍🧑 Authors

This project was carried out by:

- [Gwendal Minguy-Pèlerin](https://github.com/gwendalminguy/)
- [Baptiste Lonqueu](https://github.com/lnqbat/)
