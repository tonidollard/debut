document.querySelector(".popup-btn").addEventListener('click', function (e) {
e.stopPropagation();
document.querySelector(".popup").style.display = 'block';
}, false);
document.querySelector(".popup-btn").addEventListener('click', function () {
document.querySelector(".popup-overlay").style.display = 'block';
}, false);
document.querySelector(".popup-close").addEventListener('click', function () {
document.querySelector(".popup").style.display = 'none';
document.querySelector(".popup-overlay").style.display = 'none';
}, false);
document.querySelector("body").addEventListener('click', function () {
document.querySelector(".popup").style.display = 'none';
document.querySelector(".popup-overlay").style.display = 'none';
}, false);
document.querySelector(".popup").addEventListener('click', function (e) {
e.stopPropagation();
}, false);

document.querySelector(".popup-nav2").addEventListener('click', function (e) {
  if(document.querySelector(".popup-nav2").textContent == "close information (x)") {
    document.querySelector(".popup-nav-overlay").style.display = 'none';
    document.querySelector(".popup-child1").style.display = 'none';
    document.querySelector(".popup-child2").style.display = 'none';
    document.querySelector(".popup-nav2").textContent ="information";
  }else{
  e.stopPropagation();
  document.querySelectorAll(".popup-nav-overlay")[0].style.display = 'block';
  document.querySelector(".popup-child1").style.display = 'block';
  document.querySelector(".popup-child2").style.display = 'block';
  document.querySelector(".popup-nav2").textContent ="close information (x)";
  }
}, false);
document.querySelector("body").addEventListener('click', function () {
  document.querySelector(".popup-nav-overlay").style.display = 'none';
  document.querySelector(".popup-child1").style.display = 'none';
  document.querySelector(".popup-child2").style.display = 'none';
  document.querySelector(".popup-nav2").textContent ="information";
}, false);

document.querySelector(".mobile-nav--open").addEventListener('click', function (e) {
  if(document.querySelector(".icon-hamburger").textContent == "close menu (x)"){
    e.stopPropagation();
    document.querySelectorAll(".popup-nav-overlay1")[0].style.display = 'none';
    document.querySelector(".icon-hamburger").textContent ="menu";
  }else{
    e.stopPropagation();
    document.querySelectorAll(".popup-nav-overlay1")[0].style.display = 'block';
    document.querySelector(".icon-hamburger").textContent ="close menu (x)";
  }
},false);