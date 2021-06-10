<template>
  <v-container>
      <v-row>
          <v-col v-for="(member, m) in members" :key="m" cols="12" xl="4" lg="4" md="12" sm="12">
            <v-card min-width="300" dark color="#0E0E12" class="card-border mx-auto" outlined>
                <v-card-title>
                    <v-list-item class="grow">
                        <v-list-item-avatar size="60" color="grey darken-3">
                        <v-img
                            :src="require(`@/assets/team/${member.pic}`)"
                        ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                        <v-list-item-title>{{member.name}}</v-list-item-title>
                        <v-list-item-subtitle>{{member.role}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card-title>

                <v-card-text class="font-weight-light" v-html="member.quote">
                </v-card-text>
            </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'Team',
    data() {
        return {
            members: [
                {
                    pic: 'Mark.jpg',
                    name: 'Mark Nwaeke',
                    role: 'Curator',
                    quote: 'Mark Nwaeke is a visual hyperrealist, and the Founder and CEO of MBMportraits. He is also a music artist, singer and songwriter. <br> <blockquote>I know Qlip is one of a kind NFT Platform that will open up more opportunities for various industries in Art!</blockquote>'
                },
                {
                    pic: 'Gyan.jpg',
                    name: 'Gnana Lakshmi TC aka Gyan',
                    role: 'CTO',
                    quote: "Gyan is a back end developer with over 9+ years as a Software Developer, she's extremely passionate about women in technology and has been leading the Bangalore network of Women Who Code for 5+ years. Currently an Ambassador for Algorand, Near, Aeternity. <br> <blockquote>QLIP is a project with a lot of potential to throw light on artists who do not have a platform to publicise their work internationally. Qlip creates an ecosystem where the bias is removed and everyone can get a chance to display their artistic skills.</blockquote>"
                },
                {
                    pic: 'Caleb.jpg',
                    name: 'Caleb Alikwe',
                    role: 'Front-End Development  & NFT Education',
                    quote: "Caleb is a Regenerative Nature and Context Abstract Artist, alongside Character Illustration with a touch of culture and fashion. He's created and sold various NFT's and is an avid user of NFT platforms. <br> <blockquote>\"QLIP is a bold statement of Growth.\"</blockquote>"
                },
                {
                    pic: 'Godday.jpeg',
                    name: 'Godday Obakpolor',
                    role: 'Brand and Graphics',
                    quote: "Godday is a Graphic Designer who started his graphics and designs career in 2016. He's worked with various companies including, PLanE Services, Whatskool, Crypto Smart and a lot more as a designer. <br> <blockquote>Qlip is a huge project, which is gonna change a lot of things both in Art, Music, photography and more, and this is a great opportunity for me to know how NFTs work.</blockquote>"
                },
                {
                    pic: 'Karla.jpeg',
                    name: 'Karla Obakpolor aka KarlaGod',
                    role: 'Founder & Business Development',
                    quote: "She got into the Crypto space in 2016 through writing articles on steemit and started her business development and Digital Marketing career in 2017, helping startups and Tech companies grow. PLanE Services, Whatskool, Cilium are some of the companies she built. In 2020 she became an ambassador for Algorand, and also founded Crypto Smart, a Crypto Asset Management Company. <br> <blockquote>QLIP will revolutionize the NFT industry in Africa and the world by bringing, real life, off chain utility to various arts industries including the Music, Movie, Fashion, Photography, Visual arts industry and more. I'm just excited we're building something that will benefit all Africans.</blockquote>"
                },
            ]
        }
    },
}
</script>

<style>

</style>