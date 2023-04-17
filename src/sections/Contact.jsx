import React from 'react'

const Contact = () => {
  const style = [
    {
      "featureType": "all",
      "elementType": "all",
      "stylers": [
        {
          "color": "#380561"
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#660066"
        },
        {
          "saturation": "-4"
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "saturation": "0"
        },
        {
          "color": "#b82897"
        },
        {
          "lightness": "0"
        },
        {
          "gamma": "1"
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "color": "#3c003c"
        },
        {
          "lightness": "0"
        },
        {
          "weight": "0.80"
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#660066"
        },
        {
          "lightness": "0"
        },
        {
          "gamma": "1"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 17
        },
        {
          "weight": 1.2
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
        {
          "color": "#a71212"
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#660066"
        },
        {
          "lightness": "0"
        },
        {
          "gamma": "1"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3f003f"
        },
        {
          "lightness": "0"
        },
        {
          "gamma": "1"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 17
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 29
        },
        {
          "weight": 0.2
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 18
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 16
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4d004d"
        },
        {
          "lightness": "0"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#320632"
        },
        {
          "lightness": "0"
        }
      ]
    }
  ];

  return (
    <div className='flex flex-row w-full h-screen bg-black/90 items-center'>
      <div className='flex flex-col pl-48 w-1/2'>
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 text-6xl font-bold w-fit'>Contact Me</h1>
        <p className='w-full text-white w-full text-lg leading-loose ml-2'>
          Ready to build your dream project?
        </p>
        <form className='w-full flex flex-col gap-3 mt-5 justify-center items-start'>
          <div className='flex flex-row gap-3 w-2/3'>
            <input type="text" className='w-full px-3 py-2 bg-transparent border border-white rounded-xl text-white' placeholder='Full Name' />
            <input type="text" className='w-full px-3 py-2 bg-transparent border border-white rounded-xl text-white' placeholder='Email Address'/>
          </div>
          <div className='w-2/3 '>
            <textarea type="text" className='w-full h-40 px-3 py-2 bg-transparent border border-white rounded-xl text-white' placeholder='Message'></textarea>
          </div>
          <buttom type='submit' className='bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 text-black text-lg px-3 py-2 w-1/6 text-center rounded-lg cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-indigo-600/30'>Submit</buttom>
        </form>
      </div>
      <div className='w-1/2 h-screen bg-rose-100'>
        <iframe className='w-full h-screen' style={{ style }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114018.46213880564!2d-80.19925084648446!3d26.74192066317234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d5ccb595adc1%3A0x15efc7b51fe16bde!2sWest%20Palm%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1681157390472!5m2!1sen!2sus"></iframe>
      </div>
    </div>
  )
}

export default Contact