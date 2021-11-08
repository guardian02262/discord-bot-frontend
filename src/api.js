import axios from "axios";

export const BackEnd_URL = 'http://guardian-discord-bot-backend.herokuapp.com';
export const FrontEnd_URL = 'https://guardian-discord-bot-frontend.herokuapp.com' 
export const Name = 'Vexer';

export function getAuth() {
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    return axios.get(`${BackEnd_URL}/api/auth/`, { withCredentials: true })
}

export function getGuilds() {
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    return axios.get(`${BackEnd_URL}/api/discord/guilds`, {withCredentials: true })
}
