<template>
    <div>
      <h1>Search for your next serie</h1>
      <input type="text" name="" value="" placeholder="Start typing the serie name">
      <router-link :to="'/serie/169'">Detalhe de série</router-link>
    </div>
</template>

<script>
    export default {
        name: 'search',
        data() {
          return {
            theProducts: []
          };
        },
        created: function() {
            //$.getJSON('https://hplussport.com/api/products')
                //.done(data => {this.theProducts = data;});
        }
    };
</script>

<style scoped>
  div {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    position: absolute;
    padding: 0 20px;
    top: 0;
    background: #000000;
  }
  div::after {
    content: "";
    background: #000000 url('../images/background.jpg') no-repeat;
    background-position-x: center;
    background-size: auto 100%;
    opacity: 0.3;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
  }
  *:not(div) {
    z-index: 1;
  }
  h1 {
    font-size: 20px;
    text-align: center;
    margin: 0 0 15px;
    color: #ffffff;
  }
  input {
    height: 40px;
    width: 100%;
    border: 2px solid transparent;
    -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.35);
    -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.35);
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.35);
    margin: 0;
    border-radius: 5px;
    text-indent: 10px;
    font-size: 12px;
  }
  input:focus {
    outline: none;
    border: 2px solid #6ed86e;
  }
  a {
    color: white;
    margin-top: 30px;
  }
  @media only screen and (min-width: 768px) {
    div {
      width: 100%;
      height: 150px;
      padding: 0;
    }
    h1 {
      font-size: 40px;
      margin-bottom: 30px;
    }
    input {
      width: 70%;
      height: 60px;
      font-size: 24px;
      text-indent: 20px;
    }
  }
</style>
