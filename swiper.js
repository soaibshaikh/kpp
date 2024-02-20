var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  slidesPerView: 1,
});

var swiper2 = new Swiper(".mySwiper2", {
  direction: "horizontal",
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  centeredSlides: true,
  // loop: true,
  autoplay: {
    delay: 2500,
    // disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  // slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 2500,
    // disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// events sliders

var TrandingSlider = new Swiper(".tranding-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  // autoHeight: true, //enable auto height
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var TrandingSlider = new Swiper(".tranding-slider1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  // autoHeight: true, //enable auto height
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// leaders slider
var swiper = new Swiper(".mySwiper-leader", {
  slidesPerView: 1,
  spaceBetween: 2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  // autoplay: {
  //   delay: 2500,
  //   // disableOnInteraction: false,
  //   pauseOnMouseEnter: true,
  // },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 2,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 2,
    },
  },
});

// navbar js
const navbar = document.querySelector(".custom-header");
const openBtn = document.querySelector(".navbar-open");

openBtn.addEventListener("click", (event) => {
  navbar.classList.toggle("open");
});

// language js

// Function to update content based on selected language
function updateContent(langData) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = langData[key];
  });
}

// Function to set the language preference
function setLanguagePreference(lang) {
  localStorage.setItem("language", lang);
  location.reload();
}

// Function to fetch language data
async function fetchLanguageData(lang) {
  const response = await fetch(`locales/${lang}.json`);
  return response.json();
}

// Function to change language
async function changeLanguage() {
  let langName = document.getElementById("language").value;
  langName = langName ? langName : localStorage.getItem("language");
  await setLanguagePreference(langName);

  const langData = await fetchLanguageData(langName);
  updateContent(langData);
  // toggleArabicStylesheet(langName); // Toggle Arabic stylesheet
}

// Call updateContent() on page load
window.addEventListener("DOMContentLoaded", async () => {
  const userPreferredLanguage = localStorage.getItem("language") || "en";

  const el = document.querySelector("body");
  if (userPreferredLanguage != "en") {
    el.style.fontFamily = "Khand";
  }

  const langData = await fetchLanguageData(userPreferredLanguage);
  updateContent(langData);
  // toggleArabicStylesheet(userPreferredLanguage);
});
