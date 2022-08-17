import axios from "axios";

export async function handle(method, path, formField, setter) {
  if (method === "POST") {
    const response = await axios.post(path, formField);
    setter(response.data);
  } else if (method === "PUT") {
    const response = await axios.put(path, formField);
    setter(response.data);
  } else if (method === "DELETE") {
    const response = await axios.delete(path);
    setter(response.data);
  } else if (method === "GET") {
    const response = await axios.get(path);
    setter(response.data);
  } 
}
