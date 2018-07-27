<template>
    <div class="episode-list">
      <img :src="seriado.image['original']" alt="">
      <div class="series-info">
        <h1>{{seriado.name}} ({{seriado.rating['average']}})</h1>
        <h3>
          <span v-for="genre in seriado.genres">{{ genre }}</span>
        </h3>
        <h5 v-if="seriado.status === 'Running'">
          <span v-for="day in seriado.schedule.days">{{ day }}s at</span> <span>{{seriado.schedule.time}}</span> on <span>{{seriado.network.name}}</span>
        </h5>
        <a class="oficial-site" :href="seriado.officialSite" target="_blank">Official site</a>
        <div class="seriado-summary" v-html="seriado.summary"></div>
        <h4>Language: {{seriado.language}} | Premiered: {{seriado.premiered}} | Status: {{seriado.status}}</h4>
      </div>
      <h2>Episode list</h2>
      <div class="episode-listing">
        <episode-list-item v-for="(episodio, i) in episodios" :episodio="episodio" :key="episodio.id">
        </episode-list-item>
      </div>
      <h2>Cast</h2>
      <div class="cast-listing">
        <cast-list-item v-for="(ator, i) in elenco" :elenco="elenco" :key="ator.id">
        </cast-list-item>
      </div>
    </div>
</template>

<script>
    import EpisodeListItem from './EpisodeListItem.vue';
    import CastListItem from './CastListItem.vue';

    export default {
        name: 'episode-list',
        props: ['products', 'title'],
        components: {
            'episode-list-item': EpisodeListItem,
            'cast-list-item': CastListItem
        },
        methods: {
        },
        data() {
            return {
                seriado: {},
                episodios: {},
                elenco: {}
            }
        },
        created() {
            let id = this.$route.params.id;

            let episodesQuery = 'http://api.tvmaze.com/shows/'
            episodesQuery += id
            episodesQuery += '/episodes'

            let castQuery = 'http://api.tvmaze.com/shows/'
            castQuery += id
            castQuery += '/cast'

            $.getJSON(`http://api.tvmaze.com/shows/${id}`)
                .done(data => {this.seriado = data;})
            $.getJSON(episodesQuery)
                .done(data => {this.episodios = data;})
            $.getJSON(castQuery)
                .done(data => {this.elenco = data;})
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
  h3 span::after {
    content: " | ";
  }
  h3 span:last-of-type::after {
    content: none;
  }
  h4 {
    font-size: 12px;
    text-align: center;
    margin: 0 0 35px;
  }
  h5 {
    text-align: center;
    margin: 5px 0 30px 0;
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
    margin: 30px 0 0;
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
