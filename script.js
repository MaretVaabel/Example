// // Funktsioon, mis arvutab ja väljastab ühe nädala eeldatava ajakulu
// // function calculateWeeklyWorkload() {
// //     // Küsib kasutajalt ainepunktide arvu ja nädalate arvu
// //     let points = Number(prompt("Sisestage ainepunktide arv:"));
// //     let weeks = Number(prompt("Sisestage nädalate arv:"));

// //     // Kontrollib, kas sisend on kehtiv täisarv
// //     if (isNaN(points) || points <= 0 || isNaN(weeks) || weeks <= 0) {
// //         console.log("Palun sisestage kehtivad täisarvud ainepunktide ja nädalate jaoks.");
// //         return;
// //     }

// //     // Arvutab ühe nädala eeldatava ajakulu
// //     let totalHours = points * 26;
// //     let weeklyWorkload = totalHours / weeks;

// //     // Ümardab ajakulu täisarvuni
// //     let roundedWorkload = Math.round(weeklyWorkload);

// //     // Kuvab tulemuse
// //     console.log("Ühe nädala eeldatav ajakulu on: " + roundedWorkload + " tundi.");
// // }

// // Käivitame funktsiooni
// //calculateWeeklyWorkload();

// let count = 0;

// const numberCount = document.getElementById("number");

// const liitmiseNupp = document.getElementById("liida");
// const lahutamiseNupp = document.getElementById("lahuta");
// const tühistamiseNupp = document.getElementById("tühista");

// liitmiseNupp.onclick = () => {
//   count++;
//   numberCount.innerHTML = count;
// };

// lahutamiseNupp.onclick = () => {
//   count--;
//   if (count >= 0) {
//     numberCount.innerHTML = count;
//   }
// };

// tühistamiseNupp.onclick = () => {
//   count = 0;
//   numberCount.innerHTML = count;
// };

// const element = document.querySelectorAll("div");

// console.log(element);

// // document.addEventListener("click", (e) => {
// //   console.log(e, e.target);
// //   if (e.target.nodeName === "DIV" || e.target.parentNode.nodeName === "DIV") {
// //     alert("Div clicked");
// //   }
// // });

// const data = [
//   {
//     name: "Pirn",
//     price: 2,
//   },
//   {
//     name: "Õun",
//     price: 1,
//   },
//   {
//     name: "Banaan",
//     price: 4,
//   },
//   {
//     name: "Arbuus",
//     price: 3,
//   },
//   {
//     name: "Kiivi",
//     price: 2.2,
//   },
//   {
//     name: "Viinamari",
//     price: 2.4,
//   },
//   {
//     name: "Maasikad",
//     price: 4,
//   },
// ];
// console.log(data[2].name);

// const tabeligenereerimine = (andmed) => {
//   const tabel = document.querySelector("table");

//   const keha = document.querySelector("tbody");
//   keha.remove();

//   const tabeliKeha = document.createElement("tbody");

//   for (let i = 0; i < andmed.length; i++) {
//     //create a table row
//     const row = document.createElement("tr");

//     for (let j = 0; j < 2; j++) {
//       // create cells
//       const cell = document.createElement("td");
//       if (j === 0) {
//         cell.append(andmed[i].name);
//       } else {
//         cell.append(andmed[i].price);
//       }
//       row.append(cell);
//     }

//     tabeliKeha.append(row);
//   }
//   tabel.append(tabeliKeha);
// };

// tabeligenereerimine(data);

// const sortByName = (data) => {
//   data.sort((a, b) => (a.name < b.name ? -1 : 1));
//   tabeligenereerimine(data);
// };

// const nimi = document.getElementById("name");

// nimi.onclick = () => {
//   data.sort((a, b) => (a.name < b.name ? -1 : 1));
//   tabeligenereerimine(data);
// };

// var a = prompt("a = ?");
// var b = prompt("b = ?");

// a = Number(a);
// b = Number(b);

// var sum = a + b;

// document.write("The sum is: " + sum);
// Number Guessing Game in JavaScript
