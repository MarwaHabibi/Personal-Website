document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  const thankYou = document.getElementById('thank-you-message');
  const orderFormContainer = document.getElementById('order-form-container');
  const orderTitle = document.getElementById('order-title');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent actual submission

    // Hide the form and title
    orderFormContainer.style.display = 'none';
    orderTitle.style.display = 'none';

    // Show thank you message
    thankYou.classList.remove('hidden');

    // Reset the form
    form.reset();
  });
});
