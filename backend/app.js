const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

/* Colocar toda a parte estática no frontend */
app.use(express.static("../frontend/html/"));
app.use(express.static("../frontend/css/"));



function metamesk() {
    window.ethereum.request({ method: 'eth_accounts' })
    .then(console.log(accounts[0]))
    .catch((err) => {
      console.error(err);
    });
}


app.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
  });