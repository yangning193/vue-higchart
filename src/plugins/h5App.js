export function h5App(){
	this.name = "h5App",
	this.getTime = function(date,interval){
		let pre = this.formatTime(date,interval);
		let now = this.formatTime(date,interval);
		return [pre,now];
	};
	this.getNowDate = function(){
		let newDate = new Date();
		let strYear = newDate.getFullYear();     
		let strDay = newDate.getDate();     
		let strMonth = newDate.getMonth()+1;  
		if(strMonth<10)     
		{     
			strMonth='0'+strMonth;     
		}   
		if(strDay<10)     
		{     
			strDay='0'+strDay;     
		} 
		return strYear+'-'+strMonth+'-'+strDay;
	};
	//获取一月日期
	this.getLastMonthDy = function(date = new Date()){   
		let daysInMonth = new Array([0],[31],[28],[31],[30],[31],[30],[31],[31],[30],[31],[30],[31]);   
		let strYear = date.getFullYear();     
		let strDay = date.getDate();     
		let strMonth = date.getMonth()+1;   
		if(strYear%4 == 0 && strYear%100 != 0){   
			daysInMonth[2] = 29;   
		}   
		if(strMonth - 1 == 0)   
		{   
			strYear -= 1;   
			strMonth = 12;   
		}   
		else  
		{   
			strMonth -= 1;   
		}   
		strDay = daysInMonth[strMonth] >= strDay ? strDay : daysInMonth[strMonth];   
		if(strMonth<10)     
		{     
			strMonth='0'+strMonth;     
		}   
		if(strDay<10)     
		{     
			strDay='0'+strDay;     
		} 
		return strYear+'-'+strMonth+'-'+strDay;
	}
	//获取一年日期
	this.getLastYearDy = function (date = new Date()){   
		let strYear = date.getFullYear() - 1;     
		let strDay = date.getDate();     
		let strMonth = date.getMonth()+1;   
		if(strMonth<10)     
		{     
			strMonth='0'+strMonth;     
		}   
		if(strDay<10)     
		{     
			strDay='0'+strDay;     
		} 
		return strYear+'-'+strMonth+'-'+strDay;
	}
	//获取七天日期
	this.getLastWeekDy = function (date = new Date()){
		let newDate = new Date(date.getTime() - 6*24*60*60*1000); 
		let strDay = newDate.getDate();     
		let strMonth = newDate.getMonth()+1;
		if(strMonth<10)     
		{     
			strMonth='0'+strMonth;     
		}
		if(strDay<10)     
		{     
			strDay='0'+strDay;     
		} 
		let time = newDate.getFullYear()+"-"+strMonth+"-"+strDay;
		// conosole.log(time);
		return time;
	}
}
export default new h5App;