function countdown (){
	let daysElem=document.getElementById('days');
	let hoursElem=document.getElementById('hours');
	let minElem=document.getElementById('min');
	let secElem=document.getElementById('sec');

		let eventDate = ('2023-05-18 00:00:00')
		let eventTimestamp=Date.parse(eventDate);
		 
	    let timer =setInterval(()=>{

	  		let period=(eventTimestamp-Date.now())/1000;
	  		let days = 0;
	  		let hours = 0;
	  		let minutes = 0;
	  		let sec = 0;
	  		if(period<=0){
	    	clearInterval(timer);
	        }
	        else{
	  	    days = Math.trunc(period/86400);
	  		hours = Math.trunc((period%86400)/3600);
	  		minutes = Math.trunc((period%3600)/60);
	  		sec = Math.trunc(period%60);
	  		}
		    //count.innerHTML=((days)+' дней '+(hours)+' часов '+(minutes)+' минут '+(sec)+' секунд ');
		    daysElem.innerHTML=((days)+' :');
	   		hoursElem.innerHTML=((hours)+' :');
	   		minElem.innerHTML=((minutes)+' :');
	   		secElem.innerHTML=(sec);

	    }, 1000)
		

	
}
countdown();
