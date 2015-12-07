module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
		stripBanners: true
      },
      dist: {
        src: ['js_dev/lib/*.js',
				'js_dev/model/**/*.js',
				'js_dev/input/**/*.js',
				 'js_dev/gui/**/*.js',
				 'js_dev/main.js'],
		dest: 'js/main.js'        
      }
    },
	
	clean: {
		fatjs: ['js/*.js', '!js/*.min.js']
	},
	
	uglify: {
		build: {
			src: 'js/main.js',
			dest: 'js/main.min.js'
		}
	},
	
	copy: {
	  backup: {
		src: ['css/**', 'data/**', 'data_dev/**', 'js/**', 'js_dev/**', '*.*'],
		dest: 'z:/games/aorbiter/'
	  }
	},

	clean: {
		fatjs: ['js/*.js', '!js/*.min.js']
	}
	
  }); // The end of grunt.initConfig
  
  // We've set up each task's configuration.
  // Now actually load the tasks.
  // This will do a lookup similar to node's require() function.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  // Register our own custom task alias.
  grunt.registerTask('compile',      ['concat', 'uglify', 'clean:fatjs']);
  grunt.registerTask('compiletest', ['concat']);
  grunt.registerTask('backup', ['copy:backup']);
};
