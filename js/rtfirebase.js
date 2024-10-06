// Retrieve real-time analytics data from Firebase
firebase.database().ref('analytics/page_views').on('value', (snapshot) => {
    const data = snapshot.val();
    
    // Assuming you want to display page views in an HTML element
    const analyticsDisplay = document.getElementById('analytics-display');
    analyticsDisplay.innerHTML = '';  // Clear previous content
  
    // Loop through the retrieved data and display it
    for (const key in data) {
      const pageView = data[key];
      analyticsDisplay.innerHTML += `<p>Page: ${pageView.page}, Time: ${new Date(pageView.timestamp)}</p>`;
    }
  });