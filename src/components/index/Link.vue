<template>
  <div class="card">
    <div class="tips" style="margin-bottom: 0.5em">
      <i class="fa fa-link"></i>&nbsp;&nbsp;Links
    </div>
    <div class="card-content">
      <a
        class="tags friendlink"
        data-id="1"
        target="_blank"
        title="世界皆黑，唯我独白"
        href="https://imjunjun.cn"
        rel="noopener"
      >
        军军
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Link",
};
</script>

<style>
.card-content {
  padding: 0.2em 0.7em;
  margin: 0;
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
a.tags {
  text-align: center;
  display: inline-block;
  height: 1.8em;
  background-color: white;
  border: 1px solid black;
  font-size: 0.6em;
  line-height: 1.8em;
  border-radius: 1.3em;
  padding: 0.4em 1em;
  color: rgb(78, 75, 75);
  font-weight: bold;
  box-shadow: 0 0 2px 0 #8ba1f8;
  margin: 0 0.4em;
  overflow: hidden;
  transition: all 0.3s;
  animation: tags 1s;
}
a.tags:hover {
  color: white;
  background-color: black;
}
@media all {
  ::-webkit-scrollbar-thumb {
    border-radius: var(--border-hd);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #c0c4cc;
  }
}
::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
@keyframes tags {
  0% {
    margin: 0 0.4em;
  }
  5% {
    margin: 0 1em;
  }
  10% {
    margin: 0 2em;
  }
  25% {
    margin: 0 0.1em;
  }
  50% {
    margin: 0 0.6em;
  }
  75% {
    margin: 0 0.2em;
  }
  100% {
    margin: 0 0.4em;
  }
}
</style>