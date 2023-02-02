/**
 * Toggle .header-scrolled class to #header when page is scrolled
 */

window.onload = function () {
    
    let selectHeader = $('#header');
    let selectTopbar = $('#topbar');
    
    if (selectHeader) {
    const headerScrolled = () => {
        // debugger
        if (window.scrollY > 100) {
        selectHeader.addClass('header-scrolled');
        if (selectTopbar) {
            selectTopbar.addClass('topbar-scrolled');
        }
        } else {
        selectHeader.removeClass('header-scrolled');
        if (selectTopbar) {
            selectTopbar.removeClass('topbar-scrolled');
        }
        }
    }
    window.addEventListener('load', headerScrolled);
    onscroll(document, headerScrolled);
    }

    /**
     * Mobile nav toggle
     */
    $('.mobile-nav-toggle').click(function(e) {
        select('#navbar').classList.toggle('navbar-mobile');
        this.classList.toggle('bi-list');
        this.classList.toggle('bi-x');
    });
    // on('click', '.mobile-nav-toggle', function(e) {
    // select('#navbar').classList.toggle('navbar-mobile');
    // this.classList.toggle('bi-list');
    // this.classList.toggle('bi-x');
    // });
}
/**
 * Easy on scroll event listener 
 */
const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
}
