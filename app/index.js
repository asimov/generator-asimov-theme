'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var str = require('underscore.string');
var chdir = require('chdir');


var AsimovThemeGenerator = module.exports = function AsimovThemeGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    this.on('end', function() {
        var cb = this.async();
        var that = this;

        this.installDependencies({
            skipInstall: options['skip-install'],
            skipMessage: !options['skip-install'],
            callback: function(err) {
                if (err) {
                    return cb(err);
                }

                chdir('bower_components/asimov-core', function() {
                    that.npmInstall();
                });
            }
        });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(AsimovThemeGenerator, yeoman.generators.Base);

AsimovThemeGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    // have Yeoman greet the user.
    console.log(this.yeoman);

    var prompts = [{
        type: 'input',
        name: 'themeName',
        message: 'What is the name of your theme?'
    }, {
        type: 'input',
        name: 'description',
        message: 'A short description?',
        default: ''
    }, {
        type: 'confirm',
        name: 'contrib',
        message: 'Is this component maintained by the asimov team?',
        default: false
    }, {
        when: function(responses) {
            return !responses.contrib;
        },
        type: 'confirm',
        name: 'strict',
        message: 'Should this theme conform to offical packages?',
        default: true
    }, {
        when: function(responses) {
            return !(responses.contrib || responses.strict);
        },
        type: 'confirm',
        name: 'ie8',
        message: 'Will this component be IE8 compatible?',
        default: true
    }, {
        type: 'confirm',
        name: 'js',
        message: 'Will this component have js?',
        default: false
    }, {
        type: 'confirm',
        name: 'private',
        message: 'Is this component private?',
        default: false
    }];

    this.prompt(prompts, function(props) {
        this.themeName = str.slugify(this.themeNameRaw);
        this.description = props.description.trim();
        this.license = props.license;
        this.contrib = props.contrib;
        this.strict = props.strict;
        this.ie8 = props.ie8;
        this.js = props.js;
        this.private = props.private;

        cb();
    }.bind(this));
};

AsimovThemeGenerator.prototype.app = function app() {
    this.mkdir('src');

    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
};

AsimovThemeGenerator.prototype.jsmain = function app() {
};

AsimovThemeGenerator.prototype.scssmain = function app() {
    this.mkdir('src/scss');
    this.mkdir('src/scss/' + this.componentName);

    this.template('_scss.scss',     'src/scss/' + this.componentName + '.scss');
    this.template('_manifest.scss', 'src/scss/' + this.componentName + '/_manifest.scss');
    this.template('_settings.scss', 'src/scss/' + this.componentName + '/_settings.scss');
};

AsimovThemeGenerator.prototype.docs = function app() {
    this.mkdir('src/docs/assets/scss');

    this.copy('_docs.scss',  'src/docs/assets/scss/docs.scss');
};

AsimovThemeGenerator.prototype.projectfiles = function projectfiles() {
    this.copy('editorconfig', '.editorconfig');
    this.template('_jshintrc', '.jshintrc');
    this.copy('gitignore', '.gitignore');
    this.copy('Gruntfile.js', 'Gruntfile.js');
    this.copy('Gemfile', 'Gemfile');
    this.write('CHANGELOG.md', ' ');
};
