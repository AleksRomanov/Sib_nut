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

/* /Applications/MAMP/htdocs/nuts/themes/nuts/layouts/default.htm */
class __TwigTemplate_9c421e739713c2b3f0c5da2c7f3731cc48725a2af609393eb1bd8315c64caffb extends \Twig\Template
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
        echo "<!DOCTYPE html>
<html>
    <head>
        <meta charset=\"utf-8\">
        <title>";
        // line 5
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "page", [], "any", false, false, false, 5), "title", [], "any", false, false, false, 5), "html", null, true);
        echo "</title>
        <meta name=\"description\" content=\"";
        // line 6
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "page", [], "any", false, false, false, 6), "meta_description", [], "any", false, false, false, 6), "html", null, true);
        echo "\">
        <meta name=\"title\" content=\"";
        // line 7
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["this"] ?? null), "page", [], "any", false, false, false, 7), "meta_title", [], "any", false, false, false, 7), "html", null, true);
        echo "\">
        <meta name=\"author\" content=\"OctoberCMS\">
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
        <meta name=\"generator\" content=\"OctoberCMS\">
        <link rel=\"icon\" type=\"image/png\" href=\"";
        // line 11
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/images/october.png");
        echo "\">
<!--        <link href=\"";
        // line 12
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/css/vendor.css");
        echo "\" rel=\"stylesheet\">-->
        <link href=\"";
        // line 13
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/css/theme.min.css");
        echo "\" rel=\"stylesheet\">

        ";
        // line 15
        echo $this->env->getExtension('Cms\Twig\Extension')->assetsFunction('css');
        echo $this->env->getExtension('Cms\Twig\Extension')->displayBlock('styles');
        // line 16
        echo "    </head>
    <body>
        <!-- Sprite -->
        ";
        // line 19
        $context['__cms_partial_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction("sprite"        , $context['__cms_partial_params']        , true        );
        unset($context['__cms_partial_params']);
        // line 20
        echo "
        ";
        // line 21
        $context['__cms_partial_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction("site/header"        , $context['__cms_partial_params']        , true        );
        unset($context['__cms_partial_params']);
        // line 22
        echo "
        <!-- Content -->
        <div>
            ";
        // line 25
        echo $this->env->getExtension('Cms\Twig\Extension')->pageFunction();
        // line 26
        echo "        </div>
        <!-- Footer -->
        <footer id=\"layout-footer\">
            ";
        // line 29
        $context['__cms_partial_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction("site/footer"        , $context['__cms_partial_params']        , true        );
        unset($context['__cms_partial_params']);
        // line 30
        echo "        </footer>

        <!-- Scripts -->
        <script src=\"";
        // line 33
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/js/libs/jquery.js");
        echo "\"></script>
        <script src=\"";
        // line 34
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/js/libs/mmenu.js");
        echo "\"></script>
<!--        <script src=\"";
        // line 35
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/js/libs/swiper.js");
        echo "\"></script>-->
<!--        <script src=\"";
        // line 36
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/js/libs/mmenu/jquery.mmenu.js");
        echo "\"></script>-->
<!--        <script src=\"";
        // line 37
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/js/libs/mmenu/jquery.mmenu.all.js");
        echo "\"></script>-->
<!--        <script src=\"";
        // line 38
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/js/libs/mmenu/jquery.mmenu.debugger.js");
        echo "\"></script>-->


        <script src=\"";
        // line 41
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/js/libs/sal.js");
        echo "\"></script>
<!--        <script src=\"";
        // line 42
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/vendor/bootstrap.js");
        echo "\"></script>-->
        <script src=\"";
        // line 43
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/js/app.js");
        echo "\"></script>


        ";
        // line 46
        $_minify = System\Classes\CombineAssets::instance()->useMinify;
        if ($_minify) {
            echo '<script src="' . Request::getBasePath() . '/modules/system/assets/js/framework.combined-min.js"></script>'.PHP_EOL;
        }
        else {
            echo '<script src="' . Request::getBasePath() . '/modules/system/assets/js/framework.js"></script>'.PHP_EOL;
            echo '<script src="' . Request::getBasePath() . '/modules/system/assets/js/framework.extras.js"></script>'.PHP_EOL;
        }
        echo '<link rel="stylesheet" property="stylesheet" href="' . Request::getBasePath() .'/modules/system/assets/css/framework.extras'.($_minify ? '-min' : '').'.css">'.PHP_EOL;
        unset($_minify);
        // line 47
        echo "        ";
        echo $this->env->getExtension('Cms\Twig\Extension')->assetsFunction('js');
        echo $this->env->getExtension('Cms\Twig\Extension')->displayBlock('scripts');
        // line 48
        echo "
    </body>
</html>";
    }

    public function getTemplateName()
    {
        return "/Applications/MAMP/htdocs/nuts/themes/nuts/layouts/default.htm";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  166 => 48,  162 => 47,  151 => 46,  145 => 43,  141 => 42,  137 => 41,  131 => 38,  127 => 37,  123 => 36,  119 => 35,  115 => 34,  111 => 33,  106 => 30,  102 => 29,  97 => 26,  95 => 25,  90 => 22,  86 => 21,  83 => 20,  79 => 19,  74 => 16,  71 => 15,  66 => 13,  62 => 12,  58 => 11,  51 => 7,  47 => 6,  43 => 5,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<!DOCTYPE html>
<html>
    <head>
        <meta charset=\"utf-8\">
        <title>{{ this.page.title }}</title>
        <meta name=\"description\" content=\"{{ this.page.meta_description }}\">
        <meta name=\"title\" content=\"{{ this.page.meta_title }}\">
        <meta name=\"author\" content=\"OctoberCMS\">
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
        <meta name=\"generator\" content=\"OctoberCMS\">
        <link rel=\"icon\" type=\"image/png\" href=\"{{ 'assets/images/october.png'|theme }}\">
<!--        <link href=\"{{ 'assets/css/vendor.css'|theme }}\" rel=\"stylesheet\">-->
        <link href=\"{{ 'assets/css/theme.min.css'|theme }}\" rel=\"stylesheet\">

        {% styles %}
    </head>
    <body>
        <!-- Sprite -->
        {% partial 'sprite' %}

        {% partial 'site/header' %}

        <!-- Content -->
        <div>
            {% page %}
        </div>
        <!-- Footer -->
        <footer id=\"layout-footer\">
            {% partial 'site/footer' %}
        </footer>

        <!-- Scripts -->
        <script src=\"{{ 'assets/js/libs/jquery.js'|theme }}\"></script>
        <script src=\"{{ 'assets/js/libs/mmenu.js'|theme }}\"></script>
<!--        <script src=\"{{ 'assets/js/libs/swiper.js'|theme }}\"></script>-->
<!--        <script src=\"{{ 'assets/js/libs/mmenu/jquery.mmenu.js'|theme }}\"></script>-->
<!--        <script src=\"{{ 'assets/js/libs/mmenu/jquery.mmenu.all.js'|theme }}\"></script>-->
<!--        <script src=\"{{ 'assets/js/libs/mmenu/jquery.mmenu.debugger.js'|theme }}\"></script>-->


        <script src=\"{{ 'assets/js/libs/sal.js'|theme }}\"></script>
<!--        <script src=\"{{ 'assets/vendor/bootstrap.js'|theme }}\"></script>-->
        <script src=\"{{ 'assets/js/app.js'|theme }}\"></script>


        {% framework extras %}
        {% scripts %}

    </body>
</html>", "/Applications/MAMP/htdocs/nuts/themes/nuts/layouts/default.htm", "");
    }
}
