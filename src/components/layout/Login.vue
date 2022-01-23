<template>
  <div class="login-box">
    <div class="login-content">
      <h1 class="m-0">登录</h1>
      <div class="form-group-login">
        <input type="text" />
        <input type="text" />
        <input type="button" value="登录" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style>
.m-0 {
  margin: 0;
}
.login-box {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-content {
  box-sizing: border-box;
  padding: 1em;
  height: 70%;
  border-radius: 0.5rem;
  width: 40%;
  background-color: white;
  box-shadow: rgb(228, 228, 228) 0 0 10px 0;
}
.form-group-login > input[type="text"] {
  width: 100%;
  height: 3em;
  border: none;
  font-size: 1em;
  border-bottom: 1px solid blue;
  outline: none;
}
.form-group-login > input[type="button"] {
  width: 100%;
  height: 3em;
  border-radius: 5px;
  background-color: black;
  color: white;
  outline: none;
  border: 1px solid black;
  transition: all 0.5s;
  cursor: pointer;
}
.form-group-login > input[type="button"]:hover {
  background-color: white;
  color: black;
}
</style>