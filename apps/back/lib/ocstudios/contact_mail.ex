defmodule Ocstudios.ContactMail do

  import Swoosh.Email
  import OcstudiosWeb.Templates.MailTemplate

  def contact_email(email) do

    if ( new()
    |> to([{"Contacto", "diegoxx61@gmail.com"}])
    |> from({"Contacto de la página web", "noreply@ourmaids.com"})
    |> subject("Contacto de la pagina web OCS.")
    |> html_body(template(email))
    |> Ocstudios.Mailer.deliver()) do
       {:ok}
     else
       {:error}
     end
   end
end
