defmodule Ourmaid.Repo do
  use Ecto.Repo,
    otp_app: :ourmaid,
    adapter: Ecto.Adapters.MyXQL
end
