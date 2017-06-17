module.exports = app => {
  const mongoose = app.mongoose;
  const albumSchema = new mongoose.Schema({
    username: { type: String  },
    albums: { type: Array  }
  });
 
  return mongoose.model('Albums', albumSchema);
}