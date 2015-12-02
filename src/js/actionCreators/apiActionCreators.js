import request from 'request';
import apiConstants from '../constants/apiConstants';

export function fetchNewJobPostings(page, queryString, sources) {
  let promise = new Promise((resolve, reject) => {
    let url = apiConstants.POSTINGS_INDEX_URL;

    request.get({ url: url,
                  json: true,
                  qs: { all: { page: page,
                               search: { q: queryString,
                                         sources: JSON.stringify(sources) }
                             }
                      }
                },
                (page, error, response, body) => {
                  let postings = body.job_postings;
                  let postingsTotal = body.meta.postings_total;
                  let postingsShown = body.meta.postings_shown;
                  let totalPages = body.meta.total_pages;
                  resolve({ postings,
                            postingsTotal: postingsTotal,
                            postingsShown: postingsShown,
                            page: page,
                            totalPages: totalPages })
                  }.bind(null, page),
                function(err) {
                  reject(err);
                }
               );
  });

  return {
    types: ['GET_POSTINGS_REQUEST',
            'GET_NEW_POSTINGS_SUCCESS',
            'GET_POSTINGS_FAILURE'],
    promise: promise
  }
}

export function fetchJobPostings(page, queryString, sources) {
  let promise = new Promise((resolve, reject) => {
    let url = apiConstants.POSTINGS_INDEX_URL;

    request.get({ url: url,
                  json: true,
                  qs: { all: { page: page,
                               search: { q: queryString,
                                         sources: JSON.stringify(sources) }
                             }
                      }
                },
                (page, error, response, body) => {
                  let postings = body.job_postings;
                  let postingsTotal = body.meta.postings_total;
                  let postingsShown = body.meta.postings_shown;
                  let totalPages = body.meta.total_pages;
                  resolve({ postings,
                            postingsTotal: postingsTotal,
                            postingsShown: postingsShown,
                            page: page,
                            totalPages: totalPages })
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
