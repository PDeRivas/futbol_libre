const listaResultados = document.getElementById('lista-peliculas');
    fetch('https://api.sampleapis.com/movies/comedy')
      .then(response => response.json()) 
      .then(data => {
        data.forEach(item => {
            console.log(item);
          const li = document.createElement('li');
          const titulo = document.createElement('h3')
          titulo.textContent = item.title;
          listaResultados.appendChild(titulo);
          const portada = document.createElement('img')
          portada.src = item.posterURL
          li.appendChild(portada)
          listaResultados.appendChild(li)
        });
      })
      .catch(error => {
        console.error('Error', error);
      });