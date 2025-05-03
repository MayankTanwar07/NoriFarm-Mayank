const baseNames = [
  "Tomato",
  "Carrot",
  "Potato",
  "Cucumber",
  "Onion",
  "Lettuce",
  "Spinach",
  "Garlic",
  "Pumpkin",
  "Radish",
];

const imageMap = {
  Tomato:
    "https://images.unsplash.com/photo-1561136594-7f68413baa99?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRvbWF0b3xlbnwwfHwwfHx8MA%3D%3D",
  Carrot:
    "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2Fycm90fGVufDB8fDB8fHww",
  Potato:
    "https://images.unsplash.com/photo-1590165482129-1b8b27698780?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UG90YXRvfGVufDB8fDB8fHww",
  Cucumber:
    "https://images.unsplash.com/photo-1611048661702-7b55eed346b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEN1Y3VtYmVyfGVufDB8fDB8fHww",
  Onion:
    "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T25pb258ZW58MHx8MHx8fDA%3D",
  Lettuce:
    "https://images.unsplash.com/photo-1693667660375-653320dbebb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TGV0dHVjZXxlbnwwfHwwfHx8MA%3D%3D",
  Spinach:
    "https://plus.unsplash.com/premium_photo-1701699257548-8261a687236f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3BpbmFjaHxlbnwwfHwwfHx8MA%3D%3D",
  Garlic:
    "https://images.unsplash.com/photo-1612823711171-e296662098fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEdhcmxpY3xlbnwwfHwwfHx8MA%3D%3D",
  Pumpkin:
    "https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFB1bXBraW58ZW58MHx8MHx8fDA%3D",
  Radish:
    "https://images.unsplash.com/photo-1585369496178-144fd937f249?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmFkaXNofGVufDB8fDB8fHww",
};

const products = [];

for (let i = 1; i <= 100; i++) {
  const base = baseNames[i % baseNames.length];
  products.push({
    name: base,
    title: `Fresh Organic ${base} Pack`,
    price: `${(15000 + (i % 10) * 1000).toLocaleString("en-US")} KRW`,
    image: imageMap[base], // Use dynamic image from map
    buyLink: `https://www.nftnorifarm.com/`,
  });
}

module.exports = products;
