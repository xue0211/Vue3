<template>
    <div>
        <div class="topnav">
            <div class="logo">LOGO</div>
            <ul>
                <li>菜单1</li>
            </ul>
        </div>
        <div class="banner">
            <h1>flurryUI</h1>
            <h2>基于Vue3.0的UI框架</h2>
            <p class="actions">
                <a href="">开始</a>
                <a href="">GitHub</a>
            </p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
  .topnav {
    background-color: pink;
    display: flex;
    padding: 16px;
    > .logo {
      max-width: 6em;
      margin-right: auto;
    }
    > .menu {
      display: flex;
      white-space: nowrap;
      flex-wrap: nowrap;
      > li {
        margin: 0 1em;
      }
    }
  }
</style>