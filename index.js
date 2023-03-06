/** @format */

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const CarModel = require('./models/CarModel');
const UserModel = require('./models/UserModel');
const router = express.Router();

const URI =
  "mongodb+srv://admin:12345@cluster0.zu4mueo.mongodb.net/?retryWrites=true&w=majority";

  app.use(express.json())

async function run() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.set("strictQuery", true);
    app.listen(3001, () => {
      console.log(`Server is working now on port ${3001}`);
    });
  } catch (e) {
    console.log(e.message);
  }
}

run();

app.get("/getCars", async (req, res) => {
  const cursor = await CarModel.find({}).lean();
  res.json({ cursor: cursor });

});

app.post("/addCar", async (req, res) => {
	const body = req.body;
  let Name = body.Name;
  let Year = body.Year;
  let TypeCar = body.TypeCar;
  let TypeMotor = body.TypeMotor;
  let Price =  body.Price;
  let Img = body.Img;
console.log(body);


  const car = new CarModel({
    Name: Name,
    Year: Year,
    TypeCar: TypeCar,
	 TypeMotor: TypeMotor,
	 Price: Price,
    Img: Img,
  });
  await car.save();
});

app.get("/adduser", async (req, res) => {
  console.log("user added");

  let Login = "Grand Theft Auto: Vice City";
  let Password = "Simple text example";
  let Root = "true";

  const user = new UserModel({
    Login: Login,
    Password: Password,
    Root: Root,
  });
  await user.save();
});

app.get("/login", async (req, res) => {
  const cursor = await GameModel.find({}).lean();
  if (cursor == true) {
    alert("Welcome " + cursor.Login);
  }
});
