const calendarSelector = '.WJVfWe.A3o4Oe'
const eventElements = document.querySelector(calendarSelector).children

const events = [...eventElements].map(element => {
  const timeString = element.innerText.split(',')[0]
  const [from, till] = timeString.split(' to ')

  return { from, till } // 12pm, 2pm
})

module.exports = events
