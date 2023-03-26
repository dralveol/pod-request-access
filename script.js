window.addEventListener('DOMContentLoaded', () => {
  let icons = document.querySelector(".request-email-component-icons");
  let form = document.getElementsByTagName('form');
  form = form[0];
  function iconsAfterForm(){
icons.remove();
form.after(icons);
  };
  function iconsBeforeForm(){
    icons.remove();
    form.before(icons);
  }

  const mediaQuery = window.matchMedia('(min-width: 760px)');
  const mediaQueryMobile = window.matchMedia('(max-width: 759px)');
  if (mediaQuery.matches) iconsAfterForm();
  if (mediaQueryMobile.matches) iconsBeforeForm();
  mediaQuery.addEventListener('change', (event) => {
      if (event.matches) iconsAfterForm();
  });
  mediaQueryMobile.addEventListener('change', (event) => {
    if (event.matches) iconsBeforeForm();
  })
})

const errorMessage = document.querySelector('.error-message');
const emailInput = document.querySelector('.email-input');
const submitButton = document.querySelector('.submit-button');
function ValidateEmail(input) {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value.match(validRegex)) {
    return true;

  } else {
    return false;
  }
}

submitButton.addEventListener('click', handler);

function handler() {
  if (emailInput.value == "") {
    errorMessage.style.display = 'block';
    errorMessage.innerText = 'Oops! Please add your email';
    return
  }
  if (!(ValidateEmail(emailInput))) {
    errorMessage.style.display = 'block';
    errorMessage.innerText = 'Oops! Please check your email';
    return
  }
  if (ValidateEmail(emailInput)){
    errorMessage.style.display = 'none';
    return
  }
}