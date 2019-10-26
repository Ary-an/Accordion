var accordion = document.getElementsByClassName("accordion");

for (var i = 0; i < accordion.length; i++) {

  accordion[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
  
    if (panel.style.display === "block") {
      panel.style.display = "none";
      this.style.transform ="rotateZ(0deg)" 
    } 
    else {
      panel.style.display = "block";
      this.style.transform ="rotateZ(180deg)"
    }
  });
}