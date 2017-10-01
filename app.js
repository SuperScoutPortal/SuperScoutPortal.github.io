(function(){
	const config = {
    apiKey: "AIzaSyAiUKhfaswTVi4J3FGghClk5rqWTcmG114",
    authDomain: "fir-auth-c4201.firebaseapp.com",
    databaseURL: "https://fir-auth-c4201.firebaseio.com",
    projectId: "fir-auth-c4201",
    storageBucket: "fir-auth-c4201.appspot.com",
    messagingSenderId: "742600843551"
  };
  firebase.initializeApp(config);

  const preObject = document.getElementById('profile');

  const dbRefObject = firebase.database().ref().child('profile');

  dbRefObject.on('value', snap => {
  		preObject.innerText = JSON.stringify(snap.val(), null, 3);
	});

}());