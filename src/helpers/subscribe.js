export function subscribe({ failed, done, email, firstname, lastname }) {
  fetch(
    `${
      process.env.PROXY_SERVER ?? "https://obscure-brook-72299.herokuapp.com/"
    }https://emailoctopus.com/api/1.5/lists/a884fe8f-37f2-11ec-96e5-06b4694bee2a/contacts`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        api_key:
          process.env.EMAIL_OCTOPUS_API_KEY ??
          "0006e14f-1c9a-44c7-a546-fedf561ee67b",
        email_address: email,
        fields: {
          FirstName: firstname,
          LastName: lastname,
        },
        status: "SUBSCRIBED",
      }),
    }
  )
    .then((response) => {
      done();
    })
    .catch((error) => {
      //@Todo Sentry
      console.log(error);
      failed();
    });
}
