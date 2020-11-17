<template>

      <v-tabs slider-size="3" centered background-color="primary" color="white">
        <v-tab 
        v-for="(item,i) in tabsNames"
        :key = "i"
        @click="routeTo(i)"
        >
        <!--<router-link :to = "{name : RoutesInfo[i].name}">  </router-link> -->
          {{tabsNames[i]}}
      
        </v-tab>
 
      </v-tabs>

</template>

<script>
import RoutesInfo from "../router/routes";
//import data from "../content/data"
    export default{
      data(){
        return{
          RoutesInfo
        }
      },
        props:["tabsNames"],
        
        methods:{
          routeTo(i){//, params: { carddata: data.carddata, genres: data.genresList}
              this.$router.push({name: RoutesInfo[i].name})
              console.log(RoutesInfo[i].path);
          },
            getCurrentTabId(id){
                this.$emit('get-tab-id',id);
                console.log(id);
            },
    
        }
    }
</script>