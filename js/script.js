let dashboard = document.getElementsByClassName("dashboard-title"),
  dashboardGroup = document.getElementsByClassName("dashboard-group");

window.addEventListener("load", () => {
  if (window.innerWidth >= 768) {
    for (let i = 0; i < dashboardGroup.length; i++) {
      dashboardGroup[i].classList.remove("hidden");
      dashboardGroup[i].classList.remove("visuallyHidden");
    }
  } else {
    dashboard[0].addEventListener("click", (e) => {
      for (let i = 0; i < dashboardGroup.length; i++) {
        dashboardGroup[i].classList.toggle("hidden");
        setTimeout(() => {
          dashboardGroup[i].classList.toggle("visuallyHidden");
        }, 100);
      }
    });
  }
});
