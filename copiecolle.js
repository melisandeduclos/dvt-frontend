function tryGetFile(fileName){
   return new Promise(function(resolve, reject) {
       var file = tryReadFile(fileName); //Méthode asynchrone pour récupérer le contenu d'un fichier
       if(!!file){ // if (file === true)
           resolve(file);
       } else {
           reject("Fichier indisponible");
       }
   }); 
}

Promise
   .all([tryGetFile("File1.txt"), tryGetFile("File2.txt"), tryGetFile("File3.txt")])
   .then((values) => console.log(values))
   .catch((error) => console.log(error));

//Résultat: 
//["Mon fichier 1", "Mon fichier 2", "Mon fichier 3"]