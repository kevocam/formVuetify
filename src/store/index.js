import Vue from "vue";
import Vuex from "vuex";

import axios from 'axios'
Vue.use(Vuex);

export default new Vuex.Store({
  strict:true,
  state: {
    persons:[],
    todoPersons:[]
  },
  getters:{
    
  },
  mutations: {    
    ALL_PERSONS(state, person){
      state.todoPersons = person
      console.log(state.todoPersons)
    },
    
    ADD_PERSON(state, person){
    let persons = state.persons.concat(person)
    state.persons = persons
    
    // guardamos los datos con AXIOS 
    axios.post('https://form-vuejs-default-rtdb.firebaseio.com/persons.json', {
      name: person.name,
      dni: person.dni,
      cell:person.cell,
      email:person.email
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    }
  },
  actions: {
    async createPerson({commit}, person){
      commit ('ADD_PERSON', person)
    },
    getData(state){
      //llamamos a toda la bse de daots en firebase con AXIOS
      axios("https://form-vuejs-default-rtdb.firebaseio.com/persons.json")
      .then(function (response) {
        // handle success
        state.commit("ALL_PERSONS", response.data)
                
        })
        .catch(function (error) {
            console.log(error);
        })
      }
  },
  modules: {},
});
