# Summary 
Full featured custom React/Redux boilerplate frontend designed for use with a Rails API that leverages ActionCable and Devise / Devise Token Auth. The goal of this project is to create a complete full stack boilerplate with as many features as possible to get people started with creating a production-ready, scalable app that's easy to use and build off of.

React Version: 16.2.0

Node Version: 4.4.7


# Features
1. Websocket integration with middleware and simple chat UI
2. API and File download middleware
3. Public and Private UI with basic page and navigation setup
4. Token authentication compatible with Rails Devise or Devise Token Auth
5. Testing with Jest/Enzyme/Sinon
6. Basic branding/styling and asset setup with Font-Awesome and free Google Fonts (and some sweet gradient buttons)
7. Login, SignUp (with recaptcha) and Forgot Password flows
8. Error handling using Error Boundaries and clearable API error notifications
9. Integration with Redux Form including UI components

# Get started
To test the samples, clone and install the backend [sample code](https://github.com/loomnugget/rails-backend) (instructions in repo)

### Get server going
npm install
npm start

### Running tests
npm test

# Middleware Usage

## API Calls
### Action Types
When an action is dispatched with a type of 'callAPI' and a unique request type, the following 3 action types are dispatched. (NOTE: REQUEST_TYPE is unique to the API action you are calling)
`REQUEST_TYPE_REQUEST_START, REQUEST_TYPE_REQUEST_SUCCESS, REQUEST_TYPE_REQUEST_FAILURE`

### Example usage
Actions that make API calls must have the following:
1. type: 'callAPI' 
2. a unique request_type that will dispatch the above actions
3. endpoint
4. method 
5. body (optional)

```
export const signUpUser = userData => dispatch => (
  dispatch({
    type: 'callAPI',
    request_type: SIGN_UP_USER,
    endpoint: 'api/users',
    method: 'POST',
    body: {
      user: userData
    }
  })
);
```

The middleware will handle the server response dispatch the following actions:
`SIGN_UP_USER_REQUEST_START, SIGN_UP_USERE_REQUEST_SUCCESS, SIGN_UP_USER_REQUEST_FAILURE`

## File Downloads
### Action Types
When you dispatch an action with a type of 'download', The middleware will handle the server response and dispatch the following 3 action types:
`DOWNLOAD_REQUEST, DOWNLOAD_SUCCESS, DOWNLOAD_FAILURE`

You can also dispatch `clearErrorMessage()` to hide the error notification. 

### Example usage
Actions that make API calls to download files from the server must have the following:
1. type: 'download' 
2. endpoint
3. filename (CSV and PDF are currently supported)

```
export const downloadTestCSV = () => dispatch => (
  dispatch({
    type: 'download',
    endpoint: 'api/export/test',
    filename: 'filename.csv'
  })
);
```

# Components
Included is a variety of pre-made custom UI for forms, buttons and notifications that reflect a cohesive customizable  branding theme.

## Buttons 

### Primary Button
The primary button is designed for use with general click events and two optional colors, primary and secondary branding to keep the styles cohesive. To use, import PrimaryButton with required props text and onClick and an optional disabled/color prop. The color defaults to the app's primary color.

```
import PrimaryButton from '../Buttons/PrimaryButton';

<PrimaryButton  
  color="secondary" // optionally give it the secondary brand color
  disabled={somethingIsLoading} // optionally disable the button if needed
  text="Button Text" // Required
  onClick={someClickEvent} // Required
/>
```


### Redux Form Save Button
To use, import SaveButton with required props text and disabled. The buttons are designed to be disabled while the form is submitting.

```
import SaveButton from '../Buttons/SaveButton';

<SaveButton 
  text="Submit Form" 
  disabled={submitting}
/>
```


### Link Button
Link buttons are for use with React Router v4 paths instead of click events. To use, pass in text and a url path as props.
```
import LinkButton from '../Buttons/LinkButton';

<LinkButton 
  path="/path" 
  text="Go To New Page" 
/>
```

## Form Components 

### Form Field
Form field component for use with Redux Form. Will display field level validation errors.

```
import FormField from '../Forms/FormField';

<Field
  name="Test"
  label="Test"
  type="text"
  component={FormField}
  validate={required}
/>
```

## Notifications

### Form Notification
TODO

### API Notification
TODO

# TODO
Note that this is designed to be full featured for immediate full stack app creation, and is currently in progress.

## Incomplete
1. redux websocket integration
2. chat UI needs some work

## Additional Features
1. Sentry error logging middleware
2. Search implementation
3. Avatar upload integration 

