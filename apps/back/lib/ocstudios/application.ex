defmodule Ocstudios.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      OcstudiosWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: Ocstudios.PubSub},
      # Start the Endpoint (http/https)
      OcstudiosWeb.Endpoint
      # Start a worker by calling: Ocstudios.Worker.start_link(arg)
      # {Ocstudios.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Ocstudios.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    OcstudiosWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
