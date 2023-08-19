# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Ourmaid.Repo.insert!(%Ourmaid.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Ourmaid.Accounts

# Create a user

Accounts.register_user(%{
  username: "admin",
  password: "j3gWbT8ElUWLtd{a",
})
IO.inspect(Accounts.register_user(%{
  username: "admin",
  password: "j3gWbT8ElUWLtd{a",
  inserted_at: "2023-04-19 17:25:40",
  updated_at: "2023-04-19 17:25:40"
}))
