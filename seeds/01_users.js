exports.seed = function(knex, Promise) {
  	return knex('users').del()
	    .then(function () {
	      return knex('users').insert([
	        {
				first_name: 'Kate',
				last_name: 'Schaefer',
				username: 'kschaefer123',
				email: 'kschaefer123@gmail.com',
				password: 'password'
			},
			{
				first_name: 'James',
				last_name: 'Liang',
				username: 'jliang123',
				email: 'jliang123@gmail.com',
				password: 'password'
			},
			{
				first_name: 'Grant',
				last_name: 'Fogle',
				username: 'gfogle123',
				email: 'gfogle123@gmail.com',
				password: 'password'
			},
			{
				first_name: 'Justin',
				last_name: 'Williams',
				username: 'jwilliams123',
				email: 'jwilliams123@gmail.com',
				password: 'password'
			}
	    ]);
	});
};
