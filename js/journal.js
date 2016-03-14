exports.Journal = function(title, body) {
  this.title = title;
  this.body = body;
};

exports.Journal.prototype.countWords = function(body) {
  return body.split(/\s+/).length;
}

exports.Journal.prototype.getTodayDate = function() {
  return moment().format("MM/DD/YY");
}

exports.Journal.prototype.entry = function() {
  return "<h2>" + this.title + "</h2>" + "<hr>" + this.body;
};
