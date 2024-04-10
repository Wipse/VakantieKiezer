
function getInfo(){ 

  document.querySelector(".landinfocontainer").style.display = "block";

  const selectedContinent = document.getElementById('continentSelector').value;
  
  const fillCountryInfo = (land) => {
    document.getElementById("landvlag").src = land.flags?.png;
    document.getElementById("hoofdstadInfo").innerText = land.capital?.[0];
    document.getElementById("landInfo").innerText = land.translations?.nld?.common;
    document.getElementById("taalInfo").innerText = Object.values(land.languages)[0];
    document.getElementById("inwonerInfo").innerText = (land.population / 1000000).toFixed(2);
    document.getElementById("valutaInfo").innerText = Object.values(land.currencies)[0]?.name;
    document.getElementById("continentInfo").innerText = land.continents?.[0];
  };


 // ALLE CONTINENTEN //

 if (selectedContinent === "all"){ 
  let randomIndex = Math.floor(Math.random() * 250);
  let land = [];

  fetch('https://restcountries.com/v3.1/all')
.then(response => {
  if (!response.ok) {
    throw new Error('Netwerkfout');
  }
  return response.json(); 
})
.then(data => {
      land = data[randomIndex]; 
      fillCountryInfo(land);
})
.catch(error => {
  console.error('Fout bij het ophalen van gegevens:', error);
});
}


  // EUROPA //

  if (selectedContinent === "eu"){ 
    let randomIndex = Math.floor(Math.random() * 53);
    let land = [];

    fetch('https://restcountries.com/v3.1/region/europe')
  .then(response => {
    if (!response.ok) {
      throw new Error('Netwerkfout');
    }
    return response.json(); 
  })
  .then(data => {
        land = data[randomIndex]; 
        fillCountryInfo(land);
  })
  .catch(error => {
    console.error('Fout bij het ophalen van gegevens:', error);
  });
 }


 // AMERIKA // 
 
 if (selectedContinent === "am"){

  let randomIndex = Math.floor(Math.random() * 56);

  fetch('https://restcountries.com/v3.1/region/america')
  .then(response => {
    if (!response.ok) {
      throw new Error('Netwerkfout');
    }
    return response.json(); 
  })
  .then(data => {
        console.log(data);
        const land = data[randomIndex]; 
        fillCountryInfo(land);
  })
  .catch(error => {
    console.error('Fout bij het ophalen van gegevens:', error);
  });
 }


 // AFRIKA // 

 if (selectedContinent === "af"){

  let randomIndex = Math.floor(Math.random() * 59);

  fetch('https://restcountries.com/v3.1/region/africa')
  .then(response => {
    if (!response.ok) {
      throw new Error('Netwerkfout');
    }
    return response.json(); 
  })
  .then(data => {
        const land = data[randomIndex]; 
        fillCountryInfo(land);
  })
  .catch(error => {
    console.error('Fout bij het ophalen van gegevens:', error);
  });
 }


 // ANTARTICA **WERKT NOG NIET** //

 if (selectedContinent === "ant"){

  let randomIndex = Math.floor(Math.random() * 59);

  fetch('https://restcountries.com/v3.1/region/antartica')
  .then(response => {
    if (!response.ok) {
      throw new Error('Netwerkfout');
    }
    return response.json(); 
  })
  .then(data => {
        console.log(data)
        const land = data[randomIndex]; 
        fillCountryInfo(land);
  })
  .catch(error => {
    console.error('Fout bij het ophalen van gegevens:', error);
  });
 }
 
 
 // AZIË //

 if (selectedContinent === "az"){

  let randomIndex = Math.floor(Math.random() * 50);

  fetch('https://restcountries.com/v3.1/region/asia')
  .then(response => {
    if (!response.ok) {
      throw new Error('Netwerkfout');
    }
    return response.json(); 
  })
  .then(data => {
        const land = data[randomIndex]; 
        fillCountryInfo(land);
  })
  .catch(error => {
    console.error('Fout bij het ophalen van gegevens:', error);
  });
 }


// OCEANIË //

 if (selectedContinent === "oc"){

  let randomIndex = Math.floor(Math.random() * 27);

  fetch('https://restcountries.com/v3.1/region/oceania')
  .then(response => {
    if (!response.ok) {
      throw new Error('Netwerkfout');
    }
    return response.json(); 
  })
  .then(data => {
        const land = data[randomIndex]; 
        fillCountryInfo(land);
  })
  .catch(error => {
    console.error('Fout bij het ophalen van gegevens:', error);
  });
 }

} 


