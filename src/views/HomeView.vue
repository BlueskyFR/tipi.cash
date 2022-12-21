<script lang="ts" setup>
import { ref, onMounted } from "vue";
import twemoji from "twemoji";

const title = ref();

onMounted(() => {
  //title.value.innerHTML = title.value.textContent.replace(/\S/g, "<span>$&</span>");
  twemoji.parse(title.value, { folder: "svg", ext: ".svg" });
});
</script>

<template>
  <main>
    <div id="title-container">
      <span ref="title" class="anim-text-flow">⛺<span>.</span>💵</span>
    </div>
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
  font-size: 4em;
}

h1 {
  font-family: "Kalam", cursive;
  font-weight: 400;
  font-size: 1.2em;
}

h1 a:visited {
  color: whitesmoke;
}

img.emoji {
  height: 1em;
  width: 1em;
  margin: 0 0.05em 0 0.1em;
  vertical-align: -0.1em;
}
</style>
