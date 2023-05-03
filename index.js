const color = [
  { hex: "#eb6134", rgb: "235, 97, 52" },
  { hex: "#ebdc34", rgb: "235, 220, 52" },
  { hex: "#abeb34", rgb: "171, 235, 52" },
  { hex: "#34c0eb", rgb: "52, 192, 235" },
  { hex: "#a234eb", rgb: "162, 52, 235" },
  { hex: "#eb34e2", rgb: "235, 52, 226" },
  { hex: "#34ebd6", rgb: "52, 235, 214" },
  { hex: "#0f0f0f", rgb: "15, 15, 15" },
  { hex: "#eb6134", rgb: "235, 97, 52" },
  { hex: "#ebdc34", rgb: "235, 220, 52" },
  { hex: "#abeb34", rgb: "171, 235, 52" },
  { hex: "#34c0eb", rgb: "52, 192, 235" },
];

const refs = {
  divCards: document.querySelector(".container"),
};

// console.log(cardsMaker(color));

const cardsInvoke = cardsMaker(color);
refs.divCards.insertAdjacentHTML("beforeend", cardsInvoke);

function cardsMaker(objColorArr) {
  const markup = objColorArr
    .map((objColor) => {
      return `<div class="card">
   <div class="color" data-hex=${objColor.hex} style="background-color:${objColor.hex}"></div>
  <div class="meta-card">
   <p class="hex">HEX: ${objColor.hex}</p>
   <p class="hex">RGB: ${objColor.rgb}</p>
</div>
 </div>;`;
    })
    .join("");
  return markup;
}

refs.divCards.addEventListener("click", onchangeBcg);

function onchangeBcg(ev) {
  //   console.log(ev.target);
  if (!ev.target.classList.contains("color")) {
    return;
  }
  //only execute code below if user clicked on <div class='color'> (1)

  const currentActiveCard = document.querySelector(".card.active-card");
  //looking for active card (element with class active-card and class card) (5)
  if (currentActiveCard) {
    currentActiveCard.classList.remove("active-card");
  }
  //check element if it has class active - if yes - remove , if no - adds below (6)

  const parentColorCard = ev.target.closest(".card");
  //  method closest finds the parent of <div> with specified class/selector (3)

  parentColorCard.classList.add("active-card");
  //class "active-card" is created in css and added via js dynamically (4)

  document.body.style.backgroundColor = ev.target.dataset.hex;
  //body was assingned value of data-hex attribute (2)
}
