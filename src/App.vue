<template>
  <v-app>
    <v-app-bar :style="{background: $vuetify.theme.themes.dark.background}"
      app
      dark flat
    >
    <v-app-bar-nav-icon v-if="isMobile" @click="overlay = !overlay"></v-app-bar-nav-icon>
      <div class="ml-5 d-flex align-center">
        <v-img
          alt="QLIP Logo"
          class="mr-2"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="21"
        />
        <v-app-bar-title>QLIP</v-app-bar-title>
      </div>

      <v-spacer v-if="!isMobile"></v-spacer>
      <div class="mr-5" v-if="!isMobile">
        <v-btn href="#mintstore" text plain :ripple="false">
          <span class="font-weight-light text-capitalize white--text">Mint Store</span>
        </v-btn>
        <v-btn href="#marketplace" text plain :ripple="false">
          <span class="font-weight-light text-capitalize white--text">Marketplace</span>
        </v-btn>
        <v-btn href="#roadmap" text plain :ripple="false">
          <span class="font-weight-light text-capitalize white--text">Roadmap</span>
        </v-btn>
        <v-btn href="#qliptoken" text plain :ripple="false">
          <span class="font-weight-light text-capitalize white--text">QLIP Token</span>
        </v-btn>
        <v-btn :href="`${publicPath}QLIP_Whitepaper.pdf`" download="download" text plain :ripple="false">
          <span class="font-weight-light text-capitalize white--text">Whitepaper</span>
        </v-btn>
        <v-btn href="https://t.me/qlipit" target="_blank" color="#5127DA" outlined rounded>
          <span class="font-weight-light text-capitalize white--text">Join Community</span>
        </v-btn>
        <v-btn to="/private_sales" class="ml-2" color="#5127DA" rounded>
          <span class="font-weight-light text-capitalize white--text">Private Sale</span>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main :style="{background: '#0E0E12'}">
      <router-view :connectWallet="()=>connectWallet()" :sendFunds="(amount)=>sendFunds(amount)" :showModal="()=>showModal()"></router-view>
    </v-main>
      <v-footer color="#0E0E12"
    dark
    padless
  >
  <v-container>
    <v-row>
        <v-col color="primary" class="text-justify mt-5" cols="12" xl="5" lg="5">
            <v-list-item>
                <v-img src="@/assets/logo_footer.png" class="shrink mr-2" width="30" contain></v-img>
              <v-list-item-content>
                <v-list-item-title>QLIP</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
        </v-col>
        <v-col color="primary" class="text-justify mt-5" cols="12" md="2">
          <div v-for="url in urls" :key="url" class="pa-2 text-body-2">
           <a v-if="url.newTab" :href="`${publicPath}QLIP_Whitepaper.pdf`" download="download"> {{ url.name }} </a>
           <a v-else :href="url.url"> {{ url.name }} </a>
          </div>
        </v-col>
        <v-col color="primary" class="text-justify mt-5" cols="12" md="2">
          <div v-for="social in socials" :key="social" class="pa-2 text-body-2">
           <a :href="social.url" target="_blank"> {{ social.name }} </a>
          </div>
        </v-col>
    </v-row>
  </v-container>
  </v-footer>
    <v-overlay :opacity="opacity" :value="overlay">
        <v-icon @click="overlay = false" size="1.5x" class="custom-class" style="position: fixed; top: 2%; right: 1.5em;">mdi-close</v-icon>
        <v-row class="text-center">
          <v-col cols="12">
            <v-btn href="#mintstore" text plain :ripple="false">
              <span class="font-weight-light text-capitalize white--text">Mint Store</span>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn href="#marketplace" text plain :ripple="false">
              <span class="font-weight-light text-capitalize white--text">Marketplace</span>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn href="#roadmap" text plain :ripple="false">
              <span class="font-weight-light text-capitalize white--text">Roadmap</span>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn href="#qliptoken" text plain :ripple="false">
              <span class="font-weight-light text-capitalize white--text">QLIP Token</span>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn :href="`${publicPath}QLIP_Whitepaper.pdf`" download="download" text plain :ripple="false">
              <span class="font-weight-light text-capitalize white--text">Whitepaper</span>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn href="https://t.me/qlipit" target="_blank" color="#5127DA" outlined rounded>
              <span class="font-weight-light text-capitalize white--text">Join Community</span>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn to="/private_sales" class="px-8" color="#5127DA" rounded>
              <span class="font-weight-light text-capitalize white--text">Private Sale</span>
            </v-btn>
          </v-col>
      </v-row>
    </v-overlay>
    <Modal
      v-show="isModalVisible"
      @close="closeModal"
      :sendFunds="(amt)=>sendFunds(amt)"
    />
  </v-app>
