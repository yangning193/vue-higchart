import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//axiox
// import axios from "axios";
// import VueAxios from "vue-axios";
//plugins
import reset from "./../css/reset.css";
import "./plugins/element.js";
import {post,fetch,patch,put} from './plugins/http'
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;

// Vue.use(VueAxios, axios);
//Highcharts
import Highcharts from "highcharts/highstock";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsDrilldown from "highcharts/modules/drilldown";
import Highcharts3D from "highcharts/highcharts-3d";
import Highmaps from "highcharts/modules/map";

HighchartsMore(Highcharts);
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);
Highmaps(Highcharts);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  methods: {
     	moreChart() {
        var options = this.getMoreOptions(this.type);
        if (this.chart) {
            this.chart.destroy();
        };
        // 初始化 Highcharts 图表
        this.chart = new Highcharts.Chart('highcharts-more', options);
      }
  }
}).$mount("#app");
