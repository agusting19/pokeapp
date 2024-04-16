import swaggerJSDoc from "swagger-jsdoc"

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "PokeApi",
      version: "1.0.0",
      description:
        "Simple REST API to fetch Pokémon data from pokeapi.co made with Express.js and TypeScript.",
    },
  },
  apis: ["src/controllers/*.ts"],
}

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec
