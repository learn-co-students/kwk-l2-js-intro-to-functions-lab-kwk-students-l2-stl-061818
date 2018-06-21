// Write your code in this file!

function getUKTime(number) {
  const currentHour = new Date().getHours() + 6;
  return currentHour;
}

function discountTicket(oldPrice) {
  const newPrice = oldPrice * 0.8;
  return newPrice;
}

function tweetReply(fansName) {
  const reply = `Hey ${fansName}, thanks so much for the support! I really appreciate it!`;
  return reply;
}