for (let element of document.querySelectorAll('*')) {
   element.addEventListener("click", (event) => {
     event.stopPropagation();
     alert(` Capturing the element: ${element.tagName}`)
   }, false);
}

