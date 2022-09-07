import Milk from "../../../models/milk.js";
import query from '../../query/queryPriceMilkMonthProduction.js'

export default {
  execute: async (milk) => {
    try{

      const searchCodUser = await Milk.find({ codUser: milk.codUser })

      if (searchCodUser.length < 1) {
        return { 
          error: "User does not exists",
          status: 404
        }
      }

      const resultQuery = await query.execute(milk)
      const total = await Milk.aggregate(resultQuery)
    
      const result = { 
        totalProduction: (total[0].sumMilk).toFixed(2),
        totalPrice: (total[0].sumValue).toFixed(2),
        priceLiterMilk: (total[0].sumValue / total[0].sumMilk).toFixed(2),
        priceLiterMilkBr: (total[0].sumValue / total[0].sumMilk).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }), 
        priceLiterMilkUs: (total[0].sumValue / total[0].sumMilk).toLocaleString('en-US', { style: 'currency', currency: 'USD' }) 
      }

      return result
    } catch (error) {
      let description = error.message
      return { 
        error: "Search failed", 
        description,
        status: 500
      }
      
    }
  }
}
