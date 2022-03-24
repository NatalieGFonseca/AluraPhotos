<template>
  <div>
    <h1 class="title">{{ title }}</h1>
<!--     
    ACESSA IMAGENS SALVAS NO PROJETO
    <img src="/static/foto.jpeg"/> -->
    <h4 v-show="message">{{ message }}</h4>
    <!-- v-on === @ -->
    <input
      type="search"
      class="filter"
      @input="filter = $event.target.value"
      placeholder="Filtre pelo nome da imagem"
    />

    <ul class="lista">
      <li class="lista-item" v-for="photo in photosByFilter" :key="photo.id">
        <!-- databinding : -->
        <painel :title="photo.titulo">
          <!-- :rotate.animate.reverse -- ao inverso, usar números inteiros
            :scale.animate -- "zoom", usar números com ponto 1.1 -->
          <image-responsible
            v-my-transform:scale.animate="1.8"
            :url="photo.url"
            :title="photo.titulo"
          />
          <h5 slot="info">{{ photo.description }}</h5>
          <router-link :to="{ name: 'update', params: { id: photo._id } }">
            <my-button title="Alterar" type="button" />
          </router-link>
          <my-button
            title="Remover"
            type="button"
            @buttonAction="remove(photo)"
            :confirmation="true"
            styles="danger"
          />
        </painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "../common/painel.vue";
import ImageResponsible from "../common/img-responsible/img-responsible.vue";
import Button from "../common/button/button.vue";
import PhotoService from "../../domain/photo/photoService";

export default {
  components: {
    //quando houver prefixo, coloque entre '', ex 'painel-v':Painel
    painel: Painel,
    "image-responsible": ImageResponsible,
    "my-button": Button
  },

  data() {
    return {
      title: "AluraPhotos",
      photos: [],
      filter: "",
      message: ""
    };
  },

  computed: {
    photosByFilter() {
      if (this.filter) {
        let exp = new RegExp(this.filter.trim(), "i");
        return this.photos.filter(photo => exp.test(photo.titulo));
      } else {
        return this.photos;
      }
    }
  },

  methods: {
    remove(foto) {
      this.service.remove(foto._id).then(
        () => {
          let indice = this.photos.indexOf(foto); // acha a posição da foto na lista
          this.photos.splice(indice, 1); // a instrução altera o array
          this.message = "Foto removida com sucesso";
        },
        err => {
          this.message = err.message;
        }
      );
    }
  },

  //gancho de criação, logo ao criar o componente este é chamado
  created() {
    this.service = new PhotoService(this.$resource);

    this.service
    .list()
    .then(photos => this.photos = photos, err => this.message = err.message );
  }
};
</script>

<style>

* {
  font-family: 'Lobster', cursive;
  font-size: 30px;
}

.title {
  text-align: center;
}

.lista {
  list-style: none;
}

.lista .lista-item {
  display: inline-block;
  padding: 20px;
}

img {
  width: 10vw;
}

.filter {
  display: block;
  width: 100%;
  padding: 2vh;
}

input {
  border-radius: 40px;
}

</style>
