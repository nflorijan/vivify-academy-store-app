<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col><AppProduct :productId="productId"/></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AppProduct from '@/components/AppProduct.vue'
export default {
  components: {
    AppProduct
  },
  data () {
    return {
       productId: ''
    }
  },
  created () {
    this.productId = Number(this.$route.params.id)
  }
}
</script>