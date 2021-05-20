<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col><AppCustomers/></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AppCustomers from '@/components/AppCustomers.vue'
export default {
  components: {
    AppCustomers
  }
}
</script>