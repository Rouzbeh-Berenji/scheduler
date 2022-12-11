# Interview Scheduler

The Interviewer Scheduler is a single page application built with React as part of Lighthouse Lab's Web Development Bootcamp. The app allows a user to book appointments, edit and also delete their bookings. The data is served from the scheduler-api using a PostgreSQL database.

## Demo
Create New Interview Booking
![Create new interview](https://github.com/Rouzbeh-Berenji/scheduler/blob/master/docs/Create%20an%20Appointment.gif)

Edit an Interview Bookings
![Edit an interviews](https://github.com/Rouzbeh-Berenji/scheduler/blob/master/docs/Edit%20an%20Appointment.gif)

Delete an Interview Bookings
![Delete an interviews](https://github.com/Rouzbeh-Berenji/scheduler/blob/master/docs/Delete%20an%20Appointment.gif)

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Dependencies
    "@testing-library/react-hooks": "^8.0.1",
    "axios": "^0.20.0",
    "classnames": "^2.2.6",
    "normalize.css": "^8.0.1",
    "react": "^16.9.0",
    "react-dom": "^16.9.0",
    "react-scripts": "3.4.4"

## devDependencies
    "@babel/core": "^7.4.3",
    "@storybook/addon-actions": "^5.0.10",
    "@storybook/addon-backgrounds": "^5.0.10",
    "@storybook/addon-links": "^5.0.10",
    "@storybook/addons": "^5.0.10",
    "@storybook/react": "^5.0.10",
    "@testing-library/jest-dom": "^4.0.0",
    "@testing-library/react": "^8.0.9",
    "babel-loader": "^8.0.5",
    "prop-types": "^15.8.1",
    "sass": "^1.53.0",
    "react-test-renderer": "^16.14.0"

## Remember you had to install a very specific version of react-test-renderer to match the version of react and react-dom in the project. you can follow the instructions from the react-hooks-testing-library documetation 
: (https://github.com/testing-library/react-hooks-testing-library#peer-dependencies)

## API Server
you may want to clone the API Server from here : (https://github.com/Rouzbeh-Berenji/scheduler-api)


## Contact 
In the situation that you are facing problems starting up the application please contact me at berenji.ro@gmail.com