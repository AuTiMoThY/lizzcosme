const entry = 'src';
const output = `dist/public`;


module.exports = {
    project: "lizzcosme",
    port: 8888,
    css: `./${output}/css/style.css`,
    basedir: {
        sass: `./${entry}/sass/`,
        sassImg: `./${output}/images/sass_img/`,
        pug: `./${entry}/pug/`,
        img: `./${output}/images/`
    },
    entryPath: {
        sass: `./${entry}/sass/**/*.scss`,
        sassImg: `${entry}/sass_img/**/*.+(jpeg|jpg|png|gif|svg)`,
        pug: `./${entry}/pug/*.pug`,
        spritesImg: `./${entry}/img_sprite/*.png`,
        spritesSvg: `./${entry}/images/svg/*.svg`,
        js: `./${entry}/script/*.js`,
        imgMinify: `./${entry}/img_minify/*.+(jpeg|jpg|png)`
    },
    outputPath: {
        sass: `./${output}/css/`,
        pug: `./dist/`,
        js: `./${output}/js/`,
        img: `./${output}/images/`
    },
    sassOpt: {
        outputStyle: 'compact',
        includePaths: ['node_modules/']
    },
    pugOpt: {
        "debug": true,
        "pretty": true
    }

}