document.addEventListener('DOMContentLoaded', function () {
  // Open popup when an icon is clicked
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('icon')) {
      const popupId = event.target.getAttribute('data-popup');
      const popup = document.getElementById(popupId);
      if (popup) {
        popup.style.display = 'block';
      }
    }
  });

  // Close popup when the close button is clicked
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('close')) {
      const popup = event.target.closest('.popup');
      if (popup) {
        popup.style.display = 'none';
      }
    }
  });

  // Close popup when clicking outside of it
  window.addEventListener('click', function (event) {
    if (event.target.classList.contains('popup')) {
      event.target.style.display = 'none';
    }
  });
});

