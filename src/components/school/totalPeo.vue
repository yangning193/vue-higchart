<template>
  <div class="totalPeo">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div class="grid-content bg-purple">2017/12/13</div>
        <div class="grid-content bg-purple">星期三</div>
      </div>
        <el-row>
          <el-col :span="12" v-for="o in taotal" class="text item ac">
            <div class="garden">
              <div class="grid-content bg-purple">{{o.title}}</div>
              <div class="grid-content bg-purple">{{o.num}}名</div>
            </div>
          </el-col>
        </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  data(){
    return{
      taotal:[
        {
          "title":"教室总数",
          "num":"300+"
        },
        {
          "title":"班级总数",
          "num":"300+"
        },
        {
          "title":"教室总数",
          "num":"300+"
        },
        {
          "title":"班级总数",
          "num":"300+"
        },
        {
          "title":"班级总数",
          "num":"300+"
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
  .text .garden{
    border: 1px red solid;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    display: inline-block;
  }
  .garden div:nth-child(1){
    margin-top: 25px;
    padding-bottom: 4px;
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
</style>
