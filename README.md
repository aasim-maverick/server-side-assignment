# Server Side Lab Assignments

> A complete, well-structured record of server-side lab practice foundations: HTML workflows, multi-page mini websites, and JavaScript problem-solving programs.

![HTML](https://img.shields.io/badge/Assignment%201-39%20HTML%20Pages-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/Assignment%202-25%20JavaScript%20Programs-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111)
![Status](https://img.shields.io/badge/Lab%20Record-Complete-1f883d?style=for-the-badge)

## Why This Repo Exists

This repository organizes practical lab assignments into clean, question-wise files so every concept can be reviewed, run, and demonstrated independently.

It is designed for:
- quick viva/assessment revision
- easy faculty evaluation (question-by-question)
- hands-on practice in core web and JavaScript fundamentals

## Repository Structure

```text
makwe-ki-maa-randi/
├── assignment-1/                 # HTML lab files (q1-q11)
│   ├── q1.html ... q7.html
│   ├── q8-college-website/       # 15-page college website mini-project
│   ├── q9-tourism-website/       # 15-page tourism website mini-project
│   ├── q10.html
│   └── q11.html
└── assignment-2/                 # JavaScript lab files (q1-q25)
    ├── q1.js ... q25.js
```

## Assignment 1: HTML Lab (39 Pages)

| Question | Topic | File(s) |
|---|---|---|
| Q1 | Basic first HTML page | `assignment-1/q1.html` |
| Q2 | Complex table with row/column spans | `assignment-1/q2.html` |
| Q3 | Text formatting tags showcase | `assignment-1/q3.html` |
| Q4 | Ordered, unordered, and definition lists | `assignment-1/q4.html` |
| Q5 | Image embedding | `assignment-1/q5.html` |
| Q6 | Clickable image hyperlink | `assignment-1/q6.html` |
| Q7 | Employee registration form | `assignment-1/q7.html` |
| Q8 | College website mini-project (multi-page navigation, departments, admission, contact, gallery) | `assignment-1/q8-college-website/*.html` |
| Q9 | Hampi tourism website mini-project (heritage pages, booking form, gallery, contact) | `assignment-1/q9-tourism-website/*.html` |
| Q10 | Personal portfolio/profile web page | `assignment-1/q10.html` |
| Q11 | Model question paper layout page | `assignment-1/q11.html` |

### Q8 Mini-Project Pages

`about.html`, `academics.html`, `admission.html`, `civil.html`, `contact.html`, `cs.html`, `ei.html`, `etc.html`, `facilities.html`, `gallery.html`, `home.html`, `it.html`, `mech.html`, `principal.html`, `rules.html`

### Q9 Mini-Project Pages

`achyutaraya.html`, `badavi.html`, `booking.html`, `contact.html`, `elephant.html`, `gallery.html`, `hazara.html`, `hemakuta.html`, `heritage.html`, `home.html`, `lotus.html`, `matanga.html`, `queenbath.html`, `virupaksha.html`, `vittala.html`

## Assignment 2: JavaScript Lab (25 Programs)

| Question | Program Focus | File |
|---|---|---|
| Q1 | Find all indexes of a word in a string | `assignment-2/q1.js` |
| Q2 | Linear search | `assignment-2/q2.js` |
| Q3 | Quick sort | `assignment-2/q3.js` |
| Q4 | Merge sort | `assignment-2/q4.js` |
| Q5 | Heap sort | `assignment-2/q5.js` |
| Q6 | Insertion sort | `assignment-2/q6.js` |
| Q7 | Bubble sort | `assignment-2/q7.js` |
| Q8 | Sort characters in a string | `assignment-2/q8.js` |
| Q9 | Check whether array is sorted | `assignment-2/q9.js` |
| Q10 | Null checker | `assignment-2/q10.js` |
| Q11 | Number type checker | `assignment-2/q11.js` |
| Q12 | RegExp checker | `assignment-2/q12.js` |
| Q13 | Delete object property | `assignment-2/q13.js` |
| Q14 | Library reading status logger | `assignment-2/q14.js` |
| Q15 | Live digital clock with `setInterval` | `assignment-2/q15.js` |
| Q16 | URL parser | `assignment-2/q16.js` |
| Q17 | Convert string to array | `assignment-2/q17.js` |
| Q18 | Toggle letter case | `assignment-2/q18.js` |
| Q19 | Minutes to hour/minute formatter | `assignment-2/q19.js` |
| Q20 | Stack class (`push`, `contains`) | `assignment-2/q20.js` |
| Q21 | Linked list empty check | `assignment-2/q21.js` |
| Q22 | Rectangle class (`area`, `perimeter`) | `assignment-2/q22.js` |
| Q23 | Image slider next/previous logic | `assignment-2/q23.js` |
| Q24 | JSON parse error handling | `assignment-2/q24.js` |
| Q25 | Browser redirect function | `assignment-2/q25.js` |

## Run and Preview

### HTML Files

Open any file directly in your browser, or run a local static server:

```bash
cd /path/to/makwe-ki-maa-randi
python3 -m http.server 8000
```

Then visit:
- `http://localhost:8000/assignment-1/q8-college-website/home.html`
- `http://localhost:8000/assignment-1/q9-tourism-website/home.html`

### JavaScript Files

Use Node.js REPL to load and test functions:

```bash
cd /path/to/makwe-ki-maa-randi
node
```

```js
.load assignment-2/q3.js
quickSort([9, 3, 1, 7, 4])
```

## Important Notes

- Some HTML pages reference local image assets (`image.jpg`, `logo.png`, `g1.jpg`, `g2.jpg`, `images/*`) that are not present in this repository snapshot.
- In `assignment-1/q9-tourism-website/heritage.html`, the link points to `achyuta.html`, while the file present is `achyutaraya.html`.

## Tech Stack

- HTML5
- Vanilla JavaScript (ES6+)
- Browser DOM APIs
- Node.js (for running JS snippets during practice)

## Author

Maintained as a personal lab assignment record for server-side/web programming coursework.
