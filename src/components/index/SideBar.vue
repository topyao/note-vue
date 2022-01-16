<template>
  <div class="d-bg" style="width: 24%">
    <div class="widget-box" id="news-comments">
      <div class="tips">最新评论</div>
      <div class="comments-small-list">
        <a class="comments-small d-flex" href="/note/122.html#comment-204">
          <img
            class="avatar lazyload"
            src="https://sdn.geekzu.org/avatar/7097810a7f79562ebe95ad5ad50b3c5a?d=mm"
            data-src="https://sdn.geekzu.org/avatar/7097810a7f79562ebe95ad5ad50b3c5a?d=mm"
          />
          <div class="content w-100">
            <p class="comment-text">匿名用户</p>
            <div class="d-flex justify-content-between">
              <p class="comment-author">11111</p>
              <p class="comment-date">22小时前</p>
            </div>
          </div>
        </a>
        <a class="comments-small d-flex" href="/note/122.html#comment-202">
          <img
            class="avatar lazyload"
            src="https://sdn.geekzu.org/avatar/7097810a7f79562ebe95ad5ad50b3c5a?d=mm"
            data-src="https://sdn.geekzu.org/avatar/7097810a7f79562ebe95ad5ad50b3c5a?d=mm"
          />
          <div class="content w-100">
            <p class="comment-text">`</p>
            <div class="d-flex justify-content-between">
              <p class="comment-author">
                &lt;script&gt;alert('我是狗')&lt;/script&gt;
              </p>
              <p class="comment-date">22小时前</p>
            </div>
          </div>
        </a>
        <a class="comments-small d-flex" href="/note/122.html#comment-201">
          <img
            class="avatar lazyload"
            src="https://sdn.geekzu.org/avatar/7097810a7f79562ebe95ad5ad50b3c5a?d=mm"
            data-src="https://sdn.geekzu.org/avatar/7097810a7f79562ebe95ad5ad50b3c5a?d=mm"
          />
          <div class="content w-100">
            <p class="comment-text">废话输出机器</p>
            <div class="d-flex justify-content-between">
              <p class="comment-author">
                &lt;script&gt;alert('我是狗')&lt;/script&gt;
              </p>
              <p class="comment-date">22小时前</p>
            </div>
          </div>
        </a>
        <a class="comments-small d-flex" href="/note/273.html#comment-200">
          <img
            class="avatar lazyload"
            src="https://sdn.geekzu.org/avatar/7097810a7f79562ebe95ad5ad50b3c5a?d=mm"
            data-src="https://sdn.geekzu.org/avatar/7097810a7f79562ebe95ad5ad50b3c5a?d=mm"
          />
          <div class="content w-100">
            <p class="comment-text">匿名用户</p>
            <div class="d-flex justify-content-between">
              <p class="comment-author">{狗头}</p>
              <p class="comment-date">23小时前</p>
            </div>
          </div>
        </a>
        <a class="comments-small d-flex" href="/note/273.html#comment-199">
          <img
            class="avatar lazyload"
            src="https://sdn.geekzu.org/avatar/7097810a7f79562ebe95ad5ad50b3c5a?d=mm"
            data-src="https://sdn.geekzu.org/avatar/7097810a7f79562ebe95ad5ad50b3c5a?d=mm"
          />
          <div class="content w-100">
            <p class="comment-text">匿名用户</p>
            <div class="d-flex justify-content-between">
              <p class="comment-author">
                &lt;script&gt;alert('testtest')&lt;/script&gt;
              </p>
              <p class="comment-date">23小时前</p>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="card" id="recommend-notes" style="box-sizing: border-box">
      <div class="tips">推荐</div>
      <ul class="card-content">
        <li>
          <a href="/note/177.html">PHP反射机制实现自动依赖注入</a>
        </li>
        <li>
          <a href="/note/122.html">收集的一些英文句子和短语</a>
        </li>
        <li>
          <a href="/note/70.html">header 设置页面编码</a>
        </li>
        <li>
          <a href="/note/121.html">npm换源成淘宝镜像</a>
        </li>
        <li>
          <a href="/note/123.html">order by 语句对null字段的默认排序</a>
        </li>
        <li>
          <a href="/note/47.html">在使用editormd富文本编辑器时使用懒加载</a>
        </li>
        <li>
          <a href="/note/124.html">PHP检索类</a>
        </li>
        <li>
          <a href="/note/196.html">高并发下防止库存超卖的解决方案</a>
        </li>
        <li>
          <a href="/note/120.html">Apache2 CGI 简单配置</a>
        </li>
        <li>
          <a href="/note/206.html">Mysql基础命令及语法笔记</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
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
.card-content > li {
  margin: 0.2em 0;
  list-style-type: none;
  min-height: 1.5em;
}
.card-content > li > a {
  font-size: 0.85em;
  font-weight: bold;
  color: #656565;
  transition: all 0.3s;
}
.card-content > li > a:hover {
  color: #000000;
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
@media screen and (max-width: 880px) {
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
/*! CSS Used from: Embedded */
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
img {
  vertical-align: middle;
}
::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
.d-flex {
  display: flex !important;
}
.w-100 {
  width: 100% !important;
}
.justify-content-between {
  justify-content: space-between !important;
}
.widget-box {
  box-shadow: rgb(240 240 240) 0 0 4px 0;
  border-radius: 5px;
}
.widget-box {
  padding: 0.5rem;
  word-break: break-all;
}
.widget-box .comments-small-list .comments-small {
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
}
.widget-box .comments-small-list .comments-small:hover {
  background-color: #f5f5f5;
}
.widget-box .comments-small-list .comments-small .avatar {
  border-radius: 8px;
  width: 32px;
  height: 32px;
  margin-right: 0.75rem;
}
.comments-small-list .comments-small .content .comment-text {
  font-size: 0.8rem;
  color: black;
  margin-bottom: 0.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.comments-small-list .comments-small .content .comment-author,
.comments-small-list .comments-small .content .comment-date {
  font-size: 0.65rem;
  color: grey;
  opacity: 0.75;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin: 0;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}

img {
  vertical-align: middle;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

.d-flex {
  display: flex !important;
}

.w-100 {
  width: 100% !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.widget-box {
  box-shadow: rgb(240 240 240) 0 0 4px 0;
  border-radius: 5px;
}

.widget-box {
  padding: 0.5rem;
  word-break: break-all;
}

.widget-box .widget-box-title {
  font-weight: 700;
  letter-spacing: -0.025em;
}

.widget-box .comments-small-list .comments-small {
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
}

.widget-box .comments-small-list .comments-small:hover {
  background-color: #f5f5f5;
}

.widget-box .comments-small-list .comments-small .avatar {
  border-radius: 8px;
  width: 32px;
  height: 32px;
  margin-right: 0.75rem;
}

.comments-small-list .comments-small .content .comment-text {
  font-size: 0.8rem;
  color: black;
  margin-bottom: 0.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.comments-small-list .comments-small .content .comment-author,
.comments-small-list .comments-small .content .comment-date {
  font-size: 0.65rem;
  color: grey;
  opacity: 0.75;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin: 0;
}
</style>