<template>
  <v-app id="inspire">
    <v-toolbar dark app class="primary" fixed>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up">
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer;">CRFC</router-link></v-toolbar-title>
      <img src="../src/assets/crfc-logo-light.png" style="height: 54px; margin-left: 8px;">
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-menu open-on-hover offset-y>
          <v-btn flat slot="activator"><v-icon left>{{ icons[0] }}</v-icon>About</v-btn>
            <v-list>
              <v-list-tile v-for="item in aboutItems" :key="item.title" :to="item.link" @click="">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
        </v-menu>
        <v-btn
          flat
          :key="menuItems[0].title"
          :to="menuItems[0].link">
          <v-icon left>{{ menuItems[0].icon }}</v-icon>
          {{ menuItems[0].title }}
        </v-btn>
        <v-menu open-on-hover offset-y>
          <v-btn flat slot="activator"><v-icon left>{{ icons[1] }}</v-icon>News and Events</v-btn>
            <v-list>
              <v-list-tile v-for="item in newsItems" :key="item.title" :to="item.link" @click="">
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
        </v-menu>
        <v-btn
          flat
          :key="menuItems[1].title"
          :to="menuItems[1].link">
          <v-icon left>{{ menuItems[1].icon }}</v-icon>
          {{ menuItems[1].title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
          {icon: 'gavel', title: 'Build A Team', link: '/buildteam'},
          {icon: 'email', title: 'Contact Us', link: '/contact'}
        ],
        icons: ['email', 'cast', 'gavel'],
        aboutItems: [
          { title: 'History', link: '/history' },
          { title: 'Rules', link: '/rules' },
          { title: 'Scoring', link: '/scoring' },
          { title: 'Teams', link: '/teams' },
          { title: 'Sponsors', link: '/sponsors' }
        ],
        newsItems: [
          { title: 'Gallery', link: '/gallery' },
          { title: 'Videos', link: '/videos' },
          { title: 'Combine', link: '/combine' },
          { title: 'Playoffs', link: '/playoffs' },
          { title: 'Championship Records', link: '/records' }
        ]
      }
    }
  }
</script>

<style scoped>

.test {
  background-color: #334d5c;
}

/*
#inspire {
  height: 100vh;
}*/

</style>
