  // Navbar'ı çağır
  fetch('/html/navbar.html')
  .then(response => response.text())
  .then(data => {
      document.getElementById('navbar-container').innerHTML = data;
  });