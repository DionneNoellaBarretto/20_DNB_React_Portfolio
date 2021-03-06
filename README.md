# 20 React: React Portfolio

## Task

Task is to create a portfolio deployed in Github Pages [Instructions: Create React App Docs on GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages) using React frontend framework, which will help set my portfolio apart from other developers whose portfolios donβt use the latest technologies! 


--------------------------------
# DNB's SOLUTION: 

## Technologies Used
HTML, CSS (Bootstrap), JavaScript, React (frontend framework), External Libraries: Framer Motion (animation), React Router (routing), GithubPages


## UNC Boot Camp Submission: 

ποΈ [Github Repository](https://github.com/DionneNoellaBarretto/20_DNB_React_Portfolio/settings/pages) | 

π[Deployed GitHub Page ](https://dionnenoellabarretto.github.io/20_DNB_React_Portfolio/) 

[WireFrame - Layout](https://drive.google.com/file/d/1NIMF139VHox3gRsoGtBnzCC6UeaWHBsV/view?usp=sharing)

--------------------------------

## User Story

```
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```

## Acceptance Criteria

```
GIVEN a single-page application portfolio for a web developer
β WHEN I load the portfolio THEN I am presented with a page containing a header, a section for content, and a footer
β WHEN I view the header THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
β WHEN I view the navigation titles THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
β WHEN I click on a navigation title THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
β WHEN I load the portfolio the first time THEN the About Me title and section are selected by default
β WHEN I am presented with the About Me section THEN I see a recent photo or avatar of the developer and a short bio about them
β WHEN I am presented with the Portfolio section THEN I see titled images of six of the developerβs applications with links to both the deployed applications and the corresponding GitHub repositories
β WHEN I am presented with the Contact section THEN I see a contact form with fields for a name, an email address, and a message
β WHEN I move my cursor out of one of the form fields without entering text THEN I receive a notification that this field is required
β WHEN I enter text into the email address field THEN I receive a notification if I have entered an invalid email address
β WHEN I am presented with the Resume section THEN I see a link to a downloadable resume and a list of the developerβs proficiencies
β WHEN I view the footer THEN I am presented with text or icon links to the developerβs GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```

### Mockup - Desktop, Tablet & Mobile Views
The following images show the web application's appearance and functionality:

Landing Page (Desktop View) hosted on github: <br>
<img src="./src/assets/icons/LandingPage.png"> <br>
About/Skills Page: <br>
<img src="./src/assets/icons/AboutSkillsPage.png"> <br>
Projects Page with project filtering based on category tags: <br>
<img src="./src/assets/icons/ProjectsPage.png"> <br>
Resume Page mini preview of what can be downloaded : <br>
<img src="./src/assets/icons/ResumePage.png"> <br>
Contact Page to connect with me (functional email.js integration): <br>
<img src="./src/assets/icons/ContactPage.png"> <br>
Contact Form Basic validation prior to hitting submit: <br>
<img src="./src/assets/icons/ContactValidation.png"> <br>
Contact Form submission sender visual acknowledgment: <br>
<img src="./src/assets/icons/ContactFormAcknowledgement.png"> <br>
Tablet/Mobile View: <br>
<img src="./src/assets/icons/MobileView.png">
<img src="./src/assets/icons/TabletView.png"> <br>
Redirect Logic: <br>
<img src="./src/assets/icons/redirect.png"> <br>
NoErrors: <br>
<img src="./src/assets/icons/NoErrorsLandingPage.png"> <br>


## Grading Requirements

This homework is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

 Satisfies all of the preceding acceptance criteria plus the following:
```
βApplication must use React to render content.
βApplication has a single `Header` component that appears on multiple pages, with a `Navigation` component within it thatβs used to conditionally render About Me, Portfolio, Contact, and Resume sections.
βApplication has a single `Project` component thatβs used multiple times in the Portfolio section.
βApplication has a single `Footer` component that appears on multiple pages.
βApplication must be deployed to GitHub Pages.
```
### Deployment: 32%
```
βApplication deployed at live URL.
βApplication loads with no errors.
βApplication GitHub URL submitted.
βGitHub repository contains application code.
```
### Application Quality: 15%
```
βUser experience is intuitive and easy to navigate.
βUser interface style is clean and polished.
βApplication uses a color scheme other than the default Bootstrap color palette.
```
### Repository Quality: 13%
```
βRepository has a unique name.
βRepository follows best practices for file structure and naming conventions.
βRepository follows best practices for class/id naming conventions, indentation, quality comments, etc.
βRepository contains multiple descriptive commit messages.
βRepository contains high-quality README file with description, screenshot, and link to deployed application.
```

