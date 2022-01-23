<template>
  <div class="par-card">
    <div class="card-sm">
      <div
        class="sm-back"
        style="background: white url('/static/img/bg/1.jpg') no-repeat"
      ></div>
      <div class="sm-title">
        <a href="https://github.com/topyao/max-routing">一款轻量的路由</a>
      </div>
    </div>
    <div class="card-sm">
      <div
        class="sm-back"
        style="background: white url('/static/img/bg/1.jpg') no-repeat"
      ></div>
      <div class="sm-title">
        <a href="https://github.com/topyao/max-view">Blade视图引擎</a>
      </div>
    </div>
    <div class="card-sm">
      <div
        class="sm-back"
        style="background: white url('/static/img/bg/1.jpg') no-repeat"
      ></div>
      <div class="sm-title">
        <a href="https://github.com/topyao/maxgo-skeleton">MaxGo</a>
      </div>
    </div>
    <div class="card-sm">
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
.sm-back {
  height: 7.5em;
  background-size: cover;
  border-radius: 5px 5px 0 0;
  background-size: cover;
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
  margin-bottom: 0.5em;
  display: flex;
  justify-content: flex-start;
}
@media screen and (max-width: 880px) {
  .par-card {
    display: flex;
    flex-wrap: wrap;
  }
}
.card-sm {
  box-shadow: rgb(236 236 236) 0 0 3px 0;
  background-color: white;
  border-radius: 5px;
  word-break: break-all;
  height: 10em;
  width: 25%;
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
</style>