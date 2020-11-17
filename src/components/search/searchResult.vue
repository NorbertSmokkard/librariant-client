<template>

<div>
          <h3 class="pa-4" v-if="cardFiltered.length!=0">Результаты поиска</h3>
          <h3 class="pa-4" v-else>Ничего не найдено</h3>

          <v-divider class="my-2"></v-divider>


          <div class="d-flex justify-center flex-wrap">
            <v-card style="width:23%" 
                    class="ma-3"
                    v-for="(item,i) in cardFiltered" 
                    :key="i">
              <v-img :src="`https://picsum.photos/200/200?random=${i}`" max-width="30rem" max-height="30rem"></v-img>
              <v-card class="pa-4">
                  <router-link :to = "{name : 'book'}" class="text-decoration-none black--text"> 
                <h4> <b>{{item.title}}</b></h4>
                </router-link>

                <hr class="my-2" color="black">
                <h5>Автор: {{item.author}}</h5>

                <div class="">
                  <h5 class="mt-10 mb-3 text-decoration-underline">{{item.genre}}</h5>
                  <div v-if="item.status==1"><b class="green--text text--darken-1">В наличии</b> </div>
                  <div v-if="item.status==2"><b class="yellow--text text--darken-1">Нет в наличии</b> </div>
                  <div v-if="item.status==3"><b class="red--text text--darken-1">Отсутствует</b> </div>
                </div>
              </v-card>
            </v-card>
          </div>

        </div>

</template>

<script>

    export default{
        props:["cardFiltered"],
        methods:{
         
        },
    
    }
</script>