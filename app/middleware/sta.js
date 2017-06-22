module.exports = () => {
  return function* staPageOpen(next) {
    
    var record = {
        path: this.request.path,
        query: this.request.query,
        type: 'pageopen',
        cratetime: (new Date()).getTime(),
    }
    var staService = this.app.serviceClasses.sta;
    console.info(this.app.service);
   /* var sta = new staService()
    yield sta.savePageOpen(record);*/
    yield next;
  };
};
