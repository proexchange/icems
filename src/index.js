const fetch = require("node-fetch").default,
  utf8 = require("utf8")

export default class ICEMS {
  constructor(username, password, source) {
    this.endpoint = "https://api20.infinite-convergence.com"
    this.username = username
    this.password = password
    this.source = source
  }

  async sendSMS(destination, message, customParams = {}) {
    var url = new URL(this.endpoint)
    url.pathname = "/sms";
    url.searchParams.set("authid", this.username)
    url.searchParams.set("authcode", this.password)
    url.searchParams.set("destination", destination)
    url.searchParams.set("source", this.source)
    url.searchParams.set("message", utf8.encode(message))
    
    Object.keys(customParams).forEach(key => {
      url.searchParams.set(key, customParams[key]);
    });

    return await fetch(url.toString())
      .then(response => {
        if(response.ok) {
          return response
        }
        throw {
          status: response.status,
          statusText: response.statusText
        }
      })
      .catch(err => Promise.reject(err))
  }
}
