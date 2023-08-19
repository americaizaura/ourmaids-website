defmodule Ourmaids.ContactMail do
  import Swoosh.Email
  import OurmaidsWeb.Components.Mail.MailTemplate

  defstruct [
    :name,
    :lastname,
    :email,
    :phone,
    :datetime,
    :service,
    :duration,
    :payment,
    :address,
    :city,
    :state,
    :zipcode,
    :message
  ]

  def contact_email(%{"data" => email}) do
    new()
    |> to([{"Booking", "diegoxx61@gmail.com"}])
    |> from({"Contact from Ourmaids", "noreply@ourmaids.com"})
    |> subject("Booking from #{email["name"]} #{email["lastname"]}")
    |> html_body(template(email))
  end
end
