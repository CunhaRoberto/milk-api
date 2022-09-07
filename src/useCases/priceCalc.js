
export default {
  execute: async (volume, month, distance) => {
    const priceBase = month <= 6 ? 1.8 : 1.95
    const costBase = distance <= 50 ? 0.05 : 0.06
    const finalPricePaid = (((volume * priceBase) - (costBase * distance) ))
    return {
      priceBase,
      costBase,
      finalPricePaid: finalPricePaid.toFixed(2),     
    }
  }
}
