<template lang="pug">
b-card.card-product(:title="productA.name" :img-src="productA.image")
  b-card-text {{productA.price}}元
  //- variant='顏色'
  b-button(variant='primary' @click="addCart")
    font-awesome-icon(:icon="['fas','cart-arrow-down']")
    | &nbsp;加入購物車
</template>

<script>
export default {
  props: {
    productA: {
      type: Object,
      default () {
        return {
          id: 0,
          name: '',
          price: 0,
          image: ''
        }
      }
    }
  },
  methods: {
    addCart () {
      // this.$store.commit(呼叫mutation)(mutations名稱，傳入的資料)
      this.$store.commit('addCart', this.productA.id)
      this.$swal({
        icon: 'success',
        title: '成功',
        text: '加入購物車'
      })
    }
  }
}
</script>
