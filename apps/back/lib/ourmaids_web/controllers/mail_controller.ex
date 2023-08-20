defmodule OurmaidsWeb.MailController do
  use OurmaidsWeb, :controller
  import Ourmaids.ContactMail
  import Ocstudios.RemoteIp

  def create(conn, email) do
    with {:ok, response} <- contact_email(email) |> Ourmaids.Mailer.deliver(response: true) do
      render(conn, "show.json", response: response)
    end

    conn
  end
end
