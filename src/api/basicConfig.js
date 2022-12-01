import axios from 'axios';

export const basicConfig = {
  apiBase: 'https://legacy--api.herokuapp.com/api/v1',

  async createRequest(endpoint, ...rest) {
    const options = this.createOptions(...rest);
    const request = axios(this.apiBase + endpoint, options);
    return request.catch((error) => {
      if (error?.response?.status === 401) {
        return 'error with token';
      }
      return request;
    });
  },
  createOptions(method, headers, data, params, isBlob, isFormData = false) {
    const options = {};
    if (headers) options.headers = headers;
    if (data && !isFormData) options.data = JSON.stringify(data);
    if (data && isFormData) options.data = data;
    if (params) options.params = params;
    options.method = method;
    if (isBlob) options.responseType = 'blob';
    return options;
  },
};
