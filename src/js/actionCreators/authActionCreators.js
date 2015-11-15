import request from 'request';
import apiConstants from '../constants/apiConstants';

export function login(token_id) {
  var promise = new Promise((resolve, reject) => {
    let url = apiConstants.SESSIONS_URL;
    let data = { token_id: token_id };
    request.post({ url: url, form: data, json: true }, (data, error, response, body) => {
      resolve({ user: body })
    }.bind(null, data), function(err) {
    reject(err);
  });
})
  return {
    types: ['LOGIN', 'LOGIN_SUCCESS', 'LOGIN_FAILURE'],
    promise: promise
  }
}

export function logout(profile) {
  return {
    type: "LOGOUT"
  }
}
