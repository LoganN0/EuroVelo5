fetch('http://85.169.220.243:5006/api/trajets/')
  .then(response => response.json())
  .then(data => {
    const avisData = data.data; // Accéder au tableau de données dans la clé "data"

    // ttt des données, on parcours le tableau avec la fonction map

    const avisElements = avisData.map(trajet => {
      const id = trajet.id;
      const type = trajet.attributes.type;
      const name = trajet.attributes.nomVille;
      const habitude = trajet.attributes.habitude;
      const description = trajet.attributes.description;
      const image = trajet.attributes.image;
      
 

      // utilisation des variables pour construire l'html

      return `

      
      
      <div id="photoSecondSide"><img src="images/cardGPS/1.1-Roscoff-3_EV4-Emmanuel-Berthier.webp" alt="" class="imgCardGps"></div>
      <div class="contenuSecondSlid">
          <div id="jeunContenuSecondSlide">${type}</div>
          <div id="petitTitreContenuSecondSlide">${habitude}</div>
          <div id="titreContenuSecondSlide">${name}</div>
          <div id="paraghraphSecondSlide">${description}</div>
      </div>    
      
      
        `;
    });

    const avisContainer = document.getElementById('secondSide');
    avisContainer.innerHTML = avisElements.join('');
  })
  .catch(error => {
    console.error(error);
  });