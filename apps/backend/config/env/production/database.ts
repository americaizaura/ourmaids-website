import { parseUri } from 'mysql-parse';

export default ({ env }) => {
    try {
        const { host, port, database, user, password } = parseUri(env('DATABASE_URL'));

        return {
            connection: {
                client: 'mysql2',
                connection: {
                    host,
                    port,
                    database,
                    user,
                    password,
                    ssl: env('DATABASE_CA')
                        ? {
                              ca: env('DATABASE_CA'),
                          }
                        : false,
                },
                debug: false,
            },
        };
    } catch (e) {
        throw new Error(`
        Database ENV = ${env('DATABASE_URL')}
        All Envs = ${JSON.stringify(process.env)}
        `);
    }
};