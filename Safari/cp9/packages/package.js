var selectPlan = document.querySelectorAll(".package");
var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");



for (var i = 0; i < selectPlan.length; i++) {
    selectPlan[i].addEventListener("click", function () {
        modal.classList.add("open");
        backdrop.classList.add("open");
        // console.log("section")
    });
}
console.dir(selectPlan);