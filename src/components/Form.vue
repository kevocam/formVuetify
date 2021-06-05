<template>
  <v-form v-model="valid">
    <v-container class="mx-auto">

      <v-row>
        <h2>Agrega nueva persona</h2>
        
      </v-row>
      <v-row>
        <em>

        LLena los datos correctos y podrás guardar.
        </em>

      </v-row>
        <v-row>
             <v-text-field
            v-model="person.name"
            :rules="nameRules"
            :counter="20"
            label="Nombres"
            required
          ></v-text-field>
        </v-row>
        <v-row>
            <v-text-field
            v-model="person.dni"
            :rules="dniRules"
            :counter="8"
            label="D.N.I."
            required
          ></v-text-field>
        </v-row>
        <v-row>
            <v-text-field
            v-model="person.cell"
            :rules="cellRules"
            :counter="8"
            label="Celular"
            required
          ></v-text-field>
        </v-row>
        <v-row>
            <v-text-field
            v-model="person.email"
            :rules="emailRules"
            label="Correo"
            
          ></v-text-field>
        </v-row>  
        <v-row>
                <v-btn :disabled="!valid"
        color="primary"
        @click="saveData"
        >
        Guardar Registro
        </v-btn>
         
        </v-row>     
    </v-container>
    </v-form >
</template>

<script>

  export default {
      created(){
          this.getData();          
      },
      computed:{
         
      },
      methods:{
          saveData(){
            if(this.valid){
              this.$store.dispatch('createPerson', this.person)

            }else{
              alert("Valida los datos")
            }
          },      
        
         
      },
    data: () => ({
      valid: false,
      person:{},
      
      nameRules: [
        v => !!v || 'Nombres es requerido',
        v => v.length <= 20 || 'Nombre debe ser menos de 20 caracteres',
      ],
      cellRules: [
        v => !!v || 'Celular es requerido',
        v => v.length <= 12 || 'Celular debe ser menos de 10 caracteres',
      ],
      dniRules: [
        v => !!v || 'DNI es requerido',
        v => v.length == 8 || 'DNI debe ser 8 digitos',
      ],
      email: '',
      emailRules: [
/*         v => !!v || 'Correo es requerido',
 */        v => /.+@.+/.test(v) || 'Debe ser un correo válido',
      ],
    }),
  }
</script>