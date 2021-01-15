<template>
  <v-app>
    <v-app-bar
        color="white"
        app>
      <v-row
        justify="center">
        <router-link class="nav-links" to="/">Home</router-link>
        <router-link class="nav-links" to="/shop">SHOP</router-link>
        <router-link class="nav-links" to="/about">About</router-link>
      </v-row>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer
      color="black"
      padless
      app>
      <v-row
          justify="center"
          no-gutters
      >
        <div
          color="white">
          test
        </div>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  .nav-links {
    margin: 20px
  }
</style>
