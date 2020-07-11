<template>
  <v-form  @submit.prevent="signup">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            label="E-mail"
            type="email"
            required
          ></v-text-field>
            <span class="red--text" v-if="errors">{{errors}}</span>

        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
          ></v-text-field>
            <span class="red--text" v-if="errors">{{errors}}</span>
        </v-col>
      </v-row>
      <v-btn color="#3fb1ac" type="submit">Sign Up</v-btn>
    </v-container>
  </v-form>
</template>

<script>
import axios from 'axios'
  export default {
    data(){
        return {
            
            email:'',
            password:'',
            errors:''
        }
    },
    created() {
      if(User.loggedIn())
      {
        this.$router.push({name:'forum'})
      }
    },
    methods:{
        signup(){
            axios.post('https://reqres.in/api/register',{
                email:this.email,
                password:this.password,
            })
            .then(res =>{ 
                User.responseAfterLogin(res)
            })
            .catch(error => this.errors = error.response.data.error)
        }
    }
  }
</script>


<style>

</style>