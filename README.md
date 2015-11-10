#Better Board
An application that aggregates job postings from around the web and helps you manage them so you can keep on top of your job search.

###Description
Backend:
The backend of the Better Board application serves JSON API endpoints using Ruby on Rails. It scrapes from multiple sources using a combination of external APIs, RSS feeds, and web scrapers (mechanize).

Front End:
The frontend of the application uses a combination of modern technologies including React, ES6/ES7, and Redux.


###Features
Minimum Viable Product:
- [x] OAuth using Google
- [ ] Aggregate job postings using combination of APIs and web scraping
  - [x] Indeed
  - [x] Github
  - [x] StackOverflow
  - [ ] VentureLoop
  - [ ] Craigslist
  - [ ] StartupHire
- [x] Automatically loads new postings
- [ ] Search for postings given params like string, location, and post date

Extra Features:
- [ ] Tag and save job postings
- [ ] Saved job searches
- [ ] Automated morning emails
- [ ] Time Series Graph to show progress
