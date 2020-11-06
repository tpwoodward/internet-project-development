## Intro to Project

Please run `npm install` in the terminal before running `npm start` as node modules were removed to allow me to upload to Blackboard with a smaller file size.

I have included social media share buttons in the footer, which share the main screen of the site.

The file structure is based on Create React App, with a folder containing my SASS files in the src folder.

The components folder under src includes JavaScript files for all the main segments that are viewed in the various routes, with separate files for the three largest modals, the footer and the navigation menus.

The primary menu uses anchor tags for content displayed on the main screen, so a secondary menu is shown on routes other than `/` because the anchor tags do not exist on those screens.

The background image is in the src folder, segregated from the photos in the public folder, so that it can be referenced in _common.scss.

Build functionality is a feature of Create React App, which chunks minified JavaScript and CSS code over multiple files.

The information below was provided by Create React App:

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.