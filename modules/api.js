import { config } from "./config.js"

const BASE_URL = config.api_base_url
const API_KEY = config.api_key

export async function getPopularMovies(page = 1) {
    let data = []
    try {
        const response = await fetch(`${BASE_URL}/title`)
        const responseData = await response.json()
        data = responseData;
    }
    catch (error) {
        
    }
    return data
}