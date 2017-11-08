import { argv } from 'yargs';
import * as runsequence from 'run-sequence';
import * as gulp from 'gulp';

import '../gulpfile';

const task = argv['task'];
if (!task) {
  throw new Error('You must supply a task name');
}

if (!gulp.hasTask(task)) {
  throw new Error(`Cannot find gulp task '${task}'`);
}

console.log('-------------------------');
console.log('- QuarkUI Debugger');
console.log(`- Debugging Task: ${task}`);
console.log('-------------------------');

runsequence(task);
