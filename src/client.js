import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 's7xmhal5',
    dataset: 'production',
    apiVersion: '2022-11-29',
    useCdn: true,
    token: 'skI4MJJ6lKrPlazEXNXL7rsO0QWejukNCpj8amlMOk7jWwOKN6GVPi8g5fhAfzRzBjLwnUiR77V5QIH9e6T7kkI6RnSiJLtDczNRqcDaBDTw9l0rXNjXlmXJwVnqURLwcIx8onQDoAFHz81WROBL02rhLsKnPgmNfbwmVpw5JR2pGrX9nPov',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);