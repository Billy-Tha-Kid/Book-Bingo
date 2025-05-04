const prod_url = process.env.REACT_APP_PROD_URL;

const production = {
    url: prod_url
}

const development = {
    url: 'http://localhost:3000'
}

export const config = process.env.NODE_ENV === 'development' ? development : production
