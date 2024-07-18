document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
  
    products.forEach(product => {
      const minusButton = product.querySelector('.minus');
      const plusButton = product.querySelector('.plus');
      const quantitySpan = product.querySelector('.quantity');
  
      // Evento de clic para el botón de restar
      minusButton.addEventListener('click', function() {
        let quantity = parseInt(quantitySpan.textContent);
        if (quantity > 1) {
          quantity--;
          quantitySpan.textContent = quantity;
        }
      });
  
      // Evento de clic para el botón de sumar
      plusButton.addEventListener('click', function() {
        let quantity = parseInt(quantitySpan.textContent);
        quantity++;
        quantitySpan.textContent = quantity;
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const orderButtons = document.querySelectorAll('.order-button');
    const overlay = document.getElementById('overlay1');
    const closeBtn = document.getElementById('closeBtn');
    const overlayProductImage = document.getElementById('overlayProductImage');
    const quantityCircle = document.getElementById('quantityCircle');
    const cantidadInput = document.getElementById('cantidad');
  
    orderButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        const productElement = event.target.closest('.product');
        const productImg = productElement.querySelector('img').getAttribute('data-img');
        const productQuantity = productElement.querySelector('.quantity').textContent;
  
        overlayProductImage.src = productImg;
        quantityCircle.textContent = productQuantity;
        cantidadInput.value = productQuantity;
  
        overlay.classList.add('active');
      });
    });
  
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
    });
  
    // Handle quantity controls in the form
    document.querySelector('.quantity-controls .minus').addEventListener('click', () => {
      let currentQuantity = parseInt(cantidadInput.value);
      if (currentQuantity > 1) {
        cantidadInput.value = currentQuantity - 1;
        quantityCircle.textContent = cantidadInput.value;
      }
    });
  
    document.querySelector('.quantity-controls .plus').addEventListener('click', () => {
      let currentQuantity = parseInt(cantidadInput.value);
      cantidadInput.value = currentQuantity + 1;
      quantityCircle.textContent = cantidadInput.value;
    });
  
    // Update the quantity circle when input changes manually
    cantidadInput.addEventListener('input', () => {
      quantityCircle.textContent = cantidadInput.value;
    });
  });
  