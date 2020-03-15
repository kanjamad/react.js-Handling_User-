import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID Uieq933-Mc81rfaW5VBiwT0MTevH1g7Dt7E7Jd9Wqi4'
    }
});