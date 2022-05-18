function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".countries").innerHTML = "";
    document.querySelector(".country-name").textContent = capitalize(
      btn.dataset.id,
    );

    fetch(`https://restcountries.com/v3.1/region/${btn.dataset.id}`)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        data.forEach((item) => {
          let flagUrl = item.flags.png;
          let [capital] = item.capital;
          let country = item.name.common;
          let currencies = Object.values(item.currencies)[0].name;
          let langs = Object.values(item.languages).join(", ");
          let population = item.population;
          let timeZone = item.timezones.join(",");

          document.querySelector(".countries").innerHTML += `
     <div class="country-card col-3">
        <div class="country-card--img">
          <img
            src="${flagUrl}"
            alt="#"
          />
        </div>
        <div class="country-card--content">
          <p><b>Country:</b> ${country}</p>
          <p><b>Capital:</b> ${capital}</p>
          <p><b>Currency:</b> ${currencies}</p>
          <p><b>Language:</b> ${langs}</p>
          <p><b>Populations:</b> ${population}</p>
          <p><b>TimeZone:</b> ${timeZone}</p>
        </div>
      </div>
      `;
        });
      });
  });
});
