const { buyTollRoadCard, topUpBalance, useTollRoad } = require('./utils');

async function getTollAccess() {
  try {
    const card = await buyTollRoadCard(25);
    console.log('Bought Toll Road Card');

    const updatedCard = await topUpBalance(card, 10);
    console.log('Topped Up Balance');

    await useTollRoad(updatedCard);
    console.log('Used Toll Road');
  } catch (error) {
    console.log(error.message);
  }
}

// Jangan hapus kode di bawah ini
getTollAccess();
