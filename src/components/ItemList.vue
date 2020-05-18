<template>
  <div id="memos" class="container">
    <MemoItem v-for="item in filterMemo()" :key="item.id" :memo="item" />
  </div>
</template>

<script lang='ts'>
//1.导入 vue
import { Vue, Component } from "vue-property-decorator";
import MemoItem from "./MemoItem.vue";
import ItemData from "../model/ItemData";

//2.编写组件类
@Component({
  components: {
    MemoItem
  }
})
export default class ItemList extends Vue {
  memoArr: Array<ItemData> = this.$store.state.helper.memoList;

  // 过滤出当前分类便签
  filterMemo() {
    if (this.$store.state.filterCateId == -1) {
      return this.memoArr;
    } else {
      return this.memoArr.filter((item: any) => {
        return item.categoryId == this.$store.state.filterCateId;
      });
    }
  }
}
</script>