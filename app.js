require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database');

app.route('/game_tbl/')
  .get(function(req, res, next) {
    connection.query(
      "SELECT * FROM `game_tbl`",
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  });

app.get('/status', (req, res) => res.send('Working!'));

