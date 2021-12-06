const express = require('express');
const port = process.env.PORT || 8000;
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to CI CD Devops Pipeline!!');
});

app.get('/mul/:a/:b', (req, res) => {
    const number1 = req.params.a
    const number2 = req.params.b
    const result = number1 * number2
    res.send('multiplication : ' + result);
});

app.get('/div/:a/:b', (req, res) => {
    const number1 = req.params.a
    const number2 = req.params.b
    if(number2==0){
        res.send('division : ' + 'invalid output');
    }
    else{
        const result = number1 / number2
        res.send('division : ' + result);
    }
    
    
});

app.listen(port, () => { console.log('App Is Up And Running!'); });
module.exports = app