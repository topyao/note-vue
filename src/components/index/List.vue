<template>
  <div class="card">
    <div class="tips">最新发布</div>
    <div id="content">
      <div class="content">
        <div v-for="item in list" v-bind:key="item.id" class="list-item">
          <div>
            <router-link target="__blank" :to="'/note/' + item.id + '.html'">
              <img class="thumb" alt="" :src="item.thumb" />
            </router-link>
          </div>
          <div class="list-content">
            <div>
              <div class="list-content-title">
                <router-link
                  target="_blank"
                  class="article-title"
                  :to="'/note/' + item.id + '.html'"
                >
                  {{ item.title }}
                </router-link>
              </div>
              <div class="description">
                {{ item.abstract }}
              </div>
            </div>
            <div class="list-content-bottom">
              <span
                ><i class="fa fa-calendar"></i>&nbsp;&nbsp;{{
                  item.create_time
                }}&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-folder"></i
                >&nbsp;&nbsp;{{ item.type }}</span
              >
              <span>
                <i class="fa fa-eye"></i>
                &nbsp;{{ hits }}&nbsp;&nbsp;
                <router-link
                  target="_blank"
                  class="read-link"
                  :to="'/note/' + item.id + '.html'"
                >
                  <i class="fa fa-book"></i>&nbsp;&nbsp;继续阅读
                </router-link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul class="paginate" style="text-align: center">
      <span id="get-more">
        <i
          class="fa fa-circle"
          style="font-size: 0.9em; font-weight: bold; cursor: pointer"
          >&nbsp;More</i
        >
      </span>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      list: [],
      link: [],
    };
  },
  created() {
    this.$axios.get("http://127.0.0.1:8889/api/notes").then((d) => {
      this.list = d.data;
    });
    this.$axios.get("http://127.0.0.1:8889/api/link").then((d) => {
      this.link = d.data;
    });
  },
};
</script>

<style>
.read-link {
  margin-left: 0.5em;
  color: #309bee;
}
.list-item {
  padding: 0.5em;
  margin: 0.5em 0;
  display: flex;
  border-radius: 10px;
  justify-content: flex-start;
  transition: background-color 0.5s;
}
.list-item:hover {
  background-color: #ededed;
}
.list-item > .list-content {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
}
.list-content-title {
  padding: 0 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.list-item > .list-content > .list-content-bottom {
  color: grey;
  font-size: 0.9em;
  text-align: right;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
}
.article-title {
  color: black;
  font-size: 1.5em;
  font-weight: bold;
  transition: color 0.4s;
}
.article-title:hover {
  color: #616060;
}
.thumb {
  height: 190px;
  border-radius: 10px;
  width: 20em;
  margin-right: 1.2em;
  transition: all 0.3s;
}
.thumb:hover {
  transform: scale(0.98);
}
.description {
  padding: 0.5em;
  color: grey;
  font-size: 0.9em;
}
@media screen and (max-width: 880px) {
  .thumb {
    width: 100%;
    height: 200px;
    margin-right: 0;
  }
  .list-item {
    flex-direction: column;
  }
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
.fa-lock:before {
  content: "\f023";
}
.fa-book:before {
  content: "\f02d";
}
.fa-eye:before {
  content: "\f06e";
}
.fa-calendar:before {
  content: "\f073";
}
.fa-folder:before {
  content: "\f07b";
}
/*! CSS Used from: Embedded */
img {
  vertical-align: middle;
}
::-moz-focus-inner {
  padding: 0;
  border-style: none;
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
/*! CSS Used from: https://www.1kmb.com/static/css/css.css?20210767 */
*::-webkit-scrollbar {
  width: 0.3em;
  height: 0.3em;
}
*::-webkit-scrollbar-thumb {
  background-color: black;
  border-radius: 5px;
}
.paginate {
  padding: 0;
  margin: 0.8em 0;
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
.fa-circle:before {
  content: "\f111";
}
/*! CSS Used from: Embedded */
::-moz-focus-inner {
  padding: 0;
  border-style: none;
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