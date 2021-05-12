class ImageClass{
	constructor( title, media, date_taken, author, tags, link, author_id){
		this.title=title;
		this.media=media;
		this.date_time=new Date(date_taken);
		this.date=(this.date_time).toLocaleDateString('en-GB', 'Long Date Pattern');
		this.time=(this.date_time).toLocaleTimeString('en-GB', { hour: 'numeric',minute: 'numeric', hour12: true });
		this.author_long= author.replace(/nobody@flickr.com/g,"");
		this.author=(this.author_long).substring(3, this.author_long.length-2);
		this.tags=(tags.split(' ')).join(', #');
		this.link=link;
		this.author_id=author_id;
		this.author_link='https://www.flickr.com/photos/'+author_id;
	}
	
}
module.exports=ImageClass;  
