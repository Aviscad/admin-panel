let dashboard = document.getElementsByClassName("dashboard"),
  dashboardGroup = document.getElementsByClassName("dashboard-group");

window.addEventListener("load", () => {
  if (window.screen.width > 767) {
    for (let i = 0; i < dashboardGroup.length; i++) {
      dashboardGroup[i].classList.remove("hidden");
      dashboardGroup[i].classList.remove("visuallyHidden");
    }
  }
});
window.addEventListener("resize", () => {
  if (window.screen.width > 767) {
    for (let i = 0; i < dashboardGroup.length; i++) {
      dashboardGroup[i].classList.remove("hidden");
      dashboardGroup[i].classList.remove("visuallyHidden");
    }
  }
});

dashboard[0].addEventListener("click", (e) => {
  if (window.screen.width < 768) {
    for (let i = 0; i < dashboardGroup.length; i++) {
      dashboardGroup[i].classList.toggle("hidden");
      setTimeout(() => {
        dashboardGroup[i].classList.toggle("visuallyHidden");
      }, 100);
    }
  }
});
