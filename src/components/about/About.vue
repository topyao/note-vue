<template>
  <div>
    <Header />
    <TopBar />
    <main id="app" style="margin-top: 0.8em">
      <div style="display: flex; justify-content: space-around">
        <p
          style="
            width: 30%;
            text-align: center;
            font-weight: bolder;
            color: grey;
            font-size: 1.5em;
          "
        >
          访问量：<span style="color: #4f70f6">170,238</span>
        </p>
        <p
          id="down"
          style="
            width: 30%;
            text-align: center;
            font-weight: bolder;
            color: grey;
            font-size: 1.5em;
          "
        >
          下载次数：<span style="color: #4f70f6">260</span>
        </p>
      </div>
      <p
        style="
          text-align: center;
          font-weight: bold;
          color: grey;
          margin: 0 0 1.5em;
        "
      >
        <i class="fa fa-link"></i> &nbsp;&nbsp;起步
      </p>
      <div id="step1" style="display: flex; justify-content: space-between">
        <div class="card advantages" style="width: 100%; margin-right: 0.5em">
          <div class="tips">特性</div>
          <div
            style="
              margin: 0.5em;
              color: #2d2626;
              line-height: 1.1em;
              text-align: left;
              font-size: 1.1em;
              padding: 0.5em;
              font-weight: bold;
            "
          >
            <code>
              一、&nbsp;组件和框架核心分离<br />
              二、&nbsp;基于 Psr7 的 HTTP-Message<br />
              三、&nbsp;基于 Psr11 的容器，支持接口注入[支持注解 PHP8.0]<br />
              四、&nbsp;方便的数据库操作方法，支持 MySQL、PostgreSQL
              等[可扩展]<br />
              五、&nbsp;基于 Psr14 的事件[支持注解 PHP8.0]<br />
              六、&nbsp;基于 Psr15 的中间件[支持注解 PHP8.0]<br />
              七、&nbsp;基于 Psr16 的缓存组件,支持
              File,Memcached,Redis,APC[可扩展]<br />
              八、&nbsp;支持路由功能[支持注解 PHP8.0]<br />
              九、&nbsp;支持 Blade 的可扩展的视图功能<br />
              十、&nbsp;门面，命令行，验证器，trace<br />
            </code>
          </div>
        </div>
        <div style="width: 100%" class="card">
          <div class="tips">安装要求</div>
          <div
            style="
              margin: 0.5em;
              color: #2d2626;
              line-height: 1.1em;
              text-align: left;
              font-size: 1.1em;
              padding: 0.5em;
              font-weight: bold;
            "
          >
            <code>PHP &gt;= 7.4 √</code>
          </div>
          <div class="tips">使用Composer安装</div>
          <div
            style="
              margin: 0.5em;
              color: #2d2626;
              line-height: 1.1em;
              text-align: left;
              font-size: 1.1em;
              padding: 0.5em;
              font-weight: bold;
            "
          >
            <code>composer create-project --prefer-dist max/max .</code>
          </div>
          <div class="tips">运行框架</div>
          <div
            style="
              margin: 0.5em;
              color: #2d2626;
              line-height: 1.1em;
              text-align: left;
              font-size: 1.1em;
              padding: 0.5em;
              font-weight: bold;
            "
          >
            <code>php max serve</code><br />
          </div>
        </div>
      </div>
      <p
        style="
          text-align: center;
          font-weight: bold;
          color: grey;
          margin: 1.5em 0;
        "
      >
        <i class="fa fa-link"></i> &nbsp;&nbsp;开发团队
      </p>
      <div class="team">
        <div class="users">
          <a href="#"
            ><img class="users" alt="undetermined" src="/favicon.ico"
          /></a>
          <p>undetermined</p>
        </div>
        <div class="users">
          <a href="https://github.com/topyao"
            ><img
              class="users"
              alt="chengyao"
              src="https://avatars.githubusercontent.com/u/64066545?s=400&amp;u=319aa25dbecffeba5b52fdb8449cf411f75ce3f2&amp;v=4"
          /></a>
          <p>chengyao</p>
        </div>
        <div class="users">
          <a href=""><img class="users" alt="chengyao" src="/favicon.ico" /></a>
          <p>undetermined</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../layout/Header.vue";
import Footer from "../layout/Footer.vue";
import TopBar from "./TopBar.vue";
export default {
  components: { TopBar, Header, Footer },
  name: "About",
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
main {
  margin: 0 auto;
  width: 78%;
}
#app {
  margin-top: 3.8em;
}
.team {
  width: 80%;
  margin: 0 auto 2em;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-end;
}
.users {
  width: 10em;
}
.users:nth-child(2) {
  width: 15em;
}
.users img {
  width: 10em;
  height: 10em;
  border-radius: 5em;
  box-shadow: #eeeeee 0 0 10px 0;
  transition: all 0.3s;
}
.users:hover img {
  transform: rotateZ(360deg) scale(1.1);
}
.users > p {
  text-align: center;
  margin-top: 0.5em;
  font-weight: bold;
}
.users:hover p {
  animation: rotate 0.3s infinite linear;
}
.team > .users:nth-child(2) img {
  width: 15em;
  height: 15em;
  border-radius: 7.5em;
}
@media screen and (max-width: 880px) {
  main {
    width: 100% !important;
  }
  .team {
    width: 95%;
    margin: 1em auto;
  }
  .team > .users:nth-child(2) img {
    width: 10em;
    height: 10em;
    border-radius: 5em;
  }
  .users {
    width: 5em;
  }
  .users:nth-child(2) {
    width: 10em;
  }
  .users img {
    width: 5em;
    height: 5em;
    border-radius: 2.5em;
  }
  .advantages {
    margin-right: 0 !important;
  }
  #step1 {
    flex-wrap: wrap-reverse;
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
.fa-link:before {
  content: "\f0c1";
}
/*! CSS Used keyframes */
@keyframes rotate {
  0% {
    transform: rotateZ(-10deg);
  }
  50% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(10deg);
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