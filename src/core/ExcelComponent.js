import { DomListener } from '@core/DomListener';

export class ExcelComponent extends DomListener {

  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
    this.observer = options.observer;
    this.subscribe = options.subscribe || [];
    this.store = options.store;
    this.unsubscribers = [];
    this.prepare()
  };

  prepare() { };

  // returns component template
  toHTML() {
    return ''
  };

  $observe(event, ...args) {
    this.observer.observe(event, ...args)
  };

  $on(event, fn) {
    const unsub = this.observer.subscribe(event, fn);
    this.unsubscribers.push(unsub)
  };

  $dispatch(action) {
    this.store.dispatch(action)
  };

  storeChanged() { };

  isWatching(key) {
    return this.subscribe.includes(key)
  };

  init() {
    this.initDOMListeners()
  };

  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach(unsub => unsub());
  };
}
