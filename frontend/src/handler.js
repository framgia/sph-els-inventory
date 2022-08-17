import axios from "axios";

export async function handle(method, path, formField, setter) {
  switch (method) {
    case "POST": {
      const response = await axios.post(path, formField);
      setter(response.data);
      break;
    }
    case "PUT": {
      const response = await axios.put(path, formField);
      setter(response.data);
      break;
    }
    case "DELETE": {
      const response = await axios.delete(path);
      setter(response.data);
      break;
    }
    case "GET": {
      const response = await axios.get(path);
      setter(response.data);
      break;
    }
    default:
      break;
  }
}
