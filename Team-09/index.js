const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();
  app.use(express.static(path.join(__dirname, 'public')));
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  app.get('/math', getMath);
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
  //.get('/', (req, res) => res.render('pages/index'))

  function getMath(req, res) {
  const operation = request.query.operation;
	const number1 = Number(request.query.operand1);
	const number2 = Number(request.query.operand2);

  doMath(response, operation, number1, number2);
  }

  function doMath(response, operation, num1, num2){
    operation = operation.toLowerCase();

    var results = 0;

    if (operation == "add") {
      results = num1 + num2;
    } else if (operation == "subtract") {
      results = num1 - num2;		
    } else if (operation == "multiply") {
      results = num1 * num2;
    } else if (operation == "divide") {
      results = num1 / num2;
    } else {

    }
    const params = {operation: operation, num1: num1, num2: num2, results: results};

    response.render('pages/result', params);
  }


