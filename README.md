# Intrucciones de uso
# User's intructions

## Estructura basica de HTML
## Basic HTML structure

```html
 <div id="nav" class = nav>
        <ul>
          <li class="selected">Incio</li>
          <li>Nosotros</li>
          <li >Servicio</li>
          <li>Contacto</li>
        </ul>
  </div>
```
> ⚠ No es necesario tener la misma estructura, es libre. Lo importante es que el nav contenga un id para ser seleccionado y que se identifique los  elementos van a ser los que se pintaran!

> ⚠  It's not important to have the same structure but the nav must have an id to be selected.The elements must also have to be identified to apply the colors.

## Todas las secciones tiene que tener un id
## all sections must have an id.

``` html
<div id="inicio" class="   content">
        <h2>Incio</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora temporibus rem dolor quisquam sequi quae in
            fugit alias maxime incidunt, officia a, ratione dolorem consequuntur mollitia laborum? Ipsam, ab
            consectetur quos eos tenetur error blanditiis pariatur culpa vel. Officiis consequatur delectus, hic
            accusamus, sunt quos suscipit eius dolores dolorem iure tempore beatae, illum quod dignissimos corrupti
            excepturi fuga ullam voluptates. Laborum modi dolores, nulla libero soluta numquam. Commodi, ut? Ex
            perspiciatis minus minima exercitationem quae nihil et iusto. Quam ipsa in esse aut magnam odit ipsum
            eaque! In nobis, tenetur quos ipsum, modi, obcaecati dicta quo voluptate est quam quod?</p>
    </div>
    <div id="nosotros" class="caja">
        <h2>Nosotros</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora temporibus rem dolor quisquam sequi quae in
            fugit alias maxime incidunt, officia a, ratione dolorem consequuntur mollitia laborum? Ipsam, ab
            consectetur quos eos tenetur error blanditiis pariatur culpa vel. Officiis consequatur delectus, hic
            accusamus, sunt quos suscipit eius dolores dolorem iure tempore beatae, illum quod dignissimos corrupti
            excepturi fuga ullam voluptates. Laborum modi dolores, nulla libero soluta numquam. Commodi, ut? Ex
            perspiciatis minus minima exercitationem quae nihil et iusto. Quam ipsa in esse aut magnam odit ipsum
            eaque! In nobis, tenetur quos ipsum, modi, obcaecati dicta quo voluptate est quam quod?</p>
    </div>
    <div id="servicio" class="caja">
        <h2>servicio</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora temporibus rem dolor quisquam sequi quae in
            fugit alias maxime incidunt, officia a, ratione dolorem consequuntur mollitia laborum? Ipsam, ab
            consectetur quos eos tenetur error blanditiis pariatur culpa vel. Officiis consequatur delectus, hic
            accusamus, sunt quos suscipit eius dolores dolorem iure tempore beatae, illum quod dignissimos corrupti
            excepturi fuga ullam voluptates. Laborum modi dolores, nulla libero soluta numquam. Commodi, ut? Ex
            perspiciatis minus minima exercitationem quae nihil et iusto. Quam ipsa in esse aut magnam odit ipsum
            eaque! In nobis, tenetur quos ipsum, modi, obcaecati dicta quo voluptate est quam quod?</p>
    </div>
    <div id="contacto" class="caja">
        <h2>Contacto</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora temporibus rem dolor quisquam sequi quae in
            fugit alias maxime incidunt, officia a, ratione dolorem consequuntur mollitia laborum? Ipsam, ab
            consectetur quos eos tenetur error blanditiis pariatur culpa vel. Officiis consequatur delectus, hic
            accusamus, sunt quos suscipit eius dolores dolorem iure tempore beatae, illum quod dignissimos corrupti
            excepturi fuga ullam voluptates. Laborum modi dolores, nulla libero soluta numquam. Commodi, ut? Ex
            perspiciatis minus minima exercitationem quae nihil et iusto. Quam ipsa in esse aut magnam odit ipsum
            eaque! In nobis, tenetur quos ipsum, modi, obcaecati dicta quo voluptate est quam quod?</p>
    </div>

```
## Incluir el snippet y configurar
## add the snippet and configure it.


``` js
 var menuScroll =  new MenuScroll(document.getElementById('nav'), [ 
        document.getElementById('inicio'),
        document.getElementById('nosotros'),
        document.getElementById('servicio'),
        document.getElementById('contacto')
  ], {
     color : "blue"
  });
 
```
* Parametros / parameters*

| nav           | elementos a detectar en scroll  | configuracion  |
| ------------- |:-------------:| -----:|
| seleccionar o pasa la referencia al nav      | un arreglo que contenga todos los elementos a detectar en el dom(secciones) | un objeto que permite cambiar el color del los elementos del nav |


## Agregar un listener y llamar al metodo manejadorScroll
## add the listener and call to the manejadorScroll method

``` js
  
  document.addEventListener('scroll', function(){
    console.log(menuScroll.manejadorScroll())
  })


```

# Congrats / felicidades 🎉🎉🎉🎉🎉🎉





