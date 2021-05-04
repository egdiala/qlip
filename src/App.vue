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
        <v-btn href="#" text plain :ripple="false">
          <span class="font-weight-light text-capitalize white--text">Whitepaper</span>
        </v-btn>
        <v-btn href="https://t.me/qlipit" target="_blank" color="#5127DA" outlined rounded>
          <span class="font-weight-light text-capitalize white--text">Join Community</span>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main :style="{background: '#0E0E12'}">
      <HelloWorld/>
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
            {{ url }}
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
            <v-btn href="#" text plain :ripple="false">
              <span class="font-weight-light text-capitalize white--text">Whitepaper</span>
            </v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn href="https://t.me/qlipit" target="_blank" color="#5127DA" outlined rounded>
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
    urls: [
        'Mint Store',
        'Marketplace',
        'Roadmap',
        'QLIP Token',
        'Whitepaper',
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