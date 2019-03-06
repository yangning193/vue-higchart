<template>
  <div class="studenNum mapBacg">
    <div id="studenDensity" class="map-models" style="height: 456px;margin: 0 auto"></div>
  </div>
</template>
<script>
console.log(this)
import Highcharts from 'highcharts/highstock';
// import HighchartsMore from 'highcharts/highcharts-more';
// import HighchartsDrilldown from 'highcharts/modules/drilldown';
// import Highcharts3D from 'highcharts/highcharts-3d';
import $ from 'jquery';
import HighchartsCustomEvents from 'highcharts-custom-events'
HighchartsCustomEvents(Highcharts) // 很重要，要不然图表上用不了
// HighchartsMore(Highcharts)
// HighchartsDrilldown(Highcharts);
// Highcharts3D(Highcharts);
// import basicContext from 'basiccontext'
// import 'basiccontext/dist/basicContext.min.css'
// import 'basiccontext/dist/themes/bright.min.css'
// import 'basiccontext/dist/addons/popin.min.css'
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
      Highcharts.setOptions({
              lang: {
                  drillUpText: '< 返回 “{series.name}”'
              }
      });
      var map = null,
          geochina = 'https://data.jianshukeji.com/jsonp?filename=geochina/';

      $.getJSON(geochina + 'china.json&callback=?', function(mapdata) {
              var data = [];
              // 随机数据
              Highcharts.each(mapdata.features, function(md, index) {
                      var tmp = {
                              name: md.properties.name,
                              value: Math.floor((Math.random() * 1000) + 1) // 生成 1 ~ 100 随机值
                      };
                      if(md.properties.drilldown) {
                          tmp.drilldown = md.properties.drilldown;
                      }
                      data.push(tmp);
              });
              console.log(data)
              map = new Highcharts.Map('studenDensity', {
                      chart: {
                          events: {
                            click:function(){
                              if($(".meuns").length){
                                $(".meuns").remove();
                              }
                            },
                            drilldown: function(e) {
                              if($(".meuns").length){
                                $(".meuns").remove();
                              }
                              console.log(e.point.properties);
                              if(e.point.properties.level == "city"){
                                  return;
                              }
                              this.tooltip.hide();
                              // for(var i in e.point){
                              //     console.log(i)
                              // }
                              // 异步下钻
                              if (e.point.drilldown) {
                                      var pointName = e.point.properties.fullname;
                                      map.showLoading('下钻中，请稍后...');
                                      // 获取二级行政地区数据并更新图表
                                      $.getJSON(geochina +   e.point.drilldown + '.json&callback=?', function(data) {
                                              data = Highcharts.geojson(data);
                                              Highcharts.each(data, function(d) {
                                                      if(d.properties.drilldown) {
                                                          d.drilldown = d.properties.drilldown;
                                                      }
                                                      d.value = Math.floor((Math.random() * 100) + 1); // 生成 1 ~ 100 随机值
                                              });
                                              map.hideLoading();
                                              map.addSeriesAsDrilldown(e.point, {
                                                      name: e.point.name,
                                                      data: data,
                                                      dataLabels: {
                                                          enabled: true,
                                                          format: '{point.name}'
                                                      }
                                              });
                                              map.setTitle({
                                                  text: pointName
                                              });
                                      });
                              }
                            },
                            drillup: function() {
                                map.setTitle({
                                   text: '中国'
                                });
                                if($(".meuns").length){
                                  $(".meuns").remove();
                                }
                            },
                          }
                      },
                      title: {
                          text: ''
                      },
                      subtitle: {
                          text: '',
                      },
                      mapNavigation: {
                          enabled: true,
                          buttonOptions: {
                              verticalAlign: 'bottom'
                          }
                      },
                      exporting:{
                          enabled:false //用来设置是否显示‘打印’,'导出'等功能按钮，不设置时默认为显示
                      },
                      legend:{
                          layout: 'vertical',
                          align: 'right',
                          verticalAlign: 'bottom',
                          enabled:true
                      },
                      plotOptions: {
                          map: {
                                  states: {
                                      hover: {
                                          color: '#EEDD66'
                                      }
                                  },
                                  events: {
                                    contextmenu: (e) => {
                                      if(e.target.point.properties.level == "city"){
                                          if($(".meuns").length){
                                              $(".meuns").css({"position":"absolute","left":e.chartX,"top":e.chartY});
                                          }
                                          else{
                                              $("#studenDensity").append("<div class='meuns'>222222222</div>");
                                              $(".meuns").css({"position":"absolute","left":e.chartX,"top":e.chartY});
                                          }
                                      }else{
                                        $(".meuns").remove();
                                      }
                                    }
                                  } 
                              }
                      },
                      colorAxis: {
                          min: 0,
                          minColor: '#E6E7E8',
                          maxColor: '#005645'
                      },
                      series: [{
                              data: data,
                              mapData: mapdata,
                              joinBy: 'name',
                              name: '中国地图',
                              states: {
                                      hover: {
                                          color: '#a4edba',
                                          shadow:true
                                      }
                              },
                              dataLabels: {
                                    enabled: true,
                                    format: '{point.properties.postal-code}'
                              }
                      }],
                      credits:{
                        enabled: false //不显示LOGO 
                      },
                      drilldown: {
                          activeDataLabelStyle: {
                              color: '#FFFFFF',
                              textDecoration: 'none',
                              textShadow: '0 0 3px #000000'
                          },
                          drillUpButton: {
                              relativeTo: 'spacingBox',
                              position: {
                                  x: 0,
                                  y: 60
                              }
                          }
                      }
              });
      });
    },
    changeVal(t){

    }
  }
};
</script>
<style lang="less">
  #studenDensity{
    position: relative;
  }
  #studenDensity .meuns{
    width: 200px;
    min-height: 232px;
    background: red;
    z-index: 2;
  }
</style>

