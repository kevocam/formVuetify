<template>
    <v-app>
        <h2>Lista de personas (llamada a api de firebase) </h2>
        <v-simple-table>
        <template v-slot:default>
        <thead>
            <tr>
            <th class="text-left">
                Name
            </th>
            <th class="text-left">
                DNI
            </th>
              <th class="text-left">
                Celular
             </th>
              <th class="text-left">
                Correo
             </th>
            </tr>
        </thead>
        <tbody>
            <tr
            v-for="person in persons"
            :key="person.dni"
            >
            <td>{{ person.name }}</td>
            <td>{{ person.dni }}</td>
            <td>{{ person.cell }}</td>
            <td>{{ person.email }}</td>

            </tr>
        </tbody>

        
        </template>
    </v-simple-table>
<!-- <div v-for="person in persons" :key="person.name">
        {{person.name}}
</div> -->
    
    </v-app>
</template>
<script>

import store from '../store'

export default {
    store,
    mounted(){
        this.$store.dispatch('getData')
    },
     created(){
          
      },

      methods:{
         
      },
    computed:{
        persons(){
            return this.$store.state.todoPersons
        }
    }
}
</script>
