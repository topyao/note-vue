<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html body {
  margin: 0;
  padding: 0;
  border: none;
}
a {
  text-decoration: none;
}
*::-webkit-scrollbar {
  width: 0.3em;
  height: 0.3em;
}
*::-webkit-scrollbar-thumb {
  background-color: black;
  border-radius: 5px;
}
.card {
  box-shadow: rgb(240 240 240) 0 0 4px 0;
  background-color: white;
  border-radius: 5px;
  word-break: break-all;
  padding: 0.5em;
  margin-bottom: 0.5em;
}
.tips {
  min-height: 1.8em;
  line-height: 1.8em;
  font-weight: bold;
  font-size: 0.95em;
  background-color: white;
  color: grey;
  padding-left: 0.5em;
}
.tips > a {
  color: black;
}
.tips > a:hover {
  color: grey;
}
main {
  margin: 0 auto;
  width: 78%;
  display: flex;
}
</style>
