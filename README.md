# Summary 
React/Redux boilerplate frontend designed for use with a Rails api that leverages ActionCable and Devise / Devise Token Auth

# Features
1. Action Cable middleware
2. API middleware
3. File download middleware
4. Authentication compatible with Rails Devise Token Auth
5. Testing with Jest/Enzyme

# Middleware Usage

## API Action Types 
### Action Types
` `${request_type}_REQUEST_START`, `${request_type}_REQUEST_SUCCESS`, `${request_type}_REQUEST_FAILURE` `

### Example usage
#### Actions that make api calls must have a type of "callAPI"
`export const signUpUser = userData => dispatch => (
  dispatch({
    type: 'callAPI',
    request_type: SIGN_UP_USER,
    endpoint: 'api/users',
    method: 'POST',
    body: {
      user: userData
    }
  })
);`


## File Downloads
### Action Types
` CLEAR_DOWNLOADS_ERROR_MESSAGE, DOWNLOAD_REQUEST, DOWNLOAD_SUCCESS, DOWNLOAD_FAILURE`

### Example usage
#### Actions that make api calls must have a type of "download"
`export const downloadTestCSV = () => dispatch => (
  dispatch({
    type: 'download',
    endpoint: 'api/users/export_csv',
    filename: 'filename.csv'
  })
);`
