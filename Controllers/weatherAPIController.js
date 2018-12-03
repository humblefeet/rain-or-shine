// router.get('/parks', function(req, res) {

//   request(
//       rootURL + 'parks&api_key=' + process.env.NPS_API_KEY,
//       function(err, response, body) {
//           res.json(JSON.parse(body))
//       }
//   );
// });

// router.get('/parks/:code', function(req, res) {

//   request(
//       rootURL + 'parks' + `?stateCode=${req.params.code}` + '&fields=images' + '&api_key=' + process.env.NPS_API_KEY,
//       function(err, response, body) {
//           // console.log(JSON.parse(body))
//           res.json(JSON.parse(body))
//       }
//   );
// });
