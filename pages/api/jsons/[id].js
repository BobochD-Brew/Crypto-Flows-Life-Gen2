// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { id } = req.query
  res.status(200).json({
    "name": "Flow Life #"+id+"",
    "description": "Flow Life #"+id+" \n by @bobochdbrew",
    "animation_url": "https://bobochd-brew.github.io/Crypto-Flows-Life-Gen2/index.html?id="+id+"",
    "image": "https://bobochd-brew.github.io/Crypto-Flows-Life-Gen2/0.png",
    "creator": "Boboch D. Brew",
    })
}