let dashboard = document.getElementsByClassName("dashboard"),
  dashboardGroup = document.getElementsByClassName("dashboard-group");

dashboard[0].addEventListener("click", (e) => {
  for (let i = 0; i < dashboardGroup.length; i++) {
    dashboardGroup[i].classList.toggle("hidden");
    setTimeout(() => {
      dashboardGroup[i].classList.toggle("visuallyHidden");
    }, 100);
  }
});
