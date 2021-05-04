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
        cols="12" id="mintstore"
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
        cols="12" xl="6" lg="6" md="6"
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
        cols="12" xl="6" lg="6" md="6"
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
        cols="12" xl="6" lg="6" md="6"
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
        cols="12" xl="6" lg="6" md="6"
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
        cols="12" xl="4" lg="4" md="4" class="d-flex flex-column" v-for="icon in recent" :key="icon.title"
      >
      <v-card width="350" color="#0E0E12" class="card-border pa-5 mx-auto flex d-flex flex-column" outlined>
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
        class="mb-5 text-center" cols="12" id="marketplace"
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
        cols="12" xl="4" lg="4" md="4" v-for="place in marketplace" :key="place" class="d-flex flex-column"
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
    <v-row class="my-9">
      <v-col
        class="mb-5 text-center" cols="12" id="roadmap"
      >        
        <h1 class="display-2 font-weight-bold mb-3 mt-5">
          QLIP Roadmap
        </h1>
      </v-col>
    </v-row>
    <v-row class="ma-2">
      <v-col cols="12">
        <v-timeline dense>
          <v-timeline-item v-for="time in timeline" :key="time" small>
              <span v-if="time.avatar"><v-img src="@/assets/Group.png" contain class="shrink rot8" width="40"></v-img></span>
            <div class="py-4">
              <h2 class="headline font-weight-medium white--text">
                {{time.title}}
              </h2>
              <div>
                <ul v-for="list in time.lists" :key="list">
                  <li v-html="list" :style="{color: '#788CA0'}"></li>
                </ul>
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
    <v-row class="my-5">
      <v-col
        class="mb-5 text-center" cols="12" id="qliptoken"
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
      <v-col cols="12" xl="5" lg="5" md="5">
        <doughnut-chart :chartdata="chartDataDoughnut" :options="options" />
      </v-col>
      <v-col cols="12" xl="7" lg="7" md="7">
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
import DoughnutChart from "@/components/DoughtnutExample.vue";
  export default {
    name: 'HelloWorld',
    components: { DoughnutChart },
    data: () => ({
      timeline: [
        {
          title: 'Q4 2020 -Q1 2021',
          avatar: false,
          lists: ['Industry Research and Platform testing.', 'Idea hatch and Team Consolidation.']
        },
        {
          title: 'Q2 2021',
          avatar: true,
          lists: ['IDO and Token Sales', 'Liquidity and staking Provided on Pancake and goosedefi.finance','Artiste Onboarding, Industry Sensitization, meetups, AMA and more','40% (400,000 $QLP) of Airdrop allocation for social tasks and bounties','Partnerships with mainstream Artists and brands from each Art category, Visual arts,Fashion, Music, Movie, Literature,', 'Qlipit.io Beta with all the features of clip (Market Place, Mint Store, Collectible and Exhibit) for Arts and Entertainment Industry Use case']
        },
        {
          title: 'Q3 2021',
          avatar: false,
          lists: ['20% (200,000 $QLP) of Airdrop allocation for social tasks and bounties ', 'Qlipit.io V1 rolled out with Use case for Journalism, Co-sign feature for the Legal industry. Creation of Cosign App.','Partnership requests with virtual world NFT platforms','Update for Entertainment Commerce and memory makers usecase. Creation of Mint Time App','Vote feature, avatar creating features and more updates update for gaming usecases']
        },
        {
          title: 'Q4 2021 -Q2 2021',
          avatar: false,
          lists: ['Update for intellectual property use case.', '40% Airdrop to users who have interacted with Qlip platform and traded a certain volume or currently hold certain Qlip Whitelisted NFTs', 'Defi Integration']
        },
      ],
      options: {
        legend: {
          display: false
        },
        responsive: true,
        percentageInnerCutout : 80,
        maintainAspectRatio: false
      },
      chartDataDoughnut: {
        datasets: [
          {
            data: [5, 10, 10, 10, 15, 25, 25],
            backgroundColor: ['#4B23CC', '#FF7347', '#985AFE', '#FFB347', '#35DCF3', '#004BFF', '#30D171'],
            borderColor: 'transparent',
          }
        ],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: ["Private Sale", "Airdrops", "Marketing", "Team", "Public Sale", "Treasury", "Mined via Staking"]
      },
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

.rot8 {
  transform: rotate(90deg);
  position: relative;
  left: -120px;
  top: 60px;
}
</style>