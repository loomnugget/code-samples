import { callApiCSV } from '../middlewares/apiHelpers/callApi';
import { downloadCSVRequest, downloadCSVSuccess, downloadCSVFailure } from '../actions/csvActions';

// CSV api actions have the following content:
// { type: 'csvDownload', endpoint, filename }

export default () => next => action => {
 if (action.type !== "csvDownload") return next(action);

 const { endpoint, filename } = action;

  next(downloadCSVRequest());

  return callApiCSV(endpoint).then(response => {
    if (!response.ok) {
      const error = response.statusText;
      next(downloadCSVFailure(error));
      return Promise.reject(error);
    }

    next(downloadCSVSuccess());

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

// const contentType = response.headers.get('Content-Type');
