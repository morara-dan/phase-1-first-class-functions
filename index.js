function one () {
  console.log('one');
}

function receivesAFunction (callback) {
    callback();
}

two(one);


function returnsANamedFunction () {
    return function two (){
        console.log('two');
    }
}

function returnsAnAnonymousFunction (){
    return () => {
        console.log("anonimous")
    }
}