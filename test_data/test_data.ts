// test-data/LoginCredentials.ts

export const LoginCredentials = {
    valid: {
        email: 'abc123@gmail.com',
        password: '200126@Dpw',
    },
    invalid: {
        emailFormat: 'abc123gmail.com',
        password: 'wrongpassword',
        email: 'abc12@gmail.com',
    },
    empty: {
        email: '',
        password: '',
    },
    unregistered: {
        email: '123abcd@gmail.com',
    },
};
