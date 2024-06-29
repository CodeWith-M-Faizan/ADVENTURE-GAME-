export interface Item {
    name: string;
    description: string;
  }
  
  export class ItemImpl implements Item {
    constructor(
      public name: string,
      public description: string
    ) {}
  }
  