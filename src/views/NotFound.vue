<template lang="pug">
#notfound.text-center
  h1 找不到
  b-btn(size='lg' variant='primary' @click='gohome') 回首頁

</template>
<script>
export default {
  methods: {
    gohome () {
      // $router.push把使用者引導至別頁
      this.$router.push('/')
    }
  }
}
</script>
