//Get all transactions
//GET /api/v1/transactions
// public

exports.getTransactions = (req,res,next) =>{
    res.send('GET transactions');
}

//Add transactions
//POST /api/v1/transactions
// public

exports.addTransactions = (req,res,next) =>{
    res.send('POST transactions');
}
//Delete transactions
//DELETE /api/v1/transactions
// public

exports.deleteTransactions = (req,res,next) =>{
    res.send('DELETE transactions');
}