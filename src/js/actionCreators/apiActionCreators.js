import request from 'request';
import apiConstants from '../constants/apiConstants';

export function fetchJobPostings(page, queryString) {
  let promise = new Promise((resolve, reject) => {
    let url = apiConstants.POSTINGS_INDEX_URL;
    request.get({ url: url,
                  json: true,
                  qs: { search: { page: page, q: queryString } } },
                (page, error, response, body) => {
                  let postings = body.job_postings;
                  let postings_total = body.meta.postings_total;
                  let postings_shown = body.meta.postings_shown;
                  resolve({ postings,
                            postings_total: postings_total,
                            postings_shown: postings_shown,
                            page: page })
                  }.bind(null, page),
                function(err) {
                  reject(err);
                }
               );
  });

  return {
    types: ['GET_POSTINGS_REQUEST',
            'GET_POSTINGS_SUCCESS',
            'GET_POSTINGS_FAILURE'],
    promise: promise
  }
}

export function fetchJobDetail(id) {
  let promise = new Promise((resolve, reject) => {
    let url = apiConstants.POSTINGS_INDEX_URL + "/" + id;
    request.get({ url: url,
                  json: true },
                  (error, response, body) => {
                    let postDetail = body;
                    resolve({ postDetail: postDetail })
                  }, function(err) {
                    reject(err);
                  }
               );
  });

  return {
    types: ["GET_POST_REQUEST",
            "GET_POST_SUCCESS",
            "GET_POST_FAILURE"],
    promise: promise
  }
}
