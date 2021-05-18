<template>
  <div class="home">
    <HelloWorld :connectWallet="()=>connectWallet()" :sendFunds="(amount)=>sendFunds(amount)" :showModal="()=>showModal()"></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  props:['connectWallet','sendFunds',"showModal"],
}
</script>
