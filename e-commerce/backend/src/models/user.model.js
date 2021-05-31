const { model, Schema } = require('mongoose');

const userSchema = Schema({
  email: String,
  password: String,
  address: String,
  role: String,
  whislist: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  cart: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
});

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};

module.exports = model('User', userSchema);
