export default {
  execute: async (milk) => {
    return [
      [ { $match: { codUser: milk.codUser } },
        {
        $match: {
            $and: [{
            "dateDelivery": {
                $gte: new Date(milk.year + "-01-01T00:00:00.000")
            }
        }, {
            "dateDelivery": {
                $lte: new Date(milk.year + "-12-31T23:59:59.000")
            }
        }]
        }
    }, {
        $group: {
            _id: {
                $substr: [
                    "$dateDelivery",
                    5,
                    2
                ]
            },
            "dateDelivery": {
                $sum: 1
            },
            sumMilk: { $sum: '$literMilk' },
            sumValue: { $sum: '$finalPricePaid'}
        }
    },
    {
        $sort: {
            _id: 1
        }
    }
    ]
    ]
  }
}
