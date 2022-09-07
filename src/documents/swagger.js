export default {
  swagger: "2.0",
  info: {
    title: "DesafioBovControl-Api",
    description: "Project Documentation - BovControl",
    version: "1.0.0",
  },
  host: process.env.API_URL_PRODUCTION,
  paths: {
    "/v1/user": {
      post: {
        summary: "Create user",
        tags: ["User"],
        description: "Create user",
        parameters: [
          {
            in: "body",
            name: "body",
            description: "description",
            require: "require",
            schema: {
              type: "object",
              properties: {
                name: {
                  type: "string",
                  require: true,
                  example: "João da Silva",
                },
                email: {
                  type: "string",
                  require: true,
                  example: "joaosilva@teste.com",
                },
              },
            },
          },
        ],
        responses: {
          201: {
            description: "User created successfully",
          },
          400: {
            description: "Bad Request",
          },
          404:{
            description: "Not found",
          }, 
          
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/v1/farm": {
      post: {
        summary: "Create farm",
        tags: ["Farm"],
        description: "Create farm",
        parameters: [
          {
            in: "body",
            name: "body",
            description: "description",
            require: "require",
            schema: {
              type: "object",
              properties: {
                codUser: {
                  type: "number",
                  require: true,
                  example: 102658,
                },
                name: {
                  type: "string",
                  require: true,
                  example: "Fazenda Santa Cruz",
                },
                city: {
                  type: "string",
                  require: true,
                  example: "Sorocaba",
                },
                state: {
                  type: "string",
                  require: true,
                  example: "SP",
                },
                kmDistanceDelivery: {
                  type: "number",
                  require: true,
                  example: 75.5,
                },
              },
            },
          },
        ],
        responses: {
          201: {
            description: "User created successfully",
          },
          400: {
            description: "Bad Request",
          },
          404:{
            description: "Not found",
          }, 
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },    
    "/v1/milk": {
      post: {
        summary: "Create milk production",
        tags: ["Production"],
        description: "Create milk production",
        parameters: [
          {
            in: "body",
            name: "body",
            description: "description",
            require: "require",
            schema: {
              type: "object",
              properties: {
                codFarm: {
                  type: "number",
                  require: true,
                  example: 102658,
                },
                literMilk: {
                  type: "number",
                  require: true,
                  example: 250,
                },
                dateDelivery: {
                  type: "string",
                  require: true,
                  example: "2022-08-31",
                },
              },
            },
          },
        ],
        responses: {
          201: {
            description: "Production created successfully",
          },
          400: {
            description: "Bad Request",
          },
          404:{
            description: "Not found",
          }, 
          500: {
            description: "Internal Server Error",
          },
        },
      },  
    }, 
    "/v1/milk/search": {
      post: {
        summary: "Search milk production",
        tags: ["Production"],
        description: "Search milk production",
        parameters: [
          {
            in: "body",
            name: "body",
            description: "description",
            require: "require",
            schema: {
              type: "object",
              properties: {
                codFarm: {
                  type: "number",
                  require: true,
                  example: 67901,
                },
                month: {
                  type: "number",
                  require: true,
                  example: 9,
                },
                year: {
                  type: "number",
                  require: true,
                  example: 2022,
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Production search successfully",
          },
          400: {
            description: "Bad Request",
          },
          404:{
            description: "Not found",
          }, 
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/v1/priceLiter/month": {
      post: {
        summary: "Search price by liter of milk/ month",
        tags: ["Cost"],
        description: "Search price by liter of milk/ month",
        parameters: [
          {
            in: "body",
            name: "body",
            description: "description",
            require: "require",
            schema: {
              type: "object",
              properties: {
                codUser: {
                  type: "number",
                  require: true,
                  example: 19354,
                },
                month: {
                  type: "number",
                  require: true,
                  example: 9,
                },
                year: {
                  type: "number",
                  require: true,
                  example: 2022,
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Production search successfully",
          },
          400: {
            description: "Bad Request",
          },
          404:{
            description: "Not found",
          }, 
          500: {
            description: "Internal Server Error",
          },
        },
      },
    },
    "/v1/priceLiter/year": {
      post: {
        summary: "Search price by liter of milk/ year",
        tags: ["Cost"],
        description: "Search price by liter of milk/ year",
        parameters: [
          {
            in: "body",
            name: "body",
            description: "description",
            require: "require",
            schema: {
              type: "object",
              properties: {
                codUser: {
                  type: "number",
                  require: true,
                  example: 19354,
                },
                year: {
                  type: "number",
                  require: true,
                  example: 2022,
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: "Production search successfully",
          },
          400: {
            description: "Bad Request",
          },
          404:{
            description: "Not found",
          }, 
          500: {
            description: "Internal Server Error",
          },
        },
      },
    }    
  },
};
