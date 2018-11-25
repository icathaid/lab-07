'use strict';

const express = require('express');
const superagent = require('superagent');

const API = process.env.API_URL;

const router = express.Router();



//  Routes
router.get('/', homePage);
router.get('/list', listPage);
router.post('/list', createCategory);
router.delete('/list', deleteCategory);
router.put('/list', editCategory);

function homePage(req, res){
  res.render('site', {page: './pages/index', title: 'Welcome!'});
}

function listPage(req, res){
  superagent.get(`${API}/api/v1/categories/`)
    .then(data => {
      res.render('site', {page: './pages/list', categories: req.body, title: 'Listings', items: data.body});
    })
    .catch(err => {
      res.render('site', {page: './pages/error', title: 'Error', error: err});
    });
}

function deleteCategory(req, res){
  superagent.delete(`${API}/categories/${req.body._id}`)
    .then( () => {
      res.redirect('/list');
    })
    .catch(err => {
      res.render('site', {page: './pages/error', title: 'Error', error: err});
    });
}

function createCategory(req, res){
  superagent.post(`${API}/api/v1/categories/`)
    .send(req.body)
    .then( data => {
      res.redirect('/list');
    })
    .catch(err => {
      res.render('site', {page: './pages/error', title: 'Error', error: err});
    });
}

function editCategory(req, res){
  superagent.put(`${API}/api/v1/categories/${req.body._id}`)
    .send(req.body)
    .then( data => {
      res.redirect('/list');
    })
    .catch( err => {
      res.render('site', {page: './pages/error', title: 'Error', error: err});
    });
}




router.put('/api/v1/notes/:id', (request,response,next) => {
  notes.put(request.params.id, request.body)
    .then( result => sendJSON(result, response) )
    .catch( next );
});



















module.exports = router;


