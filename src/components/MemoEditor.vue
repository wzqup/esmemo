<template>
  <!-- 便签新增/编辑区 -->
  <div>
    <div class="cover-layer"></div>
    <div id="new-markdown" class="editor-layer">
      <div class="editor-top">
        <input class="editor-title form-control" type="text" placeholder="标题" v-model="memo.title" />
        <div class="dropdown select-category">
          <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">
            <span class="category">{{this.$store.state.helper.getCategoryName(memo.categoryId)}}</span>
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li @click="memo.categoryId = 0">
              <a>工作</a>
            </li>
            <li @click="memo.categoryId = 1">
              <a>生活</a>
            </li>
            <li @click="memo.categoryId = 2">
              <a>学习</a>
            </li>
          </ul>
        </div>
        <ul class="tools">
          <li class="save" @click="saveNew"></li>
          <li class="cancel" @click="close"></li>
        </ul>
      </div>
      <textarea class="text-content form-control" placeholder="内容" v-model="memo.content"></textarea>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import ItemData from "../model/ItemData";
import Category from "../model/CateEnum";

@Component
export default class MemoEditor extends Vue {
  // 保存编辑框数据
  memo: ItemData = new ItemData(-1, 0);

  created(): void {
    // 接收store 中传递的数据对象
    this.memo = this.$store.state.transMemo;
    console.log(this.memo);
    
  }

  close() {
    this.$store.state.editShow = false;
  }

  saveNew() {
    console.log('点击保存');
    
    if (
      this.memo &&
      this.memo.categoryId > -1 &&
      this.memo.title.trim().length > 0 &&
      this.memo.content.trim().length > 0
    ) {
      if (this.memo.id <= -1) {
        this.$store.state.helper.add(this.memo);
      } else {
        this.$store.state.helper.edit(this.memo);
      }
      this.$store.state.editShow = false;
    } else {
      window.alert('标题或内容不可以为空白!!!')
    }
  }
}
</script>