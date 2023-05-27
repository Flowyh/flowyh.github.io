const navbar = document.getElementById("navbar");

function insertAfter(referenceNode, newNode) {
  referenceNode.insertAdjacentElement("afterend", newNode);
}

function insertHamburgerButton() {
  const hamburgerButton = document.getElementById("hamburger");
  hamburgerButton.classList.toggle("disabled");

  const span = document.createElement("span");
  hamburgerButton.appendChild(span);

  document.getElementById("nojs__hamburger").remove();
  document.getElementById("menu__toggle").remove();

  hamburgerButton.addEventListener("click", function () {
    hamburgerButton.classList.toggle("active");
    document.querySelector(".menu__box").classList.toggle("active");
  });
}

insertHamburgerButton();
