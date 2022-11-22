class Broker {
  constructor() {
    this.messages = {};
    this.listeners = {};
  }

  publish(type, content) {
    const existContent = this.messages[type];
    if (!existContent) this.messages[type] = [];
    this.messages[type].push(content);
  }

  subscribe(type, cb) {
    const existListener = this.listeners[type];
    if (!existListener) {
      this.listeners[type] = [];
    }
    this.listeners[type].push(cb);
  }

  notify(type) {
    const messages = this.messages[type];
    const subscribers = this.listeners[type] || [];
    messages.forEach((msg) => {
      subscribers.forEach((cb) => cb(msg));
    });
    this.messages[type] = [];
  }
}

module.exports = Broker;
