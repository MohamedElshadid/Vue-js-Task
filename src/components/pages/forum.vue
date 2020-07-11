<template>
  <v-container  grid-list-md>
    <v-data-table dense :headers="headers" :items="users" item-key="name" :items-per-page="3"
     class="elevation-1"
     >
         <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"

      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
      >
        mdi-delete
      </v-icon>
    </template>
     </v-data-table>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
        headers: [
        {
          text: 'Name',
          
          sortable: false,
          value: 'name',
        },
        { text: 'Year', value: 'year'},
        { text: 'Color', value: 'color'},
        { text: 'pantone_value', value: 'pantone_value' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
        users:[]
    }
  },
  created(){
    axios.get('https://reqres.in/api/unknown')
    .then(res => this.users = res.data.data)
    .catch(error => console.log(error.response.data))
  },

}
</script>

<style>

</style>