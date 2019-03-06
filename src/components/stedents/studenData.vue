<template>
  <div class="studenData">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-col :span="12">
          <div class="tel-left">
            <h2 class="tites">学员数据</h2>
            <span class="times">2017/12/12-2018/03/12</span>
          </div>
        </el-col>
      </div>
      <div v-for="o in taotal" class="text item">
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple"><span>{{o.title}}</span><span>{{o.total}}名</span></div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <span>{{o.secTit}}</span>
              <span>{{o.secTatal}}名</span>
            </div>
            <div class="grid-content bg-purple">
              <span>{{o.thrTit}}</span>
              <span>{{o.thrTatal}}名</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data(){
    return{
      taotal:[
        {
          "title":"学员总数",
          "total":"10200",
          "secTit":"男员数",
          "secTatal":"10200",
          "thrTit":"女员数",
          "thrTatal":"10200",
        },
        {
          "title":"电鼓学员数",
          "total":"10200",
          "secTit":"少儿电鼓",
          "secTatal":"10200",
          "thrTit":"青少电鼓",
          "thrTatal":"10200",
        },
        {
          "title":"钢琴学员数",
          "total":"10200",
          "secTit":"少儿钢琴",
          "secTatal":"10200",
          "thrTit":"青少钢琴",
          "thrTatal":"10200",
        }
      ]
    }
  },
  mounted() {
  },
  methods:{

  }
};
</script>
<style scoped lang="less">
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .grid-content{
    padding: 10px;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
