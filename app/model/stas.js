'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const stasSchema = new mongoose.Schema({
    path: { type: String },
    query: { type: Object },
    type: { type: Object },
    ctime: { type: Number }
  }, {versionKey:false});

  return mongoose.model('Stas', stasSchema);
};
