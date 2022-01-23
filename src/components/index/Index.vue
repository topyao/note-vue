<template>
  <div>
    <Header />
    <main style="margin-top: 3.8em">
      <div class="left">
        <Welcome />
        <Card />
        <List />
        <Link />
      </div>
      <SideBar />
      <div></div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../layout/Header.vue";
import Welcome from "./Welcome.vue";
import Card from "./Card.vue";
import SideBar from "./SideBar.vue";
import List from "./List.vue";
import Link from "./Link.vue";
import Footer from "../layout/Footer.vue";
export default {
  components: { Header, Welcome, Card, SideBar, List, Link, Footer },
  name: "Index",
  data() {
    return {
      message: "test",
    };
  },
};
</script>

<style>
.left {
  width: 75%;
  margin-right: 1%;
}
.list-item {
  padding: 0.5em;
  margin: 0.5em 0;
  display: flex;
  border-radius: 10px;
  justify-content: flex-start;
  transition: background-color 0.5s;
}
.list-item:hover {
  background-color: #ededed;
}
.list-item > .list-content {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
}
.list-content-title {
  padding: 0 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.list-item > .list-content > .list-content-bottom {
  color: grey;
  font-size: 0.9em;
  text-align: right;
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
}
.paginate {
  padding: 0;
  margin: 0.8em 0;
}
.article-title {
  color: black;
  font-size: 1.5em;
  font-weight: bold;
  transition: color 0.4s;
}
.article-title:hover {
  color: #616060;
}
.thumb {
  height: 190px;
  border-radius: 10px;
  width: 20em;
  margin-right: 1.2em;
  transition: all 0.3s;
}
.thumb:hover {
  transform: scale(0.98);
}
.description {
  padding: 0.5em;
  color: grey;
  font-size: 0.9em;
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
.par-card {
  display: flex;
  justify-content: flex-start;
}
@media screen and (max-width: 880px) {
  .links {
    width: 100%;
  }
  .thumb {
    width: 100%;
    height: 200px;
    margin-right: 0;
  }
  .left {
    margin: 0 auto !important;
    width: 97% !important;
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
  .list-item {
    flex-direction: column;
  }
}
a.tags {
  text-align: center;
  display: inline-block;
  height: 1.8em;
  background-color: white;
  border: 1px solid black;
  font-size: 0.6em;
  line-height: 1.8em;
  border-radius: 1.3em;
  padding: 0.4em 1em;
  color: rgb(78, 75, 75);
  font-weight: bold;
  box-shadow: 0 0 2px 0 #8ba1f8;
  margin: 0 0.4em;
  overflow: hidden;
  transition: all 0.3s;
  animation: tags 1s;
}
a.tags:hover {
  color: white;
  background-color: black;
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
.d-flex {
  display: flex !important;
}
.w-100 {
  width: 100% !important;
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
@keyframes tags {
  0% {
    margin: 0 0.4em;
  }
  5% {
    margin: 0 1em;
  }
  10% {
    margin: 0 2em;
  }
  25% {
    margin: 0 0.1em;
  }
  50% {
    margin: 0 0.6em;
  }
  75% {
    margin: 0 0.2em;
  }
  100% {
    margin: 0 0.4em;
  }
}
</style>