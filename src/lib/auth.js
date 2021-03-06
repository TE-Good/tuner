class Auth {
  static setToken(token) {
    return localStorage.setItem('token', token)
  }

  static getToken() {
    return localStorage.getItem('token')
  }

  static logout() {
    return localStorage.removeItem('token')
  }

  static getPayload() {
    const token = this.getToken()
    if (!token) return false
    const parts = token.split('.')
    if (parts.length !== 3) return false
    return JSON.parse(atob(parts[1]))
  }

  static isCurrentUser(userId) {
    const payload = this.getPayload()
    if (!payload) return false
    return payload.sub === userId
  }

  static isAuthenticated() {
    const payload = this.getPayload()
    if (!payload) return false
    const now = Math.round(Date.now() / 1000)
    return now < payload.exp
  }
}

export default Auth