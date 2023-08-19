defmodule OurmaidWeb.MailView do
  use OurmaidWeb, :view
  alias OurmaidWeb.MailView


  def render("show.json", %{mail: status}) do
    %{data: render_one(status, MailView, "mail.json")}
  end

  def render("mail.json", %{response: response}) do
    %{
      response: response,
    }
  end
end
