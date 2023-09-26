export const getPokes = async () => {
    try {
        const pokes = await fetch("https://pokeapi.co/api/v2/pokemon/1").then(res => res.json());
        return pokes;
    } catch (error) {
        console.error(error);
    }
}