<template>
  <div id="memos" class="container">
    <MemoItem v-for="(item,index) in [1,1,1,1,1]" :key="index"/>
  </div>
</template>

<script lang='ts'>
//1.导入 vue
import { Vue, Component } from "vue-property-decorator";
import MemoItem from "./MemoItem.vue";

//2.编写组件类
@Component({
  components: {
    MemoItem
  }
})
export default class ItemList extends Vue {

}
</script>