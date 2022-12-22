<script lang="ts" setup>
import { ref, onMounted } from "vue";
import twemoji from "twemoji";

const links = [
  { prefix: "⚠", domain: "pad.tipi.cash" },
  { prefix: "⚠", domain: "pad.blueskyfr.space" },
  { prefix: "🔒", domain: "bitwarden.tipi.cash" },
  { prefix: "🏠", domain: "home.tipi.cash" },
  { prefix: "🤖🧠", domain: "ensia.ml" },
  { prefix: "", domain: "hugo.cartigny.ml" },
  { prefix: "⛩", domain: "revenirasoi.fr" },
  { prefix: "", domain: "blueskyfr.space" },
  { prefix: "📝", domain: "notes.blueskyfr.space" },
  { prefix: "", domain: "blueskyfr.eu" },
];

const title = ref();
const linkList = ref();

onMounted(() => {
  title.value.innerHTML = title.value.textContent.replace(/\S/g, "<span>$&</span>");
  twemoji.parse(title.value, { folder: "svg", ext: ".svg" });
  twemoji.parse(linkList.value, { folder: "svg", ext: ".svg" });
});
</script>

<template>
  <p class="center">Domains hosted on <span ref="title" class="anim-text-flow">Yurt</span>:</p>
  <div id="links" ref="linkList">
    <p v-for="link in links">
      <a :href="'https://' + link.domain"
        ><span>{{ link.prefix }}</span> {{ link.domain }}</a
      >
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
  text-decoration: none;
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
