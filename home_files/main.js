function updateCopyrightYear() {
  const $copyrightYear = document.getElementById('copyright-year');
  if ($copyrightYear)  {
    $copyrightYear.innerHTML = new Date().getFullYear();
  }
}

document.addEventListener( "DOMContentLoaded" , () => {
  updateCopyrightYear();
});
