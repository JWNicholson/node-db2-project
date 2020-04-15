const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.status(200).json(cars);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: "Could not retrieve cars." });
    });
});

router.get('/:id', (req, res) => {
    db('cars')
        .where({id: req.params.id})
        .then(car => {
            res.status(200).json(car)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "Could not retrieve that car." });
        });
});

router.post('/', (req, res) => {
    db('cars')
        .insert(req.body, 'id')
        .then(ids => {
            db('cars')
                .where({id: ids[0]})
                .first()
                .then(car => {
                    res.status(200).json(car)
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({ error: "Could not retrieve that car." });
                })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "Could not add car." });
        });
});

router.put('/:id', (req, res) => {
    db('cars')
        .where({id: req.params.id})
        .update(req.body)
        .then(count => {
            db('cars')
            .where({id: req.params.id})
            .first()
            .then(car => {
                res.status(200).json(car)
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Failed to update car' })
        })
});

router.delete('/:id', (req,res) => {
    
    db('cars')
        .where({id: req.params.id})
        .del(req.params.id)
        .then(delCar => {
           res.status(200).json(delCar)
          })
          .catch(err => {
            res
              .status(500)
              .json({ message: "There was an error deleting this car." });
          });
});


module.exports = router;