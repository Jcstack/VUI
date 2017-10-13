# 表单 Form

Vui表单样式控制，并非局限`form`元素，这里更多作为一个收录数据的抽象容器，通过父子修饰符共同协作，
完成多样化!姑且，就把这种抽象叫做 **表单控制系统** `Form Controls`，那么既然是系统，就有一定的规矩了 .

可被 直接或间接 管理的元件如下:

- `.v-label`
- `.v-help`
- `.v-input`
- `.v-textarea`
- `.v-select`
- `.v-checkbox`
- `.v-radio`
- `.v-btn`

```html
<div class="v-field">
  <label class="v-label">昵称</label>
  <div class="v-control">
    <input class="v-input" type="text" placeholder="text input">
  </div>
</div>

<div class="v-field">
  <label class="v-label">真实姓名</label>
  <div class="v-control has-icons-left has-icons-right">
    <input class="v-input is-success" type="text" placeholder="Text input" value="Charlie">
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
  <label class="v-label">邮箱</label>
  <div class="v-control has-icons-left has-icons-right">
    <input class="v-input is-danger" type="email" placeholder="Email input" value="hello@">
    <span class="has-icon is-small is-left">
        <i class="fa fa-envelope"></i>
      </span>
    <span class="has-icon is-small is-right">
        <i class="fa fa-warning"></i>
      </span>
  </div>
  <p class="v-help is-danger">邮箱不可用提示 [v-help].is-danger</p>
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
  <label class="v-label">
    Joined ?
  </label>
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
```

<div class="demo-box sd-form-example-cnt __maybe-long-code" pre>
  <div class="v-field">
    <label class="v-label">昵称</label>
    <div class="v-control">
      <input class="v-input" type="text" placeholder="text input">
    </div>
  </div>

  <div class="v-field">
    <label class="v-label">真实姓名</label>
    <div class="v-control has-icons-left has-icons-right">
      <input class="v-input is-success" type="text" placeholder="Text input" value="Charlie">
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
    <label class="v-label">邮箱</label>
    <div class="v-control has-icons-left has-icons-right">
      <input class="v-input is-danger" type="email" placeholder="Email input" value="hello@">
      <span class="has-icon is-small is-left">
        <i class="fa fa-envelope"></i>
      </span>
      <span class="has-icon is-small is-right">
        <i class="fa fa-warning"></i>
      </span>
    </div>
    <p class="v-help is-danger">邮箱不可用提示 [v-help].is-danger</p>
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
    <label class="v-label">
      Joined ?
    </label>
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

### 域容器 (Form field)

由`v-field`修饰, 算是 __表单控制系统__ 的基本组成单元，可直接管理以下元件

- `v-label` 输入控件的文本标签
- `v-control` 控件的控制容器
- `v-help` 交互帮助文本

多个`v-field`同级容器具备一定的外间距，请注意 .

```html
<div class="v-field">
  <label class="v-label">Label</label>
  <div class="v-control">
    <input class="v-input" type="text" placeholder="Text input">
  </div>
  <p class="v-help">This is a help text</p>
</div>
```
<div class="demo-box has-pad-sm">
  <div class="v-field">
    <label class="v-label">Label</label>
    <div class="v-control">
      <input class="v-input" type="text" placeholder="Text input">
    </div>
    <p class="v-help">This is a help text</p>
  </div>
</div>

### 控件容器(Form control)

由`v-control`修饰, 该容器用于单个控件包裹，拥有与内部控件同样的高度，目前支持以下控件

- `.v-input`
- `.v-textarea`
- `.v-select`
- `.v-checkbox`
- `.v-radio`
- `.v-btn`
- `.has-icon`

当多个`v-control`容器需要被管理时，可由 `v-field`容器直接控制，这是必须的! 注意多个同级`v-control`容器
之间没有间距，是完全无缝堆叠的 !

所以，可以通过`[v-field].is-grouped`修饰符，可调整`v-control`为水平布局, 默认以内容宽度为准依次排布 . 如果希望 `v-control`
弹性排列(flex: 1), 可使用 `[v-control].is-expanded` 修饰 .

