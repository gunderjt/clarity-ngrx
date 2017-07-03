/* tslint:disable */
import {
  Person
} from '../index';

declare var Object: any;
export interface AffiliationInterface {
  "label": string;
  "approved": boolean;
  "id"?: any;
  "personId"?: any;
  people?: Person[];
}

export class Affiliation implements AffiliationInterface {
  "label": string;
  "approved": boolean;
  "id": any;
  "personId": any;
  people: Person[];
  constructor(data?: AffiliationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Affiliation`.
   */
  public static getModelName() {
    return "Affiliation";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Affiliation for dynamic purposes.
  **/
  public static factory(data: AffiliationInterface): Affiliation{
    return new Affiliation(data);
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
      name: 'Affiliation',
      plural: 'Affiliations',
      properties: {
        "label": {
          name: 'label',
          type: 'string'
        },
        "approved": {
          name: 'approved',
          type: 'boolean',
          default: false
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
        people: {
          name: 'people',
          type: 'Person[]',
          model: 'Person'
        },
      }
    }
  }
}
