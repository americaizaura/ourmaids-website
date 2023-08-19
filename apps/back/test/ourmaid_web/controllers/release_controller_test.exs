defmodule OurmaidWeb.ReleaseControllerTest do
  use OurmaidWeb.ConnCase

  import Ourmaid.PressFixtures

  alias Ourmaid.Press.Release

  @create_attrs %{
    content: "some content",
    date: "some date",
    title: "some title"
  }
  @update_attrs %{
    content: "some updated content",
    date: "some updated date",
    title: "some updated title"
  }
  @invalid_attrs %{content: nil, date: nil, title: nil}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all releases", %{conn: conn} do
      conn = get(conn, Routes.release_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create release" do
    test "renders release when data is valid", %{conn: conn} do
      conn = post(conn, Routes.release_path(conn, :create), release: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.release_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "content" => "some content",
               "date" => "some date",
               "title" => "some title"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.release_path(conn, :create), release: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update release" do
    setup [:create_release]

    test "renders release when data is valid", %{conn: conn, release: %Release{id: id} = release} do
      conn = put(conn, Routes.release_path(conn, :update, release), release: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.release_path(conn, :show, id))

      assert %{
               "id" => ^id,
               "content" => "some updated content",
               "date" => "some updated date",
               "title" => "some updated title"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, release: release} do
      conn = put(conn, Routes.release_path(conn, :update, release), release: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete release" do
    setup [:create_release]

    test "deletes chosen release", %{conn: conn, release: release} do
      conn = delete(conn, Routes.release_path(conn, :delete, release))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.release_path(conn, :show, release))
      end
    end
  end

  defp create_release(_) do
    release = release_fixture()
    %{release: release}
  end
end
