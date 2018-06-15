const express = require("express");
const path = require("path");
// const PORT = process.env.PORT || 3001;
// const app = express();
const next = require('next')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// // Send every request to the React app
// // Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
// // require('antd/lib/button/style');

// app.listen(PORT, function() {
//   console.log(`🌎 ==> Server now on port ${PORT}!`);
// });
app.prepare()
  .then(() => {
    const server = express()

    server.get('/index', (req, res) => {
      return app.render(req, res, '/', req.query)
    })

    server.get('/Paystub', (req, res) => {
      return app.render(req, res, '/Paystub', req.query)
    })

    // server.get('/posts/:id', (req, res) => {
    //   return app.render(req, res, '/posts', { id: req.params.id })
    // })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
