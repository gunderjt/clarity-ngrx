/* tslint:disable */
import {
  Affiliation,
  PhoneNumber,
  EmailAddress,
  Page,
  MailingAddress,
  Tag
} from '../index';

declare var Object: any;
export interface PersonInterface {
  "firstName": string;
  "middleName"?: string;
  "lastName": string;
  "suffixName"?: string;
  "active": boolean;
  "jobTitle"?: string;
  "slug": string;
  "id"?: any;
  "created"?: Date;
  "modified"?: Date;
  "affiliationId"?: any;
  affiliations?: Affiliation;
  phoneNumbers?: PhoneNumber[];
  emails?: EmailAddress[];
  pages?: Page[];
  addresses?: MailingAddress[];
  tags?: Tag[];
}

export class Person implements PersonInterface {
  "firstName": string;
  "middleName": string;
  "lastName": string;
  "suffixName": string;
  "active": boolean;
  "jobTitle": string;
  "slug": string;
  "id": any;
  "created": Date;
  "modified": Date;
  "affiliationId": any;
  affiliations: Affiliation;
  phoneNumbers: PhoneNumber[];
  emails: EmailAddress[];
  pages: Page[];
  addresses: MailingAddress[];
  tags: Tag[];
  constructor(data?: PersonInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Person`.
   */
  public static getModelName() {
    return "Person";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Person for dynamic purposes.
  **/
  public static factory(data: PersonInterface): Person{
    return new Person(data);
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
      name: 'Person',
      plural: 'People',
      properties: {
        "firstName": {
          name: 'firstName',
          type: 'string'
        },
        "middleName": {
          name: 'middleName',
          type: 'string'
        },
        "lastName": {
          name: 'lastName',
          type: 'string'
        },
        "suffixName": {
          name: 'suffixName',
          type: 'string'
        },
        "active": {
          name: 'active',
          type: 'boolean',
          default: false
        },
        "jobTitle": {
          name: 'jobTitle',
          type: 'string'
        },
        "slug": {
          name: 'slug',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "created": {
          name: 'created',
          type: 'Date',
          default: new Date(0)
        },
        "modified": {
          name: 'modified',
          type: 'Date',
          default: new Date(0)
        },
        "affiliationId": {
          name: 'affiliationId',
          type: 'any'
        },
      },
      relations: {
        affiliations: {
          name: 'affiliations',
          type: 'Affiliation',
          model: 'Affiliation'
        },
        phoneNumbers: {
          name: 'phoneNumbers',
          type: 'PhoneNumber[]',
          model: 'PhoneNumber'
        },
        emails: {
          name: 'emails',
          type: 'EmailAddress[]',
          model: 'EmailAddress'
        },
        pages: {
          name: 'pages',
          type: 'Page[]',
          model: 'Page'
        },
        addresses: {
          name: 'addresses',
          type: 'MailingAddress[]',
          model: 'MailingAddress'
        },
        tags: {
          name: 'tags',
          type: 'Tag[]',
          model: 'Tag'
        },
      }
    }
  }
}
