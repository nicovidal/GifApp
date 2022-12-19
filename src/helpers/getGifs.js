export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=8UZdtNOgI6bpA04VC9L7rSUUGsSQ9bNH&q=${category}&limit=10`
    const resp = await fetch(url);
    //destructurar la data para ver lo que trae
    //data=[] para asegurarse que siempre tendra datos
    const { data } = await resp.json();

    console.log(data)

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    console.log(gifs);
    return gifs;

}