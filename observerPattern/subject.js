class Subject {
  constructor() {
    this.subjectState = '';
    this.observers = new Set();
  }

  attach(observers) {
    observers.forEach((observer) => {
      this.observers.add(observer);
    });
  }

  detach(observers) {
    observers.forEach((observer) => {
      this.observers.delete(observer);
    });
  }

  notifyObserver() {
    console.log('通知給所有訂閱者更新');
    this.observers.forEach((observer) => {
      observer.update();
    });
  }

  getState() {
    return this.subjectState;
  }

  setState(state) {
    this.subjectState = state;
    console.log(`變更廣播訊息: ${this.subjectState}`);
    this.notifyObserver();
  }
}

module.exports = Subject;
