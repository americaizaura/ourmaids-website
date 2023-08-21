defmodule OurmaidsWeb.MailJSON do
  alias Ourmaids.ContactMail

  @doc """
  Renders a list of testers.
  """
  def index(%{mail: mails}) do
    %{data: for(mail <- mails, do: data(mail))}
  end

  @doc """
  Renders a single tester.
  """
  def show(%{response: response}) do
    %{response: response}
  end

  def response(%{response: response}) do
    %{response: response}
  end

  def error(%{response: response}) do
    %{response: response}
  end

  defp data(%ContactMail{} = mail) do
    %{
      name: mail.name,
      lastname: mail.lastname,
      phone: mail.phone,
      datetime: mail.datetime,
      service: mail.service,
      payment: mail.payment,
      address: mail.address,
      city: mail.city,
      state: mail.state,
      zipcode: mail.zipcode,
      mesaage: mail.message
    }
  end
end
