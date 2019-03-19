'use strict';
var express = require('express');
var router = express.Router();
var dishService=require('../services/dishService');
var auth = require('./auth');


router.get('/',auth.isAuthenticated, function(req, res, next) {
    dishService.getDishes(req.query,function(err,dishes){
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(dishes)
        }
    });
});

router.get('/:id', auth.isAuthenticated,function(req, res, next) {
    dishService.getDish(req.params.id,function(err,dish){
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(dish)
        }
    });
});


router.post('/', auth.isAuthenticated,function(req, res, next) {
    dishService.updateDish(req.body,function(err,dish){
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(dish)
        }
    });
});

router.put('/:id', auth.isAuthenticated,function(req, res, next) {
    req.body.id=req.params.id;
    dishService.updateDish(req.body,function(err,dish){
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(dish)
        }
    });
});


router.delete('/:id',auth.isAuthenticated, function(req, res, next) {
    dishService.removeDish(req.params.id,function(err,dish){
        if(err){
            res.status(500).send(err)
        }else{
            res.status(204).send(dish)
        }
    });
});
module.exports = router;