```html
<div class="v-field is-grouped">
  <p class="v-control is-expanded">
    <input class="v-input" type="text" placeholder="[v-control].is-expanded">
  </p>
  <p class="v-control">
    <a class="v-btn is-primary">
      Search
    </a>
  </p>
</div>
```

<div class="demo-box sd-form-example-cnt">
  <div class="v-field is-grouped">
    <p class="v-control is-expanded">
      <input class="v-input" type="text" placeholder="[v-control].is-expanded">
    </p>
    <p class="v-control">
      <a class="v-btn is-primary">
        Search
      </a>
    </p>
  </div>
</div>


### 水平控制(Horizontal form)

可以通过`[v-field].is-horizontal`修饰, 两个直接容器

- `v-field-label` 作为 `v-label`的容器，修饰符`[v-field-label].is-(small|normal|medium|large)`可调整label尺寸(字体大小，相对容器的间距 ，可用于对齐 右侧的输入框)
- `v-field-body` 作为 `v-field`的容器

```html
<div class="v-field is-horizontal">
  <div class="v-field-label is-normal">
    <label class="v-label">From</label>
  </div>
  <div class="v-field-body">
    <div class="v-field">
      <p class="v-control is-expanded has-icons-left">
        <input class="v-input" type="text" placeholder="Name">
        <span class="has-icon is-small is-left">
          <i class="fa fa-user"></i>
        </span>
      </p>
    </div>
    <div class="v-field">
      <p class="v-control is-expanded has-icons-left has-icons-right">
        <input class="v-input is-success" type="email" placeholder="Email" value="alex@smith.com">
        <span class="has-icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
        <span class="has-icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
      </p>
    </div>
  </div>
</div>

<div class="v-field is-horizontal">
  <div class="v-field-label"></div>
  <div class="v-field-body">
    <div class="v-field is-expanded">
      <div class="v-field has-addons">
        <p class="v-control">
          <a class="v-btn is-static">
            +86
          </a>
        </p>
        <p class="v-control is-expanded">
          <input class="v-input" type="tel" placeholder="Your phone number">
        </p>
      </div>
      <p class="v-help">Do not enter the first zero</p>
    </div>
  </div>
</div>

<div class="v-field is-horizontal">
  <div class="v-field-label is-normal">
    <label class="v-label">Department</label>
  </div>
  <div class="v-field-body">
    <div class="v-field is-narrow">
      <div class="v-control">
        <div class="v-select is-fullwidth">
          <select>
            <option>Business development</option>
            <option>Marketing</option>
            <option>Sales</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="v-field is-horizontal">
  <div class="v-field-label">
    <label class="v-label">Joined ?</label>
  </div>
  <div class="v-field-body">
    <div class="v-field is-narrow">
      <div class="v-control">
        <label class="v-radio">
          <input type="radio" name="member">
          Yes
        </label>
        <label class="v-radio">
          <input type="radio" name="member">
          No
        </label>
      </div>
    </div>
  </div>
</div>

<div class="v-field is-horizontal">
  <div class="v-field-label is-normal">
    <label class="v-label">Subject</label>
  </div>
  <div class="v-field-body">
    <div class="v-field">
      <div class="v-control">
        <input class="v-input is-danger" type="text" placeholder="e.g. Partnership opportunity">
      </div>
      <p class="v-help is-danger">
        This field is required
      </p>
    </div>
  </div>
</div>

<div class="v-field is-horizontal">
  <div class="v-field-label is-normal">
    <label class="v-label">Question</label>
  </div>
  <div class="v-field-body">
    <div class="v-field">
      <div class="v-control">
        <textarea class="v-textarea" placeholder="Explain how we can help you"></textarea>
      </div>
    </div>
  </div>
</div>

<div class="v-field is-horizontal">
  <div class="v-field-label">
    <!-- Left empty for spacing -->
  </div>
  <div class="v-field-body">
    <div class="v-field">
      <div class="v-control">
        <button class="v-btn is-primary">
          Send message
        </button>
      </div>
    </div>
  </div>
</div>
```

