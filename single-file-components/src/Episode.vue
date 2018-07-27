<template>
    <div>
        <!--<router-link :to="'/serie/episodes/8'">Listagem de episódios</router-link>-->
        <img :src="product.image['medium']" :alt="product.name">
        <div class="episode-details">
          <h1>{{product.name}}</h1>
          <h3>Season: {{product.season}} | Episode number {{product.number}} | Runtime: {{product.runtime}} minutes</h3>
          <div class="episodio-summary" v-html="product.summary"></div>
        </div>
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
            $.getJSON(`http://api.tvmaze.com/episodes/${id}`)
                .done(data => {this.product = data;})
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
    h3 {
      text-align: center;
      font-size: 12px;
    }
    .episodio-summary {
      font-family: "Times New Roman", Times, serif;
    }
    @media only screen and (min-width: 768px) {
      img {
        width: 50%;
        float: left;
      }
      .episode-details {
        width: 50%;
        float: right;
      }
    }
</style>
