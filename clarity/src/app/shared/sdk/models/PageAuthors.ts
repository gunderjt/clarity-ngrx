/* tslint:disable */
import {
  Page,
  Person
} from '../index';

declare var Object: any;
export interface PageAuthorsInterface {
  "weight": number;
  "id"?: any;
  "pageId"?: any;
  "authorId"?: any;
  page?: Page;
  author?: Person;
}

export class PageAuthors implements PageAuthorsInterface {
  "weight": number;
  "id": any;
  "pageId": any;
  "authorId": any;
  page: Page;
  author: Person;
  constructor(data?: PageAuthorsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PageAuthors`.
   */
  public static getModelName() {
    return "PageAuthors";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PageAuthors for dynamic purposes.
  **/
  public static factory(data: PageAuthorsInterface): PageAuthors{
    return new PageAuthors(data);
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
      name: 'PageAuthors',
      plural: 'PageAuthors',
      properties: {
        "weight": {
          name: 'weight',
          type: 'number',
          default: 0
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "pageId": {
          name: 'pageId',
          type: 'any'
        },
        "authorId": {
          name: 'authorId',
          type: 'any'
        },
      },
      relations: {
        page: {
          name: 'page',
          type: 'Page',
          model: 'Page'
        },
        author: {
          name: 'author',
          type: 'Person',
          model: 'Person'
        },
      }
    }
  }
}
