import Milk from "../../../models/milk.js"
import query from '../../query/queryPriceMilkYearProduction.cjs'

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
        
        let resultTotal = [] 
        for (let i = 0; i < total.length; i++) {
         resultTotal.push(
          {
            totalProduction: (total[i].sumMilk).toFixed(2),
            totalPrice: (total[i].sumValue).toFixed(2),
            priceLiterMilk: (total[i].sumValue / total[i].sumMilk).toFixed(2),
            priceLiterMilkBr: (total[i].sumValue / total[i].sumMilk).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }), 
            priceLiterMilkUs: (total[i].sumValue / total[i].sumMilk).toLocaleString('en-US', { style: 'currency', currency: 'USD' }) ,
            month: total[i]._id
          }
         )          
        }
        
      return resultTotal
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
