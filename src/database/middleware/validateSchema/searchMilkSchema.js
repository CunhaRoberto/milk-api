const validateMilkSearch = {
  type: "object",
  properties: {
      codFarm: {
        type: "number"
      },
      month: { 
          minimum: 1,
          maximum: 12
      }, 
      year: { 
          type: "number",
          minimum: 1900,
          maximum: new Date().getFullYear()  
      }, 
   
    },
    required: ["codFarm", "month", "year"],
  additionalProperties: false,
};
export default validateMilkSearch;

