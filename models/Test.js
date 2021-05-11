// class BusClass{
// 	constructor(timeToStation, lineName, towards){
// 		this.timeToStation=timeToStation
// 		this.lineName=lineName;
// 		this.towards=towards; 
// 	}
// 	showBuses(){
// 		return 'The ' + this.lineName + ' line is ' +this.timeToStation +' seconds away and is heading towards '+ this.towards +'.'; 
// 	}; 
// }
// module.exports=BusClass;  

class ImageClass{
	constructor( title, media, date_taken, author, tags, link, author_id){
		this.title=title;
		this.media=media;
		this.date_time=new Date(date_taken);
		this.date=(this.date_time).toLocaleDateString('en-GB', 'Long Date Pattern');
		this.time=(this.date_time).toLocaleTimeString('en-GB', { hour: 'numeric',minute: 'numeric', hour12: true });
		this.author_long= author.replace(/nobody@flickr.com/g,"");
		this.author=(this.author_long).substring(3, this.author_long.length-2);
		this.tags=tags;
		this.link=link;
		this.author_id=author_id;
		this.author_link='https://www.flickr.com/photos/'+author_id;
	}
	
	// showImages(){
	// 	return (
	// 	<div>
	// 		<img src={this.link} alt={this.title}/> 
	// 		<h1> {this.title} </h1>
	// 		<h2> by + {this.author}</h2>
	// 		<h3> {this.date}</h3>
	// 		<h3> Tags: {this.tags}.</h3>
	// 	</div> )
	// }
	ShowImage(){
		return this.link
	}
	ShowTitle(){
		return this.title
	}
	ShowAuthor(){
		return this.author
	}
	; 
}
module.exports=ImageClass;  
/*
class Test{
	constructor(name, id) {
		this.name = name;
		this.id = id;
	}

	showTestData() {
		return this.name + ", id: " + this.id; 
	};

	editName(newName) {
		this.name = newName
	}
};

module.exports = Test;
/*
class BusStopCode{
	constructor(busStopCode, busStopName){
		this.busStopCode= stopCode;
		this.busStopName= stopName;
	}
	showBusStopCodeandName(){
		return 'The nearest stop is:' + this.stopName + '(ATCO code:' +this.stopCode +')'; 
	}; 
}
module.exports=BusStopCode; 
*/

	// class PostcodeClass{

	// 	constructor(input){
	// 		this.input=input
	// 	}
	// 	showPostCode(){
	// 		return this.input +"working"
	// 	}

	// };
	// module.exports=PostcodeClass