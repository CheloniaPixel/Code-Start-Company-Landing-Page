var acc = document.getElementsByClassName("question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function myFunction() {
  var mM = document.getElementById("list");
  if (mM.style.height === "calc(100% + 320px)") {
    mM.style.height = "0";
  } else {
    mM.style.height = "calc(100% + 320px)";
  }
}

const question = document.querySelector('.question');

question.addEventListener('click', function() {
    this.classList.toggle('active');
});