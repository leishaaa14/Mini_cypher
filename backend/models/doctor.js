const mongoose = require('mongoose');
console.log("helo")
const doctorSchema = new mongoose.Schema({
<<<<<<< Updated upstream
  doctorId: { type: Number, required: true }, 
  doctorAddress: { type: String, required: true },
  doctorName: { type: String, required: true },
  specialization: { type: String, required: true },
  licenseNumber: { type: String, required: true }, 
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
=======
  doctorName: { type: String, required: true },
  specialization: { type: String, required: true },
  hash: { type: String, required: true }, // Ethereum address
  licenseNumber : {type:Number},
});

module.exports= mongoose.model('newdoctor', doctorSchema);

>>>>>>> Stashed changes
