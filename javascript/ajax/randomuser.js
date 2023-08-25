let btn = document.getElementById("randUserBtn");
btn.addEventListener("click", () => {
  let xhttp = new XMLHttpRequest();
  xhttp.onload = () => {
    let response = xhttp.response;
    let user = JSON.parse(response).results[0];

    let container = document.getElementById("loaduser");
    let data = `<div class="card" style="width: 18rem">
            <img src="${user.picture.medium}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
              
            </div>
           
            <div class="card-body">
            <b>Contact </b>
            <br>
            <p>${user.email}</p>
            <p>${user.phone}</p>
            <p>City :${user.location.city}</p>
            <p>State :${user.location.state}</p>
            <p>Country :${user.location.country}</p>
            </div>
          </div>`;
    container.innerHTML = data;
  };

  xhttp.open("GET", "https://randomuser.me/api/");
  xhttp.send();
});
