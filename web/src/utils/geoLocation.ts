const geoLocation = () => {
    const options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      };

      const timeout = new Promise((_resolve, reject) => {
        setTimeout(reject, 10000, 'Wait 5 seconds to find location');
      });
      const geo = new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
      });
      const geoLocation = Promise.race([timeout, geo]);
    //   console.log('Get coordinate:', geoLocation);

      return geoLocation;
}

export default geoLocation;