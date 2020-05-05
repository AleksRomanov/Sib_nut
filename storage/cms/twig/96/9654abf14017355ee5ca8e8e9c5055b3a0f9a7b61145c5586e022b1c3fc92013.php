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

/* /Applications/MAMP/htdocs/nuts/themes/nuts/partials/site/productionUnit.htm */
class __TwigTemplate_d0147fb3f7f2c87f27f1d0f692335d6e5f2316cdca71c602adb093d1fe6e77da extends \Twig\Template
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
        echo "<section id=\"layout-content\" class=\"productionUnit\">
  <h2 class=\"visually-hidden\"></h2>
  <div class=\"advantages-box container\">
    <div class=\"advantages-list\">
      <input class=\"visually-hidden\" type=\"radio\" value=\"1\" id=\"advantage-1\" name=\"tog\" checked>
      <input class=\"visually-hidden\" type=\"radio\" value=\"2\" id=\"advantage-2\" name=\"tog\">
      <input class=\"visually-hidden\" type=\"radio\" value=\"3\" id=\"advantage-3\" name=\"tog\">
      <div class=\"advantage-controls\">
        <label class=\"button advantage-controls-item advantage-controls-item--1\" for=\"advantage-1\">Доставка</label>
        <label class=\"button advantage-controls-item advantage-controls-item--2\" for=\"advantage-2\">Гарантия</label>
        <label class=\"button advantage-controls-item advantage-controls-item--3\" for=\"advantage-3\">Кредит</label>
      </div>
      <ul class=\"advantages-items\">
        <li class=\"advantage-item\">
          <h3>Доставка</h3>
          <p>Мы с удовольствием доставим ваш товар прямо к вашему подъезду совершенно бесплатно! Ведь мы неплохо
            заработаем, поднимая его на ваш этаж.</p>
        </li>
        <li class=\"advantage-item\">
          <h3>Гарантия</h3>
          <p>Если из-за возгорания купленного у нас товара у вас сгорит дом — не переживайте, мы выдадим вам
            новый.</p>
          <p>Товар, не дом, конечно же.</p>
        </li>
        <li class=\"advantage-item\">
          <h3>Кредит</h3>
          <p>Залезть в долговую яму стало проще! Кредитные консультанты подберут для вас наиболее выгодные условия
            кредита. Выгодные для нашего банка, разумеется.</p>
        </li>
      </ul>
    </div>
  </div>
</section>";
    }

    public function getTemplateName()
    {
        return "/Applications/MAMP/htdocs/nuts/themes/nuts/partials/site/productionUnit.htm";
    }

    public function getDebugInfo()
    {
        return array (  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<section id=\"layout-content\" class=\"productionUnit\">
  <h2 class=\"visually-hidden\"></h2>
  <div class=\"advantages-box container\">
    <div class=\"advantages-list\">
      <input class=\"visually-hidden\" type=\"radio\" value=\"1\" id=\"advantage-1\" name=\"tog\" checked>
      <input class=\"visually-hidden\" type=\"radio\" value=\"2\" id=\"advantage-2\" name=\"tog\">
      <input class=\"visually-hidden\" type=\"radio\" value=\"3\" id=\"advantage-3\" name=\"tog\">
      <div class=\"advantage-controls\">
        <label class=\"button advantage-controls-item advantage-controls-item--1\" for=\"advantage-1\">Доставка</label>
        <label class=\"button advantage-controls-item advantage-controls-item--2\" for=\"advantage-2\">Гарантия</label>
        <label class=\"button advantage-controls-item advantage-controls-item--3\" for=\"advantage-3\">Кредит</label>
      </div>
      <ul class=\"advantages-items\">
        <li class=\"advantage-item\">
          <h3>Доставка</h3>
          <p>Мы с удовольствием доставим ваш товар прямо к вашему подъезду совершенно бесплатно! Ведь мы неплохо
            заработаем, поднимая его на ваш этаж.</p>
        </li>
        <li class=\"advantage-item\">
          <h3>Гарантия</h3>
          <p>Если из-за возгорания купленного у нас товара у вас сгорит дом — не переживайте, мы выдадим вам
            новый.</p>
          <p>Товар, не дом, конечно же.</p>
        </li>
        <li class=\"advantage-item\">
          <h3>Кредит</h3>
          <p>Залезть в долговую яму стало проще! Кредитные консультанты подберут для вас наиболее выгодные условия
            кредита. Выгодные для нашего банка, разумеется.</p>
        </li>
      </ul>
    </div>
  </div>
</section>", "/Applications/MAMP/htdocs/nuts/themes/nuts/partials/site/productionUnit.htm", "");
    }
}
