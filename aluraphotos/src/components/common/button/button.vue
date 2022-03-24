<template>
    <button @click="acao()" class="button" :class="stylesButton" :type="type">{{ title }}</button>
</template>

<script>
export default {
   
   //Aplica validações nas propriedades
    props: {
        type: {
            required: true,
            type: String
        },

        title: {
            required: true,
            type: String
        },

        confirmation: Boolean,

        styles: String
    },

    methods: {
        acao(){
            if(this.confirmation){
                if( confirm('Confirma a operação? ') ){
                    /*Chama o método presente no elemento pai a referência */
                    this.$emit('buttonAction' , new Date());
                }
                return;
            }
            this.$emit('buttonAction');
        }
    },

    computed: {
        stylesButton() {
            if(this.styles == 'stand' || !this.styles) return 'button-stand';
            if(this.styles == 'danger') return 'button-danger';
        }
    }
}
</script>

<style scoped>
    * {
        font-family: 'Lobster', cursive;
    }
    
    .button {
        border-radius: 40px;
        width: 140px;
        height: 60px;
        border: none;
        color: #E7DFDD;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 12px;
    }

    .button-danger {
        background: firebrick;
        color: white;
    }

    .button-stand {
        background: darkcyan;
        color: white;
    }

</style>
