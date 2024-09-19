const mongoose = require ('mongoose')

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: [true, "Coloque o nome do usuário"],
    
  },
  email: {
    type: String,
    required: [true, "Adicione o email do usuário"],
    unique: [true, "Email já cadastrado"],
  },
  password: {
    type: String,
    required: [true, "Coloque a senha do usuário"]
  }
  },
  {
  timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);