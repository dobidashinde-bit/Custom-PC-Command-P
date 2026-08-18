// ==========================================
// PAGE NAVIGATION
// ==========================================

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active-page");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }


    const navigationButtons =
        document.querySelectorAll(".nav-button");

    navigationButtons.forEach(function(button) {
        button.classList.remove("active");
    });


    const clickedButton =
        event.currentTarget;

    clickedButton.classList.add("active");
}


// ==========================================
// OPEN WEBSITE
// ==========================================

function openWebsite(url) {
    window.open(url, "_blank");
}


// ==========================================
// NOTEPAD
// ==========================================

function openNotepad() {

    showNotification(
        "Notepad requires the Python Windows backend."
    );

}


// ==========================================
// CALCULATOR
// ==========================================

function openCalculator() {

    showNotification(
        "Calculator requires the Python Windows backend."
    );

}


// ==========================================
// NOTIFICATION
// ==========================================

function showNotification(message) {

    const notification =
        document.getElementById("notification");

    const notificationText =
        document.getElementById("notificationText");

    notificationText.textContent = message;

    notification.classList.add("show");

    setTimeout(function() {

        notification.classList.remove("show");

    }, 2500);
}