const customer = require("../model/lead-model");

//---------------------------performing create option and checking if the data already present or not
const addDetails = async (req, res, next) => {
    console.log(req);
    const { fName, lName, mobile, address, pinCode, state, city, product, date, time} = req.body;  
    let data;
        data = new customer({
            fName,
            lName,
            mobile,
            address,
            pinCode,
            state,
            city,
            product,
            date,
            time,
        });
        data = await data.save();  
        console.log(data); 
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