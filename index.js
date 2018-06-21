// Write your code in this file!
  function getUKTime() {
    let UKTime = new Date().getHours() + 5
    return UKTime
} 

  function discountTicket(originalPrice) {
    let actualPrice = originalPrice * 0.8;
    return actualPrice
  }
  
  function tweetReply(fansName) {
    let greeting = `Hey ${fansName}, thanks so much for the support! I really appreciate it!`
    return greeting
  }