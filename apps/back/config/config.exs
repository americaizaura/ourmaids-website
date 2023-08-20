# This file is responsible for configuring your application
# and its dependencies with the aid of the Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
import Config

# Configures the endpoint
config :ocstudios, OcstudiosWeb.Endpoint,
  url: [host: "api.ocstudios.mx"],
  render_errors: [view: OcstudiosWeb.ErrorView, accepts: ~w(json), layout: false],
  pubsub_server: Ocstudios.PubSub,
  live_view: [signing_salt: "BbKS1uIi"]

# Configures the mailer
#
# By default it uses the "Local" adapter which stores the emails
# locally. You can see the emails in your browser, at "/dev/mailbox".
#
# For production it's recommended to configure a different adapter
# at the `config/runtime.exs`.
public_captcha =
  System.get_env("PUBLIC_CAPTCHA") ||
    raise """
    environment variable SMTP_PASSWORD is missing.
    """

secret_captcha =
  System.get_env("SECRET_CAPTCHA") ||
    raise """
    environment variable SMTP_PASSWORD is missing.
    """

smtp_pass =
  System.get_env("SMTP_PASSWORD") ||
    raise """
    environment variable SMTP_PASSWORD is missing.
    """

smtp_username =
  System.get_env("SMTP_USERNAME") ||
    raise """
    environment variable SMTP_USERNAME is missing.
    """

config :swoosh, :api_client, false

config :ourmaids, Ourmaids.Mailer,
  adapter: Swoosh.Adapters.SMTP,
  relay: "smtp.ionos.mx",
  username: smtp_username,
  password: smtp_pass,
  ssl: false,
  tls: false,
  auth: :always,
  port: 587,
  retries: 2,
  no_mx_lookups: false

# Swoosh API client is needed for adapters other than SMTP.

# Configure esbuild (the version is required)
config :esbuild,
  version: "0.14.29",
  default: [
    args:
      ~w(js/app.js --bundle --target=es2017 --outdir=../priv/static/assets --external:/fonts/* --external:/images/*),
    cd: Path.expand("../assets", __DIR__),
    env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
  ]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# ReCaptcha config
config :google_recaptcha,
  api_url: "https://www.google.com/recaptcha/api/siteverify",
  public_key: public_captcha,
  secret_key: secret_captcha,
  enabled: true

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{config_env()}.exs"
