export const getGifs = async ( anime ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( anime ) }&limit=6&api_key=R3qyP8eXl0ZcGw62UKRbf2xsFmQe7pmw`;
    const resp = await fetch ( url );
    const { data:images }  = await resp.json();
        
    if ( !images ) {
        return [];
    }
    
    const gifs = images.map ( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs ;
}