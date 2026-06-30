const mongoose = require("mongoose");

const homestaySchema = new mongoose.Schema(
{
  name:{
    type:String,
    required:true
  },
  location:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  rating:{
    type:Number,
    default:4.5
  },
  reviews:{
    type:Number,
    default:0
  },
  image:{
    type:String,
    required:true
  },
  amenities:{
    type:[String],
    default:[]
  },
  description:{
    type:String,
    required:true
  }
},
{
  timestamps:true
}
);

module.exports = mongoose.model("Homestay", homestaySchema);