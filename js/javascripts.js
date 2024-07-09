document.addEventListener("DOMContentLoaded", function() {
    const priceElements = document.querySelectorAll(".price");

    priceElements.forEach(function(priceElement) {
        const quantityElement = priceElement.querySelector(".quantity");
        const minusButton = priceElement.querySelector(".minus");
        const plusButton = priceElement.querySelector(".plus");

        minusButton.addEventListener("click", function() {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
            }
        });

        plusButton.addEventListener("click", function() {
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
        });
    });
});
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
