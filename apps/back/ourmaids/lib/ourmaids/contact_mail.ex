defmodule Ourmaids.ContactMail do
  import Swoosh.Email
  import OurmaidsWeb.Components.Mail.MailTemplate

  defstruct [
    :name,
    :lastname,
    :phone,
    :datetime,
    :service,
    :payment,
    :address,
    :city,
    :state,
    :zipcode,
    :message
  ]

  def contact_email(%{"data" => email}) do
    new()
    |> to([{"Contact", "diegoxx61@gmail.com"}])
    |> from({"Contact from the franchise web", "noreply@ourmaids.com"})
    |> subject("Someone is looking for you.")
    |> html_body(template(email))
  end
end
