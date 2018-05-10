
const handleResponse = response => {
  // if response fails, throw error
  if (!response.ok) {
    if (response.status === 500) throw new Error("Error 500: Internal Server Error.");
    if (response.status === 404) throw new Error("Error 404: Not Found.");
    throw new Error(response.json());
  } else {
    return response.json(); // returns a promise
  }
};

export default handleResponse;
