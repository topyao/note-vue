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
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
</style>