let model = require('../model/model');

const createCat = (req, res) => {
    let cat = req.body;
    console.log(cat)
    model.insertCat(cat, (err, result) => {
        if (err) {
            res.json({ statusCode: 400, message: err });
        } else {
            res.json({ statusCode: 200, data: result, message: 'Cat Successfully Added.' });
        }
    });
}
const getAllCats = (req, res) => {
    model.getAllCats((err, result) => {
        if (err) {
            res.json({ statusCode: 400, message: err });
        } else {
            res.json({ statusCode: 200, data: result, message: 'Successfully Added.' });
        }
    });
}

module.exports = { createCat, getAllCats };