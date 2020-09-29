import axios from 'axios';

const BASE_URI = `${process.env.REACT_APP_API_CLIENT_BASE_URI}`;
const API_KEY = `${process.env.REACT_APP_API_CLIENT_KEY}`;
const MAX_RESULTS = 3;

const client = axios.create({
  baseURL: BASE_URI,
  json: true,
});

class APIClient {
  constructor() {
    console.log('CONSTRUCTOR API CLIENT');
  }

  getOverview() {
    return this.perform(
      'get',
      `/search`,
      {
        part: 'snippet',
        regoion: 'MX',
        maxResults: MAX_RESULTS,
        key: API_KEY,
        type: 'video',
        q: 'wizeline',
      },
      {}
    );
  }

  getSearch(text) {
    return this.perform(
      'get',
      `/search`,
      {
        part: 'snippet',
        maxResults: MAX_RESULTS,
        key: API_KEY,
        type: 'video',
        q: text,
      },
      {}
    );
  }

  getSingleVideo(id) {
    return this.perform(
      'get',
      `/videos`,
      {
        part: 'snippet',
        id,
        key: API_KEY,
      },
      {}
    );
  }

  getRelatedVideos(id) {
    return this.perform(
      'get',
      `/search`,
      {
        part: 'snippet',
        type: 'video',
        relatedToVideoId: id,
        key: API_KEY,
      },
      {}
    );
  }

  async perform(method, resource, params, data) {
    console.log('Making a request');
    console.log(this);
    const headers = {
      // Authorization: `Bearer ${API_KEY}`,
    };
    return client({
      method,
      url: resource,
      params,
      data,
      timeout: 600000,
      headers,
    }).then((resp) => {
      return resp.data ? resp.data : [];
    });
  }
}

export default APIClient;
