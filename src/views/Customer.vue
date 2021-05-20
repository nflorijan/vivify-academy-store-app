<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col><AppCustomer :customerId="customerId"/></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AppCustomer from '@/components/AppCustomer.vue'
export default {
  components: {
    AppCustomer
  },
  data() {
    return {
      customerId: ''
    }
  },
  created () {
    this.customerId = Number(this.$route.params.id)
  }
}
</script>