defmodule Ourmaid.Repo.Migrations.CreateReleases do
  use Ecto.Migration

  def change do
    create table(:releases) do
      add :title, :string
      add :content, :longtext
      add :date, :string

      timestamps()
    end
  end
end
