<script setup>
</script>

<template>
  <div id="app">
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link to="/GreetingComponent">Калькулятор валют</router-link> |
      <router-link to="/QUIKSPB">QUIKSPB</router-link> |
      <router-link to="/MyToDoList">📝 My To-Do List</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
  nav{
    margin: 17px;
    background-color: black;
    color: white;
    padding: 17px;
    border-radius: 25px;
  }
  body {
    border-radius: 25px;
    margin: 25px;
    background-color: #2C2C2C;
  }

</style>