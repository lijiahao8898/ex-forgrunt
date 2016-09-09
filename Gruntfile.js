/**
 * Created by lijiahao on 16/6/23.
 * grunt 配置文件
 *
 */
// 包装函数
module.exports = function (grunt) {
    // 任务配置，所有插件的配置信息
    grunt.initConfig({

        //获取 package.json 的信息
        pkg: grunt.file.readJSON('package.json'),
        distPath:'html',
        dirPath: '../view/',

        // uglify插件的配置信息
        uglify: {
            options: {
                stripBanners: true,
                banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            minjs: { //最小化、混淆所有 js/ 目录下的 JavaScript 文件
                files: [{
                    expand: true,
                    cwd: 'src/fn',
                    src: ['*.js', '!*.min.js'],
                    dest: '<%= distPath %>/src/fn',
                    ext: '.js'
                }]
            }
        },
        copy: {
            css: {
                files: [{
                    expand:true,
                    cwd: 'style',
                    src: '**',
                    dest: 'html/style'
                }]
            },
            plugin: {
                files: [{
                    expand:true,
                    cwd: 'src/plugin',
                    src: '**',
                    dest: 'html/src/plugin'
                }]
            }
        }

        //uglify: {
        //    /* 最小化、混淆、合并 JavaScript 文件 */
        //    target: {
        //        files: {
        //            'js/all.min.js': ['js/all.js']
        //        }
        //    },
        //    minjs: { //最小化、混淆所有 js/ 目录下的 JavaScript 文件
        //        files: [{
        //            expand: true,
        //            cwd: 'js/',
        //            src: ['**/*.js', '!**/*.min.js'],
        //            dest: 'js/',
        //            ext: '.min.js'
        //        }]
        //    }
        //},

        // jshint插件的配置信息
        //jshint: {
        //    html: ['Gruntfile.js','js/src/*.js'],
        //    option:{
        //        jshintrc: '.jshintrc'
        //    }
        //}

    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks('grunt-contrib-jshint');

    // 告诉grunt 当我们在终端中输入grunt时需要做些什么（注意先后顺序）
    grunt.registerTask('default',['uglify','copy']);
    grunt.registerTask('htmlpack', function () {
        var dir = 'view/'; //源文件的路径
        var destDir = 'html'; //要保存的路径
        var fs = grunt.file;
        var srcArr = [];

        // 读取源文件
        fs.recurse(dir, function(filename){

            var file = fs.read(filename);
            //console.log(filename);
            var include = file.match(/<!--\<include.+?\/\>-->/g);
            var files = file;

            // 替换内容
            if( include ){

                include.forEach(function (item) {

                    var src = item.replace('<!--<include src="../','').replace('" />-->','');
                    srcArr.push(src);

                    if( srcArr ){
                        for ( var i = 0 ; i < srcArr.length; i ++ ){
                            var html = fs.read(src);
                            files = files.replace(item, html);
                        }
                    }

                });
            }
            // 输出文件
            fs.write(destDir+'/'+filename, files);
        })
    });
    grunt.task.run(['htmlpack']);
};