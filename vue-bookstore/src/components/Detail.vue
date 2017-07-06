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
        <div class="panel-heading">书名:{{book.bookName}}</div>

        <div class="panel-body text-center">
          <img :src="book.bookCover" alt="">
        </div>

        <div class="panel-footer">
          价格:{{book.bookPrice | currency('$')}}
          <button class="btn btn-danger" @click="remove()">删除1111</button>
          <button class="btn btn-warning" @click="edit()">修改</button>
          <button class="btn btn-primary" @click="submit()">确定</button>
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
        }
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

      },
      submit(){

      }
    }
  }
</script>
