
const handleResponse = response => {
  // if response fails, throw error
  if (!response.ok) {
    if (response.status === 500) throw new Error("Error 500: Internal Server Error.");
    if (response.status === 404) throw new Error("Error 404: Not Found.");
    throw new Error(response.json());
  } else {
    // if response is ok, either handle CSV or json response
    const contentType = response.headers.get('Content-Type');
    if (contentType === "application/octet-stream") {
      return response.blob().then(blob => {
        const URL = window.URL;
        const downloadUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');

        a.href = downloadUrl;
        // should format the name of the file on the backend mayhaps
        a.download = "download.csv";
        document.body.appendChild(a);
        a.click();

        setTimeout(() => URL.revokeObjectURL(downloadUrl), 100);
      });
    } else {
      return response.json(); // returns a promise
    }
  }
};

export default handleResponse;
