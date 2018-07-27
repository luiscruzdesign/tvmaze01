<template>
  <router-view :products="theProducts" title="Shop our award-winning product line"></router-view>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      theProducts: []
    };
  },
  created: function() {

      $.getJSON('http://api.tvmaze.com/shows/1/episodes')
          .done(
            data => {this.theProducts = data;}
          );


  }
}
</script>
