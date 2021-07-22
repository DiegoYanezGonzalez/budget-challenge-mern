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
            error:'Server Error get'
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
        if(err.name==='ValidationError'){
            const messages = Object.values(err.errors).map(val =>val.message);

            return res.status(400).json({
                success:false,
                error:messages
            });
        }else{
            return res.status(500).json({
                success:false,
                error:'Server Error add'
            });
        }
    }

    
}
//Delete transactions
//DELETE /api/v1/transactions
// public

exports.deleteTransactions = async(req,res,next) =>{
    try {
        const transaction = await Transactions.findById(req.params.id);

        if(!transaction){
            return res.status(404).json({
                success:false,
                error:'No transaction found'
            });
        }

        await transaction.remove();

        return res.status(200).json({
            success:true,
            date:{}
        });

    } catch (err) {
        return res.status(500).json({
            success:false,
            error:'Server Error delete'
        });
    }
}