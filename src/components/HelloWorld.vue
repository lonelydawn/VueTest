<template>
  <div>
    <h1 ref="h1">{{ msg }}</h1>
    <h2>Number: {{ number }}</h2>
    <input v-model="number" type="text"><br><br>
    <button @click="randomNumber">click</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    msg: 'This is a Vue app.',
    number: 0
  }),
  methods: {
    randomNumber () {
      this.number = Math.floor(Math.random() * 100)
    }
  }
}
</script>
