<template>
    <div>
        <router-link :to="'/serie/episodes/8'">Listagem de episódios</router-link>
    </div>
</template>

<script>
    export default {
        name: 'serie',
        data() {
            return {
                product: {}
            }
        },
        created() {
            /*let id = this.$route.params.id;
            $.getJSON(`https://hplussport.com/api/products/id/${id}`)
                .done(data => {this.product = data;})*/
        }
    };
</script>

<style scoped>
    h1 {
      color: #ffffff;
    }
    img {
        width: 700px;
        height: 700px;
    }
</style>
