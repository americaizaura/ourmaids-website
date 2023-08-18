FROM bitwalker/alpine-elixir-phoenix:latest

ARG PHX_HOST=api.ocstudios.mx
ENV PHX_HOST=${PHX_HOST}
ARG SECRET_KEY_BASE=
ENV SECRET_KEY_BASE=${SECRET_KEY_BASE}
ARG SMTP_PASSWORD=
ENV SMTP_PASSWORD=${SMTP_PASSWORD}
ARG PUBLIC_CAPTCHA=
ARG PUBLIC_CAPTCHA=${PUBLIC_CAPTCHA}
ARG PRIVATE_CAPTCHA=
ARG PRIVATE_CAPTCHA=${PRIVATE_CAPTCHA}
ARG SMTP_USERNAME=
ENV SMTP_USERNAME=${SMTP_USERNAME}

# Set exposed ports
EXPOSE 4000
ENV PORT=4000 MIX_ENV=prod

# Cache elixir deps
COPY ./apps/back/mix.exs ./apps/back/mix.lock ./
RUN mix do deps.get, deps.compile

COPY ./apps/back .
# Run frontend build, compile, and digest assets
RUN mix do compile, assets.deploy

RUN chmod 777 ./_build

CMD ["mix", "phx.server"]