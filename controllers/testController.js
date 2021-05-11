const ImageClass = require('../models/Test');
const { response } = require('express');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// exports.getTestData = (req, res) => {
// 	let data=[
// 		new Test('other name', 15)
// 	]
		
// 		res.render('testView', {
// 			data : data,
// })};


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
//                 // If there is at least one stop point get the arrivals for that stop point
//                 console.log(stopPointData.stopPoints)
//                 if(stopPointData.stopPoints.length > 0) {
//                     getArrivalsForStopPoint(stopPointData.stopPoints[0].id)
//                 }
                
//             }
//         }
//         request.send()
//     }

// function getArrivalsForStopPoint(stopPoint) {
// 	console.log('get arrivals  from stop points is runnning...')
//     let url = `https://api.tfl.gov.uk/StopPoint/${stopPoint}/Arrivals`;
//     var request = new XMLHttpRequest()
//     request.open('GET', url, true)
//     request.onreadystatechange = function () {
//         if (request.readyState === 4) {
//             let array = JSON.parse(request.responseText)
//             sortData(array)
//         }
//     }
//     request.send()
// }

// function sortData(buses) {
// 	console.log('sort data is running')
//     // Map the array of objects to a new array of objects with only the information we want
//     let reducedBuses = buses.map(bus =>  { return { time: bus.timeToStation, line: bus.lineName, route: bus.towards }})

//     // Sort the array of objects in order of their time value
//     let sortedReducedBuses = reducedBuses.sort(function(a,b) {
//         if (a.time < b.time) return -1
//         else return 1
//     })

//     // Get the first 5 objects from the array
//     let next5Buses = sortedReducedBuses.slice(0,5)
//     console.log(next5Buses)
//     // Print some information to the user to the console about each bus
//     let busArray= next5Buses.map(bus=>{
// 		return new BusClass (bus.time, bus.line, bus.route)
//     });
//     console.log(busArray)
// 	res.render("postcodeView", {
// 		postcode:userPostcode,
// 		busArray: busArray
// 	})
// }

// }
