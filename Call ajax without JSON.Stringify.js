$.ajax({
	url: "api/controllers/user/login.php",
	dataType: 'json',
	data: '{ "email": "'+email_login+'", "password"  : "'+senha_login+'"}',
	type: "POST",
	complete: function (response) {
	}
});