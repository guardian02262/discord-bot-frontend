import axios from "axios";

export const BackEnd_URL = 'http://localhost:1337';
export const FrontEnd_URL = 'http://localhost:3000' 
export const Name = 'Vexer';

export function getAuth() {
    return axios.get(`${BackEnd_URL}/api/auth/`, { withCredentials: true })
}

export function getGuilds() {
    return axios.get(`${BackEnd_URL}/api/discord/guilds`, {withCredentials: true })
}
