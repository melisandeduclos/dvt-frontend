let myInterval;

const startChrono = () => {
   let start = new Date().getTime();
   let now, elpased, d, h, m, s, ms, format;

   myInterval = setInterval(function() {
      now = new Date().getTime();
      elpased = now - start;
      s = Math.floor(elpased % 60000 / 1000);
      ms = Math.floor(elpased % 1000);
      format = ("0" + s).slice(-2) + "." + ("00"+ms).slice(-3);
      document.getElementById("chrono").innerHTML = format;
   },1);
}

const stopChrono = () => {
   clearInterval(myInterval);
}