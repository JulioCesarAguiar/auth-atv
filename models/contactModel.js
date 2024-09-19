const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "User",
  },
  name:{
    type: String,
    require: [true, "Por favor adicione o nome do contato"]
  },
  email:{
    type: String,
    require: [true, "Por favor adicione o email do contato"]
  },
  phone:{
    type: String,
    require: [true, "Por favor adicione o numero de telefone do contato"]
  },
},
{
  timestamps: true,
}
);

module.exports = mongoose.model("Contact", contactSchema);