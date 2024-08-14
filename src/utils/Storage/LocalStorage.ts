export default class LocalStorage{
    static getObject(key: string){
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : {};
    }

    static saveObject(key: string, object: any){
        localStorage.setItem(key, JSON.stringify(object));
    }
}