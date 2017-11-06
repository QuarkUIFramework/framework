declare module 'gulp-lintspaces' {
  interface ILintspacesOptions {
    editorconfig: string;
  }

  interface IReporterOptions {
    breakOnWarning: boolean;
    prefixLogs: boolean;
  }

  interface ILintspaces {
    (options?: ILintspacesOptions): any;
    reporter(options?: IReporterOptions): any;
  }

  const lintspaces: ILintspaces;
  export = lintspaces;
}
