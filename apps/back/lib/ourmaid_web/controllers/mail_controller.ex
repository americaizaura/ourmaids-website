defmodule OurmaidWeb.MailController do
  use OurmaidWeb, :controller
  import Ourmaid.ContactMail



  def create(conn, email) do
    with {:ok, email, response} = contact_email(email) |> Ourmaid.Mailer.deliver_now(response: true) do
      conn
      |> put_status(:created)
      |> render("mail.json", response: response)
    end
  end
end
