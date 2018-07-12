import { saveAuthHeaders } from '../../auth';

const handleResponse = response => {
  saveAuthHeaders(response.headers);

  if (!response.ok) {
    if (response.status === 500) throw new Error("Internal Server Error.");
    if (response.status === 404) throw new Error("Not Found.");
    if (response.status === 401) throw new Error("Unauthorized");

    throw new Error(response.json());
  } else {
    return response.json(); // returns a promise
  }
};

export default handleResponse;
