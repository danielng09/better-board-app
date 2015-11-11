import request from 'request';
import apiConstants from '../constants/apiConstants';

export function fetchJobPostings(page) {
  var promise = new Promise((resolve, reject) => {
    let url = apiConstants.POSTINGS_INDEX_URL;
    request.get({url: url, qs: {page: page}, json: true}, (page, error, response, body) => {
      let postings = body.job_postings;
      let total_pages = body.meta.total_pages;
      resolve({ postings, page: page, total_pages: total_pages })
    }.bind(null, page), function(err) {
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
    let url = apiConstants.POSTINGS_INDEX_URL + "/" + id;
    request.get({url: url, json: true }, function(error, response, body) {
      let postDetail = body;
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
