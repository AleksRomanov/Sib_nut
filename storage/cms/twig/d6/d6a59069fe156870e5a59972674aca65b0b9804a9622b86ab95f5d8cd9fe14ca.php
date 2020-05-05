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

/* /Applications/MAMP/htdocs/nuts/themes/nuts/partials/site/teaser.htm */
class __TwigTemplate_ad840cfdb5138e1a657daf6ec525643263fc89032be2a19aa82027e4d5608b67 extends \Twig\Template
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
        echo "<section id=\"layout-content\" class=\"teaser\">
  <div class=\"teaser__container\" data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">
    <div class=\"teaser__utp-wrapper\">
      <h1 class=\"teaser__title\">ЯДРО КЕДРОВОГО ОРЕХА</h1>
      <span>от производителя</span>
      <button class=\"teaser__button\">СДЕЛАТЬ ЗАКАЗ</button>
    </div>
  </div>
  <div class=\"teaser__address\" data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">
    <span class=\"teaser-container__adress\">Г. Красноярск, пгт. Березовка, ул. Трактовая 64А</span>
  </div>
</section>";
    }

    public function getTemplateName()
    {
        return "/Applications/MAMP/htdocs/nuts/themes/nuts/partials/site/teaser.htm";
    }

    public function getDebugInfo()
    {
        return array (  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<section id=\"layout-content\" class=\"teaser\">
  <div class=\"teaser__container\" data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">
    <div class=\"teaser__utp-wrapper\">
      <h1 class=\"teaser__title\">ЯДРО КЕДРОВОГО ОРЕХА</h1>
      <span>от производителя</span>
      <button class=\"teaser__button\">СДЕЛАТЬ ЗАКАЗ</button>
    </div>
  </div>
  <div class=\"teaser__address\" data-sal=\"slide-up\" data-sal-duration=\"2000\" data-sal-easing=\"ease-out-back\">
    <span class=\"teaser-container__adress\">Г. Красноярск, пгт. Березовка, ул. Трактовая 64А</span>
  </div>
</section>", "/Applications/MAMP/htdocs/nuts/themes/nuts/partials/site/teaser.htm", "");
    }
}
