import { callApiCSV } from '../middlewares/apiHelpers/callApi';
import { downloadRequest, downloadSuccess, downloadFailure } from '../actions/downloadActions';

// CSV api actions have the following content:
// { type: 'csvDownload', endpoint, filename }
// const contentType = response.headers.get('Content-Type');

export default () => next => action => {
 if (action.type !== "download") return next(action);

 const { endpoint, filename } = action;

  next(downloadRequest());

  return callApiCSV(endpoint).then(response => {
    if (!response.ok) {
      const error = `Error: ${response.statusText}`;

      next(downloadFailure(error));
      return Promise.reject(error);
    }

    next(downloadSuccess());

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
