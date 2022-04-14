const navSlider = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = "";
      } else {
        item.style.animation = `navLinksAnim 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    burger.classList.toggle("change");
  });
};

navSlider();

let input = document.querySelector(".input");
let button = document.querySelector(".button");
let ul = document.querySelector(".ul-list");
let form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let value = input.value;
  let li = document.createElement("li");
  let span = document.createElement("button");
  span.textContent = "x";
  span.addEventListener("click", function () {
    li.remove();
  });

  li.textContent = value;
  li.appendChild(span);
  ul.appendChild(li);

  input.value = " ";
});
