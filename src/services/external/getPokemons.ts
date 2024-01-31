export const getPokemonsAPI = async (offset: number, limit: number) => {
  const requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };

  const finalEndpoint = `${process.env.URL_API_POKEMON}/v2/pokemon?offset=${offset}&limit=${limit}`

  return await fetch(
    finalEndpoint,
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("Error to get pokemons", error));
};

export const getPokemonByIdAPI = async(endpoint?: string | null, id?:string) => {
  const requestOptions: RequestInit = {
    method: "GET",
  };

  const finalEndpoint = endpoint ? endpoint : `${process.env.URL_API_POKEMON}/v2/pokemon/${id}`

  return await fetch(finalEndpoint,requestOptions)
    .then((response) => response.json())
    .then(data => data )
    .catch((error) => console.log("Error to get pokemon", error));
};

