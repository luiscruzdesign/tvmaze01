<template>
    <div class="episode-list">
      <!--<pre>{{products}}</pre>-->
      <img :src="seriado.image['original']" alt="">
      <h1>{{seriado.name}} ({{seriado.rating['average']}})</h1>
      <h3>Language: {{seriado.language}} | Episode number | Runtime: minutes</h3>
      <a :href="seriado.officialSite" target="_blank">Official site</a>
      <p>{{seriado.summary}}</p>
      <hr>
      <h2>Episode list</h2>
      <episode-list-item v-for="(product, i) in products" :product="product" :key="product.id">
      </episode-list-item>
    </div>
</template>

<script>
    import EpisodeListItem from './EpisodeListItem.vue';

    export default {
        name: 'episode-list',
        props: ['products', 'title'],
        components: {
            'episode-list-item': EpisodeListItem
        },
        methods: {
        },
        data() {
            return {
                seriado: {}
            }
        },
        created() {
            let id = this.$route.params.id;
            $.getJSON(`http://api.tvmaze.com/shows/1`)
                .done(data => {this.seriado = data;})
        }
    };
</script>

<style scoped>
  img {
    width: 100%;
  }
</style>
