/******************* 
  1.- instancia la clase menuScroll
  2.- pasale informacion que es :
     1 un selector de tu navegacion o menu
     2.- una array de todas las secciones que quieres detectar
     3.-un config.

    3.-crear un lsitener y ejecuta la funcion manejadorScroll

    listo!
******************/
function MenuScroll(elementoNav, objetoNodos, config){
    this.config = config || { color: "black"}
    this.nav = elementoNav;
    this.objetoNodos = objetoNodos;
  }
  
  MenuScroll.prototype.manejadorScroll = function(event){
      var navPos = this.nav.offsetTop + 90 + parseInt(window.scrollY), selected;
      var opciones = document.querySelectorAll('a');
     
        this.objetoNodos.forEach((nodo, indice, arreglo) => {
            if(navPos >  nodo.offsetTop) {
                selected = indice;
                return;
            }
        });
      
        opciones.forEach((el, index) => {
            if(index == selected) el.classList.add('selected');
            else el.classList.remove('selected');
        })
    }
   
  var menuScroll =  new MenuScroll(document.getElementById('nav'), [ 
        document.getElementById('inicio'),
        document.getElementById('nosotros'),
        document.getElementById('servicio'),
        document.getElementById('contacto')
  ], {
     color : "blue"
  });
  
  
  document.addEventListener('scroll', function(){
    console.log(menuScroll.manejadorScroll())
  })

