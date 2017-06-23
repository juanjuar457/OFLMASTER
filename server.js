const bodyParser = require('body-parser');
const express = require('express');
const app = express();
// const morgan = require("morgan");
const {PORT, DATABASE_URL} = require('./config');
const routes = require('./routes');
const mongoose = require("mongoose");
const path = require('path');

// app.use(morgan('common'));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
app.use(express.static('build'));
// app.use("/css/index.css", express.static(path.join(__dirname + 'build' + 'css\\index.css'))); // for serving static files in express
// app.use("/js/index.js", express.static(path.join(__dirname + 'build' + 'js\\index.js')));

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>ENDPOINTS <<<<<<<<<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
app.get("/", function(req, res) { res.sendFile(path.resolve(__dirname, 'build\\index.html')); });
app.get('/materials', routes.getMaterials); 

//>>>>>>>>>NOT IN USE IN NODE CAPSTONE - FROM CLEINT SIDE 4/22<<<<<<<<<<<<<<<<<<<<
app.get('/material/:id', routes.getMaterial);

app.post('/savematerial', routes.postMaterial);

app.put('/togglebackorder', routes.toggleBackorder);

app.delete('/deletematerial/:id', routes.deleteMaterial);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>>>RUN/CLOSE SERVER <<<<<<<<<<<<<<<<
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 

let server;

// this function connects to our database, then starts the server
function runServer(databaseUrl=DATABASE_URL, port=PORT) {
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Order For Later is listening on port ${port}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}

//closeServer returns promise, we use for testing later...
function closeServer() {
  return mongoose.disconnect().then(() => {
     return new Promise((resolve, reject) => {
       console.log('Closing server');
       server.close(err => {
           if (err) {
               return reject(err);
           }
           resolve();
       });
     });
  });
}

// if server.js is called directly (aka, with `node server.js`), this block
// runs. but we also export the runServer command so other code (for instance, test code) can start the server as needed.
if (require.main === module) {
  runServer().catch(err => console.error(err));
};

module.exports = {runServer, app, closeServer};
