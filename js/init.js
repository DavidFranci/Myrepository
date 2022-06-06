document.addEventListener('DOMContentLoaded', () => {

  //Sidenav
  var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  

  //Siler
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems);
});