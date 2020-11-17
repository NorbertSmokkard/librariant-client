<template>
    <div>

        <v-row
      class="ma-6 d-flex"
      no-gutters
    >
      <v-col
   
        :cols="6"
      >
     <v-card
    class=""
    style="height: 100%; border:none;"
    max-height="100%"
    outlined
  >


    <v-list-item three-line>
      <v-list-item-content class=" pa-3" >
        
          <div class="text-h4 active mb-5 transition-swing">
              Гарри Поттер и Философский Булыжник </div>
        
            <div class="subtitle-1 active mb-1 transition-swing" 
            > Автор: Джоан Роулинг </div>
              
               <div class="subtitle-1 active mb-10 transition-swing">
                    Жанры: фэнтези, приключение </div>
                     <div class="text-body-1 active mb-5 transition-swing green--text text--darken-1">
                    В наличии </div>
            <v-card-actions class="mt-14">
      <v-btn text color="deep-purple accent-4" @click="overlay =! overlay">Расположение в библиотеке</v-btn>  
      
    </v-card-actions>
        
      </v-list-item-content>

     
    </v-list-item>

 

  </v-card>
      </v-col>
      <v-col
        :cols="6"
        
      >      
            <v-img class="float-right" style=" border-radius: 5%;" src="https://picsum.photos/400/400" max-width="30rem" max-height="30rem"></v-img>

      </v-col>
    </v-row>



        <div class="ma-4 short_info ma-10">
            <hr>
            <div class="ma-4 text-h6 text--secondary">
                
              Аннотация </div>
            
          
                <v-list-item-content class="text-justify pa-3" >
                   
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Proin malesuada ante lacus, id vehicula enim vehicula efficitur. Duis iaculis,
                         quam vitae tincidunt consectetur, enim sem sodales est, vel ullamcorper eros eros 
                         quis augue. Aenean lacinia eleifend eros, non facilisis sem rutrum quis. Proin pharetra,
                          felis ut varius pharetra, lectus metus fermentum augue, sed egestas elit turpis in risus. 
                          Integer consectetur ante ipsum, vel sodales ante interdum eget. Phasellus at magna rutrum,
                           rhoncus eros sit amet, pulvinar metus. Praesent euismod lacus eros. Quisque nec justo
                            ac nisi condimentum finibus. Vivamus at libero suscipit, sollicitudin mauris ac, eleifend 
                            urna. Praesent vel nibh quis sem finibus dignissim eu quis arcu. Vivamus pellentesque 
                            ex eget urna aliquam, et ultrices mauris bibendum.
                            
                            Nulla id elit volutpat, placerat massa in, vulputate nunc. Vivamus feugiat libero
                             elementum sem molestie, eu efficitur lectus ullamcorper. Phasellus quis orci mi. 
                             Nulla facilisi. Nam feugiat lorem enim, eget gravida risus congue vitae. Aenean sit 
                             amet urna eu odio egestas sagittis vel sit amet dolor. Nulla ac ex quis lacus viverra 
                             iaculis.
                             
                             Aliquam gravida accumsan auctor. Nullam non accumsan mi. Vestibulum 
                             tempus, eros sed blandit sagittis, justo tellus semper leo, sed facilisis
                              velit ex sed erat. Pellentesque volutpat purus quis orci rhoncus scelerisque. 
                              Nunc vel eleifend neque. Sed efficitur magna magna, volutpat dignissim lacus auctor non. 
                              
                              Donec fringilla sapien a placerat gravida. Nulla ac velit mi. Donec vulputate felis lectus,
                               vitae malesuada velit posuere ut.
                               Nullam a quam tellus. Pellentesque elementum interdum dui a vestibulum. 
                               Ut a mi hendrerit, convallis quam id, aliquet dui. Nullam volutpat consequat nulla
                                eu finibus. Sed vitae metus ut turpis dapibus molestie. Praesent ornare, massa et 
                                sodales viverra, ipsum nunc aliquet ligula, quis egestas diam nulla nec magna. Maecenas
                                 cursus mauris tempus auctor scelerisque. Donec at metus maximus ipsum pellentesque 
                                 aliquet et eget ante. In tempus, nulla vel malesuada cursus, neque nunc fringilla metus, 
                                 sed efficitur nisl tortor ut leo. Cras fermentum lacus ut nisi bibendum imperdiet. Aenean
                                  aliquet, sem sed bibendum viverra, lorem velit ultrices urna, sit amet placerat arcu urna
                                   at tortor. Quisque eu nisl ac erat consectetur tempus et at nisi. Vestibulum aliquam risus
                                    lectus, sed egestas eros sodales quis. Integer id metus at ex molestie scelerisque ac vitae 
                                    dui. Integer sit amet ornare urna.
              
               </v-list-item-content>
           

        </div>
           <v-overlay :value="overlay">
      <v-btn
        icon
        @click="overlay = false"
      >
      <v-img src="https://www.box-stroy.ru/images/Modulnye_Zdaniya/Obshchezhitiya/245m2/290-3a.jpg"></v-img>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-overlay>
    </div>
</template>
<script>
export default {
      
    data: () => ({
      overlay: false,
    }),
  
}
</script>