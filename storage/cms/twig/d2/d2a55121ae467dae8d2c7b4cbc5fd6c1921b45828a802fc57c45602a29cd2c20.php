<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* /Applications/MAMP/htdocs/nuts/themes/nuts/partials/site/about.htm */
class __TwigTemplate_358a6350f03d7c36bead4ca470894a5f8c4f2f03726f32506fd98f21528898de extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<section id=\"layout-content\" class=\"about\" >
  <div class=\"about__container\">
    <ul class=\"about__container-list\">
      <li class=\"about__list-item\">
        <div class=\"about__list-item-wrapper\">
          <h3 data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">«Сибирская компания»</h3>
          <svg width=\"65\" height=\"94\" data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">
            <use xlink:href=\"themes/nuts/assets/images/sprite.svg#cropped-faviconGREEN\"></use>
          </svg>
          <span data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">Наша компания ООО «Сибирский орех» была основана в 2015 году. Производство и главный офис расположены в Красноярском крае, что территориально близко к главным местам сбора урожая кедрового ореха в России.</span>
        </div>
      </li>
      <li class=\"about__list-item\">
        <div class=\"about__list-item-wrapper\">
          <h3 data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">«Из Сибири с заботой»</h3>
          <svg width=\"65\" height=\"94\" data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">
            <use xlink:href=\"themes/nuts/assets/images/sprite.svg#cropped-faviconGREEN\"></use>
          </svg>
          <span data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">Мы специализируемся на переработке кедрового ореха, собранного в экологически чистых районах богатой, сибирской тайги. Мы заботимся о качестве нашей продукции, чтобы клиенты могли наполниться настоящим сибирским здоровьем.</span>
        </div>
      </li>
      <li class=\"about__list-item\">
        <div class=\"about__list-item-wrapper\">
          <h3 data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">«Сибирские мощности»</h3>
          <svg width=\"65\" height=\"94\" data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">
            <use xlink:href=\"themes/nuts/assets/images/sprite.svg#cropped-faviconGREEN\"></use>
          </svg>
          <span data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">Основным направлением работы является производство очищенного ядра кедрового ореха. В год мы перерабатываем более 2000 тонн сырья и производим более 800 тонн ядра.</span>
        </div>
      </li>
    </ul>
  </div>
</section>";
    }

    public function getTemplateName()
    {
        return "/Applications/MAMP/htdocs/nuts/themes/nuts/partials/site/about.htm";
    }

    public function getDebugInfo()
    {
        return array (  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<section id=\"layout-content\" class=\"about\" >
  <div class=\"about__container\">
    <ul class=\"about__container-list\">
      <li class=\"about__list-item\">
        <div class=\"about__list-item-wrapper\">
          <h3 data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">«Сибирская компания»</h3>
          <svg width=\"65\" height=\"94\" data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">
            <use xlink:href=\"themes/nuts/assets/images/sprite.svg#cropped-faviconGREEN\"></use>
          </svg>
          <span data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">Наша компания ООО «Сибирский орех» была основана в 2015 году. Производство и главный офис расположены в Красноярском крае, что территориально близко к главным местам сбора урожая кедрового ореха в России.</span>
        </div>
      </li>
      <li class=\"about__list-item\">
        <div class=\"about__list-item-wrapper\">
          <h3 data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">«Из Сибири с заботой»</h3>
          <svg width=\"65\" height=\"94\" data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">
            <use xlink:href=\"themes/nuts/assets/images/sprite.svg#cropped-faviconGREEN\"></use>
          </svg>
          <span data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">Мы специализируемся на переработке кедрового ореха, собранного в экологически чистых районах богатой, сибирской тайги. Мы заботимся о качестве нашей продукции, чтобы клиенты могли наполниться настоящим сибирским здоровьем.</span>
        </div>
      </li>
      <li class=\"about__list-item\">
        <div class=\"about__list-item-wrapper\">
          <h3 data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">«Сибирские мощности»</h3>
          <svg width=\"65\" height=\"94\" data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">
            <use xlink:href=\"themes/nuts/assets/images/sprite.svg#cropped-faviconGREEN\"></use>
          </svg>
          <span data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">Основным направлением работы является производство очищенного ядра кедрового ореха. В год мы перерабатываем более 2000 тонн сырья и производим более 800 тонн ядра.</span>
        </div>
      </li>
    </ul>
  </div>
</section>", "/Applications/MAMP/htdocs/nuts/themes/nuts/partials/site/about.htm", "");
    }
}
