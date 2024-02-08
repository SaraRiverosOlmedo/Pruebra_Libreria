# Pruebra_Libreria

Es una WebApp que tiene como funcion mostrarnos en detalle información relevante de libros, como por ejemplo el autor y donde fue realizado entre otros.

![](C:\Users\srive\prueba_tecnica\Pruebra_Libreria\prueba_libreria\public\booklist.png)



# Pasos para la ejecucion 

1. Instalar Visual Studio Code
2. Instalar node.js/npm
3. Dirígete  a Github especificamene a esta url https://github.com/SaraRiverosOlmedo/Pruebra_Libreria
4. Desde Visual Studio Code abrir una nueva venta y dirigirte a "Clone Git Repository" gracias a esto se podrá realizar la clonación del proyecto utilizando la Url que se indica en el punto anterior.
5. Una vez clonado el proyecto se deberá instalar las dependencias abriendo el terminal que se encuentra en la barra de tareas superior de la pantalla, una vez abierto el terminal ejecutar el siguiente comando *npm install* (las dependencias utilizadas para este proyecto son: HeadlessUI, TailwindCss, React.js, React-Table y react-router-dom. Para el testo: Jest, testing library y fetch-mock)
6. Cuando todo esté ok proceder a arrancar el proyecto utilizando *npm start*
7. Para ejecutar los test, utilizar *npm test* 

La elección de caracteristicas especificas pata esté proyecto, decidí utilizar create-react-app ya que al ser una Single page app es lo mejor para páginas web pequeñas que requieren rapidez de carga.
Dentro de mi proyecto utilizando react fui añadiendo herramientas de desarrollo tales como react-table que consiste en ser una biblioteca para crear tablas de forma sencilla y flexible ; Tailwindcss framework de diseño CSS de utilidad de baja capa para construir interfaces de usuario personalizadas; React.DOM para la manipulación del DOM .También integré herramientas de prueba como lo son JEST con el que desarrollé pruebas unitarias en mis componentes.
En relación a la interfaz de usuario utilicé react-router-dom para el enrutamiento y navegación de mi Webapp y cabe ademas señalar que es util para proyectos que tenga escalabilidad.

La principal mejora que realizaria seria hacer un test end to end, para ver la usabilidad de mi proyecto y si tiene fallas en los paso que deberia dar el usuario al momento de utilizar la Webapp
Otra mejora importante seria utilizar de manera optima la herramienta de Storybook, ya que no pude desarrollar las stories como deseaba.
A nivel de Diseño integrar mas reponsividad en cada vista.

Si puediera hacer algo diferente seria utilizar de mejor manera las herramientas de prueba que tenia disponible asi como tambien realizar de mejor manera el consumo de la Api para que no se viera expuesta dentro del repositorio

