/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Person } from '../../models/Person';
import { Affiliation } from '../../models/Affiliation';
import { PhoneNumber } from '../../models/PhoneNumber';
import { EmailAddress } from '../../models/EmailAddress';
import { Page } from '../../models/Page';
import { PageAuthors } from '../../models/PageAuthors';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Person: Person,
    Affiliation: Affiliation,
    PhoneNumber: PhoneNumber,
    EmailAddress: EmailAddress,
    Page: Page,
    PageAuthors: PageAuthors,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
