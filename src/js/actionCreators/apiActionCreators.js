import request from 'request';
import apiConstants from '../constants/apiConstants';

export function fetchJobPostings() {
  var promise = new Promise((resolve, reject) => {
    request(apiConstants.POSTINGS_INDEX_URL, function(error, response, body) {
      let postings = JSON.parse(body);
      resolve({ postings: postings })
    }, function(err) {
      reject(err);
    });
  });

  return {
    type: ['GET_POSTINGS_REQUEST', 'GET_POSTINGS_SUCCESS', 'GET_POSTINGS_FAILURE'],
    promise: promise
  }
}
