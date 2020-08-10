import swiperShell from "./swiper_shell";
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
import buttonHover from "./button_hover";
import swiperPartners from "./swiper_partners";
import swiperPlenka from "./swiper_plenka";
// import formsOrderSubmit from "./forms-order-submit";
// import partnersAutoplaySlide from "./partnersAutoplaySlide";





const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

class App {
  static init() {
    if (isSafari) {
      window.console.log(`isSafari`);
    }

    // if (window.objectFitImages) {
    //   window.objectFitImages();
    // }

    swiperShell();
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
    buttonHover();
    swiperPartners();
    swiperPlenka();
    // formsOrderSubmit();
    // partnersAutoplaySlide();


  }
}

App.init();
window.App = App;
