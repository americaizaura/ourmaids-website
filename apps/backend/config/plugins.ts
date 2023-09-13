export default ({ env }) => ({
    graphql: {
        config: {
            endpoint: "/graphql",
            shadowCRUD: true,
            playgroundAlways: true,
            depthLimit: 14,
            amountLimit: 100,
            apolloServer: {
                tracing: false,
                introspection: true,
            },
        },
    },
    "users-permissions": {
        config: {
            jwtSecret: env('USER_JWT_SECRET'),
        }
    },
    email: {
        config: {
            provider: "nodemailer",
            providerOptions: {
                host: env("SMTP_HOST", "smtp.example.com"),
                port: env("SMTP_PORT", 587),
                auth: {
                    user: env("SMTP_USERNAME"),
                    pass: env("SMTP_PASSWORD"),
                },
                ignoreTLS: true,
            },
            settings: {
                defaultFrom: env("SMTP_USERNAME"),
                defaultReplyTo: env("SMTP_REPLAY_TO"),
            },
        },
    },
});