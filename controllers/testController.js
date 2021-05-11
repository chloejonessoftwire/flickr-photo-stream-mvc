const ImageClass = require('../models/Test');
const { response } = require('express');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

exports.getFlickrData = (req, res) => {
	
	getFeedData()

    function getFeedData() {
        console.log('Getting Flickr feed')

        let url = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1&lang?en&safe_search=1&tags=derbyshire`;
        var request = new XMLHttpRequest()
        request.open('GET', url, true)
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                let photoDataArray = (JSON.parse(request.responseText)).items
                console.log(photoDataArray)
                sortData(photoDataArray)
            }
        }
        request.send()
    }
    function sortData(photoDataArray){
        for (photo in photoDataArray) {
            console.log(photo)}

        let flickrArray = photoDataArray.map(photo => {
            return new ImageClass (photo.title, photo.media.m, photo.date_taken, photo.author, photo.tags, photo.link, photo.author_id)
        });
        console.log(flickrArray)
        res.render('testView', {flickrArray: flickrArray})
    }   
}