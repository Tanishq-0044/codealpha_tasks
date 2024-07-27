import readline from 'readline'
import { start, stop, reset } from './stopwatch.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export default function showMenu() {
  console.log('\nOptions:');
  console.log('1. Start');
  console.log('2. Stop');
  console.log('3. Reset');
  console.log('4. Exit');
  rl.question('Choose an option: ', (option) => {
    switch (option) {
      case '1':
        start();
        break;
      case '2':
        stop();
        break;
      case '3':
        reset();
        break;
      case '4':
        rl.close();
        return;
      default:
        console.log('Invalid option. Please choose again.');
    }
    showMenu();
  });
}
