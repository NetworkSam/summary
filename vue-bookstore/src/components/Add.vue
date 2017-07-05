<style>

</style>

<template>
  <div>
    <div class="form-group">
      <label for="bookName">书的名称</label>
      <input id="bookName" type="text" class="control-form" placeholder="请输入图书名称" autocomplete="off" v-model="book.bookName">
    </div>

    <div class="form-group">
      <label for="bookPrice">书的价格</label>
      <input id="bookPrice" type="text" class="control-form" placeholder="请输入图书价格" autocomplete="off" v-model="book.bookPrice">
    </div>

    <div class="form-group">
      <label for="bookPrice">书的封面</label>
      <input id="bookPrice" type="text" class="control-form" placeholder="请输入价格" autocomplete="off" v-model="book.bookCover">
    </div>

    <div class="form-group">
      <button type="buttom" class="btn btn-primary" @click="add">添加图书</button>
    </div>


  </div>
</template>

<script>
  export default {
    methods: {
      add(){
//        this.book
      }
    },
    data(){
      return {
        book: {
          bookName:'',
          bookPrice: '',
          bookCover: ''
        }
      }
    }
  }
</script>

