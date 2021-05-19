<template>
  <div class="home">
    <HelloWorld :connectWallet="()=>connectWallet()" :sendFunds="(amount)=>sendFunds(amount)" :showModal="()=>showModal()" :checkSaleAmount="()=>checkSaleAmount()"></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  props:['connectWallet','sendFunds',"showModal",'checkSaleAmount'],
}
</script>
