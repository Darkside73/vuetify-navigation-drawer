<template>
  <v-app dark>
    <v-navigation-drawer enable-resize-watcher persistent app dark v-model="drawer">
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <nuxt></nuxt>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' },
        { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
      ]
    }
  },
  computed: {
    drawer: {
      get () {
        return this.$store.state.sidebar
      },
      set (val) {
        this.$store.commit('vuetify/SIDEBAR', val)
      }
    }
  }
}
</script>
