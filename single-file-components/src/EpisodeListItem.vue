<template>
  <article>
    <h2>{{episodio.name}}</h2>
    <h3>Season: {{episodio.season}} | Episode number {{episodio.number}} | Runtime: {{episodio.runtime}} minutes</h3>
    <img :src="episodio.image['medium']" alt="image[medium]">
    <div class="episodio-summary"v-html="episodio.summary"></div>
    <router-link :to="`/episode/${episodio.id}`">Details</router-link>
  </article>
</template>

<script>
    export default {
        name: 'episode-list-item',
        props: ['episodio'],
        methods: {
            requestRemoval() {
                this.$emit('remove');
            }
        }
    };
</script>

<style scoped>
  article {
    padding: 20px 0;
  }
  article:nth-of-type(even) {
    border-top: 1px solid #e6e6e6;
  }
  article:nth-of-type(odd) {
    background: #efefef;
  }
  h2 {
    margin-bottom: 0;
    margin-top: 0;
  }
  h3 {
    font-size: 12px;
    margin-top: 0;
  }
  .episodio-summary {
    font-family: "Times New Roman", Times, serif;
  }
  a {
    width: 300px;
    background: #40ac57;
    display: block;
    margin: 0 auto;
    text-align: center;
    padding: 10px;
    border-radius: 3px;
    color: white;
  }
  img {
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    article {
      width: 50%;
      position: relative;
      padding: 50px 0;

    }
    article:nth-of-type(odd) {
      background: white;
    }
    article:nth-of-type(even) {
      border-top: none;
    }
    a {
      position: absolute;
      bottom: 0;
      margin-left: -150px;
      left: 50%;
    }
  }
</style>
