# Sprint Challenge: Advanced Web Applications - React Bubbles

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored Advanced Web Applications, focusing on testing, client-side authentication, hosting web apps, and PUT and DELETE requests.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. You must follow the twenty-minute rule before you seek support from your PM. You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager).

## Description

In this project you will create a login page and request a token from the server that you'll use to send all other requests to the server. You will then be able to fetch the color data array, update data, and delete data, and watch the fun happen!

**Note** You can use the sites like the following to get color hex codes:

- [Color-Hex](https://www.color-hex.com/)

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [✔️] Explain what a token is used for.

  > A token is used for server authentication, ie: for a user logging in.

- [✔️] What steps can you take in your web apps to keep your data secure?

  > One way is using protected routes that check for auth before routing the user, making users login before they can go to a certain page, not storing your token in local storage

- [✔️] Describe how web servers work.

  > Web Servers store & share internet data. When you deploy an app you give data for your website to a web server, then it stores said data and will share it w/ other web servers so that it can be accessed across the world. When a user wants to go to your website they will use the URL which directs to the location of that page inside the server and the server returns the information.

- [✔️] Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
  > Put, Get, Delete and Post

## Project Set Up

✔️ Follow these steps to set up and work on your project:

- [✔️] Create a forked copy of this project.
- [✔️] Add PM as collaborator on Github.
- [✔️] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [✔️] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [✔️] Implement the project on this Branch, committing changes regularly.
- [✔️] Push commits: git push origin `<firstName-lastName>`.
- [✔️] **RUN** `npm install` at the root to retrieve all the dependencies for the node server. You will not need to create any react apps here nor will you need to install any other dependencies. You should have all you need in this repo.
- [✔️] **LOOK** at all the files you've been given for this project. One important file to note is `server.js`. This file contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.
- [✔️] **RUN** `npm start` to get your API up and running on `http://localhost:5000`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
- [✔️] **LOOK** at your `client` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
- [✔️] **cd** into `client` and run `npm install` to retrieve the client side dependencies.
- [✔️] **RUN** `npm start` to fire up your React application.

Follow these steps for completing your project:

- [✔️] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo).
- [✔️] Add your Project Manager as a Reviewer on the Pull-request
- [✔️] PM then will count the HW as done by merging the branch back into master.

## Minimum Viable Product

The MVP of this project will be broken up between 2 stages. Follow each step.

### Stage 1 - Authentication

Build a login form to authenticate your users.

- [✔️] Construct an AXIOS request to retrieve a token from the server. You'll use this token to interact with the API

- [✔️] Save the token to localStorage

- [✔️] Build a `axiosWithAuth` module to create an instance of axios with the authentication header

- [✔️] Build a `PrivateRoute` component and use it to protect a route that renders the `BubblesPage` component

### Stage 2 - Consuming the API

- [🤭] When `BubblePages` renders, make a GET request to fetch the color data for your bubbles.
- [ ] In `ColorList.js`, complete the `saveEdit` and `deleteColor` functions to make AJAX requests to the API to edit/delete data
- [ ] Watch and enjoy as your app responds to updates in the data. Check out `Bubbles.js` to see how this is built.

### API Documentation

- **[POST]** \* to `/api/login`: returns a token to be added to the header of all other requests. Pass in the following credentials as the `body` of the request: `{ username: 'Lambda School', password: 'i<3Lambd4' }`
- **[GET]** to `/api/colors`: returns the list of colors and their hex codes.
- **[POST]** to `/api/colors`: creates a new color object. Pass the color as the `body` of the request (the second argument passed to `axios.post`).
- **[PUT]** to `/api/colors/:id`: updates the color using the `id` passed as part of the URL. Send the color object with the updated information as the `body` of the request (the second argument passed to `axios.put`).
- **[DELETE]** to `/api/colors/123`: removes the color using the `id` passed as part of the URL (123 in example).

## STRETCH PROBLEMS

**HTTP/Axios Stretch Problems**

- [ ] Build a form at the bottom of `ColorList.js` to add new colors to the colors data

**Data Visualization**

- [ ] Look at [Potion JS](https://potion.js.org/). This is the library used to display the color data
- [ ] Play around with the data visualization happening in `Bubbles.js`. Have fun with this! Try different components from the library, or see if you can add props to change the UI a bit.
