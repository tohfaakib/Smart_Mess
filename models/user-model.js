var db = require('./db');

module.exports = {
	getById: function(id, callback){
		var sql = "select * from users where id = ?";
		db.execute(sql, [id],function(result){
			callback(result);
		});
	},

	getByEmail: function(user, callback){
		var sql = "select * from users where email = ?";
		db.execute(sql, [user.email],function(result){
			callback(result);
		});
	},

	getByPhone: function(user, callback){
		var sql = "select * from users where phone = ?";
		db.execute(sql, [user.phone],function(result){
			callback(result);
		});
	},

	getByEmailPass: function(user, callback){
		var sql = "SELECT * FROM users WHERE email = ? AND password = ?";
		db.execute(sql, [user.email, user.password], function(result){
			callback(result);
		});
	},

	getAll: function(callback){

		var sql = "select * from users";
		db.execute(sql, [],function(results){
			callback(results);
		});
	},
	insert: function(user, callback){
		sql = "INSERT INTO users (first_name, last_name, email, phone, password, social_link, role) VALUES (?, ?, ?, ?, ?, ?, ?)";
		db.execute(sql, [user.first_name, user.last_name, user.email, user.phone, user.password, user.social_link, user.role],function(status){
			callback(status)
		});
	},
	updateById: function(user, callback){
		var sql = "update users set first_name=?, last_name=?, phone=?, social_link=?,role=? where id=?";
		db.execute(sql, [user.first_name, user.last_name, user.phone, user.social_link,user.role, user.id],function(status){
			callback(status)
		});
	},

	updateByEmail: function(user, callback){
		var sql = "update users set first_name=?, last_name=?, phone=?,password=?, social_link=?,role=? where email=?";
		db.execute(sql, [user.first_name, user.last_name, user.phone, user.password, user.social_link, user.role, user.email], function(status){
			callback(status)
		});
	},

	deleteById: function(id, callback){
		var sql = "delete from users where id=?";
		db.execute(sql, [id],function(status){
			callback(status)
		});
	},

	deleteByEmail: function(email, callback){
		var sql = "delete from users where email=?";
		db.execute(sql, [email], function(status){
			callback(status)
		});
	},

};
