<template>
  <div class="studentClass mapBacg">
    <div>
      <div class="viewBox" style="min-width:300px;">
        <el-col :span="12">
          <div class="tel-left">
            <h2 class="tites">城市上课学员数量排行</h2>
            <span class="times">2017/12/12-2018/03/12</span>
          </div>
        </el-col>
        <el-col class="tel-right" :span="12">
            <el-radio-group v-model="radio" size="medium" @change="changeVal">
              <el-radio-button label="周"></el-radio-button>
              <el-radio-button label="月"></el-radio-button>
              <el-radio-button label="年"></el-radio-button>
            </el-radio-group>
        </el-col>
      </div>
    </div>
    <div>
      <div id="studentClass" style="height: 415px;margin: 0 auto"></div>
    </div>
  </div>
</template>
<script>
import Highcharts from 'highcharts/highstock';
export default {
  data(){
    return{
      radio: '年'
    }
  },
  mounted() {
    this.initMaps();
  },
  methods:{
    initMaps(){
      let data1 = {};
      data1.name = "城市上课学员数量排行";
      data1.data = [];
      for (var i = 0; i < 7; i++){
          var num = parseInt(Math.random() * 50000);
          data1.data.push(num);
      }
      let starTime = 2010;

      Highcharts.chart('studentClass', {
          chart: {
              type: 'bar'
          },
          title: {
              text: ''
          },
          xAxis: {
              categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas','Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas','Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
              max:5,
              scrollbar: {
                      enabled: true,
                      showFull: false
              }
          },
          yAxis: {
              min: 0,
              title: {
                  text: ''
              },
          },

          legend: {
              reversed: true,
              align: 'right',
          },
          plotOptions: {
              series: {
                  stacking: 'normal'
              }
          },
          series: [{
              name: '城市学员数值',
              data: [5, 3, 4, 7, 2,4, 7, 2]
          }],
          exporting:{
              enabled:false //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
          },
          credits:{
            enabled: false //不显示LOGO 
          }
      });
    },
    changeVal(t){

    }
  }
};
</script>
<style>

</style>
