<template>
    <div class="episode-list">
      <img :src="seriado.image['original']" alt="">
      <div class="series-info">
        <h1>{{seriado.name}} ({{seriado.rating['average']}})</h1>
        <h3>Language: {{seriado.language}} | Episode number | Runtime: minutes</h3>
        <a class="oficial-site" :href="seriado.officialSite" target="_blank">Official site</a>
        <div class="seriado-summary" v-html="seriado.summary"></div>
      </div>
      <h2>Episode list</h2>
      <div class="episode-listing">
        <episode-list-item v-for="(episodio, i) in episodios" :episodio="episodio" :key="episodio.id">
        </episode-list-item>
      </div>
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
                seriado: {},
                episodios: {}
            }
        },
        created() {
            let id = this.$route.params.id;

            let episodesQuery = 'http://api.tvmaze.com/shows/'
            episodesQuery += id
            episodesQuery += '/episodes'

            $.getJSON(`http://api.tvmaze.com/shows/${id}`)
                .done(data => {this.seriado = data;})
            $.getJSON(episodesQuery)
                .done(
                  data => {this.episodios = data;})
        }
    };
</script>

<style scoped>
  img {
    width: 100%;
  }
  h1, h3 {
    margin: 0;
  }
  h1 {
    margin-top: 15px;
  }
  h2 {
    background: #000000;
    background: -moz-linear-gradient(-45deg, #000000 0%, #333333 100%);
    background: -webkit-linear-gradient(-45deg, #000000 0%,#333333 100%);
    background: linear-gradient(135deg, #000000 0%,#333333 100%);
    margin: 0;
    padding: 20px;
    color: #ffffff;
  }
  h3 {
    text-align: center;
    font-size: 12px;
  }
  .oficial-site {
    width: 300px;
    background: #40ac57;
    display: block;
    margin: 10px auto 0;
    text-align: center;
    padding: 10px;
    border-radius: 3px;
    color: white;
  }
  .seriado-summary {
    margin: 30px 0;
    font-family: "Times New Roman", Times, serif;
  }
  @media only screen and (min-width: 768px) {
    img {
      width: 50%;
      float: left;
    }
    .series-info {
      float: right;
      width: 50%;
    }
    .episode-listing {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      padding-bottom: 50px;
    }
    h2 {
      clear: both;
    }
  }
</style>
