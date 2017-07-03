/* tslint:disable */
import {
  Person
} from '../index';

declare var Object: any;
export interface MailingAddressInterface {
  "address": string;
  "city": string;
  "stateProvince": string;
  "zip"?: string;
  "country": string;
  "public": boolean;
  "workshop"?: boolean;
  "label": string;
  "type": string;
  "id"?: any;
  "personId"?: any;
  person?: Person;
}

export class MailingAddress implements MailingAddressInterface {
  "address": string;
  "city": string;
  "stateProvince": string;
  "zip": string;
  "country": string;
  "public": boolean;
  "workshop": boolean;
  "label": string;
  "type": string;
  "id": any;
  "personId": any;
  person: Person;
  constructor(data?: MailingAddressInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `MailingAddress`.
   */
  public static getModelName() {
    return "MailingAddress";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of MailingAddress for dynamic purposes.
  **/
  public static factory(data: MailingAddressInterface): MailingAddress{
    return new MailingAddress(data);
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
      name: 'MailingAddress',
      plural: 'MailingAddresses',
      properties: {
        "address": {
          name: 'address',
          type: 'string',
          default: 'none'
        },
        "city": {
          name: 'city',
          type: 'string'
        },
        "stateProvince": {
          name: 'stateProvince',
          type: 'string'
        },
        "zip": {
          name: 'zip',
          type: 'string'
        },
        "country": {
          name: 'country',
          type: 'string',
          default: 'United States'
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
