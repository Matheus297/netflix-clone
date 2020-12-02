const API_KEY = 'b623a9f50ec5e4cab1bd13fa3e96a75e';
const API_URL = 'https://api.themoviedb.org/3';




const loadFilms = async(endpoint) => {
    const response = await fetch(`${API_URL}${endpoint}`);
    const json = response.json();
    return json;
}


export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await loadFilms(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await loadFilms(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'top',
                title: 'Em alta',
                items: await loadFilms(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await loadFilms(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await loadFilms(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await loadFilms(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await loadFilms(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await loadFilms(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    },
    getMovieInfo: async(movieId,type) => {
        let info = {};

        if(movieId){
            switch(type){
                case 'movie':
                    info = await loadFilms(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                case 'tv':
                    info = await loadFilms(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                break;
                default:
                    return info = null;
            }
        }

        return info;
    },
    getInfo: async() => {
        return [
            {
                id: 1,
                info: 'Idioma e legendas'
            },
            {
                id: 2,
                info: 'Imprensa'
            },
            {
                id: 3,
                info: 'Privacidade'
            },
            {
                id: 4,
                info: 'Entre em contato'
            },
            {
                id: 5,
                info: 'Audiodescrição'
            },
            {
                id: 6,
                info: 'Relações com investidores'
            },
            {
                id: 7,
                info: 'Avisos legais'
            },
            {
                id: 8,
                info: 'Centro de ajuda'
            },
            {
                id: 9,
                info: 'Carreiras'
            },
            {
                id: 10,
                info: 'Preferências de cookies'
            },
            {
                id: 11,
                info: 'Cartão pré-pago'
            },
            {
                id: 12,
                info: 'Termos de uso'
            },
            {
                id: 13,
                info: 'Informações corporativas'
            },
         
            
        ]
    }
}