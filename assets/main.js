// header area start
fetch("header.html")
    .then(Response => Response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data
    })
// header area end

// footer area start
fetch("footer.html")
    .then(Response => Response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data
    })
// footer area end


// simply countdown area start
function pluralizeEn(number, singular, plural) {
    return number === 1 ? singular : plural;
}


// Countdown initialize
simplyCountdown('#custom-plural', {
    year: 2025,   // Target year
    month: 12,     // Target month
    day: 25,       // Target day
    hours: 23,
    minutes: 59,
    seconds: 59,
    words: {
        days: {
            lambda: (root, n) => pluralizeEn(n, 'Day', 'Days'),
            root: 'Day'
        },
        hours: {
            lambda: (root, n) => pluralizeEn(n, 'Hour', 'Hours'),
            root: 'Hour'
        },
        minutes: {
            lambda: (root, n) => pluralizeEn(n, 'Minute', 'Min'),
            root: 'Minute'
        },
        seconds: {
            lambda: (root, n) => pluralizeEn(n, 'Second', 'Sec'),
            root: 'Second'
        }
    }
});
// simply countdown area end


// carousel area start
$(document).ready(function () {
    $('.carousel').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
  });
});
// carousel area end