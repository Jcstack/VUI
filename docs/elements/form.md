# 表单 Form

Vui表单样式控制，并非局限`form`元素，这里更多作为一个收录数据的抽象容器，通过父子修饰符共同协作，
完成多样化!

姑且，就把这种抽象叫做 **表单控制系统** `Form Controls`，那么既然是系统，就有一定的规矩了 .

- 可被 `v-control`容器 直接管理的元件如下
- `.v-label`
- `.v-input`
- `.v-textarea`
- `.v-select`
- `.v-checkbox`
- `.v-radio`
- `.v-button`
- `.v-help`

当多个`v-control`容器需要被管理时，由 `v-field`容器直接控制，这是必须的!


<div class="demo-box sd-form-cnt">
  <div class="v-field">
    <label class="v-label">Name</label>
    <div class="v-control">
      <input class="v-input" type="text" placeholder="Text input">
    </div>
  </div>

  <div class="v-field">
    <label class="v-label">Username</label>
    <div class="v-control has-icons-left has-icons-right">
      <input class="v-input is-success" type="text" placeholder="Text input" value="bulma">
      <span class="has-icon is-small is-left">
      <i class="fa fa-user"></i>
    </span>
      <span class="has-icon is-small is-right">
      <i class="fa fa-check"></i>
    </span>
    </div>
    <p class="v-help is-success">This username is available</p>
  </div>

  <div class="v-field">
    <label class="v-label">Email</label>
    <div class="v-control has-icons-left has-icons-right">
      <input class="v-input is-danger" type="email" placeholder="Email input" value="hello@">
      <span class="has-icon is-small is-left">
        <i class="fa fa-envelope"></i>
      </span>
      <span class="has-icon is-small is-right">
        <i class="fa fa-warning"></i>
      </span>
    </div>
    <p class="v-help is-danger">This email is invalid</p>
  </div>

  <div class="v-field">
    <label class="v-label">Subject</label>
    <div class="v-control">
      <div class="v-select">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>
    </div>
  </div>

  <div class="v-field">
    <label class="v-label">Message</label>
    <div class="v-control">
      <textarea class="v-textarea" placeholder="Textarea"></textarea>
    </div>
  </div>

  <div class="v-field">
    <div class="v-control">
      <label class="v-checkbox">
        <input type="checkbox">
        I agree to the <a href="#">terms and conditions</a>
      </label>
    </div>
  </div>

  <div class="v-field">
    <div class="v-control">
      <label class="v-radio">
        <input type="radio" name="question">
        Yes
      </label>
      <label class="v-radio">
        <input type="radio" name="question">
        No
      </label>
    </div>
  </div>

  <div class="v-field is-grouped">
    <div class="v-control">
      <button class="v-btn is-primary">Submit</button>
    </div>
    <div class="v-control">
      <button class="v-btn is-link">Cancel</button>
    </div>
  </div>
</div>

<style lang="scss" type="text/scss">
  .sd-form-cnt {
    padding: 20px 15px;
    width: 60%;
  }
</style>
