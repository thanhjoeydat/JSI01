fetch("https://jsonplaceholder.typicode.com/photos")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    let html = "";
    console.log(data);
    for (let i = 0; i < 5; i++) {
      let object = data[i];
      console.log(object);
      html += `<div class="container">
        <img src="${object.url}" alt="">
        <h2>id: <span>${object.id}</span></h2>
        <h3 class="title">title: ${object.title}</h3>
        <button> Buy Now</button>
    </div>`;
    }
    let UppeR = document.querySelector(".UPPER");
    UppeR.innerHTML = html;
  })
  .catch(function (e) {
    console.log(e);
  });
