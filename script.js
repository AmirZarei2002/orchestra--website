// preloader
window.addEventListener("load", () => document.querySelector(".preloader")
    .classList.add("hidePre"));

const menu = [{
        id: 1,
        title: "maxim vengerov",
        category: "violinist",
        age: 47,
        img: "./images/maxim-vengerov-6-1407231500-view-0.jpg",
        desc: `Vengerov was born in Novosibirsk, Siberia, the only child of Aleksandr and
        Larisa Borisovna, oboist and orphanage children’s choir director respectively, and is
        Jewish.[4][2] He sang in his mother's choir from the age of three.[5] He began studying the
        violin at age 5 with Galina Turchaninova, a famous violin teacher`,
    },
    {
        id: 2,
        title: "Hilary Hahn",
        category: "violinist",
        age: 42,
        img: "./images/4eb1a5ed0a9dafa43e08599c366680955eb15bb3.jpg",
        desc: `Hahn was born in Lexington, Virginia, on November 27, 1979,[4] and grew up in Baltimore, Maryland.[5][6] Her father, Steve Hahn, was a journalist and librarian;[5][6] her paternal great-grandmother was from Bad Dürkheim in Germany.[5] Her mother Anne was an accountant`,
    },
    {
        id: 3,
        title: "Itzhak Perlman",
        category: "violinist",
        age: 76,
        img: "./images/OIP.jpg",
        desc: `Perlman was born in 1945 in Tel Aviv. His parents, Chaim and Shoshana Perlman, were Jewish natives of Poland and had independently immigrated to the British Mandate of Palestine (now Israel) in the mid-1930s before they met and later married. Perlman contracted polio at age four and has walked using leg braces and crutches since then[2] and plays the violin while seated. As of 2018, he uses crutches or an electric Amigo scooter for mobility`,

    },
    {
        id: 4,
        title: "Anne-Sophie Mutter",
        category: "violinist",
        age: 58,
        img: "./images/R.jpg",
        desc: `Mutter was born in the German town of Rheinfelden, which lies some 15 kilometres (9 mi) east of Basel on the northern bank of the High Rhine river, across which lies the Swiss town of the same name. She began playing the piano at the age of five, and shortly afterwards took up the violin. Inspired by a recording of violinist Yehudi Menuhin and Wilhelm Furtwängler, she began studying with Erna Honigberger, a pupil of Carl Flesch. After Honigberger's death she continued her studies with Aida Stucki at the Winterthur Conservatory.`,
    },
    {
        id: 5,
        title: "Gustavo Dudamel",
        category: "conductor",
        age: 47,
        img: "./images/ab67706c0000bebb3ad4433d7785c4ed9bcfccc7.jpg",
        desc: `Dudamel was born in Barquisimeto, Venezuela, the son of a trombonist and a voice teacher.[1] He studied music from an early age, becoming involved with El Sistema, the famous Venezuelan musical education program, and took up the violin at age ten. He soon began to study composition. He attended the Jacinto Lara Conservatory, where José Luis Jiménez was among his violin teachers. He then went on to work with José Francisco del Castillo at the Latin-American Violin Academy`,
    },
    {
        id: 6,
        title: "Valery Gergiev",
        category: "conductor",
        age: 70,
        img: "./images/valery-gergiev-conductor-1404913662-view-0.jpg",
        desc: `The brilliant Russian conductor has lead many of the world's great orchestras. Few maestros can make Tchaikovsky sound so good. He is seen here conducting at the close of the Vancouver 2010 Winter Olympics.`,
    },
    {
        id: 7,
        title: "Mirga Gražinytė-Tyla",
        category: "conductor",
        age: 35,
        img: "./images/mirga-grazinyte-tyla-1454576821-view-0.jpg",
        desc: `Mirga Gražinytė-Tyla has had a meteoric rise to fame since being named Music Director of the City of Birmingham Symphony Orchestra in 2016 (an orchestra that's developed a knack for spotting talent, as this list demonstrates). Tickets to her concerts sell like hot cakes and the music world is abuzz with talk of Mirga!`,
    },
    {
        id: 8,
        title: "Berlin Philharmonic",
        category: "orchestras",
        img: "./images/schumann-symphonies-518490551-597b9c10c412440010134799.webp",
        desc: `Founded in 1882, the Berlin Philharmonic has had 10 principal conductors, with its latest being Sir Simon Rattle since 2002. It's no surprise to see the Berlin Philharmonic in this position, especially since under Rattle the orchestra has won a handful of Grammys, Gramophone Awards, and more.`,
    },
    {
        id: 9,
        title: "Vienna Philharmonic",
        category: "orchestras",
        img: "./images/haydn-and-brahms-480011613-597b9cab22fa3a0010bf3a74.webp",
        desc: `The Vienna Philharmonic is a very popular orchestra with long waiting lists for its weekday and weekend subscription tickets. With one of the world's best concert halls ​and a grueling audition process for its musicians, it's not hard to understand why this orchestra is so well-liked and highly regarded.`,
    },
];

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
const filterBtns = document.querySelectorAll(".filter-btn");

// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
});

filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {

        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            }
        });
        if (category === "all") {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }
    });
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="age">${item.age}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
    });
    displayMenu = displayMenu.join("");

    sectionCenter.innerHTML = displayMenu;
}


// calculate heights
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        // close
        linksContainer.style.height = 0;
    });
});

// scroll to the top
const myButton = document.getElementById("myScrollBtn");
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}

// image slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// sidebar
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});