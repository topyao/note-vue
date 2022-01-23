<template>
  <footer>
    <div id="footer-main">
      <div style="height: 80%">
        <h2>联系方式</h2>
        <p>
          <a
            aria-label="QQ"
            href="http://wpa.qq.com/msgrd?v=3&amp;uin=987861463&amp;site=qq&amp;menu=yes"
            ><i class="fa fa-qq" aria-hidden="true"></i> 987861463</a
          >
        </p>
        <p>
          <a
            title="QQ群"
            aria-label="QQ群"
            href="https://qm.qq.com/cgi-bin/qm/qr?k=I5hM1g5EWFKhAndMyNFZrKREP8x4vf2X&amp;jump_from=webapi"
            ><i class="fa fa-users" aria-hidden="true"></i> 542564341</a
          >
        </p>
      </div>
      <div style="height: 80%">
        <h2>相关作品</h2>
        <p><a href="//github.com/topyao/note">MaxNote</a></p>
      </div>
      <div style="height: 80%">
        <h2>关于</h2>
        <p><a href="//github.com/topyao/max">使用MaxPHP框架开发</a></p>
        <p>感谢 <a href="//www.jetbrains.com/?from=topyao">Phpstorm</a></p>
        <p>
          <a href="//beian.miit.gov.cn" target="_blank" class="text"
            >陕ICP备20000693号-1</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>
footer {
  position: relative;
  font-size: 0.85em;
  color: white;
  background-color: black;
}
footer > #footer-main {
  height: 14em;
  margin: 0 auto;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
footer a {
  color: white;
}
@media screen and (max-width: 880px) {
  footer > #footer-main {
    width: 88%;
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