<template>
  <v-container class="pa-0" fluid>
    <welcome />

    <services />

    <recent-projects />

    <about-me />

    <get-in-touch />
  </v-container>
</template>

<script>
import AboutMe from '../components/AboutMe'
import GetInTouch from '../components/GetInTouch'
import RecentProjects from '../components/RecentProjects'
import Services from '../components/Services'
import Welcome from '../components/Welcome'

export default {
  components: { AboutMe, GetInTouch, RecentProjects, Services, Welcome },
  head() {
    return {
      link: [{ rel: 'canonical', href: 'https://clweb-charlevoix.ca/' }],
    }
  },
}
</script>
