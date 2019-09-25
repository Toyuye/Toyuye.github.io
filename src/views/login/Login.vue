<template>
  <div class="toyuye-login-view">
    <div class="login-container">
      <div class="header">
        <div class="header-box">
          <a
            class="header-logo"
            href="https://github.com/"
            aria-label="Homepage"
          >
            <svg
              height="48"
              class="octicon octicon-mark-github"
              viewBox="0 0 16 16"
              version="1.1"
              width="48"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="login-auth-from">
        <div class="auth-form-header">
          <h1>Sign in to Toyuye</h1>
        </div>
        <div class="auth-form-body">
          <label for="login_field">
            Username or email address
          </label>
          <input
            type="text"
            name="login"
            id="login_field"
            class="form-control input-block"
            tabindex="1"
            autocapitalize="off"
            autocorrect="off"
            autofocus="autofocus"
          />
          <label for="password">
            Password
            <a class="label-link" href="/password_reset">Forgot password?</a>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            class="form-control form-control input-block"
            tabindex="2"
          />
          <input
            type="submit"
            name="commit"
            value="Sign in"
            tabindex="3"
            class="btn btn-primary btn-block"
            data-disable-with="Signing in…"
          />
        </div>
      </div>
      <div class="login-copyright">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Footer from "../layout/Footer.vue";
@Component({
  components: {
    Footer
  }
})
export default class Login extends Vue {
  public created(): void {
    console.log(11111111);
  }
}
</script>
<style lang="scss" scoped>
.toyuye-login-view {
  background: #f9f9f9;
  height: 100%;
}
.header {
  padding: 32px 0px 24px 0;
  .header-box {
    margin: 0 auto;
    text-align: center;
  }
}
.login-auth-from {
  margin: 0 auto;
  width: 300px;
  .auth-form-header {
    text-align: center;
    margin-bottom: 15px;
    h1 {
      color: black;
      font-size: 24px;
      font-weight: 300;
      letter-spacing: -0.5px;
    }
  }
  .auth-form-body {
    padding: 16px;
    font-size: 14px;
    background-color: #fff;
    border: 1px solid #d8dee2;
    border-radius: 5px;
    label {
      line-height: 1.5;
      color: #24292e;
      font-weight: 600;
      display: block;
      margin-bottom: 7px;
      text-align: left;
      .label-link {
        float: right;
        font-size: 12px;
        color: #0366d6;
      }
    }
    input {
      &.form-control {
        box-sizing: border-box;
        min-height: 34px;
        padding: 6px 8px;
        font-size: 16px;
        line-height: 20px;
        color: #24292e;
        vertical-align: middle;
        background-color: #fff;
        background-repeat: no-repeat;
        background-position: right 8px center;
        border: 1px solid #d1d5da;
        border-radius: 3px;
        outline: none;
        box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
        &:focus {
          border-color: #2188ff;
          outline: none;
          box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075),
            0 0 0 0.2em rgba(3, 102, 214, 0.3);
        }
      }
      &.input-block {
        margin-top: 5px;
        margin-bottom: 15px;
        display: block;
        width: 100%;
        overflow: visible;
      }
      &.btn-block {
        display: block;
        width: 100%;
        text-align: center;
      }
      &.btn-primary {
        color: #fff;
        background-color: #28a745;
        background-image: linear-gradient(-180deg, #34d058, #28a745 90%);
        &:focus {
          box-shadow: 0 0 0 0.2em rgba(52, 208, 88, 0.4);
        }
        &:hover {
          background-color: #269f42;
          background-image: linear-gradient(-180deg, #2fcb53, #269f42 90%);
          background-position: -0.5em;
          border-color: rgba(27, 31, 35, 0.5);
        }
        &:active {
          background-color: #279f43;
          background-image: none;
          border-color: rgba(27, 31, 35, 0.5);
          box-shadow: inset 0 0.15em 0.3em rgba(27, 31, 35, 0.15);
        }
      }
      &.btn {
        margin-top: 5px;
        position: relative;
        display: inline-block;
        padding: 6px 12px;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-repeat: repeat-x;
        background-position: -1px -1px;
        background-size: 110% 110%;
        border: 1px solid rgba(27, 31, 35, 0.2);
        border-radius: 0.25em;
        -webkit-appearance: none;
      }
    }
  }
}
.login-copyright {
  margin-top: 120px;
}
</style>
