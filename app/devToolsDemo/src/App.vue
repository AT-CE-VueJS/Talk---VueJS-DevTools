<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
    <div>
        <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Hello from app #1" />

        <div>
            <h3>Contenido del contador del store: {{ $store.state.count }}</h3>
        </div>

        <nav>
            <router-link to="/about">About</router-link>
            <br />
            <router-link to="/credits/hector">Credits</router-link>
        </nav>
        <router-view />
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    background: rgba(53, 45, 144, 0.224);
}
</style>
