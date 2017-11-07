import 'reflect-metadata';

export interface IShowcaseItemOptions {
  id?: string;
  name: string;
}

export function showcaseItem(options: IShowcaseItemOptions): (target: any) => void {
  return (target: any) => void {

  };
}
