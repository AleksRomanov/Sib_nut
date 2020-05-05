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

/* /Applications/MAMP/htdocs/nuts/themes/nuts/partials/site/header.htm */
class __TwigTemplate_a5f5f13a8b8d5a56c00246d1db9baa1abf320d8345dc5666282a4534d197ea26 extends \Twig\Template
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
        echo "<div class=\"page-header\" id=\"layout-header\">
  <div class=\"page-header__wrapper\">
    <div href=\"index.html\" class=\"page-header__logo\" data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">
      <img class=\"page-header__logo-image\" src=\"themes/nuts/assets/images/svg/logo.svg\" width=\"294\" height=\"120\" alt=\"SibNut\" aria-label=\"Главная\">
    </div>
    <div class=\"page-header__contacts\">
      <button class=\"page-header__contact-button\" data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">
        <span>Написать нам</span>
        <svg width=\"53\" height=\"34.78\">
          <use xlink:href=\"themes/nuts/assets/images/sprite.svg#mail\"></use>
        </svg>
      </button>
      <button class=\"page-header__contact-button\" data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">
        <span>Связаться с нами</span>
        <svg width=\"53\" height=\"52\">
          <use xlink:href=\"themes/nuts/assets/images/sprite.svg#phone\"></use>
        </svg>
      </button>
    </div>
    <div class=\"page-header__language-en\" data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">
      <img class=\"page-header__language-en-image\" src=\"themes/nuts/assets/images/svg/EN.svg\" width=\"80\" height=\"45\" alt=\"EN\" aria-label=\"EN\">
    </div>

    <a href=\"#my-menu\" class=\"hamburger hamburger--emphatic\">
      <span class=\"hamburger-box\"><span class=\"hamburger-inner\"></span></span>
    </a>

    <nav id=\"my-menu\">
      <ul>
        <li><a href=\"#section_prices\">Цены!</a></li>
        <li><a href=\"#section_about\">О нас</a></li>
        <li><a href=\"#section_delivery\">Доставка</a></li>
        <li><a href=\"#section_team\">Наша команда </a></li>
        <li><a href=\"#section_partners\">Производители</a></li>
        <li><a href=\"#section_footer\">Мы на карте</a></li>
      </ul>
    </nav>

  </div>

</div>";
    }

    public function getTemplateName()
    {
        return "/Applications/MAMP/htdocs/nuts/themes/nuts/partials/site/header.htm";
    }

    public function getDebugInfo()
    {
        return array (  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div class=\"page-header\" id=\"layout-header\">
  <div class=\"page-header__wrapper\">
    <div href=\"index.html\" class=\"page-header__logo\" data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">
      <img class=\"page-header__logo-image\" src=\"themes/nuts/assets/images/svg/logo.svg\" width=\"294\" height=\"120\" alt=\"SibNut\" aria-label=\"Главная\">
    </div>
    <div class=\"page-header__contacts\">
      <button class=\"page-header__contact-button\" data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">
        <span>Написать нам</span>
        <svg width=\"53\" height=\"34.78\">
          <use xlink:href=\"themes/nuts/assets/images/sprite.svg#mail\"></use>
        </svg>
      </button>
      <button class=\"page-header__contact-button\" data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">
        <span>Связаться с нами</span>
        <svg width=\"53\" height=\"52\">
          <use xlink:href=\"themes/nuts/assets/images/sprite.svg#phone\"></use>
        </svg>
      </button>
    </div>
    <div class=\"page-header__language-en\" data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">
      <img class=\"page-header__language-en-image\" src=\"themes/nuts/assets/images/svg/EN.svg\" width=\"80\" height=\"45\" alt=\"EN\" aria-label=\"EN\">
    </div>

    <a href=\"#my-menu\" class=\"hamburger hamburger--emphatic\">
      <span class=\"hamburger-box\"><span class=\"hamburger-inner\"></span></span>
    </a>

    <nav id=\"my-menu\">
      <ul>
        <li><a href=\"#section_prices\">Цены!</a></li>
        <li><a href=\"#section_about\">О нас</a></li>
        <li><a href=\"#section_delivery\">Доставка</a></li>
        <li><a href=\"#section_team\">Наша команда </a></li>
        <li><a href=\"#section_partners\">Производители</a></li>
        <li><a href=\"#section_footer\">Мы на карте</a></li>
      </ul>
    </nav>

  </div>

</div>", "/Applications/MAMP/htdocs/nuts/themes/nuts/partials/site/header.htm", "");
    }
}
