<template>
    <div>
        <!--<router-link :to="'/serie/episodes/8'">Listagem de episódios</router-link>-->
        <img :src="product.image['medium']" :alt="product.name">
        <h1>{{product.name}}</h1>
        <h3>Season: {{product.season}} | Episode number {{product.number}} | Runtime: {{product.runtime}} minutes</h3>
        <p>{{product.summary}}</p>
    </div>
</template>

<script>
    export default {
        name: 'episode',
        data() {
            return {
                product: {}
            }
        },
        created() {
            let id = this.$route.params.id;
            $.getJSON(`http://api.tvmaze.com/episodes/185053`)
                .done(data => {this.product = data;})
        }
    };
</script>

<style scoped>
    h1 {
      color: #000000;
    }
</style>
