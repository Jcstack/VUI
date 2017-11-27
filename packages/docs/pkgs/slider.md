# Slider 滑块

水平 .
<div class="demo-box">
  <v-slider
      v-model="sliderValue"
      :vertical="false"
      color="info"
  ></v-slider>
  <p>
    <strong>{{ sliderValue }}%</strong>
  </p>
  <p>垂直 .</p>
  <v-row>
    <v-col style="display: flex; justify-content: center;">
      <v-slider
          v-model="sliderValue"
          :vertical="true"
          color="danger"
      ></v-slider>
    </v-col>
    <v-col>
      <v-progress
          :value="sliderValue"
          stroke-color="blue"
          type="circle"
          class="my-progress"
      ></v-progress>
    </v-col>
  </v-row>
</div>

```html
<v-slider
    v-model="sliderValue"
    :vertical="false"
    color="info"
></v-slider>
<p>
  <strong>{{ sliderValue }}%</strong>
</p>
<v-row>
  <v-col style="display: flex; justify-content: center;">
    <v-slider
        v-model="sliderValue"
        :vertical="true"
        color="danger"
    ></v-slider>
  </v-col>
  <v-col>
    <v-progress
        :value="sliderValue"
        stroke-color="blue"
        type="circle"
        class="my-progress"
    ></v-progress>
  </v-col>
</v-row>
```

<div class="demo-box">
<component-doc-table>
<div slot="props">

Name       | Description    | Type     | Values | Default
----       | -------------- | -------- | ------ | -------
value      | 同步百分值(`v-model`支持)          | Number   | /      |  `0`
color      | Vui颜色修饰     | String   | /      | /
step       | 跳跃步进        | Number   | /      |  `1`
</div>

<div slot="events">

Name       | Description          | Params
----       | ------------         | --------
input      | 读入值(`v-model`支持) | `value`
</div>
</component-doc-table>
</div>

<script>
  export default {
    data () {
      return {
        sliderValue: 10
      }
    }
  }
</script>
