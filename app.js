const initialPrice = document.querySelector("#initialPrice");
const noOfStocks = document.querySelector('#quantityOfStocks');
const finalPrice = document.querySelector('#finalPrice');
const tellMeBtn = document.querySelector('#submitBtn');
const outputSection = document.querySelector('#outputBox');

tellMeBtn.addEventListener('click', submitHandler)

function calculateProfit(initialRate, finalRate, quantity) {
  const profit = (finalRate - initialRate) * quantity
  const profitPercentage = (profit / (initialRate * quantity)) * 100

  return [profit, profitPercentage]
}

function calculateLoss(initialRate, finalRate, quantity) {
  const loss = (initialRate - finalRate) * quantity
  const lossPercentage = (loss / (initialRate * quantity)) * 100

  return [loss, lossPercentage]
}

function calculateProfitOrLoss(initialRate, finalRate, quantity) {
  if (initialRate > finalRate) {
    const [loss, lossPercentage] = calculateLoss(initialRate, finalRate, quantity)
    outputSection.innerText = `Hey, the loss is ${loss.toFixed(2)} and the percent is ${lossPercentage.toFixed(2)}%`
    outputSection.style.color = "#FF395E"
  } else if (finalRate > initialRate) {
    const [profit, profitPercentage] = calculateProfit(initialRate, finalRate, quantity)
    outputSection.innerText = `Hey, the profit is ${profit.toFixed(2)} and the percent is ${profitPercentage.toFixed(2)}%`
    outputSection.style.color = "#00cc66"
  } else {
    outputSection.innerText = "No pain no gain and no gain no pain"
  }
}

function submitHandler() {
  const initialRate = Number(initialPrice.value);
  const finalRate = Number(finalPrice.value);
  const quantity = Number(noOfStocks.value);

  if ((initialRate && finalRate && quantity) == '') {
    outputSection.innerText = "Please enter all the values"
  }
  else if (initialRate >= 0 && quantity > 0 && finalRate >= 0) {
    calculateProfitOrLoss(initialRate, finalRate, quantity)
  }
  else {
    outputSection.innerText = "Please enter valid values"
  }
}