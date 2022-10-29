export class Menu {
  name: string;
  actions: Action[];
}

export class Action {
  actionType: string;
  httpType: string;
  definition: string;
  code: string;
}
