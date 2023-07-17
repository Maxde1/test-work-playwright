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
}

export const utils = new Utils();

