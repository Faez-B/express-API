const express = require('express');
const app = express();

app.post('/', (req, res) => {
	console.log(req.body);
	res.send(req.body);
})

app.listen(3000);

// Tester : http --form localhost:3000 hello=World valeur=2