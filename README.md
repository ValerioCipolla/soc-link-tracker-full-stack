![Banner](.\images\SoC_Link_Tracker_.png?raw=true "SoC Link Tracker")

# School of Code Link Tracker

For project week (week 9 of a 16 weeks long software development bootcamp) at [School of Code](https://github.com/SchoolOfCode) we were asked to create something that would solve a problem for us, and other bootcampers.

## The Problem

The problem we set out to solve was: keeping tracks of all the resources that wre given to us during the bootcamp (some of them throught the zoom chat, other in Slack, or just spoken about).

## The Solution

We decided we were going to build an easy-to-use full stack application that allowed users and bootcampers to keep track of all of those resources and made it easy to find them when they needed them.

## Tech Stack

This is a full stack application and the technologies we picked are:

- node.js
- react JS
- postgreSQL
- jest

We picked these technologies because we had already use them during the previous weeks of the bootcamp and they proved to be easy to use and to work well together.

## The Process

We started by creating a single application containing the server (a node app created using express) and the client (a react application created using create-react-app). Then we created the database on Heroku and deployed our application (still on Heroku) instantly, this way we knew our stack worked well together and we could build on top of it, withouth fearing problems with deployment later during the week.

The application was created in 4 days, following an Agile way of working with daily stand-ups and sprints. The main focus was to create something valuable and fully working that we could show in our presentation at the end of the week.

## A code snippet I am proud of

Here I use useState to track the state of my form, the handleChange function to change and manage the state of 3 separate input fields, and the handleSubmit function to handle the submission of the form, using the different states to send a post request to the database to create a new resource with those specific inputs. Also, upon submission, I clean up the state and the input fields and alert the user that the resource was created successfully.

![Banner](./images\carbon.png "SoC Link Tracker")

## Credits

This project was created with the help of [Macsen](https://github.com/MacsenSM), [Ravi Gordon](https://github.com/rg460) and [Ben Gray](https://github.com/Gray593)
