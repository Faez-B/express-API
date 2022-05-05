const express = require('express');
const app = express();

app.get('/:arg1/blabla/:arg2', (req, res) => {
	console.log(req.params);
	res.send(req.params);
})

app.listen(3000);

// Test : http GET :3000/hey/blabla/2 ==> arg1 = hey ET arg2 = 2 
// On peut avoir autant de args qu'on veut
