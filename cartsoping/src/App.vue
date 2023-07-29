<template>
  <div id="app">
    <div :class="getPageClass()">
      <ProductData :products="products" @add="getindex" />
    </div>
  </div>
</template>


<script>
import ProductData from './components/ProductData.vue';
export default {
  name: "App",
  components: {
    ProductData,
  },
  data: function () {
    return {
      products: [],
      index: 1,
    }
  },

  mounted() {
    this.fetchproducts()
  },

  methods: {

    getindex() {
      this.index++
      if (this.index > 20) {
        this.index = 1
      } else {
        this.fetchproducts()
      }
    },

    getPageClass() {
      if (this.products.category === "men's clothing") {
        return "Page-Men";
      } else if (this.products.category === "women's clothing") {
        return "Page-Women";
      } else {
        return "Page-Unavailable";
      }
    },
    async fetchproducts() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${this.index}`)
        const data = await response.json()
        if (data.category === "men's clothing" || data.category === "women's clothing") {
          this.products = data
        } else {
          this.getindex()
        }
      } catch (error) {
        console.log('error', error)
      }
    }
  }










}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 0;
  margin: 0;
  padding: 0;
  border: 0;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.Page-Men {
  /* background-color: #D6E6FF; */
  background-color: #D6E6FF;
}

.Page-Women {
  background-color: #FDE2FF;
}

@media (max-width: 780px) {
  .container {
    width: 100%;
  }
}
</style>
