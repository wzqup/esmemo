<template>
  <div class="memo-container">
    <div class="memo">
      <div class="mark"></div>
      <div class="memo-heading">
        <h5 class="title">{{ memo.title }}</h5>
        <ul class="tools">
          <li class="edit" @click="showEdit"></li>
          <li class="delete" @click="doDel"></li>
        </ul>
      </div>
      <h6 class="memo-info">
        <span class="timeStamp">{{memo.createTime}}</span>
        <span class="category">分类:{{$store.state.helper.getCategoryName(memo.categoryId)}}</span>
      </h6>
      <div class="content">
        <div class="text">{{memo.content}}</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import ItemData from '../model/ItemData';

@Component
export default class MemoItem extends Vue {
    @Prop() memo!: ItemData;

    showEdit(){
      this.$store.state.transMemo = this.memo;
      this.$store.state.editShow = true;
    }
    doDel(){
      if (!window.confirm(`确认要删除【${this.memo.title}】的笔记吗？`)) return;
      this.$store.state.helper.remove(this.memo.id);
    }
}
</script>