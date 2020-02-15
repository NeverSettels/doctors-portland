# Portland Doctors

#### _Object-Oriented Programming_ - _2/14/2020_

#### _Eric Settels_

## **Description**

_This program will allow a user to find a doctor in potland based on name or medical issue._

## **Behavior Driven Development**

| Behavior | Input | Output |
|----------|:-----:|--------|
| User enters can enter a name and find doctors with that same name | User inputs Christabeth Boyd | user recives info for Dr. Christabeth Boyd, MD  |
| User enters a name that doesn't exist and gets a message saying that the program could not find a doctor by that name | User inputs xXth1sd0ctorD0esN0tEx1stXx  | user sees " Sorry we couldn't find xXth1sd0ctorD0esN0tEx1stXx in the data base!"  |
| Allow user to enter a symptom and find doctors based on that | user enters cough | we recomend these doctors based on your symptoms|
| if a user enters something that can be found in the DB program will let them know | User selects "Mexico" | user sees " Sorry we couldn't find it in the data base!" |
| if the the api call fails display an error to user  | User enters "john" | user sees " Sorry the call to the api failed" |


## **Setup/Installation**

1. Step one: Open up your terminal
2. Step two: Navigate to the desired directory in which you want to clone this repository.
3. Step three: Clone this repository.
4. Step four: Open the repository.
5. Step Five: Get an api key from  [BetterDoctor API](https://developer.betterdoctor.com/)
6. Step Six: Open Repository and add .env file and create variable called API_KEY and st it equal to your key. 
7. Step seven: Run npm start on your terminal. 
8. Step Eight: Enjoy site. 


## **Known Bugs**

There are no known bugs at this time.

## **Support and contact details**

If you have any questions, comments, or concerns, feel free to contact the content creator at settels.eric@gmail.com 

## **Future Plans**

* Allow user to search by symtoms 

## **Technologies used**

* JavaScript

* jQuery

* HTML

* CSS

* Bootstrap

* Visual Studio Code

* GitBash

* Jest

* Webpack

* Babel

* ESlint

*  [BetterDoctor API](https://developer.betterdoctor.com/)

## **License**

Copyright (c) 2020 **Doctors Portland**

### **_MIT_**