<template>
  <!-- 菜单栏 -->
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand">
            <img height="40" src="../assets/logo.png" />
        </a>
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target=".navbar-collapse"
          aria-expanded="false"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse navbar-right">
        <ul class="nav navbar-nav">
          <li class="add dropdown">
            <a class="create-new dropdown-toggle" data-toggle="dropdown">新建</a>
            <ul class="dropdown-menu">
              <li>
                <a @click="showAdd">文本便签</a>
              </li>
            </ul>
          </li>
          <li class="categories dropdown">
            <a class="current-category dropdown-toggle" data-toggle="dropdown">
              全部
              <span class="count badge"></span>
            </a>
            <ul class="dropdown-menu">
              <li class="total" @click="doFilterByCateId(-1)">
                <a>
                  全部
                  <span class="count badge">{{doFilter(-1)}}</span>
                </a>
              </li>
              <li class="divider"></li>
              <li @click="doFilterByCateId(0)">
                <a>
                  工作
                  <span class="count badge">{{doFilter(0)}}</span>
                </a>
              </li>
              <li @click="doFilterByCateId(1)">
                <a>
                  生活
                  <span class="count badge">{{doFilter(1)}}</span>
                </a>
              </li>
              <li @click="doFilterByCateId(2)">
                <a>
                  学习
                  <span class="count badge">{{doFilter(2)}}</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ItemData from '../model/ItemData';

@Component
export default class MenuBar extends Vue {
  showAdd(){
    console.log('点击编辑');  
    this.$store.state.transMemo = new ItemData(-1,0);
    this.$store.state.editShow = true;
  }
  // 获取分类条数
  doFilter(cid: number): number {
    if(cid==-1){
      return this.$store.state.helper.memoList.length;
    }else{
      return this.$store.state.helper.memoList.filter((ele:any)=>{
        return ele.categoryId == cid;
      }).length;
    }
  }

  // 显示当前分类便签
  doFilterByCateId(cid: number){
      this.$store.state.filterCateId = cid;
  }
  
}
</script>