# Love Quizzing?
![website preview](./assets/images/am-i-responsive.PNG)
## Introduction
Online quizzes are becoming popular and there has been a growth in this market over the last couple of years, due to the Covid pandemic.

Quizzes have transitioned from the earliest publically organised quiz in the U.S. in the 1930s, through radio and television, and now online.

I was inspired to create a quiz because of my own love of quizzing.

A live website to my quiz can be found [here](https://anu1301.github.io/love-quizzing/).

## Table of Contents
[1. User Expereince (UX)](#ux)

[2. Colour Scheme](#colour-scheme)
 
[3. Wire Frames](#wireframes)

[4. Features](#features)

[5. Technologies Used](#technologies-used)

[6. Testing](#testing)

[7. Future Development](#developments)

[8. Deployment](#deployment)

[9. Credits](#credits)

<a name="ux"></a>

## 1. User Experience (UX)
[Go up to the top](#table-of-contents)

The aim was to design an online quiz game that would provide entertainment and knowledge at the same time.

The target audience the quiz is aimed at varies and is vast - any age from mid/late 20s to the over 50s.

The application provides four separate categories of questions - Food & Drink, History, Science and Sports, which have proven to be popular and gives the user a variety from which to choose.

Each separate category provides 10 questions with multiple choice answers. The user is able to only select one answer from a choise of four per question.

Once all the questions from a category are completed the user is directed to the end page where the final score is displayed and a simple form is provided for feedback purposes.

The application is simple to use and intuitive, and provides instruction on the home/landing page.

The application is responsive to various sized devices.

<a name="colour-scheme"></a>

## 2. Colour Scheme
[Go up to the top](#table-of-contents)

The choice of background colour of cyan transitioning into a magenta, provides a contrasting backdrop for the dark indigo font colour. 

It provides enough interest without it being distracting to the user.

The website was run through the WebAim Contrast Checker with the following result:
![colour contrast](./assets/images/webaim_contrast_checker.PNG)

<a name="wireframes></a>

## 3. Wire Frames
[Go up to the top](#table-of-contents)

Balsamiq was used to create an initial skeletal/wire frame plan.

I had sketched out two different plans initially, as presented below:

![wire frame](./assets/images/love_quizzing_one_home.PNG)
### Home page of first idea.

![wire frame](./assets/images/love_quizzing_one_quiz.PNG)
### Quiz page of first idea

![wire frame](./assets/images/love_quizzing_two_home.PNG)
### Home page of second idea

![wire frame](./assets/images/love_quizzing_two_quiz.PNG)
#### Quiz page of second idea

![wire frame](./assets/images/love_quizzing_two_end.PNG)
### End page of first and second idea

The final design was a hybrid of the two ideas with additional features.

<a name="features"></a>, 

## 4. Features
[Go up to the top](#table-of-contents)

The home/landing page presents the title of the site as a question "Love Quizzing?" Below this there are four images which represent the four categories of quizes.

Home/Landing Page

![landing-page](./assets/images/landing-page.PNG)

Each image acts as a responsive button which takes you to its corresponding quiz page when, selected.

Below the categories is a collapsible information bar, which responds to the mouse hover by changing colour. It opens up an information section when the "plus" icon is selected, and closes when the "minus" icon is selected.

![collapsible-information](./assets/images/collapsible-info-bar.PNG)

Each quiz page provides you with the title of the quiz at the top of the page, below which there is a progress bar, a question tracker and a score tracker for the number of correct answers given.

![food-and-drink-quiz-page](./assets/images/food-and-drink-quiz-page.PNG)

The questions follow on and are given randomly, with the multiple choice answers below.

![history-quiz-page](./assets/images/history-quiz-page.PNG)

A correct answer returns with the answer bar turning green, and an incorrect answer returns with the bar turning red.

![science-quiz-page](./assets/images/science-quiz-page.PNG)


![sports-quiz-page](./assets/images/sports-quiz-page.PNG)

A home button below the answers will return you to the home page.

Once the quiz is complete, the user will be directed to the end page where the final score for correct answers is given. 

![end-page](./assets/images/end-page.PNG)

There is a simple form to provide feedback, name and e-mail. These are required fields and the user will not be allowed to submit without completing them.

Again a home button is provided for the user to return to the home page to choose another category.

<a name="technologies-used"></a>

## 5. Technologies Used
[Go up to the top](#table-of-contents)

The following technologies where used:

- HTML - for the structure of the website
- CSS - for the layout and presentation of the website
- JavaScript - for the website interaction
- GitHub - creation and storate of the repository
- GitPod - code editor (code commited and pushed to GitHub)

<a name="testing"></a>

## 6. Testing
[Go up to the top](#table-of-contents)

W3C Markup was used to check for errors in the HTML pages. The final checks showed no errors:

index.html
![html-validation](./assets/images/index.html_validation.PNG)

food-and-drink.html
![html-validation](./assets/images/food-and-drink.html%20-%20validator.PNG)

history.html
![html-validation](./assets/images/history.html%20-%20validator.PNG)

science.html
![html-validation](./assets/images/science.html-validator.PNG)

sports.html
![html-validation](./assets/images/sports.html-validator.PNG)

end.html
![html-validation](./assets/images/end.html_validation.PNG)

W3C CSS was used to check for errors in style.css and quiz.css. The final checks showed no errors:

style.css
![css-validation](./assets/images/style.css_validation.PNG)

The warning shown in the error checker relates to the imported font styles from google.

![style.css-warning](./assets/images/style.css_validation_warning.PNG)
quiz.css
![css-validation](./assets/images/quiz.css_validation.PNG)

JSHint was used to check for errors in the JavaScript code with the following results:

before (for all the javascript files):

![js-validation](./assets/images/js_warnings.PNG)

after

food-and-drink.js

![js-validation](./assets/images/food-and-drink-js-validator.PNG)
history.js

![js-validation](./assets/images/history-js-validator.PNG)

science.js

![js-validation](./assets/images/science.js-validator.PNG)

sports.js

![js-validation](./assets/images/science.js-validator.PNG)

Siteimprove was used to check accessibility, with the following results:

![accessibility](./assets/images/accessibility-checker.PNG)

Dev tools was also used to ensure that any issues were picked up and dealt with straight away.

### Manual Testing

The website was tested manually by loading the website on a Samsung smart phone as well as a Kindle tablet and was found to be responsive. 

This was also tested via dev tools as follows:

* Responsive dimentions (page was draged back and forth to reduce/increase size of viewport on desk-top screen)
* iPhone SE
* iPhone XR
* iPhone 12 Pro
* Samsung Galexy S8
* iPad Air
* iPad Mini

The website was tested using the following browsers:
* Microsoft Edge
* Google Chrome

The features were tested as follows:

* The images link to their respective quiz pages and were tested - they behaved as expected. They took you to the appropriate quiz pages.
* The collapsible instructions work as expected, i.e. when the plus sign is selected the instructions drop down. The colour also changes, as expected.
* The social network icons, when selected, take you to their respective websites.
* The selection of answers on the quiz pages behave as they should - if the answer is right the selector turns green and if incorrect, turns red.
* The transition to the next question is short enough to stop the user breaking the system.
* The score at the top and the progress bar work as the questions are answered.
* Once all the questions have been answered the user is taken to the end page where the final score is shown - this works as expected.
* The name, email and text area for feedback are required fields - if not completed and the submit button is selected the user is prompted to complete these fields - this works as it should.
* The email field recognises the email format and prompts you if it has not been completed correctly.
* If the required fields are correctly completed and the submit button selected, the user is directed to the https://formdump.codeinstitute.net/ (the Code Institute form dump).
* The home button on the quiz page and the end page bring you back to the home page - this works as expected.


<a name="issues-and-developments"></a>
## 7. Future Developments
[Go up to the top](#table-of-contents) 

There has been consideration given to future developments.

- Having one html and one js file for all gategories of quiz 

- A further categories of quiz. 

- Time limits being placed on answering the questions, to heighten the excitment of beating the clock. 

- Having a highest score 'Leader Board'

- Animated background

<a name="deployment"></a>

## 8. Deployment
[Go up to the top](#table-of-contents)

TThe site was deployed to GitHub pages, as the repository was created through GitHub, using the following method:

- Navigate to the settings tab in the mollies boutique repository in GitHub.

- Select pages on the left-hand side menu

- From the source section drop-down menu, select the Master Branch and save

- The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

- The live link can be found at the top of this document

<a name="credits"></a>

## 9. Credits
[Go up to the top](#table-of-contents)

The images were taken from Adobe Stock on a free trial period basis.

I relied on James Q Quick and Brian Design tutorial for the quiz JavaScript code.

For the collapsible and linear gradient background, I used W3Schools.

I also used some code and ideas from my previous project "Mollies Boutique", as well as getting some ideas from the CI Love Maths project.

My mentor, Marcel Mulder, gave valuable feedback and ideas for improvement or experimentation.















