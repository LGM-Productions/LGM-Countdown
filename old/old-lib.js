function tick(settings) {
	var thisDate = new Date(settings.date||settings.endDate||settings.eDate).getTime();
	var now = new Date().getTime();
	
	var distance = thisDate - now;
  
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
	if (settings.dayzeroing||settings.dayzero||settings.day10Padding){
		days = (days < 10 ? "0" : "") + days;
	}
  
	hours = (hours < 10 ? "0" : "") + hours;
	minutes = (minutes < 10 ? "0" : "") + minutes;
	seconds = (seconds < 10 ? "0" : "") + seconds;

	var timeJoined = days + ":" + hours + ":" + minutes + ":" + seconds;
  
	var o = {
		formatted: timeJoined,
		ms: distance,
		endText: undefined,
	};
  
	if (distance <= 0){
		o.formatted = 0;
		o.endText = settings.endText || settings.textE || settings.EndText || "";
	}
  
  return o;
}