
module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Creating new releases

        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: ['pkg'],
                commit: true,
                commitMessage: 'chore(release): release v%VERSION%',
                commitFiles: ['package.json', '<%= changelog.options.dest %>'],
                createTag: true,
                tagName: '%VERSION%',
                tagMessage: 'tagging version %VERSION%',
                push: true,
                pushTo: 'origin'
            }
        },

        // Automatic changelogs

        changelog: {
            options: {
                dest: 'CHANGELOG.md',
                prepend: true,
                github: grunt.file.readJSON('./package.json').version,
                editor: 'subl -w'
            }
        },

        'grunt-release': {
            options: {
                bump: false,
                add: false,
                commit: false,
                tag: false,
                push: false,
                pushTags: false,
                npm: true
            }
        },

        // Creating new releases

        release: {
            dryRun: false
        }

    });

    // Load tasks defined in asimov-core's package.json

    require('matchdep').filterDev('grunt-!(cli)').forEach(grunt.loadNpmTasks);

    grunt.renameTask('release', 'grunt-release');

    // Load our custom tasks

    grunt.loadTasks('build/tasks');
};
