# ex-forgrunt
学习grunt并实际应用。

[grunt中文网](http://www.gruntjs.net/)http://www.gruntjs.net/
[傻瓜教程](http://developer.51cto.com/art/201506/479127_2.htm)http://developer.51cto.com/art/201506/479127_2.htm

## grunt插件

* grunt插件有2部分：

1. 第一类是grunt团队贡献的插件，这些插件的名字前面都带有“contrib-”前缀，而且在插件列表中有星号标注
2. 第二类是第三方提供的插件，不带有这两个特征。


* grunt常用的插件：

1. Contrib-jshint —— javascript语法错误检查；
2. Contrib-watch  —— 实时监控文件变化、调用相应的任务重新执行；
3. Contrib-clean  —— 清空文件、文件夹
4. Contrib-uglify —— 压缩javascript代码
5. Contrib-copy   —— 复制文件、文件夹
6. Contrib-concat —— 合并多个文件的代码到一个文件中
7. karma          —— 前端自动化测试工具
8. Contrib-cssmin —— 压缩css代码
9. filerev        —— 给文件增加md5的后缀名（重命名文件）类似于增加时间戳
10. usemin        —— 替换html的引用 如果有filerev后的文件则优先使用

  表头         | 表头
  -------------| -------------
Contrib-jshint | javascript语法错误检查；
Contrib-watch  | 实时监控文件变化、调用相应的任务重新执行；
Contrib-clean  | 清空文件、文件夹
Contrib-uglify | 压缩javascript代码
Contrib-copy   | 复制文件、文件夹
Contrib-concat | 合并多个文件的代码到一个文件中
karma          | 前端自动化测试工具
Contrib-cssmin | 压缩css代码
filerev        | 给文件增加md5的后缀名（重命名文件）类似于增加时间戳
usemin         | 替换html的引用 如果有filerev后的文件则优先使用

