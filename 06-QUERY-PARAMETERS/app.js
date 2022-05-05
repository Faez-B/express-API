const express = require('express');
const app = express();

app.get('/', (req, res) => {
	console.log(req.query);
	res.send(req.query);
})

app.listen(3000);

// Test : 
// soit
// http://localhost:3000/?lg=Fr&number=2
// soit
//http GET :3000/ lg==FR number==2