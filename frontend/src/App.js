const addProduct = async () => {
  await fetch("http://localhost:5000/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "Tomato",
      price: 40,
      description: "Fresh organic tomatoes"
    })
  });
};
