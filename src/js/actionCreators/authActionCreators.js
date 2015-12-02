import request from 'request';
import apiConstants from '../constants/apiConstants';

export function login(id_token) {
  let promise = new Promise((resolve, reject) => {

    let url = apiConstants.SESSIONS_URL;
    let data = { id_token: id_token };

    request.post({ url: url,
                   form: data,
                   json: true },
                 (data, error, response, body) => {
                   resolve({ user: body })
                 }.bind(null, data),
                 function(err) {
                   reject(err);
                 });
  });

  return {
    types: ['LOGIN',
            'LOGIN_SUCCESS',
            'LOGIN_FAILURE'],
    promise: promise
  }
}

export function logout(profile) {
  return {
    type: "LOGOUT"
  }
}
