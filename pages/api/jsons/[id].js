// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { id } = req.query
  let id2 = id.split("-")[0];
  let id3 = id.split("-")[1];
  let id4 = id.split("-")[2];
  let bina = parseInt(id2).toString(2);
  let id5 = id.split("-")[3];
  bina = Array.apply(null, Array(id3-bina.length)).map((a) => "0").join("")+bina;
  res.status(200).json({
    "name": "Flow Life G2 #"+id4+"",
    "description": "Flow Life G2 #"+id4+" \n by @bobochdbrew",
    "animation_url": "https://bobochd-brew.github.io/Crypto-Flows-Life-Gen2/index.html?id="+bina+"",
    "image": "https://bobochd-brew.github.io/Crypto-Flows-Life-Gen2/"+id3+".png",
    "creator": "Boboch D. Brew",
    "attributes": [
        { "trait_type": "Breeds", "value": id5 }
    ]
    })
}
