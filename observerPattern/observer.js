class Observer {
  constructor(subject, { name }) {
    this.name = name || '';
    this.observerState = '';
    this.subject = subject;
  }

  update() {
    this.observerState = this.subject.getState();
    console.log(`${this.name} 收到通知: ${this.observerState}`);
  }
}

module.exports = Observer;
