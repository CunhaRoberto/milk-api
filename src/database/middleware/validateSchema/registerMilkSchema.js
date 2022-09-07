const validateMilkRegister = {
  type: "object",
  properties: {
    codFarm: { 
      type: "number" 
    },
    literMilk: { 
      type: "number",
      minimum: 1
    },   
    dateDelivery: { 
      type: "string",
      format: 'date'
    }   
  },
  required: ["codFarm", "literMilk", "dateDelivery"],
  additionalProperties: false,
};

export default validateMilkRegister;

