// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { id } = req.query
  let id2 = id.substring(1)
  res.status(200).json({
    "name": "Flow Life #"+id2+"",
    "description": "Flow Life #"+id2+" \n by @bobochdbrew",
    "animation_url": "https://bobochd-brew.github.io/Crypto-Flows-Life-Gen2/index.html?id="+id2+"",
    "image": "https://bobochd-brew.github.io/Crypto-Flows-Life-Gen2/0.png",
    "creator": "Boboch D. Brew",
    })
}