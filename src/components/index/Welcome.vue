<template>
  <div id="banner-content" style="background: url('/static/img/bg/1.jpg')">
    <div>
      <p class="big-font">MAX</p>
      <p class="small-font">组件化的轻量PHP框架！</p>
      <a id="recommend" href="https://docs.1kmb.com"
        ><i class="fa fa-book"></i>&nbsp;&nbsp;快速入门</a
      >
      <p class="links" style="flex-wrap: wrap">
        <span id="version">0.0.3</span>
        <a href="https://github.com/topyao/max" target="_blank" rel="noopener">
          Github
        </a>
        <a
          href="https://packagist.org/packages/max/max"
          target="_blank"
          rel="noopener"
        >
          Packagist</a
        >
      </p>
    </div>
    <div class="d-bg">
      <i
        class="fa fa-thumbs-o-up"
        style="font-size: 10em; color: white"
        aria-hidden="true"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {};
  },
};
</script>

<style scoped>
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
a {
  text-decoration: none;
}
#banner-content {
  display: flex;
  background-size: cover;
  text-align: center;
  width: 100%;
  justify-content: space-around;
  box-sizing: border-box;
  align-items: center;
  margin-bottom: 1em;
  height: 22em;
  border-radius: 5px;
}
.big-font {
  font-family: "Long Cang", cursive;
  color: white;
  margin: 0 0 0.1em;
  font-size: 4em;
  animation: bigtext 1.5s;
  font-weight: bold;
  text-shadow: 3px 3px 2px #a3a3a3;
}
.small-font {
  font-family: "Long Cang", cursive;
  padding: 0.5em;
  color: white;
  text-align: center;
  margin: 0;
  font-size: 1.5em;
  font-weight: lighter;
}
a#recommend {
  display: block;
  width: 7em;
  color: white;
  font-size: 1em;
  border-radius: 5px;
  line-height: 2.5em;
  border: 1px solid white;
  margin: 1em auto 0;
  height: 2.5em;
  transition: all 0.3s;
}
a#recommend:hover {
  background-color: white;
  color: black;
}
p.links {
  color: white;
  margin: 30px 0;
  font-family: "Long Cang", cursive;
  display: flex;
  justify-content: space-around;
}
p.links a {
  border-bottom: 1px dotted #d2ebe3;
  color: white;
}
p.links a:hover {
  border-bottom: 1px solid white;
  color: #d2ebe3;
}
.links {
  margin: 0 auto;
  width: 85%;
  box-sizing: border-box;
}
@media screen and (max-width: 880px) {
  .links {
    width: 100%;
  }
  .big-font {
    font-size: 4em;
  }
  #banner-content {
    width: 100% !important;
  }
  .d-bg {
    display: none !important;
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
.fa-book:before {
  content: "\f02d";
}
.fa-thumbs-o-up:before {
  content: "\f087";
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
/*! CSS Used keyframes */
@keyframes bigtext {
  0% {
    transform: rotateX(0deg);
  }
  10% {
    transform: rotateX(30deg);
  }
  25% {
    transform: rotateX(90deg);
  }
  50% {
    transform: rotateX(150deg);
  }
  60% {
    transform: rotateX(180deg);
  }
  75% {
    transform: rotateX(60deg);
  }
  85% {
    transform: rotateX(30deg);
  }
  100% {
    transform: rotateX(0deg);
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