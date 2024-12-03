
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class User {
    firstName: string;
    fatherName: string;
    grandfatherName: string;
    familyName: string;
    localizedName: LocalizedNameType;
    nationalId: NationalIdType;
    nationalities: Nullable<NationalityType>[];
    maritalStatus: MaritalStatusType;
    dependants: number;
}

export class LocalizedNameType {
    firstName: string;
    fatherName: string;
    grandfatherName: string;
    familyName: string;
}

export class NationalIdType {
    idNumber: string;
    expiryDate: string;
}

export class NationalityType {
    country: CountryType;
    countryId: number;
}

export class CountryType {
    id: string;
    name: string;
}

export class MaritalStatusType {
    id: string;
    name: string;
}

export abstract class IQuery {
    abstract findUser(): User | Promise<User>;
}

export abstract class IMutation {
    abstract updateUser(firstName: string, fatherName: string): User | Promise<User>;
}

type Nullable<T> = T | null;
