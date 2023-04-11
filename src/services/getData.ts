export async function getData(){
    try {
        const data = await fetch('https://nekos.best/api/v2/hug?amount=5').then(res => res.json());
        console.log(data);
        return data.results;
    } catch (error) {
        console.error(error);
    }
}