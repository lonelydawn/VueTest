<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ profile }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Instance',
    data () {
      return {
        title: 'A Vue App',
        profile: ''
      }
    },
    created () {
      Object.assign(this.$data, { // 为对象赋值属性，没有则添加属性，有则覆盖原有属性值
        profile: 'This is a Vue App'
      })
      console.log(this.$data)
    }
  }
</script>
