## 学习记录

>  git push -u origin master提交时遇到的问题


  报错：fatal: Could not read from remote repository.


  问题原因是：没有生成对应的秘钥


  解决办法：ssh-keygen -t rsa -b 4096 -"676822037@qq.com"

  生成过程中，会让输入enter和密码，在C盘user/.ssh中生成秘钥放到id_rsa.pub，请记住你生成时输入的密码，提交
  时会让你输入

  在github.com的settings中添加生成的秘钥即可。


