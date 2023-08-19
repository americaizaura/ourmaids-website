# This file is responsible for configuring your application
# and its dependencies with the aid of the Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
import Config

config :ourmaid,
  ecto_repos: [Ourmaid.Repo]

# Configures the endpoint
config :ourmaid, OurmaidWeb.Endpoint,
  url: [host: "localhost"],
  render_errors: [view: OurmaidWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: Ourmaid.PubSub,
  live_view: [signing_salt: "J/wOZFfo"]

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

# In your config/config.exs file
config :ourmaid, Ourmaid.Mailer,
  adapter: Bamboo.SMTPAdapter,
  hostname: "ourmaids.com",
  server: "smtp.ionos.mx",
  port: 587,
  # or {:system, "SMTP_USERNAME"}
  username: smtp_username,
  # or {:system, "SMTP_PASSWORD"}
  password: smtp_pass,
  # can be `:always` or `:never`
  tls: :if_available,
  # or {:system, "ALLOWED_TLS_VERSIONS"} w/ comma separated values (e.g. "tlsv1.1,tlsv1.2")
  allowed_tls_versions: [:"tlsv1.1", :"tlsv1.2"],
  tls_log_level: :error,
  # optional, can be `:verify_peer` or `:verify_none`
  tls_verify: :verify_peer,
  # can be `true`
  ssl: false,
  retries: 2,
  # can be `true`
  no_mx_lookups: false,
  auth: :if_available

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

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{config_env()}.exs"
