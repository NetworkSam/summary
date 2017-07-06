<style scoped>
  img{
    width: 100%;
    height: auto;
  }
</style>

<template>
  <div>
    <div class="col-md-4" v-for="(book,index) in books">
      <div class="panel panel-warning">
        <div class="panel-heading">书名:{{book.bookName}}</div>
        <div class="panel-body text-center">
          <img :src="book.bookCover" alt="">
        </div>
        <div class="panel-footer">
          价格:{{book.bookPrice | currency('$')}}
          <router-link :to="{ name:'Detail',params: book.id}">详情</router-link>
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
      data(){
          return {
            books:[]
          }
      },
    components:{

    },
    methods: {

    },
    created(){
      // 跨域 配置代理解决
      this.$http.get('/book',this.book).then((res)=>{
        this.books=res.body;
      });
    }
  }
</script>

<!--{
"bookName": "Book1",
"bookPrice": 10,
"bookCover": "http://g.hiphotos.baidu.com/zhidao/pic/item/d000baa1cd11728b71652922c8fcc3cec3fd2c61.jpg",
"id": 1
}-->
