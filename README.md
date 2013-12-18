# generator-asimov-theme [![Build Status](https://secure.travis-ci.org/asimov/generator-asimov-theme.png?branch=master)](https://travis-ci.org/asimov/generator-asimov-theme)

A generator for [Yeoman](http://yeoman.io).


## Getting Started

### Installing Yeoman?

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository.

```
$ npm install -g yo
```

### Installing the Asimov theme generator

To install generator-asimov-theme from npm, run:

```
$ npm install -g generator-asimov-theme
```

### Building your first theme

Since every every Asimov theme is expected to be a standalone repository we recommend starting by creating your repository and checking it out locally.

Next go into the folder you just checked out and initiate the generator:

```
$ yo asimov-theme
```

You'll be promtped to answer a couple questions to help us generate your theme. These questions are explained below:

**What is the name of your theme?**

A short name for people to find your theme among other things eg. `fluid grid`, `modal`, `awesome forms` etc.

**A short description?**

A short description for people who might be looking to use your theme eg. `A simple grid for Asimov projects` etc.

**Is this theme maintained by the asimov team?**

Is this theme being developed on behalf of the Asimov core team. You should almost always answer no.

**Should this theme conform to offical packages?**

Do you wish for your theme to be held to the same strict coding standards as officially maintained packages. If you answered yes to the previous question you will not be asked this.

**Will this theme be IE8 compatible?**

Do you wish for Asimov's internal code quality checks to alert if something may not work in IE8. This is by no means a silver bullet so be sure to test your themes :) If you answered yes to the previous question you will not be asked this since all official packages enable this.

**Will this theme have js?**

This needs to be true if your theme has javascript otherwise project using this theme wont get your javascript.

**Is this theme private?**

Say `yes` if you want to keep the package private and do not want to register the bower package in future.


The generator will now create the directory structure required for Asimov themes as well as basic `package.json` and `bower.json` files.

Next you will need to initialize npm

```
npm init
```

You should able to accept the defaults values unless you wish to change them. We recommend changing the license to MIT.

You're now ready to start building your theme!

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
