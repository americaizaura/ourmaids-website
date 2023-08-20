defmodule OurmaidsWeb.MailController do
  use OurmaidsWeb, :controller
  import Ourmaids.ContactMail
  import Ocstudios.RemoteIp

  def create(conn, email) do
    if GoogleRecaptcha.verify(email["token"], getIp(conn)) do
      with {:ok, response} <- contact_email(email) |> Ourmaids.Mailer.deliver(response: true) do
        conn
        |> put_status(:created)
        |> render(:show, response: response)
      end
    end

    conn
  end
end
