## Getting started

### In the client directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### In server directory

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## About

In this project, I developed the front-end part of the application for monitoring and creating courses. The project includes authorization using JWT token, and role based user interface.

![Login Screen](https://i.imgur.com/5s52M1x.png)

Forms for login and register has validation that matches requirements on server to prevent requests that already has invalid data. 
Also, UI has validation for server response, which informs the user whether his request was confirmed or no.


![Courses Screen](https://i.imgur.com/7t1Ep1P.png)

Main screen of application contains courses with brief information. UI allows user to search courses through title.

![Course Screen](https://i.imgur.com/wTc642c.png)

Every course has button that leads to its page. This page has full information about this course and navigation so user can return to main page.

### Role based interface

This application has role based interface. So regular users without admin role, can only view courses.

![Admin Login](https://i.imgur.com/sThdODh.png)

By providing admin credentials user obtains capabilities to create, update or delete courses. 

![Admin Main Screen](https://i.imgur.com/MNGul4Y.png)

There is few changes added to admin view, such like additional buttons on courses list, also one new button to add single course.
After clicking add new course, application navigates user to course form.

![Create Course Screen](https://i.imgur.com/3LKBXdL.png)

Form for creating course has validation for every field. Also, it has abilities to create new author, so user can add or remove it for new course.
