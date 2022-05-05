const express = require('express');
const app = express();

function modifyRequestObject(req, res, next) {
	req.nouveau = { nouveauTruc: "je n'existais pas avant"};
	next();
}

function modifyResponseObject(req, res, next) {
	res.locals.blabla = "je n'existais pas avant";
	next();
}

function blockDeleteRequest(req, res,next){;
	if (req.method === "DELETE") {
		throw new Error('NO DELETE PLEASE');
	}
	else next();
}

function blockPutRequest(req, res,next){
	if (req.method === "PUT") {
		res.status(400).send('NO DELETE PLEASE'); // va interrompre la chaine de middleware.
	}
	else {next()}
}

app.use(modifyRequestObject);
app.use(modifyResponseObject);
app.use(blockDeleteRequest);
app.use(blockPutRequest);

app.get('/', (req, res) => {
	console.log(req.nouveau)
	console.log(res.locals)
	res.send('Hello World');
})

app.put('/', (req, res) => {
	console.log("I AM IN"); // jamais exécuté.
	res.send('Hello');
})

app.listen(3000);
