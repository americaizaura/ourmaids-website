defmodule OcstudiosWeb.MailController do
  use OcstudiosWeb, :controller
  import Ocstudios.ContactMail
  import Ocstudios.RemoteIp

  # alias Ocstudios.Contacto
  # alias Ocstudios.Contacto.Mail


  def create(conn, email) do
    # IO.inspect(getIp(conn))
    # IO.inspect(email)


    # IO.inspect(email["token"])
    if GoogleRecaptcha.verify(email["token"], getIp(conn)) do
      with {:ok} <- contact_email(email) do
       conn
       |> put_status(:created)
       |> put_resp_header("location", Routes.mail_path(conn, :show, ""))
       |> render("show.json", mail: :enviado)
      end
    end

  end

end
