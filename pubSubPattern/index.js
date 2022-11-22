const Broker = require('./broker');
const Publisher = require('./publisher');
const Subscriber = require('./subscriber');

function exec() {
  const broker = new Broker();

  const TOPIC_A = 'music';
  const TOPIC_B = 'movie';

  const publisherA = new Publisher('publisherA', broker);
  const subscriberA = new Subscriber('subscriberA', broker);
  const subscriberB = new Subscriber('subscriberB', broker);

  publisherA.publish(TOPIC_A, 'AAA1');
  publisherA.publish(TOPIC_A, 'AAA2');
  publisherA.publish(TOPIC_B, 'BBB');

  subscriberA.subscribe(TOPIC_A, (res) => {
    console.log('subscriberA received: ', res);
  });

  subscriberB.subscribe(TOPIC_A, (res) => {
    console.log('subscriberB received: ', res);
  });

  subscriberB.subscribe(TOPIC_B, (res) => {
    console.log('subscriberB received: ', res);
  });

  broker.notify(TOPIC_A);
  broker.notify(TOPIC_B);
}

module.exports = { exec };
