<template>
  <div>
    <h1 ref="h1" v-visible=false>{{ msg }}</h1>
    <h2>Number: {{ number }}</h2>
    <input v-model="number" type="text" v-focus><br><br>
    <button @click="randomNumber">click</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    msg: 'This is a Vue app.',
    profile: 'Hello universe!',
    number: 0
  }),
  beforeCreate () {
    console.log('before create')
    this.$nextTick(function () {
      console.log('before create next tick')
    })
  },
  created () {
    console.log('created')
    this.$nextTick(function () {
      console.log('created next tick')
    })
  },
  beforeMount () {
    console.log('before mount')
    this.$nextTick(function () {
      console.log('before mount next tick')
    })
  },
  mounted () {
    console.log('mounted')
    this.$nextTick(function () {
      console.log('mounted next tick')
    })
  },
  beforeUpdate () {
    console.log('before update')
    this.$nextTick(function () {
      console.log('before update next tick')
    })
  },
  updated () {
    console.log('updated')
    this.$nextTick(function () {
      console.log('updated next tick')
    })
  },
  beforeDestroy () {
    console.log('before destory')
    this.$nextTick(function () {
      console.log('before destory next tick')
    })
  },
  destoryed () {
    console.log('destoryed')
    this.$nextTick(function () {
      console.log('destoryed next tick')
    })
  },
  methods: {
    randomNumber () {
      this.number = Math.floor(Math.random() * 100)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
