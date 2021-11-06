import axios from "axios";

export const BackEnd_URL = 'https://guardian-discord-bot-backend.herokuapp.com';
export const FrontEnd_URL = 'https://guardian-discord-bot-frontend.herokuapp.com' 
export const Name = 'Vexer';

export function getAuth() {
    return axios.get(`${BackEnd_URL}/api/auth/`, { withCredentials: true })
}

export function getGuilds() {
    return axios.get(`${BackEnd_URL}/api/discord/guilds`, {withCredentials: true })
}
