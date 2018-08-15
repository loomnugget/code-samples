export const DOWNLOAD_REQUEST = 'DOWNLOAD_REQUEST';
export const DOWNLOAD_SUCCESS = 'DOWNLOAD_SUCCESS';
export const DOWNLOAD_FAILURE = 'DOWNLOAD_FAILURE';
export const CLEAR_DOWNLOADS_ERROR_MESSAGE = 'CLEAR_DOWNLOADS_ERROR_MESSAGE';

export const clearErrorMessage = () => ({
  type: CLEAR_DOWNLOADS_ERROR_MESSAGE
});

export const downloadRequest = () => ({
  type: DOWNLOAD_REQUEST
});

export const downloadSuccess = () => ({
  type: DOWNLOAD_SUCCESS
});

export const downloadFailure = error => ({
  type: DOWNLOAD_FAILURE,
  error: error
});

export const downloadTestCSV = () => dispatch => (
  dispatch({
    type: 'download',
    endpoint: `api/users/export_csv`,
    filename: `test.csv`
  })
);

export const downloadTestPDF = () => dispatch => (
  dispatch({
    type: 'download',
    endpoint: `api/users/export_pdf`,
    filename: `test.pdf`
  })
);