</template>

<script>

import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
const MyContract = require('./data/PrivateTokenSale.json');
import swal from 'sweetalert';
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components:{Modal},
  data: () => ({
    connected:false,
    provider:{},
    opacity: 0.9,
    overlay: false,
    isModalVisible: false,
    publicPath: process.env.BASE_URL,
    urls: [
      {
        name: 'Mint Store',
        url: '#mintstore'
      },
      {
        name: 'Marketplace',
        url: '#marketplace'
      },
      {
        name: 'Roadmap',
        url: '#roadmap'
      },
      {
        name: 'QLIP Token',
        url: '#qliptoken'
      },
      {
        name: 'Whitepaper',
        newTab: true
      },
    ],
    socials: [
      {
        name: 'Twitter',
        url: 'https://twitter.com/Qlip_it?s=09'
      },
      {
        name: 'Telegram',
        url: 'https://t.me/qlipit'
      },
      {
        name: 'Youtube',
        url: 'https://youtube.com/channel/UCNkWrpHYJ28UwnDvbe5VoHg'
      },
      {
        name: 'Medium',
        url: ' https://qlipit-io.medium.com/'
      },
    ],
  }),

  methods:{
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    connectWallet(send){

        if(window.ethereum.chainId==56){

          const providerOptions = {
            walletconnect: {
              package: WalletConnectProvider,
              options: {
                rpc: {
                  56: "https://bsc-dataseed.binance.org/",
                },
              }
            }
          };

          const web3Modal = new Web3Modal({
            providerOptions, // required
          });

          //web3Modal.clearCachedProvider();

          web3Modal.connect().then(async (provider)=>{

            this.provider = provider;

            this.connected = true;

            if(send){
              setTimeout(()=>{
                this.sendFunds(send);
              },2000);
            }

          });

          if(window.ethereum.isTrust){
            //Special connection to trust wallet
            swal("Connected", "Your wallet has been connected successfully", "success");
          }

        }else{
          swal("Could not connect", "Invalid Chain Id: BSC Chain required", "error");
        }



    },
    sendFunds(amount){

      if(this.connected){
        var web3 = new Web3(this.provider);

        web3.eth.getAccounts().then((account)=>{

          const qlip = new web3.eth.Contract(MyContract.abi,'0xC0cD6Ef987Ef48F3774f583FFDdB97b0375CE9D8');

          qlip.methods.depositFunds().send({value:web3.utils.toWei(amount,'ether'),from:account[0],gas:"100000",gasLimit:"21000"}).then((response)=>{
            if(response.status){
              console.log(response);
              swal("Success",`Congratulations, you have successfully bought $QLP Tokens. Welcome to the future of NFT's.

                Your QLIP Tokens are vested and will be unlocked in 6 months.

                Please stay tuned for the allocation announcement and for our upcoming public sale announcements.`,"success");
            }
          });

        });


      }else{
        this.connectWallet(amount);
      }


    }
  },


  computed:{
    isMobile(){
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      return isMobile;
    },
  },

  mounted() {
    this.$vuetify.theme.dark = true;
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
