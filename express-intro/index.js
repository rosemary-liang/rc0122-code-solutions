const express = require('express');
const app = express();
// The app returned by express() is in fact a JavaScript Function,
// designed to be passed to Node’s HTTP servers as a callback to handle requests.
// This makes it easy to provide both HTTP and HTTPS versions of your app with the
// same code base, as the app does not inherit from these (it is simply a callback)
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
