<template>
  <div id="app">
    <el-container style="height: auto; border: 1px solid #eee;">
      <el-aside width="" style="background-color: rgb(238, 241, 246);padding-top: 20px;">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu class="el-menu-vertical-demo" :collapse="isCollapse" :default-active="$route.path" :default-openeds=choice  @select="handleSelect" theme="dark" router >
          <el-menu-item index="/">
            <i class="el-icon-message"></i><span slot="title">账户</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i><span slot="title">学员</span></template>
            <el-menu-item-group>
              <el-menu-item index="/child-drum">电鼓</el-menu-item>
              <el-menu-item index="/child-piano">钢琴</el-menu-item>
              <el-menu-item index="/child-guita">吉他</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <!-- <template slot="title"><i class="el-icon-upload"></i>教室主机</template> -->
            <template slot="title"><i class="el-icon-upload"></i><span slot="title">教室主机</span></template>
            <el-menu-item-group>
              <el-menu-item index="/school">学校信息</el-menu-item>
              <el-menu-item index="/schoolPosition">学校位置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "app",
  data(){
    return {
      menus:[],
      choice:[],
      isCollapse: false
    }
  },
  mounted(){
    // console.log(this.$bus)
    // this.$fetch('v1/bpi/currentprice.json',{data:"2"}).then((response)=>{
    //   console.log(response)
    // })
  },
  methods:{
    // let _this = this;
    handleSelect(key,keyPath){
      // if (keyPath[0] === "2" && keyPath.indexOf("2") != -1) {
      //   this.choice.push("2");
      // }
    }
  }
};
</script>

<style lang="less">
@bg-color:#efefef;
@bg-fff:#ffffff;
@box-min-width:1200px;
@box-max-width:2800px;
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
.boxShow{
  -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.bg-fff{background:@bg-fff}
.clear{clear:both;overflow: hidden;}
.el-aside {
  color: #333;
}
.tel-left{text-align: left;}
.tel-right{text-align: right;}
#app{
  .el-submenu__title,.el-menu-item{
    .tel-left;
  }
}
.el-main{background:@bg-color;min-width: @box-min-width;max-width:@box-max-width}
.mapBacg{.bg-fff;.boxShow;}
.viewBox{
  .clear;
  padding: 10px 0;
}
.viewBox .tites{
  font-size:16px;
}
.viewBox .times{
  font-size:14px;
}
</style>
