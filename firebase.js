 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDq84qQc-6AIWoCb0QmCnEWvAlcqAJD3eI",
    authDomain: "train-scheduler-88d4a.firebaseapp.com",
    databaseURL: "https://train-scheduler-88d4a.firebaseio.com",
    storageBucket: "train-scheduler-88d4a.appspot.com",
    messagingSenderId: "870969814165"
  };
  firebase.initializeApp(config);

 var database = firebase.database();

// button for adding trains

$("#add-train").on("click",function(evet) {
	event.preventDefault();
	
	// grabs user inputs
	var trainName = $("#name-input").val().trim();
	var destination = $("#destination-input").val().trim();
	var firstTrainTime = $("#time-input").val().trim();
	var frequency = $("#frequency-input").val().trim();

	var train ={
		name:trainName,
		destination:destination,
		time:firstTrainTime,
		frequency:frequency

	};

	// upload the date to database

	database.ref().push(train);

	console.log(train.name);
	console.log(train.destination);
	console.log(train.time);
	console.log(train.frequency);

	// clears the boxes

	$("#name-input").val("");
	$("#destination-input").val("");
	$("#time-input").val("");
	$("#frequency-input").val("");

});

	database.ref().on("child-added", function(childSnapshot, prevChildKey){
		console.log(childSnapshot.val());

		var trainName = childSnapshot.val().name;
		var destination = childSnapshot.val().destination;
		var firstTrainTime = childSnapshot.val().firstTrainTime;
		var frequency = childSnapshot.val().frequency;

		console.log(trainName);
		console.log(destination);
		console.log(firstTrainTime);
		console.log(frequency);

		// var tFrequency = 10;

		// var firstTime = "06:00";

	$("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination );	

});





