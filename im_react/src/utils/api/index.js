import { httpGet, httpPost } from "../http";
import base from "./base";

const api = {
  getUsers() {
    return httpGet(base.defaultUrl + base.getUsers);
  },
  getUserID(params) {
    return httpPost(base.defaultUrl + base.getUserID, params);
  },
};

export default api;
