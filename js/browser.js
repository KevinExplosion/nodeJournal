function Journal(title, entry) {
  this.title = title;
  this.body = body;
}

Journal.prototype.entry = function() {
  return this.title + "<hr>" + this.body; 
}
