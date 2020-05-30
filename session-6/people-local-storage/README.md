# People Local Storage Exercise

1. Define a state 'people' by using useState
1. Fetch people data from 'https://api.npoint.io/bed2825be2fe6f570581'
   Don't forget to tell React that you are performing a side effect.
1. Ensure that the fetch is only called once (with the initial render of the compoennt)
1. Show the results to the user by iterating over all items
1. save the loaded data 'people' in the localStorage
   Remember that localStorage can only save values as Sting.
   e.g.: Setting the Number 3 into localStorage is actually stored as string "3"
   e.g.: Setting the Boolean true is actually stored as string "true"
   So, if you want to store an object, you have to stringify it first.
1. Read the localStorage to get the people
   Remind again, that values in the localStorage are saved as string.
   So, you have to parse the values, to get a people object again.
   and use the data for initializing your useState(....) for the people
   if no data is available for 'people' in the localStorage, when use an empty array
   for initialization.
1. Once you made one fetch and people are stored in the localStorage,
   block the request of 'https://api.npoint.io/bed2825be2fe6f570581' and
   do a brwser refresh. The people should be still rendered into the view.
   To block the request, open the tab 'Network' in the Developer Tools
   and under 'XHR' you block the request by right clicking on it and choosing
   'block request'
Here you can find an image, which shows, how to block requests:
https://i.stack.imgur.com/Bz56O.png

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
