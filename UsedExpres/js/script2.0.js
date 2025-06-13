function updateCartSummary() {
    const items = document.querySelectorAll('.list-group-item[data-price]');
    const total = Array.from(items).reduce((sum, item) => {
      return sum + parseInt(item.getAttribute('data-price'));
    }, 0);

    // Update total amount
    document.getElementById('cart-total').textContent = `${total} MAD`;
    document.getElementById('tot').textContent = `${total} MAD`;
    // Update badge count
    const badge = document.querySelector('.badge.bg-primary');
    badge.textContent = items.length;
  }

  function attachDeleteHandlers() {
    document.querySelectorAll('.delete-item').forEach(button => {
      button.addEventListener('click', () => {
        const item = button.closest('.list-group-item');
        item.remove();
        updateCartSummary();
      });
    });
  }

  // Initial setup
  document.addEventListener('DOMContentLoaded', () => {
    updateCartSummary();
    attachDeleteHandlers();
  });




const btn = document.getElementById('categoriesBtn');
const panel = document.getElementById('categoryPanel');

// Toggle category panel visibility on button click
btn.addEventListener('click', () => {
panel.classList.toggle('show');
});

// Close panel if clicking outside
document.addEventListener('click', (e) => {
if (!btn.contains(e.target) && !panel.contains(e.target)) {
    panel.classList.remove('show');
}
});

// Optional: clicking a category updates button text & closes panel
panel.querySelectorAll('.category-item').forEach(item => {
item.addEventListener('click', () => {
    btn.textContent = item.textContent + " ▼";
    panel.classList.remove('show');
});
});


//TODAYS DEALS

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1.2,
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2,
    },
    1024: {
      slidesPerView: 3.2,
    },
  }
});

//register

  // Example: Redirect after form submission or social login click
  document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would do your sign up logic, then redirect:
    window.location.href = '/dashboard'; // or wherever you want to redirect
  });

  document.getElementById('google-login').addEventListener('click', function() {
    // Trigger Google OAuth login flow, then redirect:
    window.location.href = '/auth/google?redirect=/dashboard';
  });

  document.getElementById('facebook-login').addEventListener('click', function() {
    // Trigger Facebook OAuth login flow, then redirect:
    window.location.href = '/auth/facebook?redirect=/dashboard';
  });