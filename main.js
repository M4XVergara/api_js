const $contenedor = document.getElementById("contenedor__cursos");
fragmento = document.createDocumentFragment();
url = "https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories";

function obtenerTarjetas() {
  fetch(url)
    .then((Response) => {
      return Response.ok ? Response.json()
        : Promise.reject(Response);
    })
    .then((json) => {
      console.log(json);
      json.communityCategories.forEach((element) => {
        let div = document.createElement("div");
        div.classList.add("tarjeta");
        div.innerHTML = `
            <div class= "tarjeta__imagen">
             <img class="tarjeta__imagen-background" src="${element.background ||
          "https://storage.googleapis.com/bucket-larnu/media/business/123/images/1JFXCO18.png"
          }" alt="${element.name}">
             <img class = "tarjeta__imagen-icono" src="${element.icon}"
             alt="${element.name
          }"> 
            </div>
             <div class = "tarjeta__parrafo">
              <h3 class = "tarjeta__titulo">${element.name}</h3>
              <p class = "tarjeta__texto">Total Quizzes: ${element.totalQuizzes}</p>
              <p class = "tarjeta__texto">User: ${element.users}</p>
              <a href = "https://larnu.app/" target="_blank" class = "btn
              btn-primary"> Go to Larnu </a>
             </div>
             `;
        fragmento.appendChild(div)
      });
      $contenedor.appendChild(fragmento);
    }).catch((error) => {
      let message=error.statusText ||
      'Ocurrio un Error'
      $contenedor.innerHTML=`Error: ${error.
      status}: ${message}`
      console.log(error)
    })
}
obtenerTarjetas();