<template>
    <div>
        <div class="d-flex  flex-wrap ">

            <v-text-field label="Введите интересующую вас книгу" class="ma-5" style="width: 100%;" v-model="Book">
                <v-icon slot="append" color="black" @click="searchBook()">
                    mdi-magnify
                </v-icon>
            </v-text-field>


            <v-select class="ma-5 " style="width: 20%;" :items="genresList" @input="onInputGenre" label="Select"
                multiple chips hint="Book Genres" persistent-hint>
            </v-select>

            <v-text-field label="Введите автора" class="ma-5 float-right" style="width: 40%;" v-model="Author">
                <v-icon slot="append" color="black" @click="searchAuthor()">
                    mdi-magnify
                </v-icon>
            </v-text-field>




        </div>
        <searchResult :cardFiltered="cardFiltered" />
    </div>
</template>

<script>
    import searchResult from "./searchResult"
    import data from "E:/УНИВЕР/3 курс/Людина-машина/E-librariant/librariant-client/src/content/data.js"
    let carddata = data.carddata;
    let genresList = data.genresList;
    export default {
     //props: ["genresList", "carddata"],
    
           created() {
               this.sendFilteredCards();
          },
        components: {
            searchResult
        },
        methods: {
            onInputGenre(items) {
                this.inputGenre.splice(0, this.cardFiltered.length);
                this.inputGenre = items;
                console.log(this.inputGenre);
                this.sendFilteredCards();
            },
            searchBook() {
                console.log(this.Book);
                if (this.Book != "") this.sendFilteredCards();

            },
            searchAuthor() {
                if (this.Author != "") this.sendFilteredCards()
                console.log(this.Author);
            },
            searchFilter(card) {
                let b=false;
                if (this.inputGenre.length == 0) return true;
                else {
                    this.inputGenre.forEach(element => {
                        if (card.genre.includes(element)) {
                            console.log(card.title);
                            b = true;

                        }
                    });
                }
                return b;
            },
            sendFilteredCards() {
                this.cardFiltered.splice(0, this.cardFiltered.length);

                carddata.forEach(element => {

                    console.log(element.title.includes(this.Book));
                    console.log(element.title.includes(this.Author));
                    console.log( this.searchFilter(element));   

                    if (element.title.includes(this.Book) && 
                       element.author.includes(this.Author) && 
                       this.searchFilter(element)) {
                        this.cardFiltered.push(element);
                        console.log(element);
                    }

                });

            }

        },
        data: () => ({
            
            carddata,
            genresList,
            Book: "",
            Author: "",
            inputGenre: [],
            cardFiltered: [],

        
    
        



        })



    }
</script>