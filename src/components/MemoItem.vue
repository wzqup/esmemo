<template>
  <div class="memo-container">
    <div class="memo">
      <div class="mark"></div>
      <div class="memo-heading">
        <h5 class="title">便签标题</h5>
        <ul class="tools">
          <li class="edit"></li>
          <li class="delete"></li>
        </ul>
      </div>
      <h6 class="memo-info">
        <span class="timeStamp">2020/5/18</span>
        <span class="category">分类:生活</span>
      </h6>
      <div class="content">
        <div class="text">便签内容</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MemoItem extends Vue {

}
</script>