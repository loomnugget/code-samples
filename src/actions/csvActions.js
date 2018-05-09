import { callApiCSV } from '../middlewares/apiHelpers/callApi';
// import { stringify } from 'query-string';

export const DOWNLOAD_CSV_REQUEST = 'DOWNLOAD_CSV_REQUEST';
export const DOWNLOAD_CSV_SUCCESS = 'DOWNLOAD_CSV_SUCCESS';
export const DOWNLOAD_CSV_FAILURE = 'DOWNLOAD_CSV_FAILURE';

export const downloadCSVRequest = {
  type: DOWNLOAD_CSV_REQUEST
};

export const downloadCSVSuccess = () => ({
  type: DOWNLOAD_CSV_SUCCESS
});

export const downloadCSVFailure = error => ({
  type: DOWNLOAD_CSV_FAILURE,
  error: error
});


export const downloadTestCSV =  {
  type: DOWNLOAD_CSV_REQUEST
};

// export const downloadTestCSV = (dispatch) => {
//   const endpoint = `reporting/export_clients`;
//   const filename = `clients.csv`;
//   return handleCSVresponse(dispatch, filename, endpoint);
// };

const handleCSVresponse = (dispatch, filename, endpoint) => {
  return callApiCSV(endpoint).then(response => {
    if (!response.ok) {
      return Promise.reject(response.statusText);
    }
    dispatch(downloadCSVRequest);
    return response.blob().then(blob => {
      const URL = window.URL;
      const downloadUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');

      a.href = downloadUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();

      setTimeout(() => URL.revokeObjectURL(downloadUrl), 100);
    });
  });
};
