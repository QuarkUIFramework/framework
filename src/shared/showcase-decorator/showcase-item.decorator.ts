import 'reflect-metadata';

export interface IShowcaseItemOptions {
  id: string;
  name: string;
  description: string;
}

export const SHOWCASE_METADATA_KEY = 'showcaseItemMeta';

export function showcaseItem(options: IShowcaseItemOptions): (target: any) => void {
  return (target: any): void => {
    Reflect.defineMetadata(SHOWCASE_METADATA_KEY, options, target);
  };
}
