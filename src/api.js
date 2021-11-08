import axios from "axios";

export const BackEnd_URL = 'http://guardian-test-bot-backend.herokuapp.com/';
export const FrontEnd_URL = 'http://guardian-discord-bot-frontend.herokuapp.com' 
export const Name = 'Vexer';

export function getAuth() {
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    return axios.get(`${BackEnd_URL}/api/auth/`, { withCredentials: true })
}

export function getGuilds() {
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    return axios.get(`${BackEnd_URL}/api/discord/guilds`, { withCredentials: true })
}
