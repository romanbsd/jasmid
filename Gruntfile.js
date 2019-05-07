module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            jasmid: {
                src: ['audio.js', 'midifile.js', 'replayer.js', 'stream.js', 'synth.js'],
                dest: 'dist/jasmid.js',
                options: {
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-browserify');
    grunt.registerTask('default', ['browserify']);
};
