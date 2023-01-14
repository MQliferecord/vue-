<template>
  <div>
     <a :title="title">
        <el-button v-bind="$attrs" v-on="$listeners">添加</el-button>
     </a>
  </div>
</template>

<script>
export default {
  name: "",
  props:['title'],
  mounted(){
    console.log(this.$attrs);
    console.log(this.$listeners);
  }
};
</script>

<style scoped></style>