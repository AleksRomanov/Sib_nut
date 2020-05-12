import swiperSertificates from "./swiper";
import salAnimation from "./sal";
import mmenu from "./mmenu";



const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

class App {
  static init() {
    if (isSafari) {
      window.console.log(`isSafari`);
    }

    // if (window.objectFitImages) {
    //   window.objectFitImages();
    // }

    swiperSertificates();
    salAnimation();
    mmenu();

  }
}

App.init();
window.App = App;
