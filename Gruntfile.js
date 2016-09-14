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
        distPath: 'html',
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
                    cwd: 'html/src/fn',
                    src: ['*.debug.js', '!*.min.js'],
                    dest: '<%= distPath %>/src/fn',
                    ext: '.js'
                }]
            }
        },
        copy: {
            //css: {
            //    files: [{
            //        expand: true,
            //        cwd: 'style',
            //        src: '**',
            //        dest: 'html/style'
            //    }]
            //},
            plugin: {
                files: [{
                    expand: true,
                    cwd: 'src/plugin',
                    src: '**',
                    dest: 'html/src/plugin'
                }]
            }
        },
        // 压缩css
        cssmin: {
            //文件头部输出信息
            options: {
                banner: '/*! <%=pkg.name%>-<%=pkg.version%>.css <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                //美化代码
                beautify: {
                    //中文ascii化，非常有用！防止中文乱码的神配置
                    ascii_only: true
                }
            },
            mincss: {
                files: [
                    {
                        expand: true,
                        //相对路径
                        cwd: 'html/style/',
                        src: ['*.debug.css', '!*.min.css'],
                        dest: '<%= distPath %>/style',
                        ext: '.css'
                    }
                ]
            }
        },
        clean: {
            cleanoutput: {
                files: [{
                    src: 'html'
                }]
            }
        },
        filerev: {
            js: {
                src: ['html/src/fn/*.js','!html/src/fn/*.debug.js'],
                dest: 'html/src/fn/'
            },
            css: {
                src: ['html/style/*.css','!html/style/*.debug.css'],
                dest: 'html/style'
            }
        },
        usemin: {
            html: {
                files:{
                    src:['html/view/*.html']
                }
            },
            options:{
                assetsDirs: [ 'html/src','html/view' ]
            }

        },
        concat: {
            options: {
                separator: '\n'
            },
            js: {
                files:{
                    '<%= distPath %>/src/fn/boss_add_menu.debug.js': [
                        'src/fn/common/boss_common.js',
                        'src/fn/common/boss_handle.js',
                        'src/fn/boss_add_menu.js'
                    ],
                    '<%= distPath %>/src/fn/boss_add_version.debug.js': [
                        'src/fn/common/boss_common.js',
                        'src/fn/common/boss_handle.js',
                        'src/fn/boss_add_version.js'
                    ],
                    '<%= distPath %>/src/fn/boss_bal_o_count.debug.js': [
                        'src/fn/common/boss_common.js',
                        'src/fn/common/boss_handle.js',
                        'src/fn/boss_bal_o_count.js'
                    ],
                    '<%= distPath %>/src/fn/boss_cz_history.debug.js': [
                        'src/fn/common/boss_common.js',
                        'src/fn/common/boss_handle.js',
                        'src/fn/boss_cz_history.js'
                    ],
                    '<%= distPath %>/src/fn/boss_massage.debug.js': [
                        'src/fn/common/boss_common.js',
                        'src/fn/common/boss_handle.js',
                        'src/fn/boss_massage.js'
                    ],
                    '<%= distPath %>/src/fn/boss_massage_send.debug.js': [
                        'src/fn/common/boss_common.js',
                        'src/fn/common/boss_handle.js',
                        'src/fn/boss_massage_send.js'
                    ],
                    '<%= distPath %>/src/fn/boss_menu_management.debug.js': [
                        'src/fn/common/boss_common.js',
                        'src/fn/common/boss_handle.js',
                        'src/fn/boss_menu_management.js'
                    ],
                    '<%= distPath %>/src/fn/boss_menu_management_group.debug.js': [
                        'src/fn/common/boss_common.js',
                        'src/fn/common/boss_handle.js',
                        'src/fn/boss_menu_management_group.js'
                    ],
                    '<%= distPath %>/src/fn/boss_payment.debug.js': [
                        'src/fn/common/boss_common.js',
                        'src/fn/common/boss_handle.js',
                        'src/fn/boss_payment.js'
                    ],
                    '<%= distPath %>/src/fn/boss_payment_detail.debug.js': [
                        'src/fn/common/boss_common.js',
                        'src/fn/common/boss_handle.js',
                        'src/fn/boss_payment_detail.js'
                    ],
                    '<%= distPath %>/src/fn/boss_version_list.debug.js': [
                        'src/fn/common/boss_common.js',
                        'src/fn/common/boss_handle.js',
                        'src/fn/boss_version_list.js'
                    ]
                }
            },
            css:{
                files:{
                    '<%= distPath %>/style/common.debug.css': [
                        'style/common.css',
                        'style/header.css',
                        'style/sidebar.css',
                        'style/container.css',
                        'style/cxcalendar.css',
                        'style/pagination.css'
                    ]
                }
            }
        }

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
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-concat');

    //grunt.loadNpmTasks('grunt-contrib-jshint');

    // 告诉grunt 当我们在终端中输入grunt时需要做些什么（注意先后顺序）
    grunt.registerTask('default', function () {
        grunt.task.run('build');
        grunt.task.run('htmlpack');
        grunt.task.run('hash')
    });
    grunt.registerTask('build', [
        'clean',
        'copy',
        'concat',
        'cssmin',
        'uglify',
        'filerev'
    ]);
    grunt.registerTask('htmlpack', function () {
        var dir = 'view/';      //源文件的路径
        var destDir = 'html';   //要保存的路径
        var fs = grunt.file;
        var srcArr = [];

        // 读取源文件
        fs.recurse(dir, function (filename) {

            var file = fs.read(filename);
            //console.log(filename);
            var include = file.match(/<!--\<include.+?\/\>-->/g);
            var files = file;

            // 替换内容
            if (include) {

                include.forEach(function (item) {

                    var src = item.replace('<!--<include src="../', '').replace('" />-->', '');
                    srcArr.push(src);

                    if (srcArr) {
                        for (var i = 0; i < srcArr.length; i++) {
                            var html = fs.read(src);
                            files = files.replace(item, html);
                        }
                    }

                });
            }
            // 输出文件
            fs.write(destDir + '/' + filename, files);
        })
    });
    grunt.registerTask('hash',['usemin']);
    //grunt.task.run('htmlpack');
};
