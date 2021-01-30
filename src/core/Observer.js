export class Observer {
  constructor() {
    this.listeners = {}
  };

  // notify the listener
  // table.dispatch('table:select', {a: 1})
  dispatch(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    };
    this.listeners[event].forEach(listener => {
      listener(...args)
    });
    return true
  };

  // subscribe to notifications
  // add a new listener
  // formula.subscribe('table:select', () => {})
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);
    return () => {
      this.listeners[event] =
        this.listeners[event].filter(listener => listener !== fn)
    }
  }
}
