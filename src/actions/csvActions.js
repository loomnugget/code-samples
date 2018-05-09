export const DOWNLOAD_CSV_REQUEST = 'DOWNLOAD_CSV_REQUEST';
export const DOWNLOAD_CSV_SUCCESS = 'DOWNLOAD_CSV_SUCCESS';
export const DOWNLOAD_CSV_FAILURE = 'DOWNLOAD_CSV_FAILURE';

export const downloadCSVRequest = () => ({
  type: DOWNLOAD_CSV_REQUEST
});

export const downloadCSVSuccess = () => ({
  type: DOWNLOAD_CSV_SUCCESS
});

export const downloadCSVFailure = error => ({
  type: DOWNLOAD_CSV_FAILURE,
  error: error
});

export const downloadTestCSV = () => ({
  type: 'csvDownload',
  endpoint: `reporting/export_clients`,
  filename: `clients.csv`
});
