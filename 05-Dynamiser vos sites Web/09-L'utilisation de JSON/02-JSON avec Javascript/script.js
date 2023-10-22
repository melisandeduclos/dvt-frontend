try {
   const json = '{"stadium:{"id":18,"label":"Stade de France","fields":[{"id":2,"label":"Terrain de foot","area":200},{"id":5,"label":"Terrain de rugby","area":null}]}}';
 
   const data = JSON.parse(json);
 
   console.log(data.stadium.id);
 } catch(error) {
   console.log(error);
 }