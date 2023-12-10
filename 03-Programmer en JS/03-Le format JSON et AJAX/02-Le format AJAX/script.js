function loadDoc(){
   const xhttp = new XMLHttpRequest();
   xhttp.onload = function () {
      document.getElementById("demo").innerHTML = this.responseText;
   };
   xhttp.open("GET", "demo.txt");
   xhttp.send();
}

const xhr = new XMLHttpRequest();
xhr.onload = function() {
   const xmlDoc = this.responseXML;
   const x = xmlDoc.getElementsByTagName("NAME");
   let txt = "";
   for (let i= 0;i < x.length;i++){
      txt = txt + x[i].childNodes[0].nodeValue + "<br>";
   }
   document.getElementById("car").innerHTML = txt;
}
xhr.open("GET", "car.xml");
xhr.send();

//**** */
//getAllResponseHeaders()
const xhar = new XMLHttpRequest();
xhar.onload = function () {
   document.getElementById ("allresponse").innerHTML = this.getAllResponseHeaders();
};
xhar.open("GET", "demo.txt");
xhar.send();