/* tslint:disable */
import {
  Person
} from '../index';

declare var Object: any;
export interface PhoneNumberInterface {
  "value": string;
  "public": boolean;
  "workshop"?: boolean;
  "label": string;
  "type": string;
  "id"?: any;
  "personId"?: any;
  person?: Person;
}

export class PhoneNumber implements PhoneNumberInterface {
  "value": string;
  "public": boolean;
  "workshop": boolean;
  "label": string;
  "type": string;
  "id": any;
  "personId": any;
  person: Person;
  constructor(data?: PhoneNumberInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PhoneNumber`.
   */
  public static getModelName() {
    return "PhoneNumber";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PhoneNumber for dynamic purposes.
  **/
  public static factory(data: PhoneNumberInterface): PhoneNumber{
    return new PhoneNumber(data);
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
      name: 'PhoneNumber',
      plural: 'PhoneNumbers',
      properties: {
        "value": {
          name: 'value',
          type: 'string'
        },
        "public": {
          name: 'public',
          type: 'boolean',
          default: false
        },
        "workshop": {
          name: 'workshop',
          type: 'boolean'
        },
        "label": {
          name: 'label',
          type: 'string',
          default: 'main'
        },
        "type": {
          name: 'type',
          type: 'string',
          default: 'work'
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
