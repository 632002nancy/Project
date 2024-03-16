const customer = require("../model/lead-model");

//---------------------------performing create option and checking if the data already present or not
const addDetails = async (req, res, next) => {
    console.log(req);
    const { fisrtName, lastNumber, mobileNo, address, pinCode, state, city, product, preferredDate, timeSlot} = req.body;  
    let data;
        data = new customer({
            fisrtName,
            lastNumber,
            mobileNo,
            address,
            pinCode,
            state,
            city,
            product,
            preferredDate,
            timeSlot,
        });
        data = await data.save();   
   return res.status(200).json({ data });
}

// reading the data from the database 
const showDetails=async(req,res,next)=>{
    let data;
    data=await customer.find();
    res.status(200).json({data});
}


exports.addDetails = addDetails;
exports.showDetails = showDetails;