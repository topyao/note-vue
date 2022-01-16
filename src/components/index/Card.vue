<template>
  <div class="par-card" style="margin-bottom: 0.5em">
    <div class="card-sm card-sm-4" style="height: 10em; width: 25%">
      <div
        class="sm-back"
        style="
          background: white url('/static/img/packages/routing.png') no-repeat;
          background-size: cover;
        "
      ></div>
      <div class="sm-title">
        <a href="https://github.com/topyao/max-routing">一款轻量的路由</a>
      </div>
    </div>
    <div class="card-sm card-sm-4" style="height: 10em; width: 25%">
      <div
        class="sm-back"
        style="
          background: white url('/static/img/packages/blade.png') no-repeat;
          background-size: cover;
        "
      ></div>
      <div class="sm-title">
        <a href="https://github.com/topyao/max-view">Blade视图引擎</a>
      </div>
    </div>
    <div class="card-sm card-sm-4" style="height: 10em; width: 25%">
      <div
        class="sm-back"
        style="
          background: white url('/static/img/packages/maxgo.png') no-repeat;
          background-size: cover;
        "
      ></div>
      <div class="sm-title">
        <a href="https://github.com/topyao/maxgo-skeleton">MaxGo</a>
      </div>
    </div>
    <div class="card-sm card-sm-4" style="height: 10em; width: 25%">
      <div
        class="sm-back"
        style="background: linear-gradient(28deg, #320bff, #e5690ba1)"
      ></div>
      <div class="sm-title">分类</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {};
  },
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
a {
  text-decoration: none;
}
.sm-back {
  height: 7.5em;
  background-size: cover;
  border-radius: 5px 5px 0 0;
}
.sm-title {
  height: 2.5em;
  padding: 0 0.5em;
  position: relative;
  box-sizing: border-box;
  line-height: 2.5em;
  text-align: center;
}
.sm-title > a {
  color: black;
}
.par-card {
  display: flex;
  justify-content: flex-start;
}
@media screen and (max-width: 880px) {
  .par-card {
    display: flex;
    flex-wrap: wrap;
  }
  .card-sm {
    width: 98% !important;
    margin: 0 auto 0.5em !important;
  }
  .card-sm-4 {
    width: 48% !important;
  }
}
.card-sm {
  box-shadow: rgb(236 236 236) 0 0 3px 0;
  background-color: white;
  border-radius: 5px;
  word-break: break-all;
  width: 33.33%;
  margin: 0 0.25em 0.5em;
  transition: all 0.3s;
}
.card-sm:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 10px 0 #e5e5e5;
}
.card-sm:first-child {
  margin-left: 0;
}
.card-sm:last-child {
  margin-right: 0;
}
@media all {
  ::-webkit-scrollbar-thumb {
    border-radius: var(--border-hd);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #c0c4cc;
  }
}
/*! CSS Used from: Embedded */
::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
</style>