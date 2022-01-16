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
        >军军</a
      >
      <a
        class="tags friendlink"
        data-id="2"
        target="_blank"
        title=""
        href="https://www.1kmb.com"
        rel="noopener"
        >一刻模板</a
      >
      <a
        class="tags friendlink"
        data-id="3"
        target="_blank"
        title=""
        href="https://www.code-nav.cn/"
        rel="noopener"
        >编程导航</a
      >
      <a
        class="tags friendlink"
        data-id="4"
        target="_blank"
        title=""
        href="https://www.huue.cc/"
        rel="noopener"
        >乎学技术</a
      >
      <a
        class="tags friendlink"
        data-id="6"
        target="_blank"
        title=""
        href="https://www.cnblogs.com/death-satan/"
        rel="noopener"
        >Death撒旦</a
      >
      <a
        class="tags friendlink"
        data-id="7"
        target="_blank"
        title="左手代码右手诗 "
        href="https://www.laruence.com/ "
        rel="noopener"
        >风雪之隅</a
      >
      <a
        class="tags friendlink"
        data-id="8"
        target="_blank"
        title=""
        href="http://yuanm.ren/"
        rel="noopener"
        >袁某人</a
      >
      <a
        class="tags friendlink"
        data-id="9"
        target="_blank"
        title=""
        href="https://www.itqaq.com"
        rel="noopener"
        >IT技术网</a
      >
      <a
        class="tags friendlink"
        data-id="10"
        target="_blank"
        title=""
        href="https://cway.top/"
        rel="noopener"
        >极四维博客</a
      >
      <a
        class="tags friendlink"
        data-id="11"
        target="_blank"
        title=""
        href="https://www.vblogs.cc"
        rel="noopener"
        >博客之家</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Link",
};
</script>

<style>
/*! CSS Used from: https://www.1kmb.com/static/css/css.css?20210767 */
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
.card-content {
  padding: 0.2em 0.7em;
  margin: 0;
}
.card {
  box-shadow: rgb(240 240 240) 0 0 4px 0;
  background-color: white;
  border-radius: 5px;
  word-break: break-all;
  padding: 0.5em;
  margin-bottom: 0.5em;
}
a {
  text-decoration: none;
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
/*! CSS Used from: https://cdn.bootcdn.net/ajax/libs/font-awesome/4.7.0/css/font-awesome.css */
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fa-link:before {
  content: "\f0c1";
}
/*! CSS Used from: Embedded */
::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
/*! CSS Used keyframes */
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
/*! CSS Used fontfaces */
@font-face {
  font-family: "FontAwesome";
  src: url("https://cdn.bootcdn.net/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0");
  src: url("https://cdn.bootcdn.net/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.eot#iefix&v=4.7.0")
      format("embedded-opentype"),
    url("https://cdn.bootcdn.net/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0")
      format("woff2"),
    url("https://cdn.bootcdn.net/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0")
      format("woff"),
    url("https://cdn.bootcdn.net/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0")
      format("truetype"),
    url("https://cdn.bootcdn.net/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular")
      format("svg");
  font-weight: normal;
  font-style: normal;
}
</style>