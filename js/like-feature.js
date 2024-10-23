    <><script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script><script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js"></script><script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script></>
// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPnTLVwPCAF9EzdwAIQmqSzK16eSbcOz4",
    authDomain: "webcraft-7f386.firebaseapp.com",
    databaseURL: "https://webcraft-7f386-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "webcraft-7f386",
    storageBucket: "webcraft-7f386.appspot.com",
    messagingSenderId: "983810632123",
    appId: "1:983810632123:web:de8d379daa38fbca42fc9e",
    measurementId: "G-WSSVHJ9VV3"
  };

  document.addEventListener('DOMContentLoaded', function() {
    // Check if the user is authenticated when the page loads
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("User is signed in: ", user.uid);
            initializeForUser(user.uid); // Initialize likes and downloads for this user
        } else {
            console.log("No user is signed in");
        }
    });

    // Initialize likes and downloads for the authenticated user
    function initializeForUser(userId) {
        const templateIds = ['template1', 'template2', 'template3']; // Add all your template IDs here

        // Initialize like and download counts for each template
        templateIds.forEach(templateId => {
            checkUserLikeStatus(userId, templateId);  // Check if user liked the template
            displayLikeCount(templateId);  // Display the like count
            displayDownloadCount(templateId);  // Display the download count
        });
        firebase.initializeApp(firebaseConfig);
    }

    // Toggle like functionality
    window.toggleLike = function(templateId) {
        const userId = firebase.auth().currentUser.uid;
        const userLikesRef = database.ref('users/' + userId + '/likes/' + templateId);
        const templateLikesRef = database.ref('templates/' + templateId + '/likes');

        userLikesRef.once('value', (snapshot) => {
            if (snapshot.exists()) {
                // If the user already liked it, remove the like
                userLikesRef.remove();
                templateLikesRef.child(userId).remove(); // Remove from template likes
                document.getElementById('likeButtontemplate' + templateId).style.color = ''; // Reset the heart color
            } else {
                // If the user hasn't liked it, add a like
                userLikesRef.set(true);  // Save the user's like
                templateLikesRef.child(userId).set(true);  // Save the like globally for the template
                document.getElementById('likeButtontemplate' + templateId).style.color = 'red'; // Set heart color to red
            }
        });
    }

    // Display like count
    function displayLikeCount(templateId) {
        const templateLikesRef = database.ref('templates/' + templateId + '/likes');
        templateLikesRef.on('value', (snapshot) => {
            const likeCount = snapshot.numChildren(); // Get the number of likes
            document.getElementById('likeCount' + templateId).innerText = likeCount; // Update the like count
        });
    }

    // Check if the user has liked the template
    function checkUserLikeStatus(userId, templateId) {
        const userLikesRef = database.ref('users/' + userId + '/likes/' + templateId);

        userLikesRef.once('value', (snapshot) => {
            if (snapshot.exists()) {
                // If the user has liked the template, set the heart color to red
                document.getElementById('likeButtontemplate' + templateId).style.color = 'red';
            } else {
                // If the user hasn't liked the template, set the heart color to default
                document.getElementById('likeButtontemplate' + templateId).style.color = '';
            }
        });
    }

    // Increment download count
    window.incrementDownload = function(templateId) {
        const templateDownloadsRef = database.ref('templates/' + templateId + '/downloads');

        templateDownloadsRef.transaction((currentDownloads) => {
            return (currentDownloads || 0) + 1;  // Increment the download count by 1
        });
    }

    // Display download count
    function displayDownloadCount(templateId) {
        const templateDownloadsRef = database.ref('templates/' + templateId + '/downloads');
        templateDownloadsRef.on('value', (snapshot) => {
            const downloadCount = snapshot.val() || 0; // Get the number of downloads
            document.getElementById('downloadCount' + templateId).innerText = downloadCount; // Update the download count
        });
    }
});