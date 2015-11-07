import request from 'request';
import apiConstants from '../constants/apiConstants';

export function fetchJobPostings() {
  var promise = new Promise((resolve, reject) => {
    request(apiConstants.POSTINGS_INDEX_URL, function(error, response, body) {
      let postings = JSON.parse(body);
      resolve({ postings })
    }, function(err) {
      reject(err);
    });
  });

  return {
    types: ['GET_POSTINGS_REQUEST', 'GET_POSTINGS_SUCCESS', 'GET_POSTINGS_FAILURE'],
    promise: promise
  }
}

export function fetchJobDetail(id) {
  var promise = new Promise((resolve, reject) => {
    request(apiConstants.POSTINGS_INDEX_URL + "/" + id, function(error, response, body) {
      let postDetail = JSON.parse(body);
      resolve({ postDetail: postDetail })
    }, function(err) {
      reject(err);
    });
  })

  return {
    types: ["GET_POST_REQUEST", "GET_POST_SUCCESS", "GET_POST_FAILURE"],
    promise: promise
  }
}
