// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})
function toggleDrawer(open) {
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  if (open) {
    drawer.classList.add('open');
    backdrop.style.display = 'block';
    document.body.style.overflow = 'hidden';
  } else {
    drawer.classList.remove('open');
    backdrop.style.display = 'none';
    document.body.style.overflow = '';
  }
}