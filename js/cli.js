var Journal = require('./journal.js').Journal;
var prompt = require('prompt');
prompt.start();

prompt.get('title', 'body', function(err, result) {
  var result = Journal(result.entry());
    console.log(result);
});
