<template>
  <div class="">
    <nav-bar class="nav-bar">
      <div class="center" slot="center">我的档案</div>
    </nav-bar>

    <profile-login></profile-login>

    <profile-info></profile-info>

    <profile-aside></profile-aside>
  </div>
</template>

<script>
import NavBar from '../../comps/NavBar'
import ProfileLogin from './ProfileLogin'
import ProfileInfo from './ProfileInfo'
import ProfileAside from './ProfileAside'

export default {
  name: '',
  components: {
    NavBar,
    ProfileLogin,
    ProfileInfo,
    ProfileAside
  }
}
</script>

<style lang="less" scoped>
  .nav-bar {
    background-color: var(--high-text-color);
    color: #fff;
  }
</style>