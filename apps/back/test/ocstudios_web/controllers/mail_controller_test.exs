defmodule OcstudiosWeb.MailControllerTest do
  use OcstudiosWeb.ConnCase

  import Ocstudios.ContactoFixtures

  alias Ocstudios.Contacto.Mail

  @create_attrs %{
    contenido: "some contenido",
    correo: "some correo",
    nombre: "some nombre"
  }
  @update_attrs %{
    contenido: "some updated contenido",
    correo: "some updated correo",
    nombre: "some updated nombre"
  }
  @invalid_attrs %{contenido: nil, correo: nil, nombre: nil}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all mails", %{conn: conn} do
      conn = get(conn, Routes.mail_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create mail" do
    test "renders mail when data is valid", %{conn: conn} do
      conn = post(conn, Routes.mail_path(conn, :create), mail: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.mail_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "contenido" => "some contenido",
               "correo" => "some correo",
               "nombre" => "some nombre"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.mail_path(conn, :create), mail: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update mail" do
    setup [:create_mail]

    test "renders mail when data is valid", %{conn: conn, mail: %Mail{id: id} = mail} do
      conn = put(conn, Routes.mail_path(conn, :update, mail), mail: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.mail_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "contenido" => "some updated contenido",
               "correo" => "some updated correo",
               "nombre" => "some updated nombre"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, mail: mail} do
      conn = put(conn, Routes.mail_path(conn, :update, mail), mail: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete mail" do
    setup [:create_mail]

    test "deletes chosen mail", %{conn: conn, mail: mail} do
      conn = delete(conn, Routes.mail_path(conn, :delete, mail))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.mail_path(conn, :show, mail))
      end
    end
  end

  defp create_mail(_) do
    mail = mail_fixture()
    %{mail: mail}
  end
end
