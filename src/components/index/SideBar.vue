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
      </div>
    </div>
    <div class="card" id="recommend-notes" style="box-sizing: border-box">
      <div class="tips">推荐</div>
      <ul class="card-content">
        <li>
          <a href="/note/177.html">PHP反射机制实现自动依赖注入</a>
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
.card-content {
  padding: 0.2em 0.7em;
  margin: 0;
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