const Subject = require('./subject');
const Observer = require('./observer');

function exec() {
  // 建立 subject svent
  const STATE1 = '消息 1: 年輕人終究還是年輕人';
  const STATE2 = '消息 2: 太衝動了';
  const STATE3 = '消息 3: 不衝動了';
  const subjectA = new Subject();
  subjectA.setState(STATE1);

  console.log('----------------------------');

  // 建立 subscriber
  const observerA = new Observer(subjectA, { name: 'observerA' });
  const observerB = new Observer(subjectA, { name: 'observerB' });
  const observerC = new Observer(subjectA, { name: 'observerC' });

  // 訂閱 topic event
  subjectA.attach([observerA, observerB, observerC]);
  subjectA.setState(STATE2);

  console.log('----------------------------');

  // 解除訂閱 topic event
  subjectA.detach([observerA, observerB]);
  subjectA.setState(STATE3);
}

module.exports = { exec };
