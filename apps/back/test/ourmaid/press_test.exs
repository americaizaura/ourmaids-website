defmodule Ourmaid.PressTest do
  use Ourmaid.DataCase

  alias Ourmaid.Press

  describe "releases" do
    alias Ourmaid.Press.Release

    import Ourmaid.PressFixtures

    @invalid_attrs %{content: nil, date: nil, title: nil}

    test "list_releases/0 returns all releases" do
      release = release_fixture()
      assert Press.list_releases() == [release]
    end

    test "get_release!/1 returns the release with given id" do
      release = release_fixture()
      assert Press.get_release!(release.id) == release
    end

    test "create_release/1 with valid data creates a release" do
      valid_attrs = %{content: "some content", date: "some date", title: "some title"}

      assert {:ok, %Release{} = release} = Press.create_release(valid_attrs)
      assert release.content == "some content"
      assert release.date == "some date"
      assert release.title == "some title"
    end

    test "create_release/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Press.create_release(@invalid_attrs)
    end

    test "update_release/2 with valid data updates the release" do
      release = release_fixture()
      update_attrs = %{content: "some updated content", date: "some updated date", title: "some updated title"}

      assert {:ok, %Release{} = release} = Press.update_release(release, update_attrs)
      assert release.content == "some updated content"
      assert release.date == "some updated date"
      assert release.title == "some updated title"
    end

    test "update_release/2 with invalid data returns error changeset" do
      release = release_fixture()
      assert {:error, %Ecto.Changeset{}} = Press.update_release(release, @invalid_attrs)
      assert release == Press.get_release!(release.id)
    end

    test "delete_release/1 deletes the release" do
      release = release_fixture()
      assert {:ok, %Release{}} = Press.delete_release(release)
      assert_raise Ecto.NoResultsError, fn -> Press.get_release!(release.id) end
    end

    test "change_release/1 returns a release changeset" do
      release = release_fixture()
      assert %Ecto.Changeset{} = Press.change_release(release)
    end
  end
end
