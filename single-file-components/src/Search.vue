<template>
    <div>
      <h1>Search for your next serie</h1>
      <input type="text" name="" value="" placeholder="Start typing the serie name">
    </div>
</template>

<script>
    export default {
        name: 'search',
        data() {
            return {
                product: {}
            }
        },
        created() {
            let id = this.$route.params.id;
            $.getJSON(`https://hplussport.com/api/products/id/${id}`)
                .done(data => {this.product = data;})
        }
    };
</script>

<style scoped>
  div {
    height: 150px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    margin-top: -40px;
    padding: 0 20px;
    left: 0;
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
</style>
