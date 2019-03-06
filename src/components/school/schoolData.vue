<template>
  <div class="schoolData">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>学校数据详情</span>
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
          "title":"学校名",
          "num":"乐斯数字音乐教室"
        },
        {
          "title":"地址",
          "num":"北京市朝阳区"
        },
        {
          "title":"电鼓",
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
