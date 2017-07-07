<style scoped>
  img{
    width:320px;
    height:200px;
  }
</style>

<template>
  <div>
    <div>
      <div class="panel panel-warning">
        <div class="panel-heading">
          书名:
          <span v-show="!flag">{{book.bookName}}</span>
          <input v-show="flag" type="text" v-model="book.bookName">
        </div>

        <div class="panel-body text-center">
          <img :src="book.bookCover" alt="">
        </div>

        <div class="panel-footer">
          价格:
          <span v-show="!flag">{{book.bookPrice | currency('$')}}</span>
          <input v-show="flag" type="text" v-model="book.bookPrice">
          <button class="btn btn-danger" @click="remove()">删除</button>
          <button class="btn btn-warning" v-show="!flag" @click="edit()">修改</button>
          <button class="btn btn-primary" v-show="flag" @click="update()">确认修改</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    filters:{
      currency(input,param1){
        return param1 + input;
      }
    },
    created(){
      //页面一加载 需要获取数据
      // 跨域 配置代理解决
      var index = this.$route.params.id;
      var arr = [];
      this.$http.get('/book',this.book).then((res)=>{
        arr = res.body;
        console.log(arr);
        arr = arr.filter((item)=>{
            return item.id == index
        });
        this.book = arr[0];
      });
    },
    data(){
      return {
        id: '',
        book:{
            bookName: '',
            bookPrice: '',
            bookCover: ''
        },
        flag: false //默认不修改
      }
    },
    components:{},
    methods: {
      remove(id){
        this.id = this.$route.params.id;
        this.$http.delete('/book?id='+this.id).then((res)=>{
            console.log(res);
            this.$router.push('/list');
        })
      },
      edit(){
          this.flag = true;
      },
      update(id){
          //通过url传递id 数据通过请求体
          //服务端调用res.end就会触发then中的成功的回调
          this.id = this.$route.params.id;
          this.$http.put('/book?id='+this.id,this.book).then((res)=>{
              console.log(res);
              this.flag = false;//vuesource将then中的this处理
          });
      }
    }
  }
</script>
