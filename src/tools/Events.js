class Event {
  on(evento, selector, ejecutar) {
    document.addEventListener(evento, function(e) {
      const elementos = document.querySelectorAll(selector);
      const ruta = e.composedPath();
      ruta.forEach(function(nodo) {
        elementos.forEach(function(elem) {
          if (nodo === elem) {
            ejecutar.call(elem, e);
          }
        });
      });
    }, true);
  }
}
export default Event;