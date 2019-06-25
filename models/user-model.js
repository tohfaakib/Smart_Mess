var db = require('./db');

module.exports = {
	getById: function(id, callback){
		var sql = "select * from users where id="+id;
		db.execute(sql, function(result){
			callback(result);
		});
	},

	getByEmail: function(user, callback){
		var sql = "select * from users where email = '"+user.email+"' ";
		db.execute(sql, function(result){
			callback(result);
		});
	},

	getByEmailPass: function(user, callback){
		var sql = "SELECT * FROM users WHERE email = '"+user.email+"' AND password='"+user.password+"'";
		db.execute(sql, function(result){
			callback(result);
		});
	},

	getAll: function(callback){

		var sql = "select * from users";
		db.execute(sql, function(results){
			callback(results);
		});
	},
	insert: function(user, callback){
		sql = "INSERT INTO users (first_name, last_name, email, password, role) VALUES ('"+user.first_name+"', '"+user.last_name+"', '"+user.email+"', '"+user.password+"', '"+user.role+"')";
		db.execute(sql, function(status){
			callback(status)
		});
	},
	updateById: function(user, callback){
		var sql = "update users set first_name='"+user.first_name+"', last_name='"+user.last_name+"', password='"+user.password+"', role='"+user.role+"' where id="+user.id;
		db.execute(sql, function(status){
			callback(status)
		});
	},

	updateByEmail: function(user, callback){
		var sql = "update users set first_name='"+user.first_name+"', last_name='"+user.last_name+"', password='"+user.password+"', role='"+user.role+"' where email="+user.email;
		db.execute(sql, function(status){
			callback(status)
		});
	},

	deleteById: function(id, callback){
		var sql = "delete from users where id="+id;
		db.execute(sql, function(status){
			callback(status)
		});
	},

	deleteByEmail: function(email, callback){
		var sql = "delete from users where email="+email;
		db.execute(sql, function(status){
			callback(status)
		});
	},

}
