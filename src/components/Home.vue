<template>
    <v-container>
        <v-layout row wrap class="mt-0">
            <v-flex xs12>
                <v-carousel style="cursor: pointer;">
                    <v-carousel-item class="carousel-item"
                    v-for="meetup in meetups"
                    :src="meetup.imgUrl"
                    :key="meetup.id"
                    @click="">
                    <div class="title">
                      {{ meetup.title }}
                    </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-3">
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
              <v-card>
                <v-card-media
                  class="white--text"
                  height="400px"
                  src="../src/assets/build-team-lg.JPG"
                >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox style="margin: 0 auto;">
                      <h2 wrap elevation-20 style="font-size: 40px !important; color: yellow !important;" class="headline">Build A Team</h2>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-title style="position: -100;">
                <div>
                  <span class="primary--text text-xs-center">Register by January 18, 2018</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn secondary style="margin: 0 auto !important;">Learn More</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>

        <v-layout row wrap class="mt-3">
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card primary>
                    <v-card-title>
                        <h1 class="text--white" style="margin: 0 auto;">Build a Team</h1>
                    </v-card-title>
                    <v-card-media
                        src="../src/assets/build-team-lg.JPG"
                        height="450px"
                    ></v-card-media>
                    <v-card-text secondary>
                        <div class="info--text">Register by Jan 1, 2018</div>
                        <div>{{ teamCaption }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn secondary>Learn More</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>

        <v-layout row wrap class="mt-2">
        <v-flex xs12 sm6 id="sponsors">
          <div class="text-xs-center">
            <h1>Sponsors</h1>
            <ul v-for="sponsor in sponsors">
              <li> {{ sponsor }}</li>
            </ul>
          </div>
        </v-flex>
        <v-flex xs12 sm6 id="members">
          <div class="text-xs-center">
            <h1>Members</h1>
            <ul v-for="member in members">
              <li> {{ member }}</li>
            </ul>
          </div>
        </v-flex>
        </v-layout>
        <div class="red" style="height: 200px; width: 1000px; margin: 0 auto;">
        </div>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        meetups: [
          {imgUrl: '../src/assets/crfc-1-1000w.jpg', id: 'adkjadk123', title: 'RF1'},
          {imgUrl: '../src/assets/crfc-2-1000w.jpg', id: 'adkjadk123', title: 'RF2'},
          {imgUrl: '../src/assets/crfc-4-1000w.jpg', id: 'adkjadk123', title: 'RF4'},
          {imgUrl: '../src/assets/trophy-563h.jpg', id: 'adkjadk124', title: 'Trophy'}
        ],
        sponsors: ['GE', 'Visual Edge', 'Boeing', 'Yaskawa'],
        members: ['University of Notre Dame', 'Ohio Northern University', 'U.S. Naval Academy', 'Valparaiso University', 'Purdue Polytechnic', 'University of Mount Union', 'Indian Universiy - Purdue University Indianapolis'],
        teamCaption: 'This is our build a team page.  Blaldhalk  ;alkdak lkasdj;'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#build-team {
  border: 4px solid #334d5c;
}

.carousel-item {
  background-size: contain;
}

#sponsors h1, #members h1 {
  color: #1e5d88;
  font-size: 32px;
}

#sponsors ul, #members ul {
  list-style-type: none;
  font-size: 20px;
}
</style>
