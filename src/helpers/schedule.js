import styles from './styles'

const schedule = name => {
  styles.setup()
  const timer = window.setInterval(() => {
    const input = document.querySelector('.p261Pc .whsOnd.zHQkBf')
    const focusInput = document.querySelector('#newTask')
    const button = document.querySelector('.p261Pc .O0WRkf.zZhnYe.e3Duub.C0oVfc span')

    if (input) {
      input.value = name

      window.setTimeout(_ => {
        focusInput.focus()
        button.click()
        window.setTimeout(_ => styles.destroy(), 250)
      }, 500)
      window.clearInterval(timer)
    }
  }, 100)
}

export default schedule
