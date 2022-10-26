import { analytics } from "ionicons/icons";
import { useEffect, useState } from "react";
import { Coordinates } from "../interfaces/interface.ds";

export interface ApiProps {
    getCurrentWeather: () => any,
    coordinates: Coordinates | null,
    loading: boolean
}

export const useApiModule = () => {

    const [loading, setLoading] = useState<boolean>(false); 
    const [coordinates, setCoordinates] = useState<Coordinates | null>(null); 
    const apiHost = process.env.ApiHost; 

    useEffect(() => {
        const interval = setInterval(() => {

            console.log('Time interval executed'); 
            getUserLocation();
            if (coordinates) {
                getCurrentWeather(); 
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [])

    const getCurrentWeather = async () => {
        try {

            const data = {location: coordinates, fields: 'precipitation'}

            const response = await fetch(apiHost + '/currentWeather',{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  'Content-Type': 'application/json'
                },
            });

            if (response){
                const data = response.json()
                console.log(data); 
            }
        } catch (e) {
            console.log(e); 
        }
    }

    const getUserLocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.watchPosition(pos => {
                setCoordinates({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                }); 
            }, err => {
                console.log(err); 
            })
        } else {
            console.log('Not available');
        }
    }


    const api: ApiProps = {
        coordinates,
        getCurrentWeather,
        loading

    }

    return api; 

}

export default useApiModule;