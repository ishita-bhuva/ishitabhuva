let mix = require("laravel-mix");
let HtmlWebpackPlugin = require("html-webpack-plugin");
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("src/js/app.js", "dist/js");

mix.combine(
    [
        // "src/vendor/dataTables/datatables.min.js",
        // "src/vendor/jqueryui/jquery-ui.min.js",
        // "src/vendor/sweetalert/sweetalert.min.js",
        // "src/vendor/validate/jquery.validate.min.js"
        // "src/js/site-analytics.js.js",
        "src/js/script.js",
        "src/js/anime.min.js",       
        "src/js/jquery.min.js",  
        "src/vendor/swiper/swiper.js",   
        "src/vendor/masonry/modernizr.custom.js",
        "src/vendor/masonry/masonry.pkgd.min.js",
        "src/vendor/masonry/imagesloaded.js",
        "src/vendor/masonry/classie.js",
        "src/vendor/masonry/AnimOnScroll.js",
        "src/vendor/jquery-smooth-scroll.js",
    ],
    "dist/js/vendor.js"
);

mix.combine(
    [
        "src/vendor/animate/animate.css",
        // "src/vendor/dataTables/datatables.min.css",
        "src/vendor/font-awesome/css/font-awesome.min.css",
        "src/vendor/swiper/swiper.css",   
        "src/vendor/masonry/default.css",
        "src/vendor/masonry/component.css",
        // "src/vendor/jqueryui/jquery-ui.min.css",
        //"src/vendor/sweetalert/sweetalert.css"
    ],
    "dist/css/vendor.css"
).options({
    processCssUrls: false
});

mix.sass("src/sass/app.scss", "dist/css");

mix.copyDirectory("src/vendor/font-awesome/fonts", "dist/fonts");
mix.copyDirectory("src/fonts/", "dist/fonts");

// mix.sourceMaps();
mix.setPublicPath("dist");
mix.copyDirectory("src/images", "dist/images");

mix.disableNotifications();

mix.webpackConfig({
    output: {
        // path: path.join(__dirname, 'dist'),
        publicPath: ""
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "ejs-compiled-loader!./src/index.ejs",
            filename: "index.html",
            inject: false
        }),
        // new HtmlWebpackPlugin({
        //     template: "ejs-compiled-loader!./src/about.ejs",
        //     filename: "about.html",
        //     inject: false
        // }),
        // new HtmlWebpackPlugin({
        //     template: "ejs-compiled-loader!./src/portfolio.ejs",
        //     filename: "portfolio.html",
        //     inject: false
        // })
    ],
    devServer: {
        //hot: true, inline: true, contentBase: __dirname
        disableHostCheck: false,
        watchContentBase: true,
        host: "0.0.0.0",
        open: true
            //port: 8082,
    }
});