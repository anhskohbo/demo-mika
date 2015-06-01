var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.rubySass('main.scss');

    mix.copy([
        mix.bowerDir+'/animate.css/animate.css'
    ], mix.cssOutput);

    mix.copy([
        mix.bowerDir+'/font-awesome/fonts',
        mix.bowerDir+'/slick.js/slick/fonts',
        mix.bowerDir+'/bootstrap-sass/assets/fonts/bootstrap',
    ], 'fonts');

    mix.scripts([
        'jquery/dist/jquery.min.js',
        'bootstrap-sass/assets/javascripts/bootstrap.min.js',
        'slick.js/slick/slick.min.js',
        'wow.js/dist/wow.min.js',
        'parallax.js/parallax.min.js',
    ], mix.jsOutput+'/vendor.js', mix.bowerDir);
});
