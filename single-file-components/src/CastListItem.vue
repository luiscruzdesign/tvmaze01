<template>
  <article>
    <div v-for="person in elenco">
      <img :src="person['character'].image['medium']" alt="">
      {{person["person"].name}} as {{person["character"].name}}
    </div>
  </article>
</template>

<script>
    export default {
        name: 'cast-list-item',
        props: ['elenco'],
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
