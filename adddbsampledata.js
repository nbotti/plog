d = require('nedb')
db = new d('data/entries.db')
db.loadDatabase()

var doc = {
action: "ate breakfast",
date: "3/5/17",
modifiers: {
	what: ["eggs", "bacon", "bread", "v8"]
}
}

db.insert(doc, function(err, newdoc) {

});
