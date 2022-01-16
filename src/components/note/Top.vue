<template>
  <div
    style="
      height: 20em;
      background: url('/static/img/bg/1.jpg')
        no-repeat center center;
      background-size: cover;
    "
  >
    <div
      style="
        width: 100%;
        height: 100%;
        backdrop-filter: saturate(180%) blur(20px);
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
      <div style="max-width: 90%">
        <p id="headline">RBAC权限系统分析、设计与实现</p>
        <p
          style="text-align: center; font-size: 0.9em; margin: 0; color: white"
        >
          <i class="fa fa-calendar"></i>&nbsp;2022/1/5&nbsp;&nbsp;
          <i class="fa fa-user"></i>&nbsp;Yao&nbsp;&nbsp;<i
            class="fa fa-folder"
          ></i
          >&nbsp;未分类&nbsp;&nbsp;<i class="fa fa-eye"></i
          >&nbsp;100&nbsp;&nbsp;<i class="fa fa-comment"></i>&nbsp;6
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",
};
</script>

<style>
/*! CSS Used from: https://www.1kmb.com/static/css/css.css?20210767 */
*::-webkit-scrollbar {
  width: 0.3em;
  height: 0.3em;
}
*::-webkit-scrollbar-thumb {
  background-color: black;
  border-radius: 5px;
}
#headline {
  font-weight: bolder;
  font-size: 2.5em;
  color: white;
  text-align: center;
}
@media screen and (max-width: 880px) {
  #headline {
    font-size: 2em;
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
.fa-user:before {
  content: "\f007";
}
.fa-eye:before {
  content: "\f06e";
}
.fa-calendar:before {
  content: "\f073";
}
.fa-comment:before {
  content: "\f075";
}
.fa-folder:before {
  content: "\f07b";
}
/*! CSS Used from: https://www.1kmb.com/static/editor/css/editormd.preview.css */
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transform: translate(0, 0);
}
.fa-user:before {
  content: "\f007";
}
.fa-eye:before {
  content: "\f06e";
}
.fa-calendar:before {
  content: "\f073";
}
.fa-comment:before {
  content: "\f075";
}
.fa-folder:before {
  content: "\f07b";
}
/*! CSS Used from: Embedded */
p {
  margin-top: 0;
  margin-bottom: 1rem;
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
@font-face {
  font-family: "FontAwesome";
  src: url("https://www.1kmb.com/static/editor/fonts/fontawesome-webfont.eot?v=4.3.0");
  src: url("https://www.1kmb.com/static/editor/fonts/fontawesome-webfont.eot#iefix&v=4.3.0")
      format("embedded-opentype"),
    url("https://www.1kmb.com/static/editor/fonts/fontawesome-webfont.woff2?v=4.3.0")
      format("woff2"),
    url("https://www.1kmb.com/static/editor/fonts/fontawesome-webfont.woff?v=4.3.0")
      format("woff"),
    url("https://www.1kmb.com/static/editor/fonts/fontawesome-webfont.ttf?v=4.3.0")
      format("truetype"),
    url("https://www.1kmb.com/static/editor/fonts/fontawesome-webfont.svg?v=4.3.0#fontawesomeregular")
      format("svg");
  font-weight: normal;
  font-style: normal;
}
</style>