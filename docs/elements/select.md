# Select

下拉框的修饰符整体与`input`类似，需要注意的是，该下拉框是内建原生`select`样式的调整，并非模拟!

```html
<div class="v-select">
  <select>
    <option>Select dropdown</option>
    <option>With options</option>
  </select>
</div>
```

<div class="demo-box has-pad-sm">
  <div class="v-select">
    <select>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </div>
</div>

<p class="tip">
  切记<code>v-select</code> 不是直接修饰在 <code>&lt; select &gt;</code> 元素上的，而是作为容器包裹住 <code>select</code>
  原生元素 !
</p>

### 颜色(colors)

通过`[v-select].is-(colors)`修饰 .

<div class="demo-box has-pad-sm">
  <div class="v-field">
    <div class="v-control">
      <div class="v-select is-primary">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>
    </div>
  </div>
  <div class="v-field">
    <div class="v-control">
      <div class="v-select is-info">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>
    </div>
  </div>
  <div class="v-field">
    <div class="v-control">
      <div class="v-select is-success">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>
    </div>
  </div>
  <div class="v-field">
    <div class="v-control">
      <div class="v-select is-warning">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>
    </div>
  </div>
  <div class="v-field">
    <div class="v-control">
      <div class="v-select is-danger">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>
    </div>
  </div>
</div>


### 尺寸(sizes)

通过`[v-select].is-(small|medium|large)`修饰 .

<div class="demo-box has-pad-sm">
  <div class="v-field">
    <div class="v-control">
      <div class="v-select is-small">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>
    </div>
  </div>
  <div class="v-field">
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
    <div class="v-control">
      <div class="v-select is-medium">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>
    </div>
  </div>
  <div class="v-field">
    <div class="v-control">
      <div class="v-select is-large">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>
    </div>
  </div>
</div>

### 状态(states)

同 `input` 基本一致 . 除了`loading`状态下，`is-loading`修饰符是在`v-select`容器上 !

```html
<div class="v-control">
  <div class="v-select is-loading">
    <select>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </div>
</div>
```

<div class="demo-box has-pad-sm">
  <div class="v-control">
    <div class="v-select is-loading">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div>

#### ap.图标(icons)

同`input`基本一致 . 需要注意的是，图标不能放在右边...你懂得 !

- `[v-control].has-icons-left`
- `[v-select].is-(small|medium|large)`
- `[has-icon].is-left`

<div class="demo-box has-pad-sm">
  <div class="v-field">
    <div class="v-control has-icons-left">
      <div class="v-select">
        <select>
          <option selected>Country</option>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>
      <div class="has-icon is-small is-left">
        <i class="fa fa-globe"></i>
      </div>
    </div>
  </div>
  <div class="v-field">
    <div class="v-control has-icons-left">
      <div class="v-select is-large">
        <select>
          <option selected>Country</option>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>
      <div class="has-icon is-large is-left">
        <i class="fa fa-globe"></i>
      </div>
    </div>
  </div>
</div>

```html
<div class="v-field">
  <div class="v-control has-icons-left">
    <div class="v-select">
      <select>
        <option selected>Country</option>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
    <div class="has-icon is-small is-left">
      <i class="fa fa-globe"></i>
    </div>
  </div>
</div>
<div class="v-field">
  <div class="v-control has-icons-left">
    <div class="v-select is-large">
      <select>
        <option selected>Country</option>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
    <div class="has-icon is-large is-left">
      <i class="fa fa-globe"></i>
    </div>
  </div>
</div>
```
