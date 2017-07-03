/* tslint:disable */
import {
  Person
} from '../index';

declare var Object: any;
export interface TagInterface {
  "label": string;
  "type": string;
  "sort": number;
  "id"?: any;
  "personId"?: any;
  person?: Person;
}

export class Tag implements TagInterface {
  "label": string;
  "type": string;
  "sort": number;
  "id": any;
  "personId": any;
  person: Person;
  constructor(data?: TagInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Tag`.
   */
  public static getModelName() {
    return "Tag";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Tag for dynamic purposes.
  **/
  public static factory(data: TagInterface): Tag{
    return new Tag(data);
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
      name: 'Tag',
      plural: 'Tags',
      properties: {
        "label": {
          name: 'label',
          type: 'string'
        },
        "type": {
          name: 'type',
          type: 'string',
          default: 'role'
        },
        "sort": {
          name: 'sort',
          type: 'number',
          default: 0
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "personId": {
          name: 'personId',
          type: 'any'
        },
      },
      relations: {
        person: {
          name: 'person',
          type: 'Person',
          model: 'Person'
        },
      }
    }
  }
}
