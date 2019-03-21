export function session_set(name, data) {
  sessionStorage.setItem(name, JSON.stringify(data))
}

export function session_get(name) {
  return JSON.parse(sessionStorage.getItem(name))
}