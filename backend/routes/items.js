var fs = require('fs');
var path = require('path');
var express = require('express');
var router = express.Router();
var _ = require('lodash');
var logger = require('../lib/logger');
var log = logger();

var items = require('../init_data.json').data;
var curId = _.size(items);

/* GET items listing. */
router.get('/', function(req, res) {
    res.json(_.toArray(items));
});

/* Create a new item */
router.post('/', function(req, res) {
    var item = req.body;
    curId += 1;
    item.id = curId;
    items[item.id] = item;
    log.info('Created item', item);

    // Write the updated items to the JSON file
    fs.writeFile(path.join(__dirname, '../init_data.json'), JSON.stringify({ data: items }, null, 2), (err) => {
        if (err) {
            log.error('Error writing to JSON file', err);
            return res.status(500).json({ error: 'Failed to save item' });
        }
        res.json(item);
    });
});

/* Get a specific item by id */
router.get('/:id', function(req, res, next) {
    var item = items[req.params.id];
    if (!item) {
        return next();
    }
    res.json(item);
});

/* Delete a item by id */
router.delete('/:id', function(req, res) {
    var item = items[req.params.id];
    delete items[req.params.id];
    log.info('Deleted item', item);

    // Write the updated items to the JSON file
    fs.writeFile(path.join(__dirname, '../init_data.json'), JSON.stringify({ data: items }, null, 2), (err) => {
        if (err) {
            log.error('Error writing to JSON file', err);
            return res.status(500).json({ error: 'Failed to delete item' });
        }
        res.status(204).json(item);
    });
});

/* Update a item by id */
router.put('/:id', function(req, res, next) {
    var item = req.body;
    if (item.id != req.params.id) {
        return next(new Error('ID parameter does not match body'));
    }
    items[item.id] = item;
    log.info('Updating item', item);
    fs.writeFile(path.join(__dirname, '../init_data.json'), JSON.stringify({ data: items }, null, 2), (err) => {
        if (err) {
            log.error('Error writing to JSON file', err);
            return res.status(500).json({ error: 'Failed to update item' });
        }
        res.json(item);
    });
});


module.exports = router;
