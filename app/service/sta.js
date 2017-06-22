
module.exports = app => {
  class sta extends app.Service {
    * savePageOpen(record) {
      let urlmaps = yield this.ctx.model.Stas.create(record);
    }
  }
  return sta;
};
