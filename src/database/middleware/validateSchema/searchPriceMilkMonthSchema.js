const validatePriceMilkMonthSearch = {
  type: "object",
  properties: {
    codUser: { type: "number" },
    month: { 
      type: "number",
      minimum: 1,
      maximum: 12
    
    }, 
    year: { 
      type: "number" ,
      minimum: 1900,
      maximum: new Date().getFullYear()    
    },  
   
  },
  required: ["codUser", "month", "year"],
  additionalProperties: false,
};
export default validatePriceMilkMonthSearch;

