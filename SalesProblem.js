const productProfitArray = [
    { name: 'Product A', profit: -75 },
    { name: 'Product B', profit: -70 },
    { name: 'Product C', profit: 98 },
    { name: 'Product D', profit: 5 },
    { name: 'Product E', profit: 88 },
    { name: 'Product F', profit: 29 },

  ];

  function topProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
      return 'No Data';
    }
    let highestProfitProduct = null;
  let highestProfit = -Infinity;

  for (const product of productProfitArray) {
    if (product.profit > highestProfit) {
      highestProfit = product.profit;
      highestProfitProduct = product.name;
    }
  }
  return highestProfitProduct;
}

function bottomProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
      return 'No Data';
    }
  
    let lowestProfitProduct = null;
    let lowestProfit = Infinity;
  
    for (const product of productProfitArray) {
      if (product.profit < lowestProfit) {
        lowestProfit = product.profit;
        lowestProfitProduct = product.name;
      }
    }
  
    return lowestProfitProduct;
  }

  function zeroProfitProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
      return 'No Data';
    }
  
    let nearestToZeroProduct = null;
    let nearestToZeroDifference = Infinity;
  
    for (const product of productProfitArray) {
      const difference = Math.abs(product.profit);
  
      if (difference < nearestToZeroDifference || (difference === nearestToZeroDifference && product.profit > 0)) {
        nearestToZeroDifference = difference;
        nearestToZeroProduct = product.name;
      }
    }
  
    return nearestToZeroProduct;
  }
  
  // Call the functions
  const topProfitProductName = topProduct(productProfitArray);
  const bottomProfitProductName = bottomProduct(productProfitArray);
  const zeroProfitProductName = zeroProfitProduct(productProfitArray);
  
  // Display the results
  console.log('Product with Highest Sales Profit:', topProfitProductName);
  console.log('Product with Lowest Sales Profit:', bottomProfitProductName);
  console.log('Product with Sales Profit Nearest to 0:', zeroProfitProductName);