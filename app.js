//jshint esversion:6
const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useNewUrlParser: true, useUnifiedTopology: true});
const fruitSchema=new mongoose.Schema({
    name: String,
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});
const Fruit=mongoose.model("Fruit",fruitSchema);
const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid fruit"
});
//fruit.save();
const personSchema=new mongoose.Schema({
    name: String,
    age: Number
});
const Person=mongoose.model("Person",personSchema);
const person=new Person({
    name: "Sakshi",
    age: 19
});
person.save();
Fruit.find(function(err, fruits){
    if(err){
        ConvolverNode.log(err);
    } else{
        console.log(fruits);
    }
});