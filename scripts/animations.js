function scrollPage(className) {
    document.querySelector(`.${className}`).scrollIntoView({
        behavior: "smooth"
    });
}