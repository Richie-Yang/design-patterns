if (process.argv < 3) throw Error('no argv');

const argv = process.argv[2];
switch (argv) {
  case 'obp':
    return require('./observerPattern').exec();
  case 'psp':
    return require('./pubSubPattern').exec();
  default:
    console.log('no argv selected!');
}
