export function fetchJobPostings() {
  request('http://localhost:3000/api/job_postings', function(error, response, body) {
    let postings = JSON.parse(body);
    ApiActions.recieveAll(postings);
  })
}
