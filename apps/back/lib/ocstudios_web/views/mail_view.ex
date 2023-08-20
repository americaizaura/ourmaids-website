defmodule OcstudiosWeb.MailView do
  use OcstudiosWeb, :view
  alias OcstudiosWeb.MailView


  def render("show.json", %{mail: status}) do
    %{data: render_one(status, MailView, "mail.json")}
  end

  def render("mail.json", %{mail: status}) do
    %{
      estatus: status,
    }
  end
end
