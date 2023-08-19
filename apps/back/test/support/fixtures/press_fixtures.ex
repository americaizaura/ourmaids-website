defmodule Ourmaid.PressFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Ourmaid.Press` context.
  """

  @doc """
  Generate a release.
  """
  def release_fixture(attrs \\ %{}) do
    {:ok, release} =
      attrs
      |> Enum.into(%{
        content: "some content",
        date: "some date",
        title: "some title"
      })
      |> Ourmaid.Press.create_release()

    release
  end
end
