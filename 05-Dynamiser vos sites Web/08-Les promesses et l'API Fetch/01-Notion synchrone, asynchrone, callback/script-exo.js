const mySandwich = (param1, param2, callback) => {
   console.log(param1, param2);
   callback();
};

const endSandwich = () => {console.log('Fini de manger !')};

mySandwich('jambon', 'fromage', endSandwich);