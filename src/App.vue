<template>
  <v-app>
    <v-app-bar app color="primary">

      <tabs :tabsNames="data.tabsNames" @get-tab-id="setCurrentTabId"/> 

    </v-app-bar>
  
    <v-main>
    
      <v-card width="70%" centered class=" pa-3 mt-16" style="margin:0 auto">

       <!-- <recomendations  v-if="currentTabId==0" :carddata="carddata"/>
        <search v-if="currentTabId==1" :genresList="genresList" :carddata="carddata"/>
        -->
        <router-view>

        </router-view>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import tabs from "./components/tabs.vue"
import data from "../src/content/data.js"
/*import recomendations from "./components/recomendations.vue"
import search from "./components/search/search"*/
  export default {
    name: 'App',
 
    components: {
        tabs,
      /*  recomendations,
        search,*/
    },
    methods:{
      setCurrentTabId(id){
      this.currentTabId=id;
      }
    },

    data: () => ({
     
      data
      
    }), 
      
      
     
  };
</script>