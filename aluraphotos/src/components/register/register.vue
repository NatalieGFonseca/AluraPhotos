<!-- alurapic/src/components/cadastro/Cadastro.vue -->

<template>

  <div>
    <h1 class="center">Register photo</h1>
    <h2 v-if="photo._id" class="center">Data updated</h2>
    <h2 v-else class="center">Data included</h2>

    <form @submit.prevent="save()">
      <div class="control">
        <label for="title">TITLE</label>
        <input id="title" autocomplete="off" v-model.lazy="photo.titulo" required>
      </div>

      <div class="control">
        <label for="url">URL</label>
        <input id="url" autocomplete="off" v-model.lazy="photo.url" required>
        <image-responsible v-show="photo.url" :url="photo.url" :title="photo.titulo"/>
      </div>

      <div class="control">
        <label for="description">DESCRIPTION</label>
        <textarea id="description" autocomplete="off" v-model.lazy="photo.descricao"></textarea>
      </div>

      <div class="center">
        <my-button title="SAVE" type="submit"/>
        <router-link :to="{name: 'home'}"><my-button title="BACK" type="button"/></router-link>
      </div>

    </form>
  </div>
</template>

<script>

import ImageResponsible from '../common/img-responsible/img-responsible.vue'
import Button from '../common/button/button.vue';
import Photo from '../../domain/photo/photo';
import PhotoService from '../../domain/photo/photoService';

export default {

  components: {

    'image-responsible': ImageResponsible, 
    'my-button': Button
  },

  data() {
      return {
        photo: new Photo(),
        //pega parametro da url
        id: this.$route.params.id
      }
  },

    methods: {
        save(){

            this.service
            .cadastra(this.photo)
            .then(() => {
                if(this.id) this.$router.push({name: 'home'});
                this.photo = new Photo()
            }, err => console.log(err))
        }
    },

    created (){
        this.service = new PhotoService(this.$resource);

        if(this.id){
            this.service
            .findById(this.id)
            .then(photo => this.photo = photo)
        }
    }    

}

</script>
<style scoped>

  .center {
    text-align: center;
  }
  .control {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  .control label {
    display: block;
    font-weight: bold;
  }

 .control label + input, .control textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .center {
    text-align: center;
  }
 
input, textarea {
  border-radius: 40px;
}

div {
  margin: 2rem;
}

</style>