<template>
  <div class="studenNum mapBacg">
    <div>
      <div class="viewBox" style="min-width:300px;">
        <el-col :span="12">
          <div class="tel-left">
            <h2 class="tites">官网浏览量趋势</h2>
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
      <div id="studenNum" style="height: 415px;margin: 0 auto"></div>
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
      let data = {};
      data.name = "学员增减量";
      data.data = [];
      for (var i = 0; i < 12; i++){
          var num = parseInt(Math.random() * 50000);
          data.data.push(num);
      }
      let starTime = 2010;


      Highcharts.chart('studenNum', {

        title: {
            text: ''
        },

        subtitle: {
            text: ''
        },
        xAxis: {
            // type: 'datetime'
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            enabled:false
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false,
                    enabled:false
                },
                pointStart: starTime
                // pointInterval: 306000,  
                // pointStart: Date.UTC(2014, 6, 10,0,0,0),  
                // pointEnd:Date.UTC(2014,6,10,23,59,59),  
            }
        },
        // tooltip: {
        //     enabled: false
        // },
        exporting:{
            enabled:false //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
        },
        series: [data],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
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
