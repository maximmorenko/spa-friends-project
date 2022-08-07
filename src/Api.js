import { BASE_URL } from "./config";

const getAllPeople = async () => {
    const response = await fetch(BASE_URL);
    return await response.json();
}
export { getAllPeople };
