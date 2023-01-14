function demo() {
  let obj = {
    name: "Nrupul",
    age: 32,
    place: "Vijayawada",
    batch_name: "WEB-18",
    profession: "FSD",
  };

  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });
}
let name = document.getElementById("name");
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let obj = {
    name: name.value,
    age: 32,
    place: "Vijayawada",
    batch_name: "WEB-18",
    profession: "FSD",
  };
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  fetch("http://localhost:3000/users")
    .then((res) => {
      return res.json();
    })
    .then((result) => {
      console.log(result);
    });
});
