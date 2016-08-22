let connection = require('../config/database')

class Message {

	static dbug(content){
		console.log(content)
	}
	static create(content, callback){
		//connection.query('INSERT INTO messages SET content = ?, created_at = ?', [content, new Date()], (err, result) => {
		//	if (err) throw err
		//	callback(result)
	//	})
	}

}

module.exports = Message