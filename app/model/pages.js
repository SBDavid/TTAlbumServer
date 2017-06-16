module.exports = app => {
  const mongoose = app.mongoose;
  const pagesSchema = new mongoose.Schema({
    id: { type: String  },
    repository: { type: Object  }
  });
 
  return mongoose.model('Pages', pagesSchema);
}