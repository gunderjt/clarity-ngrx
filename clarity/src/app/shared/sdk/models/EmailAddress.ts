/* tslint:disable */
import {
  Person
} from '../index';

declare var Object: any;
export interface EmailAddressInterface {
  "value": string;
  "public": boolean;
  "workshop"?: boolean;
  "id"?: number;
  "personId"?: number;
  person?: Person;
}

export class EmailAddress implements EmailAddressInterface {
  "value": string;
  "public": boolean;
  "workshop": boolean;
  "id": number;
  "personId": number;
  person: Person;
  constructor(data?: EmailAddressInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `EmailAddress`.
   */
  public static getModelName() {
    return "EmailAddress";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of EmailAddress for dynamic purposes.
  **/
  public static factory(data: EmailAddressInterface): EmailAddress{
    return new EmailAddress(data);
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
      name: 'EmailAddress',
      plural: 'y',
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
        "id": {
          name: 'id',
          type: 'number'
        },
        "personId": {
          name: 'personId',
          type: 'number'
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
