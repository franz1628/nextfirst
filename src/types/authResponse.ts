class AuthResponse {
    statusCode: number;
    data: {
        access_token: string;
    };
    message: string;
    url: string;

    constructor(statusCode: number, data: { access_token: string }, message: string, url: string) {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.url = url;
    }
}