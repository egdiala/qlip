<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          <slot name="header">
            Buy Qlip
          </slot>
          <button
            type="button"
            class="btn-close"
            @click="close"
          >
            x
          </button>
        </header>

        <section class="modal-body">
          <slot name="body">
            <input class="amount-input black--text mt-5" v-model="amount" placeholder="Enter amount in BNB">
          </slot>
         </section>

        <footer class="modal-footer">
          <slot name="footer">

          </slot>
          <button
            type="button"
            class="btn-blue"
            @click="sender"
          >
            Buy
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>


<script>
  export default {
    name: 'Modal',
    props:['sendFunds'],
    data: () => ({
      amount:'',
    }),
    methods: {
      close() {
        this.$emit('close');
      },
      sender(){
        try{
          eval(this.amount);
          this.sendFunds(this.amount);
          this.close();
          this.amount = '';
        }catch(err){
          console.log(err);
        }

      }
    },
  };
</script>


<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 1px 1px 5px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #441EBF;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-blue {
    color: white;
    background: linear-gradient(180deg, #5429E1 0%, #441EBF 100%);
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
  .amount-input{
      border:1px solid #BBBBBB;
      color:black;
  }
</style>
