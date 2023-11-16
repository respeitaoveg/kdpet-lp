// @ts-ignore
import SibApiV3Sdk from "sib-api-v3-sdk";

export default defineEventHandler(async (event) => {
  const {name, email}: {name: string, email: string} = await readBody(event)

  let defaultClient = SibApiV3Sdk.ApiClient.instance;

  let apiKey = defaultClient.authentications["api-key"];
  apiKey.apiKey = process.env.brevo

  let apiInstance = new SibApiV3Sdk.ContactsApi();
  let createContact = new SibApiV3Sdk.CreateContact();

  createContact.email = email;
  createContact.attributes = {
    NOME: name,
  };

  createContact.listIds = [2];

  apiInstance.createContact(createContact).then(
    function (data) {
      console.log(
        "API called successfully. Returned data: " + JSON.stringify(data)
      );
      return {
        message: "Sucesso!",
      };
    },
    function (error) {
      const er = JSON.parse(error.response.text);

      return {
        message: "Erro!",
      };
    }
  );

  return {
    message: "Erro!",
  };
});
