fetch("https://pokeapi.co/api/v2/pokemon")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    // console.log(data);
    let ul = document.createElement("ul");
    for (let i = 0; i < data.results.length; i++) {
      // console.log(data.results[i].name);
      let li = document.createElement("li");
      li.innerText = data.results[i].name;
      ul.appendChild(li);
      ul.className = "ulContainer";
      let inputContainer = document.querySelector(".inputContainer");
      inputContainer.appendChild(ul);
      li.addEventListener("click", function () {
        fetch(`https://pokeapi.co/api/v2/pokemon/${data.results[i].name}`)
          .then(function (res) {
            return res.json();
          })
          .then(function (data) {
            console.log(data);
            let petname = document.getElementById("namepet");
            petname.innerHTML = li.innerText;
            console.log(li.innerText);
            let pettype = document.getElementById("typepet");
            pettype.innerHTML = data.types[0].type.name;
            console.log(data.types[0].type.name);
            let petheight = document.getElementById("heightpet");
            petheight.innerHTML = data.height + "00 cm";
            let petweight = document.getElementById("weightpet");
            petweight.innerHTML = data.weight + " lbs";
            let petpic = document.getElementById("pic");
            petpic.innerHTML = `<img src="${data.sprites.front_default}">`;
            console.log(data.sprites.front_default);
          });
      });
    }
  });
