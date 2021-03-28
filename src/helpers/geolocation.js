const getLocation = new Promise((resolve, reject) => {
  if (!navigator || !navigator.geolocation) {
    reject(new Error('Geolocation is not supported'));
  }

  navigator.geolocation.getCurrentPosition(
    ({ coords }) => resolve({ latitude: coords.latitude, longitude: coords.longitude }),

    ((error) => reject(error)),

    {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0,
    },
  );
});

export default getLocation;
