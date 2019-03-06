<template>
  <div class="studenTotal">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>中国</span>
      </div>
      <div v-for="o in taotal" class="text item">
        <el-row>
          <el-col :span="12"><div class="grid-content bg-purple">{{o.title}}</div></el-col>
          <el-col :span="12"><div class="grid-content bg-purple">{{o.num}}名</div></el-col>
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
          "num":"10200"
        },
        {
          "title":"男员数",
          "num":"10200"
        },
        {
          "title":"女员数",
          "num":"10200"
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
</style>
