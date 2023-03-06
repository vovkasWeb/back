const { Schema, model } = require("mongoose");

const CarScheme = new Schema({
    Name: { type: String, required: true },
    Year: { type: String, required: true },
	 TypeCar: { type: String, required: true },
	 TypeMotor: { type: String, required: true },
    Price: { type: String, required: true },
    Img: { type: String, required: true }

});

module.exports = model('Car', CarScheme);