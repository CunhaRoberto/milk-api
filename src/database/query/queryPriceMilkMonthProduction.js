export default {
  execute: async (milk) => {
    return [
      { $match: { codUser: milk.codUser } },
      {
        $match: {
          $and: [
              { dateDelivery: { $gte: new Date(milk.year, milk.month - 1, 1) } },
              { dateDelivery: { $lte: new Date(milk.year, milk.month, 0) } }]
        }
        }, 
        {
          $group: {
            _id: '',
            sumMilk: { $sum: '$literMilk' },
            sumValue: { $sum: '$finalPricePaid'},
            count: { $sum: 1 }
        }
      }
    ]
  }
}
