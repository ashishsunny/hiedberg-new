
const GoogleMapEmbed = () => {
  // Encode the style JSON as a URI component
  const style = encodeURIComponent(JSON.stringify([
    {
      "featureType": "all",
      "elementType": "labels.text",
      "stylers": [
        {
          "color": "#878787"
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
        {
          "color": "#f9f5ed"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
        {
          "color": "#aee0f4"
        }
      ]
    }
  ]));

  return (
    <iframe
      title="Google Map"
      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6898255238093!2d-0.1070726166884106!3d5.612742706275704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf8450b09e9473%3A0xdd002cc2597a2ca1!2sGreda%20Estates%20Police%20Post%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sde!4v1675087195378!5m2!1sen!2sde&style=${style}`}
      width="650"
      height="450"  
      frameBorder="0"
      style={{ border: '0', width:"98%", marginLeft:"auto", marginRight:"auto", alignSelf:"center" }}
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
    ></iframe>
  );
};

export default GoogleMapEmbed;
