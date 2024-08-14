export default class Validations{
    static validateEmail(email: string){
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    static stongPassword(password: string){
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*)/
        return regex.test(password);
    }

    static required(str: string){
        return str.trim() !== '';
    }
}