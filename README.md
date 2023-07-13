# Proyecto-ReactJS E-commerce 
 ESPINOSA MIRANDA KATYA


Este proyecto tiene como propósito poner en practica lo aprendido en el curso de ReactJS de coderhouse. 
El concepto del proyecto es un e-commerce de venta de vinilos en donde se utilizan diferentes conceptos relacionados con ReactJS, como:
context, react-router-dom, useEffect, etc. 

## Librerias utilizadas:
- React Bootstrap para maquetar la página
- React toastify para mostrar notificaciones al usuario
- React Icons para uso de iconos

  
## Base de datos
- FireBase

## Navegación de la página. 
La página cuenta con una barra de navegación para dirigirte al inicio, sección de categoriás,sobre nosotros, búsqueda y el carrito de compras. De igual forma, al dar click la imagen del banner, la pagina redirige al inicio. 
Dentro de la pagina de inicio aparacen las tarjetas con los productos disponibles, al darle click a estas tarjetas se redirige a la página de detalle, está función también está disponible en las tarjetas que aparecen dentro de las páginas de categorias. 
El usuario podrá añadir productos al carrito desde cualquier lugar de la página, puede ver una vista previa de lo que le carrito contiene al darle click al icono y de ahí mismo puede eliminar productos del carrito. Al darle click en ver carrito, se redirige a la página de compra en donde puede ver el producto, la cantidad, el precio y el precio total de la compra. Al darle click en realizar compra, aparece un formulario que debe llenarse para poder generar el ID de la compra el cual se genéra a través de una colección de firebase. 
