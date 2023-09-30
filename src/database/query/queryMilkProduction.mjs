export default {
  execute: async (milk) => {
    return [
      { $match: { codFarm: milk.codFarm } },
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
            sum: { $sum: '$literMilk' },
            count: { $sum: 1 }
        }
      }
    ]
  }
}
