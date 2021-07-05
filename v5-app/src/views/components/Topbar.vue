<template>
    <div class="topbar">
      <div class="logo-box">
        <a href="/"><img class="logo" src="../../assets/img/logotyp.png" alt=""></a>
      </div>
      <div class="login-register-box">
        <a href="" class="register">Rejestracja</a>
        <a href="" class="login">Login</a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Topbar'
    
}
</script>

<style lang="scss">
  .topbar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 55px;
    .logo-box {
      .logo {
        height: 100%;
        width: auto;
      }
    }
    .login-register-box {
      display: flex;
      align-items: center;
      .register,
      .login {
        display: inline-block;
        width: 120px;
        text-align: center;
        border-radius: 5px;
        padding: 5px;
        margin-right: 20px;
        text-decoration: none;
        color: #fff;
        font-weight: 700;
      }
    }
  }
</style>