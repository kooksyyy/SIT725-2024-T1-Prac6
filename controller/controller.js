let model = require('../model/model');

const createCat = (req,res) => {
    let cat = req.body;
       model.insertCat(cat, (err, result) => {
        if(err){
            res.json({statusCode: 400, message: err});
        } else{
            res.json({statusCode: 200, data: result, message: 'Successfully added'});
        }
       }) ;
}

const getAllCats= (req,res) => {
      model.getAllCats((err, result) => {
            if(err){
                res.json({statusCode: 400, message: err});
            } else{
                res.json({statusCode: 200, data: result, message: 'Successful'});
            }
        });
}

const deleteCat = (req,res) => {
    let cat = req.body;
    model.remove(cat, (error,result) => {
        if(error) {
            res.json({statusCode: 400, message: error});
        } else {
            res.json({statusCode: 200, data: result, message: 'Successfully removed'});
        }
    });
}

module.exports = {createCat , getAllCats, deleteCat}