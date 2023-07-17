class Utils {
    generateRandomString(length: number, isUpperCase?: string): string {
        let chars = 'abcdefghijklmnopqrstuvwxyz'
        if (isUpperCase) {
            chars = chars.toUpperCase()
        }
        let result = ''
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        return result
    }

    generateRandomEmail(): string {
        const validCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const emailLength = Math.floor(Math.random() * 10) + 5;
        let email = '';
        for (let i = 0; i < emailLength; i++) {
            const randomIndex = Math.floor(Math.random() * validCharacters.length);
            email += validCharacters[randomIndex];
        }
        email += '@';
        const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'example.com'];
        const randomDomainIndex = Math.floor(Math.random() * domains.length);
        email += domains[randomDomainIndex];
        return email;
    }

    generateBigNumber(n: number): string {
        const add = 1;
        let max = 12 - add; // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.
        if (n > max) {
            return this.generateBigNumber(max) + this.generateBigNumber(n - max);
        }
        max = Math.pow(10, n + add);
        const min = max / 10; // Math.pow(10, n) basically
        const number = Math.floor(Math.random() * (max - min + 1)) + min;
        return ('' + number).substring(add).toString();
    }
}

export const utils = new Utils();

