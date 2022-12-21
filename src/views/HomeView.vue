<script lang="ts" setup>
import { ref, onMounted } from "vue";

const title = ref();

onMounted(() => {
  title.value.innerHTML = title.value.textContent.replace(/\S/g, "<span>$&</span>");
});
</script>

<template>
  <main>
    <div id="title-container">
      <span ref="title" class="anim-text-flow">Welcome to Yurt!</span>
    </div>

    <h1>
      This is the default landing page, which means no service is (yet) assigned to this (sub)domain
      😉
    </h1>
    <h1>👉 <a href="https://tipi.cash">Homepage</a></h1>
  </main>
</template>

<style src="@/styles/title.css" />
<style scope>
@import url("https://fonts.googleapis.com/css2?family=Kalam&family=Pacifico&display=swap");

main {
  display: grid;
  place-items: center;
  align-content: space-around;
  font-size: 2em;
  height: 100vh;
  margin: 0;

  text-align: center;
  color: whitesmoke;
}

main > * {
  z-index: 1;
}

#title-container {
  font-family: "Pacifico", cursive;
  font-size: 3em;
}

h1 {
  font-family: "Kalam", cursive;
  font-weight: 400;
  font-size: 1.2em;
}

h1 a:visited {
  color: whitesmoke;
}
</style>
