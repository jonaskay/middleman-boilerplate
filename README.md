# Middleman Boilerplate

## About

This is a [Middleman](https://middlemanapp.com/) project template using [gulp](https://gulpjs.com/), [PostCSS](https://postcss.org/), and [Tailwind CSS](https://tailwindcss.com/docs/what-is-tailwind/) with Middleman's `external_pipeline` feature. This template is based on the [Default Middleman Project Template](https://github.com/middleman/middleman-templates-default), but it's built to support my workflow and preferred tooling.

### Additional tooling

* [Middleman-Livereload](https://github.com/middleman/middleman-livereload) for LiveReload support
* [gulp](https://gulpjs.com/) for automating build tasks
* [PostCSS](https://postcss.org/)
  * [postcss-import](https://github.com/postcss/postcss-import) for `@import` rules
  * [cssnext](http://cssnext.io/) for the latest CSS syntax support
  * [cssnano](https://cssnano.co/) for CSS compression
* [Tailwind CSS](https://tailwindcss.com/docs/what-is-tailwind/)

## Getting Started

### Requirements

* [Middleman 4.x](https://middlemanapp.com/basics/install/)
* [Ruby](https://www.ruby-lang.org/en/)
* [Bundler](http://bundler.io/)
* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/lang/en/)
* [gulp-cli](https://gulpjs.com/)

### Start a New Project

Start a new Middleman project using this template:

    $ middleman init mysite -T jonaskay/middleman-boilerplate

Change into the project root:

    $ cd mysite

## Acknowledgements

This project template uses code from the following libraries:
* <https://github.com/middleman/middleman-templates-default>

The following repositories have been helpful in setting up this project:
* <https://github.com/joshukraine/middleman-gulp>
