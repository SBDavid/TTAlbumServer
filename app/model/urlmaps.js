module.exports = app => {
  const mongoose = app.mongoose;
  const urlmapSchema = new mongoose.Schema({
    url: { type: String  },
    pageId: { type: String  },
    onlineDate: { type: String  },
    offlineDate: { type: String  }
  });
 
  return mongoose.model('Urlmaps', urlmapSchema);
}