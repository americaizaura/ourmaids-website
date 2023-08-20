defmodule Ocstudios.ContactoTest do
  use Ocstudios.DataCase

  alias Ocstudios.Contacto

  describe "mails" do
    alias Ocstudios.Contacto.Mail

    import Ocstudios.ContactoFixtures

    @invalid_attrs %{contenido: nil, correo: nil, nombre: nil}

    test "list_mails/0 returns all mails" do
      mail = mail_fixture()
      assert Contacto.list_mails() == [mail]
    end

    test "get_mail!/1 returns the mail with given id" do
      mail = mail_fixture()
      assert Contacto.get_mail!(mail.id) == mail
    end

    test "create_mail/1 with valid data creates a mail" do
      valid_attrs = %{contenido: "some contenido", correo: "some correo", nombre: "some nombre"}

      assert {:ok, %Mail{} = mail} = Contacto.create_mail(valid_attrs)
      assert mail.contenido == "some contenido"
      assert mail.correo == "some correo"
      assert mail.nombre == "some nombre"
    end

    test "create_mail/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Contacto.create_mail(@invalid_attrs)
    end

    test "update_mail/2 with valid data updates the mail" do
      mail = mail_fixture()
      update_attrs = %{contenido: "some updated contenido", correo: "some updated correo", nombre: "some updated nombre"}

      assert {:ok, %Mail{} = mail} = Contacto.update_mail(mail, update_attrs)
      assert mail.contenido == "some updated contenido"
      assert mail.correo == "some updated correo"
      assert mail.nombre == "some updated nombre"
    end

    test "update_mail/2 with invalid data returns error changeset" do
      mail = mail_fixture()
      assert {:error, %Ecto.Changeset{}} = Contacto.update_mail(mail, @invalid_attrs)
      assert mail == Contacto.get_mail!(mail.id)
    end

    test "delete_mail/1 deletes the mail" do
      mail = mail_fixture()
      assert {:ok, %Mail{}} = Contacto.delete_mail(mail)
      assert_raise Ecto.NoResultsError, fn -> Contacto.get_mail!(mail.id) end
    end

    test "change_mail/1 returns a mail changeset" do
      mail = mail_fixture()
      assert %Ecto.Changeset{} = Contacto.change_mail(mail)
    end
  end
end
