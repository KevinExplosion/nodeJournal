exports.Journal = function(title, body) {
  this.title = title;
  this.body = body;
}

exports.Journal.prototype.entry = function() {
  return "<h2>" + this.title + "</h2>" + "<hr>" + this.body;
}
