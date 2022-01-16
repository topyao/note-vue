<template>
  <header>
    <nav>
      <ul class="bg-nav">
        <li class="left-items"><a href="/">主页</a></li>
        <li class="left-items d-bg">
          <a href="javascript: void(0)"
            >数据库&nbsp;&nbsp;<i
              class="fa fa-angle-down"
              aria-hidden="true"
            ></i
          ></a>
          <ul class="dropdown-menu-box" style="display: none">
            <div class="cat-box">
              <a class="item" href="/search?kw=MySQL">
                <div class="content">
                  <img
                    src="https://tse3-mm.cn.bing.net/th/id/OIP-C.FEvZIQaiXEQmH1Hv-36PYQHaEo?pid=ImgDet&amp;w=60&amp;h=60&amp;c=7&amp;dpr=1.25"
                    alt=""
                  />
                  <div>MySQL</div>
                </div>
              </a>
              <a class="item" href="/search?kw=PgSQL">
                <div class="content">
                  <img
                    src="https://tse1-mm.cn.bing.net/th/id/OIP-C.mULv-hbU_ifsh9Z4TqDsUwHaE7?pid=ImgDet&amp;w=60&amp;h=60&amp;c=7&amp;dpr=1.25"
                    alt=""
                  />
                  <div>PgSQL</div>
                </div>
              </a>
              <a class="item" href="/search?kw=Oracle">
                <div class="content">
                  <img
                    src="https://tse4-mm.cn.bing.net/th/id/OIP-C.V2uKMtc5Af1AbZVXngOEigHaHa?pid=ImgDet&amp;w=60&amp;h=60&amp;c=7&amp;dpr=1.25"
                    alt=""
                  />
                  <div>Oracle</div>
                </div>
              </a>
              <a class="item" href="/search?kw=Redis">
                <div class="content">
                  <img
                    src="https://tse2-mm.cn.bing.net/th/id/OIP-C.4aUnpyNSaSYPrAJGLcjQhgAAAA?pid=ImgDet&amp;w=60&amp;h=60&amp;c=7&amp;dpr=1.25"
                    alt=""
                  />
                  <div>Redis</div>
                </div>
              </a>
              <a class="item" href="/search?kw=MongoDB">
                <div class="content">
                  <img
                    src="https://tse3-mm.cn.bing.net/th/id/OIP-C.kRURuX0Lf2PFNEHcCSA1dQHaDv?pid=ImgDet&amp;w=60&amp;h=60&amp;c=7&amp;dpr=1.25"
                    alt=""
                  />
                  <div>MongoDB</div>
                </div>
              </a>
            </div>
          </ul>
        </li>
        <li class="left-items d-bg">
          <a href="javascript: void(0)"
            >前端&nbsp;&nbsp;<i class="fa fa-angle-down" aria-hidden="true"></i
          ></a>
          <ul class="dropdown-menu-box">
            <div class="cat-box">
              <a class="item" href="/search?kw=JavaScript">
                <div class="content">
                  <img
                    src="https://tse4-mm.cn.bing.net/th/id/OIP-C.HSTrtsTHh2QhAQGbQLO38wHaHa?pid=ImgDet&amp;w=60&amp;h=60&amp;c=7&amp;dpr=1.25"
                    alt=""
                  />
                  <div>JavaScript</div>
                </div>
              </a>
              <a class="item" href="/search?kw=JQuery">
                <div class="content">
                  <img
                    src="https://tse1-mm.cn.bing.net/th/id/OIP-C.WSggs9c4OpdiWDEm7V-edwAAAA?pid=ImgDet&amp;w=60&amp;h=60&amp;c=7&amp;dpr=1.25"
                    alt=""
                  />
                  <div>JQuery</div>
                </div>
              </a>
              <a class="item" href="/search?kw=Vue">
                <div class="content">
                  <img
                    src="https://tse1-mm.cn.bing.net/th/id/OIP-C.-2RieYNX0he-cV5XrBf2DQHaD4?pid=ImgDet&amp;w=60&amp;h=60&amp;c=7&amp;dpr=1.25"
                    alt=""
                  />
                  <div>Vue</div>
                </div>
              </a>
            </div>
          </ul>
        </li>
        <li class="left-items d-bg">
          <a href="javascript: void(0)"
            >后端&nbsp;&nbsp;<i class="fa fa-angle-down" aria-hidden="true"></i
          ></a>
          <ul class="dropdown-menu-box" style="display: none">
            <div class="cat-box">
              <a class="item" href="/search?kw=Linux">
                <div class="content">
                  <img
                    src="https://tse1-mm.cn.bing.net/th/id/OIP-C.6aYY2mMI8zSiTYinsMqc_gHaDt?pid=ImgDet&amp;w=60&amp;h=60&amp;c=7&amp;dpr=1.25"
                    alt=""
                  />
                  <div>Linux</div>
                </div>
              </a>
              <a class="item" href="/search?kw=PHP">
                <div class="content">
                  <img
                    src="https://tse2-mm.cn.bing.net/th/id/OIP-C.3cKadU-tUTal8TQ7Z59N_wAAAA?pid=ImgDet&amp;w=60&amp;h=60&amp;c=7&amp;dpr=1.25"
                    alt=""
                  />
                  <div>PHP</div>
                </div>
              </a>
              <a class="item" href="/search?kw=Go">
                <div class="content">
                  <img
                    src="https://tse4-mm.cn.bing.net/th/id/OIP-C.XjGcvPxFnflel7epuQ6OJwHaHa?pid=ImgDet&amp;w=60&amp;h=60&amp;c=7&amp;dpr=1.25"
                    alt=""
                  />
                  <div>Go</div>
                </div>
              </a>
              <a class="item" href="/search?kw=Shell">
                <div class="content">
                  <img
                    src="https://tse2-mm.cn.bing.net/th/id/OIP-C.LqeIOTm2kjG5xqbP2PIvNgHaC-?pid=ImgDet&amp;w=60&amp;h=60&amp;c=7&amp;dpr=1.25"
                    alt=""
                  />
                  <div>Shell</div>
                </div>
              </a>
            </div>
          </ul>
        </li>
        <li class="left-items d-bg">
          <a href="javascript: void(0)"
            >软件&nbsp;&nbsp;<i class="fa fa-angle-down" aria-hidden="true"></i
          ></a>
          <ul class="dropdown-menu-box">
            <div class="cat-box">
              <a class="item" href="/search?kw=Docker">
                <div class="content">
                  <img
                    src="https://tse2-mm.cn.bing.net/th/id/OIP-C.IQPERZi0pkVNPfblez0UFQHaGV?pid=ImgDet&amp;w=60&amp;h=60&amp;c=7&amp;dpr=1.25"
                    alt=""
                  />
                  <div>Docker</div>
                </div>
              </a>
              <a class="item" href="/search?kw=PHPStorm">
                <div class="content">
                  <img
                    src="https://tse3-mm.cn.bing.net/th/id/OIP-C.UPqJNaj5CrnixWpBMN3IsgHaHa?pid=ImgDet&amp;w=60&amp;h=60&amp;c=7&amp;dpr=1.25"
                    alt=""
                  />
                  <div>PHPStorm</div>
                </div>
              </a>
              <a class="item" href="/search?kw=Vscode">
                <div class="content">
                  <img
                    src="https://tse3-mm.cn.bing.net/th/id/OIP-C.Zq8hf7slzrS8BTH5j_4QiQAAAA?pid=ImgDet&amp;w=60&amp;h=60&amp;c=7&amp;dpr=1.25"
                    alt=""
                  />
                  <div>Vscode</div>
                </div>
              </a>
              <a class="item" href="/search?kw=Nginx">
                <div class="content">
                  <img
                    src="https://tse4-mm.cn.bing.net/th/id/OIP-C.qD_aGR1dX3Db-2uciVVPfgHaFF?pid=ImgDet&amp;w=60&amp;h=60&amp;c=7&amp;dpr=1.25"
                    alt=""
                  />
                  <div>Nginx</div>
                </div>
              </a>
              <a class="item" href="/search?kw=Apache">
                <div class="content">
                  <img
                    src="https://tse1-mm.cn.bing.net/th/id/OIP-C.5YTZlQb3WWsovlHwpdj7aAHaE8?pid=ImgDet&amp;w=60&amp;h=60&amp;c=7&amp;dpr=1.25"
                    alt=""
                  />
                  <div>Apache</div>
                </div>
              </a>
            </div>
          </ul>
        </li>
      </ul>
      <ul style="display: flex; justify-content: flex-end">
        <li class="d-bg">
          <form action="/search">
            <input
              required=""
              autocomplete="off"
              placeholder="太低调，百度搜不到"
              type="text"
              name="kw"
              value=""
            />
          </form>
        </li>
        <li>
          <a href="https://docs.1kmb.com"><i class="fa fa-book"></i> 文档</a>
        </li>
        <li class="d-bg"><router-link to="/about">关于</router-link></li>
        <li class="d-bg">
          <a title="发布" href="/notes/add"><i class="fa fa-pencil"></i></a>
        </li>
        <li class="d-sm dropdown-btn">
          <a href="javascript:void(0)" id="dropdown"
            ><i class="fa fa-bars"></i
          ></a>
        </li>
        <li class="d-bg" style="min-width: 2.5em">
          <a href="/logout?from=https://www.1kmb.com/" title="退出"
            ><i class="fa fa-sign-out"></i
          ></a>
        </li>
      </ul>
    </nav>
    <form action="/search">
      <ul id="phone-nav" style="display: none">
        <li><a href="/about">关于</a></li>
        <li><a href="/notes/add">发布</a></li>
        <li><a href="/logout?from=https://www.1kmb.com/">退出</a></li>
        <li>
          <input
            style="
              width: 100%;
              height: 2.5em;
              outline: none;
              border-radius: 5px;
              border: none;
              background-color: #eeeeee;
              padding: 0 0.7em;
              box-sizing: border-box;
            "
            type="text"
            placeholder="太低调，百度搜不到"
            value=""
            name="kw"
          />
        </li>
      </ul>
    </form>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>

