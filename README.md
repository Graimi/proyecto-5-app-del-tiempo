# App del tiempo

## PROYECTO 5: App del tiempo - EN PROCESO
## Descripción
Este proyecto de React te permitirá poner a prueba lo que sabes de React Router y tendrás que investigar (con un poco de nuestra ayuda) como utilizar la localización de un usuario para conectar con la API del tiempo de su zona para cargar las previsiones a través del uso de la API de Open Weather en https://openweathermap.org/api.
## <a href="">- ENLACE DE VISUALIZACIÓN </a>

<br>

## Requerimentos
<ul>
<li> [] CRITERIOS GENERALES</li>
[] Tu objetivo será crear una aplicación que, cuando cargue en el cliente, obtenga la geolocación del usuario guardado su `latitud` y `longitud` en un **State**. Cuando ambas tengan valor y el estado cambie, se lanzará un Effect que pedirá a la API de Open Weather el tiempo actual tal con el endpoint que se indica en la siguiente documentación: https://openweathermap.org/current

```jsx
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
```

> En la documentación de la API tienes datos sobre lo que devuelve, presétalos de una forma bonita y vistosa en una página que, a ser posible, no utilice scroll y todo esté en el viewport presentado.

[] Presenta el tiempo con una imagen adecuada si está soleado, nublado, llueve… Esto puedes hacerlo con un icono que obtengas de alguna fuente de internet, o usando el icono que nos proporciona Open Weather. En la respuesta anterior, tendrás un campo `icon` para los principales datos del tiempo, úsalo para ver un icono con esta URL:

```jsx
const iconUrl = `http://openweathermap.org/img/w/${iconcode}.png`
```

> Aquí tienes una referencia de los iconos disponibles https://openweathermap.org/weather-conditions <br>

[] Aparte de esta información, tendrás que añadir una ruta aparte en React Router que nos permitirá buscar el tiempo por un set de ciudades que definirás previamente. Por ejemplo, define un array de objetos con nombre de ciudad, latitud, longitud.. y crea un select que presente todas las opciones para al menos cinco ciudades.

> Una ves hagas eso, usa el dato de dicha ciudad para presentar el tiempo en ese momento. <br>

[] ¿Pensabas que eso era todo? Ahora extenderás el contenido de tu aplicación para añadir dos rutas más. Tendrán un comportamiento casi similar al que ya has hecho (una para tu localización actual y otra para buscar ciudades), pero esta vez utilizarás otro endpoint de la API que permite traer el tiempo a 5 días vista: https://openweathermap.org/forecast5

```
https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
```

> En esta respuesta tendrás el tiempo a cinco días vista en intervalos de tres horas, te dejamos via libre para que investigues y descubras como trabajar con la respuesta💡¡Pero debes presentar las previsiones para los cinco días en las dos nuevas vistas!

> Te recomendamos que cuando hagas una petición, copies la respuesta que te da en un objeto en tus componentes de React y uses dicho objeto en lugar de hacer más peticiones a la API mientras desarrollas. Esta técnica se llama mockear datos y es útil para ahorrar tiempo y recursos.

[] Como pista, para obtener la geoposición de un usuario puedes invocar esta función (pruébala primero en la consola del navegador y activa los permisos de geolocalicación), tienes documentación aquí https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API:

```jsx
navigator.geolocation.getCurrentPosition((position) => {
    console.log('Posición actual');
    console.log(position); // Muestra datos sobre la geoposición del usuario
})
```


<li> [] CRITERIOS DE ACEPTACIÓN </li>
[]  Cuando abra la aplicación, veré el tiempo actual en el lugar en el que me encuentro. Esto cargará la información de Open Weather API. <br>
[]  Tendré un link en algún punto de la vista que me permita acceder a una nueva ruta. En esta ruta podré ver el tiempo actual en al menos cinco ciudades distintas a mi elección. <br>
[]  Tendré un link que me permita visitar una ruta que muestre la previsión del tiempo a cinco días vista en mi posición actual. <br>
[]  De la misma forma, habrá una última ruta que me permita ver la previsión del tiempo a cinco días vista en una de las ciudades que seleccione. <br>
[]  La información del tiempo se presentará en grados Celsius. <br>
[]  Veré un icono del tiempo para cada estado que haya (soleado, lluvioso…). <br>
[]  Veré un indicador de carga (loader) mientras la respuesta de la API está cargando. <br>
[]  Si no doy los permisos de geolocación en mi navegador, veré un mensaje en pantalla indicádome que debo activarlos para poder utilizar la aplicación. <br>

</ul>
<br>

## Pasos
<ol>
<li> [] HTML </li>
[] Metadatos <br>
[] Código redactado en REACT <br>

<li> [] CSS </li>
[] General <br>
[] Componentes <br>
[] Pages <br>
[] root limpio <br>
[] Propiedades de acuerdo al root <br>
[] Medias queries <br>

<li> [] REACT </li>
[] General <br>
[] Componentes <br>
[] Pages <br>
[] React Router <br>
[] Investigar hooks <br>
[] Aplicar un setRef al nombre de búsqueda <br>
[] Ver si aplicar useMemo o reactMemo al nombre de la ciudad cuando este no cambia <br>

<li> [] Componentes finalizados y comentados </li>
[] Card <br>
[] Footer <br>
[] Main <br>
[] Navbar <br>
[] Title <br>
[] <br>

<li> [] Pages finalizadas y comentadas </li>
[] Yesterday <br>
[] Current <br>
[] Forecast <br>
[] ¿Other cities? <br>

<li> [] Diseño </li>
[] Iconos estados <br>
[] Background estados <br>
[] Ver en https://openweathermap.org/weather-conditions los códigos de los estados para elegir los iconos y background <br>
[] Hay que almacenar un estado con el estado del día (lluvioso, soleado…) para añadir el icono propio, crear un array con además de este icono una foto para el fondo de la página <br>
[] Ver si añadir algún mapa o no https://openweathermap.org/api/weathermaps <br>

<li> [] General </li>
[] Ver si usar api call 3.0 o la básica <br>
[] En la previsión a 5 días ver si la api te da opción de seleccionar otro día o solo hace forecast <br>
[] Las cinco ciudades que mencionan, ¿por qué hay que añadirlas? no es mejor búsqueda libre? <br>
[] Carpetas organizadas <br>
[] Componentes separados <br>
[] Código comentado <br>
[] Data comentado y repasado <br>
[] Repasar app, main e index <br>
[] README final <br>
</ol>