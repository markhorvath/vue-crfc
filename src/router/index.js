import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Build from '@/components/Build'
import Contact from '@/components/Contact'
import History from '@/components/About/History'
import Rules from '@/components/About/Rules'
import Scoring from '@/components/About/Scoring'
import Sponsors from '@/components/About/Sponsors'
import Teams from '@/components/About/Teams'
import Combine from '@/components/NewsEvents/Combine'
import Gallery from '@/components/NewsEvents/Gallery'
import Playoffs from '@/components/NewsEvents/Playoffs'
import Records from '@/components/NewsEvents/Records'
import Videos from '@/components/NewsEvents/Videos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/buildteam',
      name: 'Build',
      component: Build
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/rules',
      name: 'Rules',
      component: Rules
    },
    {
      path: '/scoring',
      name: 'Scoring',
      component: Scoring
    },
    {
      path: '/sponsors',
      name: 'Sponsors',
      component: Sponsors
    },
    {
      path: '/teams',
      name: 'Teams',
      component: Teams
    },
    {
      path: '/combine',
      name: 'Combine',
      component: Combine
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/playoffs',
      name: 'Playoffs',
      component: Playoffs
    },
    {
      path: '/records',
      name: 'Records',
      component: Records
    },
    {
      path: '/videos',
      name: 'Videos',
      component: Videos
    }
  ],
  mode: 'history'
})
