const rp = require('request-promise');
const cheerio = require('cheerio');

/* request-promise accepts an object as input, and returns a promise.
The options object needs to do two things:

    Pass in the url we want to scrape.
    Tell Cheerio to load the returned HTML so that we can use it.*/ 

const options = {
    uri: `https://crosshero.com/dashboard/classes`,
    headers: {
        'Cookie' : '_crosshero_session=6d3bf16ca3712dd6a42efb7feed61a4e' 
    },
    transform: function (body) {
      return cheerio.load(body);
    }
  };


/*We pass in our options object to request-promise, 
then wait to see if our request succeeds or fails*/

  rp(options)
  .then(($) => {
    var todoEltexto = $('.today-wod-components').text(); 
    var n = todoEltexto.indexOf("Warmup");
    var todoEltexto2 = todoEltexto.substr(n);

    console.log(todoEltexto2);
  })
  .catch((err) => {
    console.log(err);
  });

  