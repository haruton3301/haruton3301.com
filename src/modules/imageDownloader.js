import { JSDOM } from 'jsdom'

module.exports = async function () {
  this.nuxt.hook('generate:page', async (arg) => {
    const pattern = /^articles.+$/g
    // console.log(arg.route)
    // console.log(arg.route.match(pattern))
    if (arg.route.match(pattern) != null) {
      console.log(arg)
      const dom = new JSDOM(arg.html)
      const images = dom.window.document.querySelectorAll('img')
      console.log(JSON.stringify(images))
    }

    // // arg.html = '変えたよ'
    // console.log(arg)
  })

  this.nuxt.hook('generate:done', async () => {})
}
