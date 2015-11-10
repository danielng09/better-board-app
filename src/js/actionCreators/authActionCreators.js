import request from 'request';

export function login(profile) {
  var promise = new Promise((resolve, reject) => {
    let url = "http://localhost:3000/sessions";
    let data = { pid: profile.getId(),
                 name: profile.getName(),
                 imageUrl: profile.getImageUrl(),
                 email: profile.getEmail() }
    request.post({ url: url, form: { user: data }, json: true }, (data, error, response, body) => {
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
