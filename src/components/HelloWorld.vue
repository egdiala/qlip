<template>
  <v-container>
    <v-row class="text-center mb-5">
      <v-col class="my-5">
        <h1 class="display-2 font-weight-bold mb-3 mt-5">
          Revolutionizing the NFT Ecosystem
        </h1>

        <p class="subheading font-weight-regular" :style="{color: '#788CA0'}">
          QLIP provides value for creators, collectors, mainstream artists and <br> decentralized store users.
        </p>

        <v-btn class="mt-4 buy" large rounded>
          <span class="font-weight-medium text-capitalize white--text pa-4">Buy QLIP Tokens</span>
        </v-btn>
      </v-col>

      <v-col
        class="my-5"
        cols="12"
      >
        <v-row justify="center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Zj58i_j17YA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </v-row>
      </v-col>

      <v-col
        class="my-5"
        cols="12"
      >
        <h1 class="display-2 font-weight-bold mb-3 mt-5">
          QLIP Mint store
        </h1>

        <p class="subheading font-weight-regular mb-5" :style="{color: '#788CA0'}">
          Mint your artworks of any format, audio, text, video, or Picture, with low fees
        </p>

        <v-row justify="center">
          <v-card class="text-center card-border mt-5 pa-5" color="#0E0E12">
            <v-card-text class="px-9">
              <v-avatar color="#16161E" size="90"><span class="white--text headline">36</span></v-avatar>
              <h2 class="font-weight-bold text--primary my-3">
                Upload File in Any Format
              </h2>
              <p class="subheading font-weight-regular" :style="{color: '#788CA0'}">
                PNG, GIF, JPG, WMV, MP4, MP3
              </p>
              <v-btn color="#441EBF" class="mt-4" x-large outlined rounded>
                <span class="font-weight-medium text-capitalize text--primary pa-4">Browse Files</span>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>

    </v-row>
    <v-row class="mt-9">
      <v-col
        class="mb-5"
        cols="12" xl="6" lg="6"
      >
        <h2 class="display-2 font-weight-bold mb-3">
          QLIP Collectibles
        </h2>
        <p class="subheading font-weight-regular" :style="{color: '#788CA0'}">
         Grab collectibles of your favourite artist from the various African Entertainment and Arts industry, in Music, Literature, Movie, Fashion, Visual arts, and participate in the QLIP gaming activities.
        </p>
        <v-btn color="#441EBF" class="mt-4" x-large outlined rounded>
          <span class="font-weight-medium text-capitalize text--primary pa-4">Claim Collectibles</span>
        </v-btn>
      </v-col>

      <v-col
        class="mb-5"
        cols="12" xl="6" lg="6"
      >
        <v-card max-width="380" color="#0E0E12" class="card-border px-5" outlined>
          <v-card-text class="px-5">
        <h2 class="font-weight-bold text--primary mb-3">
          African Mask
        </h2>
        <p class="subheading font-weight-regular" :style="{color: '#788CA0'}">
         A collection of Africa’s rich heritage
        </p>
        <p><strong class="text--primary">20,000 QLIP </strong>&nbsp;<small :style="{color: '#788CA0'}"> 1 of 1</small></p>
        <p><small :style="{color: '#788CA0'}">Bid </small>&nbsp;<strong class="text--primary"> 10,000 QLIP</strong></p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>

<style scoped>
.buy {
  background: linear-gradient(180deg, #5429E1 0%, #441EBF 100%);
}

.card-border {
  border: 1.5px solid #16161E !important;
}
</style>