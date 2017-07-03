/* tslint:disable */
import {
  Person
} from '../index';

declare var Object: any;
export interface PageInterface {
  "content": string;
  "public": boolean;
  "publishDate": Date;
  "id"?: any;
  authors?: Person[];
}

export class Page implements PageInterface {
  "content": string;
  "public": boolean;
  "publishDate": Date;
  "id": any;
  authors: Person[];
  constructor(data?: PageInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Page`.
   */
  public static getModelName() {
    return "Page";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Page for dynamic purposes.
  **/
  public static factory(data: PageInterface): Page{
    return new Page(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Page',
      plural: 'Pages',
      properties: {
        "content": {
          name: 'content',
          type: 'string'
        },
        "public": {
          name: 'public',
          type: 'boolean',
          default: false
        },
        "publishDate": {
          name: 'publishDate',
          type: 'Date'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        authors: {
          name: 'authors',
          type: 'Person[]',
          model: 'Person'
        },
      }
    }
  }
}
