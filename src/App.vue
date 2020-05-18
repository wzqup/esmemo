<template>
  <div id="app">
    <MenuBar></MenuBar>
    <ItemList></ItemList>
	<MemoEditor></MemoEditor>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuBar from "./components/MenuBar.vue";
import ItemList from "./components/ItemList.vue";
import MemoEditor from "./components/MemoEditor.vue";


@Component({
  components: {
    MenuBar,
	ItemList,
	MemoEditor
  }
})
export default class App extends Vue {}
</script>

<style>
</style>
