'use strict';

const express = require('express');
const superagent = require('superagent');

const API = process.env.API_URL;

const router = express.Router();


//  Routes
router.get('/', homePage);
router.get('/list', listPage);
router.delete('/list', deleteItem);

function homePage(req, res){
  res.render('site', {page: './pages/index', title: 'Welcome!'});
}

function listPage(req, res){
  superagent.get(`${API}/api/v1/categories`)
    .then(data => {
      res.render('site', {page: './pages/list', title: 'Listings', items: data.body})
        .catch(err => {
          res.render('site', {page: './pages/error', title: 'Error', error: err});
        });
    });
}

function deleteItem(req, res){
  superagent.delete(`${API}/categories/${request.body._id}`)
    .then( () => {
      res.redirect('/list');
    })
    .catch(err => {
      res.render('site', {page: './pages/error', title: 'Error', error: err});
    });
}

module.exports = router;