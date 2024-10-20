// Initialize like buttons and counts for all templates on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if the user is authenticated when the page loads
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            console.log("User is signed in: ", user.uid);
            initializeLikesForUser(user.uid); // Initialize the like buttons and counts for this user
        } else {
            // No user is signed in.
            console.log("No user is signed in");
        }
    });

    // Function to initialize the like buttons and counts for the authenticated user
    function initializeLikesForUser(userId) {
        const templateIds = ['template1', 'template2', 'template3']; // Add all your template IDs here

        // Initialize like buttons and counts for each template
        templateIds.forEach(templateId => {
            displayLikeCount(templateId);  // Display the like count for each template
        });
    }

    // Toggle like functionality
    window.toggleLike = function(templateId) {  // Attach the function globally
        const userId = firebase.auth().currentUser.uid; // Get the current user ID
        const userLikesRef = database.ref('users/' + userId + '/likes/' + templateId); // Reference to user's likes

        userLikesRef.once('value', (snapshot) => {
            if (snapshot.exists()) {
                // If the user already liked it, remove the like
                userLikesRef.remove();
                document.getElementById('likeButton' + templateId).innerHTML = '<i class="fa fa-heart"></i> Favorite';
            } else {
                // If the user hasn't liked it, add a like
                userLikesRef.set(true);
                document.getElementById('likeButton' + templateId).innerHTML = '<i class="fa fa-heart" style="color:red;"></i> Favorited';
            }
        });
    }

    // Display like count
    function displayLikeCount(templateId) {
        const templateLikesRef = database.ref('templates/' + templateId + '/likes');
        templateLikesRef.on('value', (snapshot) => {
            const likeCount = snapshot.numChildren(); // Get the number of likes
            document.getElementById('likeCount' + templateId).innerText = `${likeCount} likes`;
        });
    }
});
