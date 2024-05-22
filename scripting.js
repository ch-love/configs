      function updateTime() {
            var date = new Date();
            var options = { timeZone: 'Australia/Sydney', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
            var timeString = date.toLocaleTimeString('en-US', options);
            document.getElementById('clock').textContent = timeString;
        }

        updateTime();
        setInterval(updateTime, 1000);

        // Fetch a random image from Unsplash and set it as the background
        fetch('https://source.unsplash.com/featured/?wallpapers')
            .then(response => {
                document.body.style.backgroundImage = `url(${response.url})`;
            })
            .catch(error => console.error('Error fetching background image:', error));
