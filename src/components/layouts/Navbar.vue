<template>
    <v-toolbar dense>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>Agency-it</v-toolbar-title>

      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down">
        <router-link v-for="item in items"
         :key="item.title"
          :to="item.to"
           v-if="item.show">
          <v-btn text>{{item.title}}</v-btn>
        </router-link>
        
      </div>

    </v-toolbar>
</template>

<script>
export default {
  data(){
    return {
      items:[
        {title : 'All Users' , to:'/forum',show:User.loggedIn()},
        {title : 'Login' , to : '/login', show: !User.loggedIn()},
        {title : 'Logout' , to : '/logout', show:User.loggedIn()},
      ]
    }
  },
  created(){
    EventBus.$on('logout' , () => {
      User.logout();
    })
  }
}
</script>

<style>

</style>