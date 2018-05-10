
const handleResponse = response => {
  if (!response.ok) {
    if (response.status === 500) throw new Error("Internal Server Error.");
    if (response.status === 404) throw new Error("Not Found.");

    throw new Error(response.json());
  } else {
    return response.json(); // returns a promise
  }
};

export default handleResponse;
