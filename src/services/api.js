import axios from 'axios';
import {BASE_URL} from '../constants/Urls';

export const getReq = async (des_url, tokens) => {
  const url = BASE_URL + des_url;
  console.log(url);
  let headers = {};
  if (tokens) {
    headers = {Authorization: `Bearer ${token}`};
  }
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: headers,
      })
      .then(function (response) {
        resolve({
          statusCode: response.status,
          data: response.data,
        });
      })
      .catch(function (error) {
        console.log('server error', error);
      })
      .finally(function () {
        // always executed
      });
  });
};
export const getReq2 = async data => {
  return new Promise((resolve, reject) => {
    axios
      .get(`http://44.232.149.87:8006/main/chat/?question=${data}`, {
        headers: {},
      })
      .then(function (response) {
        resolve({
          statusCode: response.status,
          data: response.data,
        });
      })
      .catch(function (error) {
        console.log('server error', error);
      })
      .finally(function () {
        // always executed
      });
  });
};
