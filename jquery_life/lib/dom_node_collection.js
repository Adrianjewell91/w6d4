class DOMNodeCollection {
  constructor (htmlElements) {
    this.htmlElements = htmlElements;
  }

  html(string) {
    if (string === undefined) {
      return this.htmlElements[0].innerHTML;
    } else {
      this.htmlElements.forEach((el) => {
        el.innerHTML = string;
      });
    }
  }

  empty() {
    this.html("");
  }

  append(args) {
    if (args instanceof Array) {
      args.forEach((arg) => {
        this.htmlElements.forEach((el) => {
          if (arg instanceof HTMLElement) {
            el.innerHTML += arg.outerHTML;
          } else {
            el.innerHTML += arg;
          }
        });
      });
    } else {
      this.htmlElements.forEach((el) => {
        console.log('in the loop');
        if (args instanceof HTMLElement) {
          el.innerHTML += args.outerHTML;
        } else {
          el.innerHTML += args;
        }
      });
    }
  }

  

}


module.exports = DOMNodeCollection;
