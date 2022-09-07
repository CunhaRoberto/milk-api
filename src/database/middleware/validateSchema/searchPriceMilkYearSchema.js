const validatePriceMilkYearSearch = {
  type: "object",
  properties: {
    codUser: { 
      type: "number"     
    },
    year: { 
      type: "number",
      minimum: 1900,
      maximum: new Date().getFullYear()          
    },  
   
  },
  required: ["codUser", "year"],
  additionalProperties: false,
};
export default validatePriceMilkYearSearch;

