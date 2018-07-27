<template>
  <article>
    <h2><a href="id">{{product.name}}</a></h2>
    <h3>Season: {{product.season}} | Episode number {{product.number}} | Runtime: {{product.runtime}} minutes</h3>
    <br>
    <img :src="product.image['medium']" alt="image[medium]">
    {{product.summary}}
  </article>
</template>

<script>
    export default {
        name: 'episode-list-item',
        props: ['product'],
        methods: {
            requestRemoval() {
                this.$emit('remove');
            }
        }
    };
</script>

<style scoped>
  h2 {
    margin-bottom: 0;
  }
  a {
    background: none;
    color: #000000;
    text-align: left;
    margin-bottom: 0
  }
  img {
    width: 100%;
  }
</style>
