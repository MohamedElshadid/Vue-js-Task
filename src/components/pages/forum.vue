<template>
  <v-container  grid-list-md>
   
    <div>
          <v-data-table dense :headers="headers" :items="users" item-key="name" :items-per-page="3"
     class="elevation-1"
     >
         <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        style="color:orange"
        @click="editUser(item.id)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        style="color:red"
        @click="deleteUser(item.id)"
      >
        mdi-delete 
      </v-icon>
    </template>
     </v-data-table>
    </div>
    <div v-if="edit">
        <v-container fluid>
          <v-card>
          <v-form @submit.prevent="update">
              <v-text-field
                label="UserName"
                v-model="name"
                type="text"
                required
                ></v-text-field>
              <v-text-field
                label="Year"
                v-model="year"
                type="text"
                required
                ></v-text-field>
                <v-text-field
                label="Color"
                v-model="color"
                type="text"
                required
                ></v-text-field>
              <v-text-field
                label="pantone_value"
                v-model="pantone_value"
                type="text"
                required
                ></v-text-field>
                <v-card-actions>
                    <v-btn icon small type="submit" style="margin-right:50px;margin-left:10px">
                        <v-icon style="color:lightgreen">save</v-icon>
                    </v-btn>
                
                </v-card-actions>

          </v-form>
          </v-card>
        </v-container>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
        headers: [
        {
          text:'ID' , value:'id'
        },
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
        users:[],
        edit:false,
        id:'',
        name:'',
        year:'',
        color:'',
        pantone_value:''
        
    }
  },
  created(){
    axios.get('https://reqres.in/api/unknown')
    .then(res => {this.users = res.data.data
    })
    .catch(error => console.log(error.response.data))
    
  },
  methods: {
    deleteUser(member){
      axios.delete(`https://reqres.in/api/users/${member}`)
      .then(res =>   this.users.splice(member,1))
      .catch(error => console.log(error.response.data))
    },
    editUser(id){
      this.edit=true,
      this.id = id
    },
    update(){
      axios.patch(`https://reqres.in/api/users/${this.id}`,{
          name : this.name,
          year : this.year,
          color:this.color,
          pantone_value:this.pantone_value
      })
      .then(res => this.edit=false)
      .catch(error => console.log(error.response.data))
  }

  },

}
</script>

<style>

</style>