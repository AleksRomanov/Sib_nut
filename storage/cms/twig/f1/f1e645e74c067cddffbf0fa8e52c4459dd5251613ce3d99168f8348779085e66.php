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
        <link href=\"";
        // line 12
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/css/theme.min.css");
        echo "\" rel=\"stylesheet\">

        ";
        // line 14
        echo $this->env->getExtension('Cms\Twig\Extension')->assetsFunction('css');
        echo $this->env->getExtension('Cms\Twig\Extension')->displayBlock('styles');
        // line 15
        echo "    </head>
    <body>
        <!-- Sprite -->
        ";
        // line 18
        $context['__cms_partial_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction("sprite"        , $context['__cms_partial_params']        , true        );
        unset($context['__cms_partial_params']);
        // line 19
        echo "
        ";
        // line 20
        $context['__cms_partial_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction("site/header"        , $context['__cms_partial_params']        , true        );
        unset($context['__cms_partial_params']);
        // line 21
        echo "
        <!-- Content -->
        <div>
            ";
        // line 24
        echo $this->env->getExtension('Cms\Twig\Extension')->pageFunction();
        // line 25
        echo "        </div>
        <!-- Footer -->
        <footer id=\"layout-footer\">
            ";
        // line 28
        $context['__cms_partial_params'] = [];
        echo $this->env->getExtension('Cms\Twig\Extension')->partialFunction("site/footer"        , $context['__cms_partial_params']        , true        );
        unset($context['__cms_partial_params']);
        // line 29
        echo "        </footer>

        <!-- Scripts -->
        <script src=\"";
        // line 32
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/js/libs/jquery.js");
        echo "\"></script>
        <script src=\"";
        // line 33
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/js/libs/mmenu.js");
        echo "\"></script>
<!--        <script src=\"";
        // line 34
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/js/libs/swiper.js");
        echo "\"></script>-->
<!--        <script src=\"";
        // line 35
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/js/libs/swiper.js");
        echo "\"></script>-->
        <!-- Swiper JS -->
        <script src=\"";
        // line 37
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/js/libs/swiper.min.js");
        echo "\"></script>

        <!-- Initialize Swiper -->
        <script>
            var swiper = new Swiper('.swiper-container');
        </script>


        <script src=\"";
        // line 45
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/js/libs/sal.js");
        echo "\"></script>
<!--        <script src=\"";
        // line 46
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/vendor/bootstrap.js");
        echo "\"></script>-->
        <script src=\"";
        // line 47
        echo $this->extensions['Cms\Twig\Extension']->themeFilter("assets/js/app.js");
        echo "\"></script>



        ";
        // line 51
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
        // line 52
        echo "        ";
        echo $this->env->getExtension('Cms\Twig\Extension')->assetsFunction('js');
        echo $this->env->getExtension('Cms\Twig\Extension')->displayBlock('scripts');
        // line 53
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
        return array (  165 => 53,  161 => 52,  150 => 51,  143 => 47,  139 => 46,  135 => 45,  124 => 37,  119 => 35,  115 => 34,  111 => 33,  107 => 32,  102 => 29,  98 => 28,  93 => 25,  91 => 24,  86 => 21,  82 => 20,  79 => 19,  75 => 18,  70 => 15,  67 => 14,  62 => 12,  58 => 11,  51 => 7,  47 => 6,  43 => 5,  37 => 1,);
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
<!--        <script src=\"{{ 'assets/js/libs/swiper.js'|theme }}\"></script>-->
        <!-- Swiper JS -->
        <script src=\"{{ 'assets/js/libs/swiper.min.js'|theme }}\"></script>

        <!-- Initialize Swiper -->
        <script>
            var swiper = new Swiper('.swiper-container');
        </script>


        <script src=\"{{ 'assets/js/libs/sal.js'|theme }}\"></script>
<!--        <script src=\"{{ 'assets/vendor/bootstrap.js'|theme }}\"></script>-->
        <script src=\"{{ 'assets/js/app.js'|theme }}\"></script>



        {% framework extras %}
        {% scripts %}

    </body>
</html>", "/Applications/MAMP/htdocs/nuts/themes/nuts/layouts/default.htm", "");
    }
}
