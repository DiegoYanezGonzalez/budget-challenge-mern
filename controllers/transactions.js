const Transactions = require('../models/Transactions');

//Get all transactions
//GET /api/v1/transactions
// public

exports.getTransactions = async (req,res,next) =>{
    try {
        const transactions = await Transactions.find();

        return res.status(200).json({
            success:true,
            count:transactions.length,
            data:transactions
        });
    } catch (err) {
        return res.status(500).json({
            success:false,
            error:'Server Error'
        });
    }
}

//Add transactions
//POST /api/v1/transactions
// public

exports.addTransactions = async(req,res,next) =>{

    try {
        const {text,amount} = req.body;

        const transaction = await Transactions.create(req.body);

        return res.status(201).json({
            success:true,
            data:transaction
    });
    } catch (err) {
        console.log(err)
    }

    
}
//Delete transactions
//DELETE /api/v1/transactions
// public

exports.deleteTransactions = async(req,res,next) =>{
    res.send('DELETE transactions');
}