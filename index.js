function receivesAFunction(callback) {
    callback();

function myFunction() { 
    'callback function called'; } 
     console.log('spy');
     
     return myFunction
}  
receivesAFunction(myFunction);

function returnsANamedFunction() {
    function namedFunction() {}
  console.log('to not deeply equal');
  return namedFunction
  
}

function returnsAnAnonymousFunction() {
    return function() {};
}   