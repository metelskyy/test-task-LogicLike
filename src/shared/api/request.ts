import axios from 'axios';
import { BASE_API_URL } from '../constants/env';

export const request = axios.create({ baseURL: BASE_API_URL });
