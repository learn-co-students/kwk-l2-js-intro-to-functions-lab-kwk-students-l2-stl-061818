// Write your code in this file!

let currentHour = new Date().getHours()

function getUKTime() {
  return currentHour + 5
}
let percentage = 80

function discountTicket(number) {
    return (number/100)*percentage
}

function tweetReply(fanName) {
  return `Hey ${fanName}, thanks so much for the support! I really appreciate it!`
}


