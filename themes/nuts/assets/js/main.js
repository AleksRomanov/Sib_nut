// import intersectionObserver from "./intersection-observer";
import swiperShell from "./swiper_shell";
import swiperCrushed from "./swiper_crushed";
import swiperProductsPackingKernel from "./swiper_products_packing_kernel";
import swiperEastPacking from "./swiper_east_packing";
import swiperAbout from "./swiper_about";
import swiperQuality from "./swiper_quality";
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
import swiperGallery from "./swiper_gallery";
import swiperCertificatesEng from "./swiper_certificates_eng";
import swiperCertificates from "./swiper_certificates";
import swiperPartners from "./swiper_partners";
import swiperMembrane from "./swiper_membrane";
import swiperOil from "./swiper_oil";
import swiperJmikh from "./swiper_jmikh";
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

    // intersectionObserver();

    swiperCertificatesEng();
    swiperCertificates();
    swiperCrushed();
    swiperAbout();
    swiperProductsPackingKernel();
    swiperEastPacking();
    swiperQuality();
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
    swiperGallery();
    swiperMembrane();
    swiperShell();
    swiperOil();
    swiperJmikh();
    // formsOrderSubmit();
    // partnersAutoplaySlide();


  }
}

App.init();
window.App = App;
