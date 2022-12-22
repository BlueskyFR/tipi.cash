<script lang="ts" setup>
import { ref, onMounted } from "vue";

const links = [
  "⚠ pad.tipi.cash",
  "⚠ pad.blueskyfr.space",
  "🔒 bitwarden.tipi.cash",
  "🏠 home.tipi.cash",
  "🤖🧠 ensia.ml",
  "hugo.cartigny.ml",
  "⛩ revenirasoi.fr",
  "blueskyfr.space",
  "📝 notes.blueskyfr.space",
  "blueskyfr.eu",
];

const title = ref();

onMounted(() => {
  title.value.innerHTML = title.value.textContent.replace(/\S/g, "<span>$&</span>");
});
</script>

<template>
  <p class="center">Domains hosted on <span ref="title" class="anim-text-flow">Yurt</span>:</p>
  <div id="links">
    <p v-for="domain in links">
      <a :href="'https://' + domain">{{ domain }}</a>
    </p>
  </div>
</template>

<style scoped>
p {
  font-size: 0.3em;
}

#links a {
  color: whitesmoke;
  font-size: 0.75em;
  padding: 0 10px;
  background-color: rgba(245, 245, 245, 0.08);
  border-radius: 0.4em;
  transition: all 0.3s ease-out;
}

#links a:hover {
  background-color: rgba(245, 245, 245, 0.3);
  box-shadow: 0 0 2em whitesmoke;
}

p > a:visited {
  color: whitesmoke;
}

.center {
  text-align: center;
}

#links {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: stretch;
  justify-content: space-around;
}
</style>
