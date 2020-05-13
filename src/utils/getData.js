import { AirQualitToken } from '../assets/js/AQToken';

const getData = async ( country = null ) => {
    let API = "https://api.waqi.info/search/?token=" + AirQualitToken + "&keyword=" + country ;

    try {
        if( country != null ){
            const response = await fetch( API );
            const data = await response.json();

            let aqi = Math.round( await getAQI( data.data ) );            

            let dataCountry = {
                aqi,
            }
            console.log(data.data)
            return dataCountry;
        }
    } catch ( error ) {
        console.error( 'Fetch Error: ', error )
    }
}

const getAQI = async( data ) => {

    let aqi = 0;

    for(let index = 0; index < data.length; index++ ){
        var element = data[index];
        aqi = aqi + parseInt(element.aqi) / data.length;
    }

    return aqi
}



export default getData;