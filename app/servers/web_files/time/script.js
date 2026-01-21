function updateClock() {
    const now = new Date();
    const timeOptions = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
    };
    const dateOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    const timeString = now.toLocaleTimeString(undefined, timeOptions);
    const dateString = now.toLocaleDateString(undefined, dateOptions);
    
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const timezoneOffset = -now.getTimezoneOffset() / 60;
    const offsetString = `UTC${timezoneOffset >= 0 ? '+' : ''}${timezoneOffset}`;
    
    document.getElementById('clock').textContent = timeString;
    document.getElementById('date').textContent = dateString;
    document.getElementById('timezone').textContent = `${timezone} (${offsetString})`;
    document.getElementById('timezone-info').textContent = timezone;
    
    const hours = now.getHours();
    const isDaytime = hours >= 6 && hours < 18;
    document.getElementById('daylight-info').textContent = isDaytime 
        ? 'Currently daytime  ☀️' 
        : 'Currently nighttime  🌙';
    
    if (!navigator.geolocation) {
        document.getElementById('location-info').textContent = 'Location detection not supported';
    } else {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                document.getElementById('location-info').textContent = 
                    `Approx. coordinates: ${latitude.toFixed(2)}°, ${longitude.toFixed(2)}°`;
            },
            () => {
                document.getElementById('location-info').textContent = 
                    'Location permission not granted';
            }
        );
    }
}

updateClock();
setInterval(updateClock, 1000);