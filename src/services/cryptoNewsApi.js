import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '4cc42f02cdmsh7b8344a82562a64p1e8fe3jsn584d0492d6f7',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({ url , headers: cryptoNewsHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    
        })
    })
})
export const { useGetCryptoNewsQuery } = cryptoNewsApi