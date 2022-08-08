export const BASE_URL = 'https://randomuser.me/api/';

export const ALL_PEOPLE = BASE_URL + '?results=20&inc=name,id,dob,gender,picture,location';

export const searchByName = (name) => BASE_URL + 'person/' + name;
