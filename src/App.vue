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
        <v-btn href="#" text plain :ripple="false">
          <span class="font-weight-light text-capitalize white--text">Mint Store</span>
        </v-btn>
        <v-btn href="#" text plain :ripple="false">
          <span class="font-weight-light text-capitalize white--text">Marketplace</span>
        </v-btn>
        <v-btn href="#" text plain :ripple="false">
          <span class="font-weight-light text-capitalize white--text">Roadmap</span>
        </v-btn>
        <v-btn href="#" text plain :ripple="false">
          <span class="font-weight-light text-capitalize white--text">QLIP Token</span>
        </v-btn>
        <v-btn href="#" text plain :ripple="false">
          <span class="font-weight-light text-capitalize white--text">Whitepaper</span>
        </v-btn>
        <v-btn href="#" color="#5127DA" outlined rounded>
          <span class="font-weight-light text-capitalize white--text">Join Community</span>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main :style="{background: '#0E0E12'}">
      <HelloWorld/>
    </v-main>
      <v-overlay :opacity="opacity" :value="overlay">
        <v-icon @click="overlay = false" size="1.5x" class="custom-class" style="position: fixed; top: 2%; right: 1.5em;">mdi-close</v-icon>
        <v-row class="text-center">
          <v-col cols="12">
            <v-btn href="#" text plain :ripple="false">
              <span class="font-weight-light text-capitalize white--text">Mint Store</span>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn href="#" text plain :ripple="false">
              <span class="font-weight-light text-capitalize white--text">Marketplace</span>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn href="#" text plain :ripple="false">
              <span class="font-weight-light text-capitalize white--text">Roadmap</span>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn href="#" text plain :ripple="false">
              <span class="font-weight-light text-capitalize white--text">QLIP Token</span>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn href="#" text plain :ripple="false">
              <span class="font-weight-light text-capitalize white--text">Whitepaper</span>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn href="#" color="#5127DA" outlined rounded>
              <span class="font-weight-light text-capitalize white--text">Join Community</span>
            </v-btn>
        </v-col>
      </v-row>
    </v-overlay>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    opacity: 0.9,
    overlay: false,
  }),

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
