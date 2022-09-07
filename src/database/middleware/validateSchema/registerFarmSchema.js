const validateFarmRegister = {
  type: "object",
  properties: {
    codUser: { type: "number" },
    name: { type: "string" },
    city: { type: "string" },
    state: { 
      type: "string",
      minLength: 2,
      maxLength: 2
      
  },
    kmDistanceDelivery: { 
      type: "number",
      minimum: 1
    },
  },
  required: ["codUser", "name", "city", "state", "kmDistanceDelivery"],
  additionalProperties: false,
};

export default validateFarmRegister;
