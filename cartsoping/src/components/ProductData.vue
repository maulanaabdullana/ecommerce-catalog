<template>
  <div class="container">
    <div class="box">
      <div class="box-img">
        <img :src="products.image">
      </div>
      <div class="box-title">
        <h3>{{ products.title }}</h3>
        <i>{{ products.category }}</i>
        <hr>
        <p class="deskripsi">{{ products.description}}</p>
        <hr>
        <p class="price">${{ products.price }}</p>
        <button class="buy">Buy Now</button>
        <button class="next" @click="$emit('add')" >Next Product</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductData",
  props:['products']

}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
}

.box {
  display: flex;
  flex-wrap: wrap;
  width: 1034px;
  height: 580px;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border: 2px solid #0000;
  box-shadow: 25% #000000;
  border-radius: 10px;
}

.buy{
  background-color: #002772;
  color: #FFFFFF;
  width: 259px;
  height: 42px;
  top: 615px;
  left: 555px;
  border-radius: 4px;

}

.next{
  border: 3px solid #002772;
  background-color: #FFFFFF;
  color: #002772;
  width: 259px;
  height: 42px;
  left: 833px;
  top: 615px;
  border-radius: 4px;

}

.next:hover{
  background-color: #002772;
  color: #FFFFFF ;
}

.box-title{
  display: block;
  width: 548px;
  height: 484px;
  top: 173px;
  left: 600px;
  border-radius: 4px;
}



img{
  width: 301px;
  height: 383px;
}

h3{
  color: #002772;
  width: 548px;
}

button{
  width: 259px;
  height: 42px;
  top: 615px;
  left: 555px;
  border-radius: 4px;
}

.price{
  color: #002772;
  font-weight: 600;
  size: 100px;
  line-height: 33.89px;
  width: 97px;
  height: 34px;
  top: 566px;
}

.hr{
  width: 542.5px;
  top: 257px;
  left: 555px;
  border: 1px;
}

.deskripsi{
  width: 517px;
  height: 163px;
  left: 555px;
  font-size: small;
}

@media (max-width: 780px) {
  .box{
    width: 90%;
    flex-wrap: wrap;
    padding: 50px;
    margin: auto;
  }

  .box-title{
    display: block;
    font-size: 15px;
    margin-left: 80px;
  }
  .hr{
    width: 10px;
  }
  
  .deskripsi{
    display: flex;
    flex-wrap: wrap;
    font-size: smaller;
  }
}

</style>
