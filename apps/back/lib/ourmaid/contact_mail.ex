defmodule Ourmaid.ContactMail do
  import Bamboo.Email
  import OurmaidWeb.Templates.Mail.MailTemplate

  def contact_email(%{"data" => email}) do
    new_email(
      to: [{"Contact", "diegoxx61@gmail.com"}, {"Contact", "alexishs451@gmail.com"}],
      from: {"Contact from Ourmaids", "noreply@ourmaids.com"},
      subject: "Booking from #{email["name"]}",
      html_body: template(email)
    )
  end
end
