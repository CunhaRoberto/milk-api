import Milk from "../../../models/milk.js";
import query from '../../query/queryMilkProduction.cjs'

export default {
  execute: async (milk) => {
      try{

      const resultQuery = await query.execute(milk)
      const total = await Milk.aggregate(resultQuery)
      if (total.length === 0) {
        return { 
          error: "Production does not exist",
          status: 404
         }
      }
      const day = new Date(milk.year, milk.month, 0)
    
      const result = { 
        totalProduction: total[0].sum, 
        totalRegister: total[0].count,
        average: (total[0].sum / day.getUTCDate()).toFixed(2)
      }
      return result
    }catch (error) {
      let description = error.message
      return { 
        error: "Search failed", 
        description,
        status: 500
      }
    }
  }
}
