const checkbox = document.querySelector('#theme-checkbox');

checkbox.addEventListener('change', function() {
  document.querySelector('.login-bg-wrapper').classList.toggle('login-bg-wrapper-dark');
  document.querySelector('.username-input').classList.toggle('input-dark');
  document.querySelector('.password-input').classList.toggle('input-dark');
  document.querySelector('.remember-me-field').classList.toggle('remember-me-dark');
  document.querySelector('.login-helper').classList.toggle('login-helper-dark');  
  document.querySelector('.login-footer').classList.toggle('login-footer-dark');  
  
     
});