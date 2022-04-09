import { JSDOM } from 'jsdom'

const srcList = []

module.exports = async function () {
  this.nuxt.hook('generate:page', async (arg) => {
    const pattern = /^.articles.+$/g

    if (arg.route.match(pattern) != null) {
      // console.log(arg)
      const dom = new JSDOM(arg.html)
      const images = dom.window.document.querySelectorAll('article p img')
      console.log('images')
      // console.log(JSON.stringify(images))
      // console.log(typeof arg.html)

      images.forEach((image) => {
        const src = image.getAttribute('src')
        const fileName = src.match('.+/(.+?)([?#;].*)?$')[1]
        srcList.push({
          src,
          fileName,
        })
        //console.log(arg.html.replaceAll(src, `/images/${fileName}`))
        arg.html = arg.html.replaceAll(src, `/images/${fileName}`)
      })
    }
  })

  this.nuxt.hook('generate:done', async () => {
    console.log(srcList)
  })
}
