document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const startDate = new Date("2003-02-13");
    const today = new Date();

    let yearsPassed = today.getFullYear() - startDate.getFullYear();

    const hasHadAnniversaryThisYear =
        today.getMonth() > startDate.getMonth() ||
        (today.getMonth() === startDate.getMonth() && today.getDate() >= startDate.getDate());

    if (!hasHadAnniversaryThisYear) {
        yearsPassed--;
    }

    const ageSpan = document.getElementById("age");
    if (ageSpan) {
        ageSpan.textContent = yearsPassed;
    }
});
