var library = (function() {
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
            return String(Math.floor(Date.now() / 1000));
        },
		UnixMillisecond: function(){
            return Date.now();
        }
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){
                  var date = new Date();
                  var time = date.toLocaleTimeString();
                  return String(time);
              },
	   	    WithOutSeconds: function() {
                   var date = new Date();
                   var hours = date.getHours();
                   var minutes = date.getMinutes();
                   if (minutes < 10){
                    minutes = String('0' + minutes);}
                   var ampm = '';
                   if (hours < 12){
                        ampm = 'AM';
                        } else {
                        ampm = 'PM';
                        }
                   var afternoon = String(hours - 12);
                   if (hours > 12) {
                       hours = Number(afternoon);       
                   }
                   return String(hours+ ':' +minutes+ " " +ampm);
               }
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){
                var date = new Date();
                var day = date.getDate();
                var month = date.getMonth()+1;
                var year = date.getFullYear();
                var today = month+'/'+day+'/'+year;
                return today;},
			Name: function(){
                var date = new Date();
                var day = date.getDate();
                var year = date.getFullYear();
                var month = date.getMonth();
                var monthNames = ["January", "February", "March", "April", "May", "June",
                                  "July", "August", "September", "October", "November", "December"];
                var today = String(monthNames[month]+ " " +day+ ", " +year);
                return  today;
            }
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){return String(new Date().getSeconds());},
			DblDigit: function(){
                var date = new Date();
                var seconds = date.getSeconds();
                if (seconds < 10){
                    return String('0' + seconds);
                } else {
                        return String(seconds);
                    };}
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){return String(new Date().getMinutes());},
			DblDigit: function(){
                var date = new Date();
                var minutes = date.getMinutes();
                if (minutes < 10){
                    return String('0' + minutes);
                } else {
                        return String(minutes);
                    };}
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {return String(new Date().getHours());},
			TwelveHour: function() {
                        var date = new Date();
                        var hour = date.getHours();
                        var afternoon = hour - 12;
                        if (hour <= 12){
                        return String(hour);
                        } else {
                        return String(afternoon);
                        };},
			AMPM: (function() {
				return {
					UpperCase: function(){
                        var date = new Date();
                        var hour = date.getHours();
                        if (hour < 12){
                        return String('AM');
                        } else {
                        return String('PM');
                        };},
					LowerCase: function(){var date = new Date();
                        var hour = date.getHours();
                        if (hour < 12){
                        return String('am');
                        } else {
                        return String('pm');
                        };}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
                var date = new Date();
                var day = date.getDay();
                var days = ["Sunday","Monday", "Tuesday", "Wednesday", 
                "Thursday", "Friday", "Saturday"];
                return days[day];
            },
			AbrDayOfWeek: function(){
                var date = new Date();
                var day = date.getDay();
                var days = ["Sunday","Monday", "Tuesday", "Wednesday", 
                "Thursday", "Friday", "Saturday"];
                var abrvDay = String(days[day].slice(0,3));
                return String(abrvDay);
            },
			FirstTwoOfWeek: function(){
                var date = new Date();
                var day = date.getDay();
                var days = ["Sunday","Monday", "Tuesday", "Wednesday", 
                "Thursday", "Friday", "Saturday"];
                var abrvDay = String(days[day].slice(0,2));
                return String(abrvDay);
            },
			WeekOfYear: function(){}
        }
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){return String(new Date().getDate());},
					Ordinal: function(){
                        var date = new Date();
                        var day = date.getDate();
                        if (([1, 21, 31]).includes(day)){
                            return String(day + 'st');
                        }
                        if (([2, 23]).includes(day)){
                            return String(day + 'nd');
                        }
                        if (([3, 23]).includes(day)){
                            return String(day + 'rd');
                        } else {
                            return String(day + 'th');
                        }
                    },
					DateDblDigit: function(){
                        var date = new Date();
                        var day = date.getDate();
                        if (day < 10){
                        return String('0' + day);
                        } else {
                        return String(day)
                        };},
        }
	})(),
			// MonthNumber: function(){ return String(new Date().getMonth() + 1);},
            MonthNumber: function(){
                var date = new Date();
                var month = date.getMonth() + 1;
                return String(month);
                },
			MonthNumberDblDigit: function(){
                var date = new Date();
                var month = date.getMonth() + 1;
                if (month < 10){
                    return String('0' + month);
                } else {
                        return String(month)
                    };},
			AbrOfCurrentMonth: function(){
                var date = new Date();
                var month = date.getMonth();
                var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                                  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
                return  monthNames[month];                 
                },
			CurrentMonth: function(){
                var date = new Date();
                var month = date.getMonth();
                var monthNames = ["January", "February", "March", "April", "May", "June",
                                  "July", "August", "September", "October", "November", "December"];
                return  monthNames[month];                 
                }
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){
                        var date = new Date();
                        function daysInFebruary(year) {
                            if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
                            return 29;
                            } else {
                            return 28;
                            };
                        };
                        var feb = daysInFebruary(date.getFullYear());
                        var aggregateMonths = [0, 
                           31,
                           31 + feb, 
                           31 + feb + 31, 
                           31 + feb + 31 + 30, 
                           31 + feb + 31 + 30 + 31, 
                           31 + feb + 31 + 30 + 31 + 30, 
                           31 + feb + 31 + 30 + 31 + 30 + 31, 
                           31 + feb + 31 + 30 + 31 + 30 + 31 + 31, 
                           31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30, 
                           31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31, 
                           31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30,];
                        return String(aggregateMonths[date.getMonth()] + date.getDate()); 
                    },
					Ordinal: function(){
                        var date = new Date();
                        function daysInFebruary(year) {
                            if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
                            return 29;
                            } else {
                            return 28;
                            };
                        };
                        var feb = daysInFebruary(date.getFullYear());
                        var aggregateMonths = [0, 
                           31,
                           31 + feb, 
                           31 + feb + 31, 
                           31 + feb + 31 + 30, 
                           31 + feb + 31 + 30 + 31, 
                           31 + feb + 31 + 30 + 31 + 30, 
                           31 + feb + 31 + 30 + 31 + 30 + 31, 
                           31 + feb + 31 + 30 + 31 + 30 + 31 + 31, 
                           31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30, 
                           31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31, 
                           31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30,];
                        var dayofyear = String(aggregateMonths[date.getMonth()] + date.getDate());
                        
                        return String(dayofyear + suffix);
                    }
                    
				}
			})(),
			YearFull: function(){return String(new Date().getFullYear());},
			YearAbr: function(){
                var date = new Date();
                var year = date.getFullYear();
                var abrvYear = String(year).slice(2,4);
                return String(abrvYear);
            }
		}
	})(),
	Defaults: function(){
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        if (month < 10) {
            month = String('0' + month);
        }
        var day = date.getDate();
        if (day < 10) {
            day = String('0' + day);
        }
        var hours = date.getHours();
        if (hours < 10) {
            hours = String('0' + day);
        }
        var seconds = date.getSeconds();
        if (seconds < 10) {
            seconds = String('0' + day);
        }
        var minutes = date.getMinutes();
        if (minutes < 10) {
            minutes = String('0' + minutes);
        }
        return String(year+"-"+month+"-"+day+"T"+hours+":"+minutes+":"+seconds);
    }
  }
})();