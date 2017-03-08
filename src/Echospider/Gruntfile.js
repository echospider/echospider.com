/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({

        clean: ["wwwroot/app/*"],
        copy: {
            main: {
                files: [{
                    cwd: 'Scripts/app/',
                    expand: true,
                    src: ['**/*.js', '**/*.html'],
                    dest: 'wwwroot/app/'
                }]
            }
        },
        watch: {
            expand: true,
            files: ['Scripts/app/*.js', 'Scripts/app/*.html'],
            tasks: ['copy']
        }

    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.registerTask('All', ['clean', 'copy', 'watch']);
};

