<style scoped>
  img{
    width:150px;
    height:200px;
  }
</style>

<template>
  <div>
    <div class="col-md-3" v-for="book in books">
      <div class="panel panel-warning">
        <div class="panel-heading">书名:{{book.bookName}}</div>

        <div class="panel-body text-center">
          <img :src="book.bookCover" alt="">
        </div>

        <div class="panel-footer">
          价格:{{book.bookPrice | currency('$')}}
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
            books:[
              {
                bookName:"小说",
                bookPrice:30,
                bookCover:'http://g.hiphotos.baidu.com/zhidao/pic/item/d000baa1cd11728b71652922c8fcc3cec3fd2c61.jpg',
                id:1
              },
              {
                bookName:"小说",
                bookPrice:30,
                bookCover:'http://g.hiphotos.baidu.com/zhidao/pic/item/d000baa1cd11728b71652922c8fcc3cec3fd2c61.jpg',
                id:1
              },
              {
                bookName:"小说",
                bookPrice:30,
                bookCover:'http://g.hiphotos.baidu.com/zhidao/pic/item/d000baa1cd11728b71652922c8fcc3cec3fd2c61.jpg',
                id:1
              }
            ]
          }
      },
    components:{},
    methods: {}
  }
</script>

