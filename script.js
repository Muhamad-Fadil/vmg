window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".custom-navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".img-click");
  const modalImageporto = document.getElementById("modalImage-porto");
  const modalImagemedia = document.getElementById("modalImage-media");
  const modalImageprice= document.getElementById("modalImage-price");
  const modal = new bootstrap.Modal(document.getElementById("imageModal"));

  images.forEach((img) => {
    img.addEventListener("click", () => {
      modalImageporto.src = img.getAttribute("data-src");
      modal.show();
      modalImagemedia.src = img.getAttribute("data-src");
      modal.show();
      modalImageprice.src = img.getAttribute("data-src");
      modal.show();
    });
  });
});
