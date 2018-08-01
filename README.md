# Summary 
Full featured custom React/Redux boilerplate frontend designed for use with a Rails API that leverages ActionCable and Devise / Devise Token Auth

# Features
1. Websocket integration with middleware and simple chat UI
2. API and File download middleware
3. Public and Private UI with basic page and navigation setup
4. Token authentication compatible with Rails Devise or Devise Token Auth
5. Testing with Jest/Enzyme
6. Basic branding/styling and asset setup with Font-Awesome and free Google Fonts (and some sweet gradient buttons)
7. Login, SignUp (with recaptcha) and Forgot Password flows
8. Error handling using Error Boundaries and clearable API error notifications

# Get started
To test the samples, clone and install the backend [sample code](https://github.com/loomnugget/rails-backend) (instructions in repo)

### Get server going
npm install
npm start

### Running tests
npm test

# Middleware Usage

## API Action Types 
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

The middleware will dispatch the following actions:
`SIGN_UP_USER_REQUEST_START, SIGN_UP_USERE_REQUEST_SUCCESS, SIGN_UP_USER_REQUEST_FAILURE`

## File Downloads
### Action Types
When an action is dispatched with a type of 'download', the following 3 action types are dispatched.
`DOWNLOAD_REQUEST, DOWNLOAD_SUCCESS, DOWNLOAD_FAILURE`

You can also dispatch `clearErrorMessage()` to hide the error notification. 

### Example usage
Actions that make API calls to download files from the server must have the following:
1. type: 'download' 
2. endpoint
3. filename

```
export const downloadTestCSV = () => dispatch => (
  dispatch({
    type: 'download',
    endpoint: 'api/export/test',
    filename: 'filename.csv' // (or pdf)
  })
);
```

# TODO
Note that this is designed to be full featured for immediate full stack app creation, and is currently in progress.

## Incomplete
1. redux websocket integration
2. chat UI needs some work

## Additional Features
1. Sentry error logging middleware
2. Search implementation
3. Avatar upload integration 

