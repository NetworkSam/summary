## 学习记录

>  git push -u origin master提交时遇到的问题

  报错：fatal: Could not read from remote repository.

  问题原因是：没有生成对应的秘钥

  解决办法：ssh-keygen -t rsa -b 4096 -"676822037@qq.com"

  生成过程中，会让输入enter和密码，在C盘user/.ssh中生成秘钥放到id_rsa.pub，请记住你生成时输入的密码，提交
  时会让你输入

  在github.com的settings中添加生成的秘钥即可。


##前端项目问题汇总
```
bookstore detail路由
```
```
bookstore 额外功能：点击加载更多，后台怎么处理？
```
```
后台怎么做反射 缺少字段
```
```
vuex原理和使用以及运用场景
```

```
bootstrap原理和怎么快速开发样式
```

```
对应单独web项目怎么搭建一个项目
文件的压缩和处理
图片资源的处理
一键上传和发布
```


```
js继承
```


```
开发一个组件，可以用js外链引入，怎么做到类似jquery各种引入方式
```

## JS相关
```
ES6有哪些特性

参考链接:http://www.cnblogs.com/Wayou/p/es6_new_features.html
```

```
JS对象浅复制、深度克隆

参考链接:http://www.jianshu.com/p/0d7bd31ccf43
```

```
箭头函数和普通函数的区别

```

```
super的特性
```

```
异步的解决方案以及优缺点
```

```
generator
```

## 框架相关
```
react vue angular对比  图标对比
```
```
mv*框架原理
```

```
图表相关框架对比
```

## css相关
```
line-height问题
```
```
垂直居中
```
```
两列布局
```
```
三列布局
```
```
IFC和BFC
```


## 浏览器相关

```
跨域解决方案及优缺点
```
```
浏览器渲染原理
```
```
如何理解js的单线程
```

## 安全相关知识
```
常见的安全漏洞xss csrf ssrf url跳转以及防御的方法
```
```
https是的相关知识
```

## 其它

```
排序和背包算法
```