<style>
input {
  font-family: ceym, PingFang\SC, Hiragino\Sans\GB, Microsoft\YaHei, STHeiti,
    WenQuanYi\Micro\Hei, Helvetica, Arial, sans-serif !important;
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
.dropdown-menu-box {
  padding: 0;
  width: 19em;
  list-style: none;
  position: absolute;
  top: 3.5em;
  left: 0;
  background-color: white;
  border-radius: 5px;
  display: none;
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%);
  font-size: 0.9em;
}
.bg-nav li {
  cursor: pointer;
}
.bg-nav li > a {
  display: inline-block;
  width: 5em;
  height: 3.2em;
}
li.left-items {
  position: relative;
}
li.left-items a {
  transition: all 0.3s;
}
li.left-items:hover > a {
  color: grey;
}
li.left-items:after {
  position: absolute;
  right: 0;
  top: 0;
  content: "";
  font-weight: 400;
  font-size: 0.9em;
  line-height: 3.8em;
  transition: transform 0.3s;
}
#phone-nav {
  margin: 0;
  list-style-type: none;
  font-size: 0.95em;
  padding: 0 0 0.5em;
}
#phone-nav > li {
  padding: 0 calc(10% + 0.2em);
}
#phone-nav a {
  color: black;
  font-weight: bold;
}
a {
  text-decoration: none;
}
header {
  position: fixed;
  top: 0;
  width: 100%;
  line-height: 3.2em;
  text-align: left;
  z-index: 9;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: hsla(0, 0%, 100%, 0.72);
}
input[name="kw"] {
  color: grey;
  height: 2.3em;
  padding: 0 0.5em;
  margin-right: 1.3em;
  font-weight: bold;
  width: 18em;
  outline: none;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgb(141, 141, 141);
  transition: border 1s;
}
nav > ul > li {
  min-width: 5em;
  text-align: center;
  font-size: 0.95em;
  display: inline-block;
}
nav > ul a {
  color: black;
  font-weight: bold;
}
nav {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
nav li {
  list-style-type: none;
}
nav > ul {
  padding: 0;
  margin: 0 auto;
  width: 80%;
}
nav a {
  cursor: pointer;
  color: white;
  display: inline-block;
}
.d-sm {
  display: none !important;
}
@media screen and (max-width: 500px) {
  nav {
    width: 90%;
  }
}
@media screen and (max-width: 880px) {
  .dropdown-btn {
    min-width: 2.5em !important;
  }
  nav > ul {
    width: 100% !important;
  }
  .d-sm {
    display: inline !important;
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
.dropdown-menu-box > .cat-box {
  padding: 0.5em;
  background-color: white;
  min-width: 18em;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  border-radius: 5px;
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%);
}
.dropdown-menu-box > .cat-box > .item {
  width: 8em;
  height: 3em;
  border-radius: 5px;
  padding: 0.5em;
  transition: background-color 0.5s;
}
.dropdown-menu-box > .cat-box > .item:hover {
  background-color: #ededed;
}
.dropdown-menu-box > .cat-box > .item > .content {
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  box-sizing: border-box;
  line-height: 3em;
}
.dropdown-menu-box > .cat-box > .item > .content > img {
  width: 3em;
  height: 3em;
  border-radius: 50%;
}
.dropdown-menu-box > .cat-box > .item > .content > div {
  font-weight: normal;
  overflow: hidden;
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
.fa-pencil:before {
  content: "\f040";
}
.fa-sign-out:before {
  content: "\f08b";
}
.fa-bars:before {
  content: "\f0c9";
}
.fa-angle-down:before {
  content: "\f107";
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
  font-family: ceym;
  src: url("https://www.1kmb.com/static/fonts/ceym.woff2");
}
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