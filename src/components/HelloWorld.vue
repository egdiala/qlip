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
              <v-avatar color="#16161E" size="90"><v-img src="@/assets/icons8_paint.png" width="40" contain class="shrink"></v-img></v-avatar>
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
        <v-card width="320" color="#0E0E12" class="card-border px-5 mx-auto" outlined>
          <v-card-text class="px-5">
            <v-avatar tile size="164"><v-img src="@/assets/Africa.png" contain></v-img></v-avatar>
        <h2 class="font-weight-bold text--primary my-3">
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
    <v-row class="mt-9">
      <v-col
        class="mb-5"
        cols="12" xl="6" lg="6"
      >
        <v-card max-width="350" color="#16161E" class="card-border px-5 mx-auto" outlined>
          <v-card-text class="px-3 mb-9">
            <v-avatar size="90" class="avatar-border mb-4"><v-img src="@/assets/icons8_stage.png" class="shrink" width="40" contain></v-img></v-avatar>
            <h2 class="font-weight-bold text--primary my-3">
              QLIP Exhibit
            </h2>
            <p class="subheading font-weight-regular mb-9" :style="{color: '#788CA0'}">
            Showcase your private or public collection, to fans and collectors
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        class="mb-5"
        cols="12" xl="6" lg="6"
      >
        <v-card max-width="350" color="#0E0E12" class="card-border px-5 mx-auto" outlined>
          <v-card-text class="px-3 mb-9">
            <v-avatar size="90" color="#16161E" class="mb-4"><v-img src="@/assets/icons8_online_store.png" class="shrink" width="40" contain></v-img></v-avatar>
            <h2 class="font-weight-bold text--primary my-3">
              QLIP Decentralized store
            </h2>
            <p class="subheading font-weight-regular mb-9" :style="{color: '#788CA0'}">
            Mint your memories on the Blockchain and make them private
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="my-9">
      <v-col
        class="mb-5 text-center" cols="12"
      >        
        <h1 class="display-2 font-weight-bold mb-3 mt-5">
          QLIP Collectible Gaming
        </h1>

        <p class="subheading font-weight-regular mb-5" :style="{color: '#788CA0'}">
          Buy and sell your NFT’s and Collectibles in QLP, BNB, USDT, BTC on the <br> QLIP marketplace.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12" xl="4" lg="4" v-for="icon in recent" :key="icon.title"
      >
      <v-card color="#0E0E12" class="card-border pa-5 mx-auto" outlined>
        <v-card-text>
          <v-row align="center" justify="between">
          <v-avatar size="50" color="#16161E" >
            <v-img
              :alt="`${icon.title} avatar`"
              :src="require(`@/assets/${icon.avatar}`)" class="shrink" width="25" contain
            ></v-img>
          </v-avatar>
          <small class="ml-2" v-text="icon.title"></small>
          </v-row>       
        </v-card-text>
      </v-card>   
      </v-col>
    </v-row>
    <v-row class="my-9">
      <v-col
        class="mb-5 text-center" cols="12"
      >        
        <h1 class="display-2 font-weight-bold mb-3 mt-5">
          QLIP MarketPlace
        </h1>

        <p class="subheading font-weight-regular mb-5" :style="{color: '#788CA0'}">
          Buy and sell your NFT’s and Collectibles in QLP, BNB, USDT, BTC on the <br> QLIP marketplace.
        </p>
      </v-col>
    </v-row>
    <v-row class="ma-2">
      <v-col
        cols="12" xl="4" lg="4" v-for="place in marketplace" :key="place" class="d-flex flex-column"
      >
        <v-card width="350" color="#0E0E12" class="card-border px-5 mx-auto flex d-flex flex-column" outlined>
          <v-card-text class="mt-3 mb-9">
            <v-avatar size="90" color="#16161E" class="mb-4"><v-img :src="require(`@/assets/${place.avatar}`)" class="shrink" width="45" contain></v-img></v-avatar>
            <h2 class="font-weight-bold text--primary my-3">
              {{place.title}}
            </h2>
            <p class="subheading font-weight-regular mb-9" :style="{color: '#788CA0'}">
            {{place.subtitle}}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="my-5">
      <v-col
        class="mb-5 text-center" cols="12"
      >        
        <h1 class="display-2 font-weight-bold mb-3 mt-5">
          QLIP Token
        </h1>

        <p class="subheading font-weight-regular mb-5" :style="{color: '#788CA0'}">
          Tokenomics Break Down.
        </p>
      </v-col>
    </v-row>
    <v-row class="mb-4">
      <v-col cols="12" xl="5" lg="5">
      </v-col>
      <v-col cols="12" xl="7" lg="7">
        <v-card max-width="480" color="#0E0E12" class="card-border float-left" outlined>
          <v-card-text>
            <v-list-item two-line>
              <v-list-item-avatar size="70" color="#16161E">
                <v-img src="@/assets/logo_avatar.png" class="shrink mx-auto" width="30" contain></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="mb-3">Total Supply: 10,000,000 $QLP</v-list-item-title>
                <v-list-item-subtitle :style="{color: '#788CA0'}">Token Name: QLIP</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-row class="px-2">
              <v-col cols="12" xl="6" lg="6" v-for="item in items" :key="item">
                <v-icon :color="item.icon">
                  mdi-circle-medium
                </v-icon>
                <small :style="{color: '#788CA0'}">{{item.small}}</small> &nbsp; <strong class="text--primary">{{item.large}}</strong>
              </v-col>
            </v-row>

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
      recent: [
        {
          title: 'Packs completion',
          avatar: 'icons8_cards.png',
        },
        {
          title: 'NFT Lock up to reduce fees and earn $QLP',
          avatar: 'icons8_locker.png',
        },
        {
          title: 'Use of Qlip NFT’s in Metaverses',
          avatar: 'icons8_metamorphose.png',
        },
        {
          title: 'Rap battle games with rapstar NFT’s',
          avatar: 'icons8_musically.png',
        },
        {
          title: 'Lottery biddings and winnings',
          avatar: 'icons8_win.png',
        },
        {
          title: 'Auctions games and Avatar Creation',
          avatar: 'icons8_customer_2.png',
        },
      ],
      marketplace: [
        {
          title: 'Offchain NFTs',
          subtitle: 'Users will determine if their NFT is a Motion Graphic, Meme, Audio Visual (Music), Fashion design, Poetry or Others.',
          avatar: 'icons8_delete_link.png',
        },
        {
          title: 'Order in NFTs',
          subtitle: 'Artiste can mint their works and have it delivered to the NFT buyer. Anyone who buys the NFT can get the physical work be it art on canvas, sculpture or fashion piece delivered to them.',
          avatar: 'icons8_paint.png',
        },
        {
          title: 'NFT Collab',
          subtitle: 'Collaborate on the blockchain with various artists to create an NFT by using our automated unique identifier, set the percentages in royalties and get returns on every collaboration without breaking a sweat. ',
          avatar: 'icons8_collaboration.png',
        },
      ],
      items: [
        {
          small: 'Private Sale:',
          large: '5% at $0.1',
          icon: '#4B23CC',
        },
        {
          small: 'Airdrops:',
          large: '10%',
          icon: '#FF7347',
        },
        {
          small: 'Public Sale:',
          large: '15% at $0.5',
          icon: '#35DCF3',
        },
        {
          small: 'Marketing:',
          large: '10%',
          icon: '#985AFE',
        },
        {
          small: 'Team:',
          large: '10%',
          icon: '#FFB347',
        },
        {
          small: 'Treasury:',
          large: '25%',
          icon: '#004BFF',
        },
        {
          small: 'Mined via Staking:',
          large: '25%',
          icon: '#30D171',
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

.avatar-border {
  border: 1px solid rgba(255, 255, 255, 0.09) !important;
}
</style>