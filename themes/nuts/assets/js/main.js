import swiperProductsPacking from "./swiper_products_packing";
import swiperAbout from "./swiper_about";
import swiperQuality from "./swiper_quality";
import swiperSertificates from "./swiper_sertificates";
import scrollTop from "./scroll_top";
import scrollPages from "./scroll_pages";
import swiperProducts from "./swiper_products";
import swiperContacts from "./swiper_contacts";
import swiperMaps from "./swiper_maps";
import salAnimation from "./sal";
import mmenu from "./mmenu";
import formsSubmit from "./forms-submit";
import preloader from "./preloader";
// import buttonHover from "./button_hover";
// import partnersAutoplaySlide from "./partnersAutoplaySlide";
import swiperPartners from "./swiper_partners";
// import formsOrderSubmit from "./forms-order-submit";



const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

class App {
  static init() {
    if (isSafari) {
      window.console.log(`isSafari`);
    }

    // if (window.objectFitImages) {
    //   window.objectFitImages();
    // }

    swiperAbout();
    swiperProductsPacking();
    swiperQuality();
    swiperSertificates();
    swiperProducts();
    swiperContacts();
    swiperMaps();
    scrollTop();
    scrollPages();
    salAnimation();
    mmenu();
    formsSubmit();
    preloader();
    // buttonHover();
    // partnersAutoplaySlide();
    swiperPartners();
    // formsOrderSubmit();
  }
}

App.init();
window.App = App;
