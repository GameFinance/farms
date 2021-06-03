import nfts from 'config/constants/nfts'

const getNftFromVariationId = (id: number) => {
  const nft = nfts.find((f) => {
    return f.variationId === id
  })
  return nft
}

export default getNftFromVariationId