<div class="demo-box sd-form-example-cnt __maybe-long-code" pre>
  <div class="v-field is-horizontal">
    <div class="v-field-label is-normal">
      <label class="v-label">From</label>
    </div>
    <div class="v-field-body">
      <div class="v-field">
        <p class="v-control is-expanded has-icons-left">
          <input class="v-input" type="text" placeholder="Name">
          <span class="has-icon is-small is-left">
          <i class="fa fa-user"></i>
        </span>
        </p>
      </div>
      <div class="v-field">
        <p class="v-control is-expanded has-icons-left has-icons-right">
          <input class="v-input is-success" type="email" placeholder="Email" value="alex@smith.com">
          <span class="has-icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
          <span class="has-icon is-small is-right">
          <i class="fa fa-check"></i>
        </span>
        </p>
      </div>
    </div>
  </div>

  <div class="v-field is-horizontal">
    <div class="v-field-label"></div>
    <div class="v-field-body">
      <div class="v-field is-expanded">
        <div class="v-field has-addons">
          <p class="v-control">
            <a class="v-btn is-static">
              +86
            </a>
          </p>
          <p class="v-control is-expanded">
            <input class="v-input" type="tel" placeholder="Your phone number">
          </p>
        </div>
        <p class="v-help">Do not enter the first zero</p>
      </div>
    </div>
  </div>

  <div class="v-field is-horizontal">
    <div class="v-field-label is-normal">
      <label class="v-label">Department</label>
    </div>
    <div class="v-field-body">
      <div class="v-field is-narrow">
        <div class="v-control">
          <div class="v-select is-fullwidth">
            <select>
              <option>Business development</option>
              <option>Marketing</option>
              <option>Sales</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="v-field is-horizontal">
    <div class="v-field-label">
      <label class="v-label">Joined ?</label>
    </div>
    <div class="v-field-body">
      <div class="v-field is-narrow">
        <div class="v-control">
          <label class="v-radio">
            <input type="radio" name="member">
            Yes
          </label>
          <label class="v-radio">
            <input type="radio" name="member">
            No
          </label>
        </div>
      </div>
    </div>
  </div>

  <div class="v-field is-horizontal">
    <div class="v-field-label is-normal">
      <label class="v-label">Subject</label>
    </div>
    <div class="v-field-body">
      <div class="v-field">
        <div class="v-control">
          <input class="v-input is-danger" type="text" placeholder="e.g. Partnership opportunity">
        </div>
        <p class="v-help is-danger">
          This field is required
        </p>
      </div>
    </div>
  </div>

  <div class="v-field is-horizontal">
    <div class="v-field-label is-normal">
      <label class="v-label">Question</label>
    </div>
    <div class="v-field-body">
      <div class="v-field">
        <div class="v-control">
          <textarea class="v-textarea" placeholder="Explain how we can help you"></textarea>
        </div>
      </div>
    </div>
  </div>

  <div class="v-field is-horizontal">
    <div class="v-field-label">
      <!-- Left empty for spacing -->
    </div>
    <div class="v-field-body">
      <div class="v-field">
        <div class="v-control">
          <button class="v-btn is-primary">
            Send message
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  export default {

    mounted () {
      let elsLongDemoBox = this.$el.querySelectorAll('.__maybe-long-code')

      if (elsLongDemoBox && elsLongDemoBox.length) {
        Array.from(elsLongDemoBox).map(el => {
          do {
            el = el.previousSibling
            if (el && el.nodeType === 1 && el.tagName.toLowerCase() === 'pre') {
              return el
            }
          } while (el)
        })
        .filter(n => n != null)
        .forEach(el => {
          el.classList.add('__too-long-hl-code')
          el.addEventListener('click', function () {
            el.classList.remove('__too-long-hl-code')
          })
        })
      }
    }
  }
</script>
