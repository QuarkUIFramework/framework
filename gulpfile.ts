import * as gulp from 'gulp';

import * as tslint from './tools/tasks/tslint';

gulp.task('tslint', () => { tslint.lint(); });
