defmodule Ocstudios.ContactoFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Ocstudios.Contacto` context.
  """

  @doc """
  Generate a mail.
  """
  def mail_fixture(attrs \\ %{}) do
    {:ok, mail} =
      attrs
      |> Enum.into(%{
        contenido: "some contenido",
        correo: "some correo",
        nombre: "some nombre"
      })
      |> Ocstudios.Contacto.create_mail()

    mail
  end
end
