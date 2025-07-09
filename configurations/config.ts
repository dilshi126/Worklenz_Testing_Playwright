// config/config.ts
import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
    baseURL: process.env.BASE_URL || 'https://react.worklenz.com/auth/login',
    credentials: {
        email: process.env.EMAIL || '',
        password: process.env.PASSWORD || '',
    },
};
