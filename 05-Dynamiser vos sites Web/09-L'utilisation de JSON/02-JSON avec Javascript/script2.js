const fields = [
   {
      id: 2,
      label: "Terrain de foot",
      area: 200
   },
   {
      id: 5,
      label: "Terrain de rugby",
      area: null
   }
]

const data = {
   stadium: {
      id: 18,
      label: "Stade de France",
      fields: fields
   }
}

const json = JSON.stringify(data);

console.log(json);

