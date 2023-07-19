declare module 'mysql-parse' {
    type UriData = {
        scheme: string;
        user: string;
        password: string;
        host: string;
        port: string;
        database: string;
    };

    export const buildMysqlParams: (uri: string) => string;
    export const parseUri: (uri: string) => UriData;
}