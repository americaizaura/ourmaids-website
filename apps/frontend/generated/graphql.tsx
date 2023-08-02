import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
export type CatalogQueryQueryVariables = Exact<{
  merchantId: Scalars['ID']['input'];
}>;


export type CatalogQueryQuery = { __typename?: 'Query', catalogItems?: { __typename?: 'CatalogItemConnection', pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, endCursor?: any | null }, nodes: Array<{ __typename: 'CatalogItem', abbreviation?: string | null, availableElectronically?: boolean | null, availableForPickup?: boolean | null, availableOnline?: boolean | null, description?: string | null, labelColor?: any | null, name?: string | null, productType?: CatalogItemProductType | null, skipModifierScreen?: boolean | null, id: string, version: any, isDeleted?: boolean | null, updatedAt?: any | null, presentAtAll?: boolean | null, category?: { __typename?: 'CatalogCategory', id: string } | null, images?: Array<{ __typename?: 'CatalogImage', id: string, url?: any | null } | null> | null, options?: Array<{ __typename?: 'CatalogItemOption', id: string, name?: string | null } | null> | null, modifierListInfos?: Array<{ __typename?: 'CatalogItemModifierListInfo', enabled?: boolean | null, maxSelectedModifiers?: any | null, minSelectedModifiers?: any | null, modifierList?: { __typename?: 'CatalogModifierList', id: string } | null, modifierOverrides?: Array<{ __typename?: 'CatalogModifierOverride', onByDefault?: boolean | null, modifier?: { __typename?: 'CatalogModifier', id: string } | null } | null> | null } | null> | null, taxes?: Array<{ __typename?: 'CatalogTax', id: string, name?: string | null } | null> | null, variations?: Array<{ __typename?: 'CatalogItemVariation', id: string, name?: string | null } | null> | null, absentAt?: Array<{ __typename?: 'Location', id: string } | null> | null, presentAt?: Array<{ __typename?: 'Location', id: string } | null> | null }> } | null };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Cursor: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  Duration: { input: any; output: any; }
  EmailAddress: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JsonSafeLong: { input: any; output: any; }
  LanguageCode: { input: any; output: any; }
  LocalTime: { input: any; output: any; }
  LongString: { input: any; output: any; }
  PhoneNumber: { input: any; output: any; }
  TimeZone: { input: any; output: any; }
  UID: { input: any; output: any; }
  Untyped: { input: any; output: any; }
  Url: { input: any; output: any; }
  iCalendarEvent: { input: any; output: any; }
};

export enum Auth_Target_Type {
  /** The annotated element must be an ID corresponding to a Merchant. */
  Merchant = 'MERCHANT'
}

/**
 * Represents a postal address in a country.
 * For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
 */
export type Address = {
  __typename?: 'Address';
  /**
   * The first line of the address.
   * Fields that start with `addressLine` provide the address's most specific
   * details, like street number, street name, and building name. They do *not*
   * provide less specific details like city, state/province, or country (these
   * details are provided in other fields).
   */
  addressLine1?: Maybe<Scalars['String']['output']>;
  /** The second line of the address, if any. */
  addressLine2?: Maybe<Scalars['String']['output']>;
  /** The third line of the address, if any. */
  addressLine3?: Maybe<Scalars['String']['output']>;
  /**
   * A civil entity within the address's country. In the US, this is the state.
   * For a full list of field meanings by country, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  administrativeDistrictLevel1?: Maybe<Scalars['String']['output']>;
  /** The address's country, in the two-letter format of ISO 3166. For example, `US` or `FR`. */
  country: Country;
  /**
   * The address's country, in the two-letter format of ISO 3166. For example, `US` or `FR`.
   * @deprecated Use `country` instead.
   */
  countryCode: CountryCode;
  /**
   * The city or town of the address. For a full list of field meanings by country,
   * see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  locality?: Maybe<Scalars['String']['output']>;
  /** The address's postal code. For a full list of field meanings by country, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses). */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** A civil region within the address's `locality`, if any. */
  sublocality?: Maybe<Scalars['String']['output']>;
};

/**
 * Input type used to specify filters on `Address` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type AddressFilter = {
  /**
   * Used to filter on the `addressLine1` field:
   *
   * > The first line of the address.
   * >
   * > Fields that start with `addressLine` provide the address's most specific
   * > details, like street number, street name, and building name. They do *not*
   * > provide less specific details like city, state/province, or country (these
   * > details are provided in other fields).
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  addressLine1?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `addressLine2` field:
   *
   * > The second line of the address, if any.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  addressLine2?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `addressLine3` field:
   *
   * > The third line of the address, if any.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  addressLine3?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `administrativeDistrictLevel1` field:
   *
   * > A civil entity within the address's country. In the US, this is the state.
   * > For a full list of field meanings by country, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  administrativeDistrictLevel1?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `administrativeDistrictLevel2` field:
   *
   * > A civil entity within the address's `administrativeDistrictLevel1`.  In the US, this is the county.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  administrativeDistrictLevel2?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `administrativeDistrictLevel3` field:
   *
   * > A civil entity within the address's `administrativeDistrictLevel2`, if any.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  administrativeDistrictLevel3?: InputMaybe<StringFilter>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<AddressFilter>>;
  /**
   * Used to filter on the `country` field:
   *
   * > The address's country, in the two-letter format of ISO 3166. For example, `US` or `FR`.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  country?: InputMaybe<CountryFilter>;
  /**
   * Used to filter on the `countryCode` field:
   *
   * > The address's country, in the two-letter format of ISO 3166. For example, `US` or `FR`.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  countryCode?: InputMaybe<CountryCodeFilter>;
  /**
   * Used to filter on the `firstName` field:
   *
   * > Optional first name when it's representing recipient.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  firstName?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `lastName` field:
   *
   * > Optional last name when it's representing recipient.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  lastName?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `locality` field:
   *
   * > The city or town of the address. For a full list of field meanings by
   * country, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  locality?: InputMaybe<StringFilter>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<AddressFilter>;
  /**
   * Used to filter on the `organization` field:
   *
   * > Optional organization name when it's representing recipient.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  organization?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `postalCode` field:
   *
   * > The address's postal code. For a full list of field meanings by country, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  postalCode?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `sublocality` field:
   *
   * > A civil region within the address's `locality`, if any.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  sublocality?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `sublocality2` field:
   *
   * > A civil region within the address's `sublocality`, if any.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  sublocality2?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `sublocality3` field:
   *
   * > A civil region within the address's `sublocality2`, if any.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  sublocality3?: InputMaybe<StringFilter>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * Additional details about Afterpay payments.
 */
export type AfterpayPaymentDetails = {
  __typename?: 'AfterpayPaymentDetails';
  /** Email address on the buyer's Afterpay account. */
  emailAddress?: Maybe<Scalars['EmailAddress']['output']>;
};

/**
 * Input type used to specify filters on `AfterpayPaymentDetails` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type AfterpayPaymentDetailsFilter = {
  /**
   * Used to filter on the `emailAddress` field:
   *
   * > Email address on the buyer's Afterpay account.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  emailAddress?: InputMaybe<EmailAddressFilter>;
};

export enum AuthTarget {
  /** The annotated element must be an ID corresponding to a Merchant. */
  Merchant = 'MERCHANT'
}

/** The ownership type of the bank account performing the transfer. */
export enum BankAccountPaymentAccountOwnershipType {
  AccountTypeUnknown = 'ACCOUNT_TYPE_UNKNOWN',
  Company = 'COMPANY',
  Individual = 'INDIVIDUAL'
}

/**
 * Input type used to specify filters on `BankAccountPaymentAccountOwnershipType` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type BankAccountPaymentAccountOwnershipTypeFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<BankAccountPaymentAccountOwnershipTypeFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<BankAccountPaymentAccountOwnershipType>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<BankAccountPaymentAccountOwnershipTypeFilter>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * ACH-specific details about `BANK_ACCOUNT` type payments with the `transferType` of `ACH`.
 */
export type BankAccountPaymentAchDetails = {
  __typename?: 'BankAccountPaymentAchDetails';
  /** The last few digits of the bank account number. */
  accountNumberSuffix?: Maybe<Scalars['String']['output']>;
  /** The type of the bank account performing the transfer. The account type can be `CHECKING`, `SAVINGS`, or `UNKNOWN`. */
  accountType?: Maybe<BankAccountType>;
  /** The routing number for the bank account. */
  routingNumber?: Maybe<Scalars['String']['output']>;
};

/**
 * Input type used to specify filters on `BankAccountPaymentAchDetails` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type BankAccountPaymentAchDetailsFilter = {
  /**
   * Used to filter on the `accountNumberSuffix` field:
   *
   * > The last few digits of the bank account number.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  accountNumberSuffix?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `accountType` field:
   *
   * > The type of the bank account performing the transfer. The account type can be `CHECKING`, `SAVINGS`, or `UNKNOWN`.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  accountType?: InputMaybe<BankAccountTypeFilter>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<BankAccountPaymentAchDetailsFilter>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<BankAccountPaymentAchDetailsFilter>;
  /**
   * Used to filter on the `routingNumber` field:
   *
   * > The routing number for the bank account.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  routingNumber?: InputMaybe<StringFilter>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * Additional details about BANK_ACCOUNT type payments.
 */
export type BankAccountPaymentDetails = {
  __typename?: 'BankAccountPaymentDetails';
  /** The ownership type of the bank account performing the transfer. */
  accountOwnershipType?: Maybe<BankAccountPaymentAccountOwnershipType>;
  /** ACH-specific information about the transfer. The information is only populated if the `transferType` is `ACH`. */
  achDetails?: Maybe<BankAccountPaymentAchDetails>;
  /** The name of the bank associated with the bank account. */
  bankName?: Maybe<Scalars['String']['output']>;
  /** The two-letter ISO code representing the country the bank account is located in. */
  country?: Maybe<Country>;
  /** Information about errors encountered during the request. */
  errors: Array<Error>;
  /**
   * Uniquely identifies the bank account for this seller and can be used to
   * determine if payments are from the same bank account.
   */
  fingerprint?: Maybe<Scalars['ID']['output']>;
  /** The statement description as sent to the bank. */
  statementDescription?: Maybe<Scalars['String']['output']>;
  /** The type of the bank transfer. */
  transferType?: Maybe<BankAccountPaymentTransferType>;
};

/**
 * Input type used to specify filters on `BankAccountPaymentDetails` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type BankAccountPaymentDetailsFilter = {
  /**
   * Used to filter on the `accountOwnershipType` field:
   *
   * > The ownership type of the bank account performing the transfer.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  accountOwnershipType?: InputMaybe<BankAccountPaymentAccountOwnershipTypeFilter>;
  /**
   * Used to filter on the `achDetails` field:
   *
   * > ACH-specific information about the transfer. The information is only populated if the `transferType` is `ACH`.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  achDetails?: InputMaybe<BankAccountPaymentAchDetailsFilter>;
  /**
   * Used to filter on the `bankName` field:
   *
   * > The name of the bank associated with the bank account.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  bankName?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `country` field:
   *
   * > The two-letter ISO code representing the country the bank account is located in.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  country?: InputMaybe<CountryFilter>;
  /**
   * Used to filter on the `errors` field:
   *
   * > Information about errors encountered during the request.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  errors?: InputMaybe<ErrorFilter>;
  /**
   * Used to filter on the `fingerprint` field:
   *
   * > Uniquely identifies the bank account for this seller and can be used to
   * determine if payments are from the same bank account.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  fingerprint?: InputMaybe<IdFilter>;
  /**
   * Used to filter on the `statementDescription` field:
   *
   * > The statement description as sent to the bank.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  statementDescription?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `transferType` field:
   *
   * > The type of the bank transfer.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  transferType?: InputMaybe<BankAccountPaymentTransferTypeFilter>;
};

/** The type of the bank transfer. */
export enum BankAccountPaymentTransferType {
  Ach = 'ACH',
  OpenBanking = 'OPEN_BANKING',
  Unknown = 'UNKNOWN'
}

/**
 * Input type used to specify filters on `BankAccountPaymentTransferType` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type BankAccountPaymentTransferTypeFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<BankAccountPaymentTransferTypeFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<BankAccountPaymentTransferType>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<BankAccountPaymentTransferTypeFilter>;
};

/** Indicates the financial purpose of the bank account. */
export enum BankAccountType {
  /**
   * An account at a financial institution against which checks can be
   * drawn specifically for business purposes (non-personal use).
   */
  BusinessChecking = 'BUSINESS_CHECKING',
  /**
   * An account at a financial institution against which checks can be
   * drawn by the account depositor.
   */
  Checking = 'CHECKING',
  /**
   * An account at a financial institution that contains a deposit of funds
   * and/or securities.
   */
  Investment = 'INVESTMENT',
  /**
   * An account at a financial institution which cannot be described by the
   * other types.
   */
  Other = 'OTHER',
  /**
   * An account at a financial institution that pays interest but cannot be
   * used directly as money in the narrow sense of a medium of exchange.
   */
  Savings = 'SAVINGS',
  /** Reserved value for unknown. */
  Unknown = 'UNKNOWN'
}

/**
 * Input type used to specify filters on `BankAccountType` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type BankAccountTypeFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<BankAccountTypeFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<BankAccountType>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<BankAccountTypeFilter>;
};

/** Input type used to specify filters on `Boolean` fields. */
export type BasicBooleanFilter = {
  /** Matches records where the the field value is equal to the provided value. */
  equalTo?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Input type used to specify filters on `Currency` fields. */
export type BasicCurrencyFilter = {
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   */
  equalToAnyOf?: InputMaybe<Array<CurrencyInput>>;
};

/** Input type used to specify filters on `DateTime` fields. */
export type BasicDateTimeFilter = {
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   */
  equalToAnyOf?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  /** Matches records where the the field value is greater than (>) the provided value. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Matches records where the the field value is greater than or equal to (>=) the provided value. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Matches records where the the field value is less than (<) the provided value. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Matches records where the the field value is less than or equal to (<=) the provided value. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Input type used to specify filters on `ID` fields. */
export type BasicIdFilter = {
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   */
  equalToAnyOf?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type BasicIdFilterInput = {
  equalToAnyOf: Array<Scalars['ID']['input']>;
};

/** Input type used to specify filters on `Int` fields. */
export type BasicIntFilter = {
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   */
  equalToAnyOf?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Matches records where the the field value is greater than (>) the provided value. */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /** Matches records where the the field value is greater than or equal to (>=) the provided value. */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** Matches records where the the field value is less than (<) the provided value. */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /** Matches records where the the field value is less than or equal to (<=) the provided value. */
  lte?: InputMaybe<Scalars['Int']['input']>;
};

/** Input type used to specify filters on `JsonSafeLong` fields. */
export type BasicJsonSafeLongFilter = {
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   */
  equalToAnyOf?: InputMaybe<Array<Scalars['JsonSafeLong']['input']>>;
  /** Matches records where the the field value is greater than (>) the provided value. */
  gt?: InputMaybe<Scalars['JsonSafeLong']['input']>;
  /** Matches records where the the field value is greater than or equal to (>=) the provided value. */
  gte?: InputMaybe<Scalars['JsonSafeLong']['input']>;
  /** Matches records where the the field value is less than (<) the provided value. */
  lt?: InputMaybe<Scalars['JsonSafeLong']['input']>;
  /** Matches records where the the field value is less than or equal to (<=) the provided value. */
  lte?: InputMaybe<Scalars['JsonSafeLong']['input']>;
};

/** Input type used to specify filters on `Money` fields. */
export type BasicMoneyFilter = {
  /**
   * Used to filter on the `amount` field:
   *
   * > The amount of money, in the smallest denomination of the currency
   * > indicated by `currency`. For example, when `currency` is `USD`, `amount` is
   * > in cents. Monetary amounts can be positive or negative. See the specific
   * > field description to determine the meaning of the sign in a particular case.
   */
  amount?: InputMaybe<BasicJsonSafeLongFilter>;
  /**
   * Used to filter on the `currency` field:
   *
   * > The type of currency, in __ISO 4217 format__. For example, the currency
   * > code for US dollars is `USD`.
   */
  currency?: InputMaybe<BasicCurrencyFilter>;
};

/** Input type used to specify filters on `String` fields. */
export type BasicStringFilter = {
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   */
  equalToAnyOf?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Input type used to specify filters on `Boolean` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type BooleanFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<BooleanFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<BooleanFilter>;
};

/** The hours of operation for a business location. */
export type BusinessHours = {
  __typename?: 'BusinessHours';
  periods?: Maybe<Array<Maybe<BusinessHoursPeriod>>>;
};

/** A period of time during which a business location is open. */
export type BusinessHoursPeriod = {
  __typename?: 'BusinessHoursPeriod';
  /** The day of week for this time period. */
  dayOfWeek?: Maybe<DayOfWeek>;
  /** The end time of a business hours period, specified in local time using partial-time RFC 3339 format. */
  endLocalTime?: Maybe<Scalars['String']['output']>;
  /** The start time of a business hours period, specified in local time using partial-time RFC 3339 format. */
  startLocalTime?: Maybe<Scalars['String']['output']>;
};

/** The brand used for a Buy Now Pay Later payment. */
export enum BuyNowPayLaterPaymentBrand {
  Afterpay = 'AFTERPAY',
  Clearpay = 'CLEARPAY',
  Unknown = 'UNKNOWN'
}

/**
 * Input type used to specify filters on `BuyNowPayLaterPaymentBrand` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type BuyNowPayLaterPaymentBrandFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<BuyNowPayLaterPaymentBrandFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<BuyNowPayLaterPaymentBrand>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<BuyNowPayLaterPaymentBrandFilter>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * Additional details about a Buy Now Pay Later payment type.
 */
export type BuyNowPayLaterPaymentDetails = {
  __typename?: 'BuyNowPayLaterPaymentDetails';
  /** Details about an Afterpay payment. These details are only populated if the `brand` is `AFTERPAY`. */
  afterpayDetails?: Maybe<AfterpayPaymentDetails>;
  /** The brand used for the Buy Now Pay Later payment. */
  brand?: Maybe<BuyNowPayLaterPaymentBrand>;
  /** Details about a Clearpay payment. These details are only populated if the `brand` is `CLEARPAY`. */
  clearpayDetails?: Maybe<ClearpayPaymentDetails>;
};

/**
 * Input type used to specify filters on `BuyNowPayLaterPaymentDetails` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type BuyNowPayLaterPaymentDetailsFilter = {
  /**
   * Used to filter on the `afterpayDetails` field:
   *
   * > Details about an Afterpay payment. These details are only populated if the `brand` is `AFTERPAY`.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  afterpayDetails?: InputMaybe<AfterpayPaymentDetailsFilter>;
  /**
   * Used to filter on the `brand` field:
   *
   * > The brand used for the Buy Now Pay Later payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  brand?: InputMaybe<BuyNowPayLaterPaymentBrandFilter>;
  /**
   * Used to filter on the `clearpayDetails` field:
   *
   * > Details about a Clearpay payment. These details are only populated if the `brand` is `CLEARPAY`.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  clearpayDetails?: InputMaybe<ClearpayPaymentDetailsFilter>;
};

/**
 * Represents the payment details of a card used for a payments.
 *
 * Permissions:PAYMENTS_READ
 */
export type Card = {
  __typename?: 'Card';
  /** The billing address for this card. */
  billingAddress?: Maybe<Address>;
  /**
   * The first six digits of the card number, known as the Bank Identification Number (BIN). Only the Payments API
   * returns this field.
   */
  bin?: Maybe<Scalars['String']['output']>;
  /** The card's brand. */
  cardBrand?: Maybe<CardBrand>;
  /**
   * The type of the card.
   * The Card object includes this field only in response to Payments API calls.
   */
  cardType?: Maybe<CardType>;
  /** The name of the cardholder. */
  cardholderName?: Maybe<Scalars['String']['output']>;
  /**
   * The expiration month of the associated card as an integer, generally between 1
   * and 12. Can be outside that normally valid range on failed payments--we just
   * record this value as we received it.
   */
  expMonth?: Maybe<Scalars['Int']['output']>;
  /** The four-digit year of the card's expiration date. */
  expYear?: Maybe<Scalars['Int']['output']>;
  /**
   * __Not currently set.__ Intended as a Square-assigned identifier, based
   * on the card number, to identify the card across multiple locations within a
   * single application.
   */
  fingerprint?: Maybe<Scalars['ID']['output']>;
  /** Unique ID for this card. Generated by Square. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The last 4 digits of the card number; null if the card number was less than 4 characters. */
  last4?: Maybe<Scalars['String']['output']>;
  /**
   * Indicates whether the Card is prepaid or not.
   * The Card object includes this field only in response to Payments API calls.
   */
  prepaidType?: Maybe<CardPrepaidType>;
};

/**
 * Indicates a card's brand, such as `VISA` or `MASTERCARD`.
 * This enumeration is essentially the union of 3 separate protobuf enums:
 * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
 * This enum is what we present to external clients in our `/v2/payments` API.
 * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
 * This enum is what is used from a [`CardFilter`](https://prototype.sqprod.co/#/docs/squareup.payments.search.Filter.CardFilter#card_brand)
 * that is accepted by Spot's Search API. It includes 3 extra enum values not present on the `Card.Brand` filter
 * and also has an alternate name for 3 enum values.
 * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
 * This enum is what is used within a [`CardTransaction`'s](https://prototype.sqprod.co/#/docs/squareup.esperanto.model.CardTransaction)
 * [`Tender`](https://prototype.sqprod.co/#/docs/squareup.esperanto.model.Tender) on a
 * [`PaymentRecord`](https://prototype.sqprod.co/#/docs/squareup.esperanto.model.PaymentRecord#card_transaction) within Spot.
 * It is just like `CardTenderType` (including the 3 extra values, and 3 renamed
 * values) but also includes 1 additional value.
 * Ideally we would only have a single source enum here. However, to handle the full dataset and all use cases
 * we need to cover, we have defined this as a union of these 3 enums. When an enum value exists on both the
 * public `Card.Brand` enum and the internal enums, but with a different name, we have chosen the public name.
 */
export enum CardBrand {
  /**
   * Comes from the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   */
  Afterpay = 'AFTERPAY',
  /**
   * Comes from the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   */
  Alipay = 'ALIPAY',
  /**
   * Present on all 3 of the source enums:
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  AmericanExpress = 'AMERICAN_EXPRESS',
  /**
   * Comes from the internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) or
   * internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enums.
   */
  Balance = 'BALANCE',
  /**
   * Comes from the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   */
  CashApp = 'CASH_APP',
  /**
   * Comes from the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * Also known as `UNIONPAY` on the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   */
  ChinaUnionpay = 'CHINA_UNIONPAY',
  /**
   * Present on all 3 of the source enums:
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  Discover = 'DISCOVER',
  /**
   * Present on all 3 of the source enums:
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  DiscoverDiners = 'DISCOVER_DINERS',
  /**
   * Present on all 3 of the source enums:
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  Ebt = 'EBT',
  /**
   * Present on all 3 of the source enums:
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  Eftpos = 'EFTPOS',
  /**
   * Present on all 3 of the source enums:
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  Felica = 'FELICA',
  /**
   * Present on all 3 of the source enums:
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  Interac = 'INTERAC',
  /**
   * Present on all 3 of the source enums:
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  Jcb = 'JCB',
  /**
   * Comes from the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * Also known as `MASTER_CARD` on the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   */
  Mastercard = 'MASTERCARD',
  /**
   * Comes from the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * Also known as `UNKNOWN` on the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   */
  OtherBrand = 'OTHER_BRAND',
  /**
   * Comes from the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   */
  Paypay = 'PAYPAY',
  /**
   * Comes from the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   * Not present on the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   */
  SquareAccountBalance = 'SQUARE_ACCOUNT_BALANCE',
  /**
   * Present on all 3 of the source enums:
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  SquareCapitalCard = 'SQUARE_CAPITAL_CARD',
  /**
   * Comes from the public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * Also known as `SQUARE_GIFT_CARD_V2` on the internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType)
   * and [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enums.
   */
  SquareGiftCard = 'SQUARE_GIFT_CARD',
  /**
   * Present on all 3 of the source enums:
   * - The public [`Card.Brand`](https://prototype.sqprod.co/#/docs/squareup.connect.v2.resources.Card.Brand) enum.
   * - The internal [`CardTenderType`](https://prototype.sqprod.co/#/docs/squareup.common.tender.CardTenderType) enum.
   * - The internal [`InstrumentType`](https://prototype.sqprod.co/#/docs/squareup.common.instrument.InstrumentType) enum.
   */
  Visa = 'VISA'
}

/**
 * Input type used to specify filters on `CardBrand` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type CardBrandFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<CardBrandFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<CardBrand>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<CardBrandFilter>;
};

/** Indicates the brand for a co-branded card. */
export enum CardCoBrand {
  Afterpay = 'AFTERPAY',
  Clearpay = 'CLEARPAY',
  Unknown = 'UNKNOWN'
}

/**
 * Input type used to specify filters on `CardCoBrand` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type CardCoBrandFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<CardCoBrandFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<CardCoBrand>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<CardCoBrandFilter>;
};

/**
 * Input type used to specify filters on `Card` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type CardFilter = {
  /**
   * Used to filter on the `billingAddress` field:
   *
   * > The billing address for this card.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  billingAddress?: InputMaybe<AddressFilter>;
  /**
   * Used to filter on the `bin` field:
   *
   * > The first six digits of the card number, known as the Bank Identification
   * Number (BIN). Only the Payments API returns this field.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  bin?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `cardBrand` field:
   *
   * > The card's brand.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  cardBrand?: InputMaybe<CardBrandFilter>;
  /**
   * Used to filter on the `cardCoBrand` field:
   *
   * > The card's co-brand if available. For example, an Afterpay virtual card would have a co-brand of AFTERPAY.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  cardCoBrand?: InputMaybe<CardCoBrandFilter>;
  /**
   * Used to filter on the `cardType` field:
   *
   * > The type of the card.
   * > The Card object includes this field only in response to Payments API calls.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  cardType?: InputMaybe<CardTypeFilter>;
  /**
   * Used to filter on the `cardholderName` field:
   *
   * > The name of the cardholder.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  cardholderName?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `expMonth` field:
   *
   * > The expiration month of the associated card as an integer, generally between
   * 1 and 12. Can be outside that normally valid range on failed payments--we just
   * record this value as we received it.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  expMonth?: InputMaybe<IntFilter>;
  /**
   * Used to filter on the `expYear` field:
   *
   * > The four-digit year of the card's expiration date.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  expYear?: InputMaybe<IntFilter>;
  /**
   * Used to filter on the `fingerprint` field:
   *
   * > Intended as a Square-assigned identifier, based
   * > on the card number, to identify the card across multiple locations within a
   * > single application.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  fingerprint?: InputMaybe<IdFilter>;
  /**
   * Used to filter on the `last4` field:
   *
   * > The last 4 digits of the card number.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  last4?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `prepaidType` field:
   *
   * > Indicates whether the Card is prepaid or not.
   * > The Card object includes this field only in response to Payments API calls.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  prepaidType?: InputMaybe<CardPrepaidTypeFilter>;
};

/**
 * Represents the payment details of a card to be used for payments. These details are determined by the payment token generated by Web Payments SDK.
 *
 * Permissions:PAYMENTS_READ
 */
export type CardOnFile = {
  __typename?: 'CardOnFile';
  /** The billing address for this card. */
  billingAddress?: Maybe<Address>;
  /** The first six digits of the card number, known as the Bank Identification Number (BIN). Only the Payments API returns this field. */
  bin?: Maybe<Scalars['String']['output']>;
  /** The card's brand. */
  cardBrand?: Maybe<CardBrand>;
  /** The type of the card. The Card object includes this field only in response to Payments API calls. */
  cardType?: Maybe<CardType>;
  /** The name of the cardholder. */
  cardholderName?: Maybe<Scalars['String']['output']>;
  /** The card's co-brand if available. For example, an Afterpay virtual card would have a co-brand of AFTERPAY. */
  coBrand?: Maybe<CardCoBrand>;
  /** The customer created using the Customers API to be associated with the card. */
  customer?: Maybe<Customer>;
  /** Indicates whether or not a card can be used for payments. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The expiration month of the associated card as an integer between 1 and 12. */
  expMonth?: Maybe<Scalars['Int']['output']>;
  /** The four-digit year of the card's expiration date. */
  expYear?: Maybe<Scalars['Int']['output']>;
  /** Intended as a Square-assigned identifier, based on the card number, to identify the card across multiple locations within a single application. */
  fingerprint?: Maybe<Scalars['ID']['output']>;
  /** Unique ID for this card. Generated by Square. */
  id: Scalars['ID']['output'];
  /** The last 4 digits of the card number. */
  last4?: Maybe<Scalars['String']['output']>;
  /** The merchant associated with the card. */
  merchant?: Maybe<Merchant>;
  /** The merchantId associated with the card. */
  merchantId: Scalars['ID']['output'];
  /** Indicates whether the Card is prepaid or not. The Card object includes this field only in response to Payments API calls. */
  prepaidType?: Maybe<CardPrepaidType>;
  /** An optional user-defined reference ID that associates this card with another entity in an external system. For example, a customer ID from an external customer management system. */
  referenceId?: Maybe<Scalars['ID']['output']>;
  /** Current version number of the card. Increments with each card update. Requests to update an existing Card object will be rejected unless the version in the request matches the current version for the Card. */
  version?: Maybe<Scalars['Int']['output']>;
};

/**
 * Contains information of CardOnFile query result.
 *
 * Permissions:PAYMENTS_READ
 */
export type CardOnFileConnection = {
  __typename?: 'CardOnFileConnection';
  /** CardOnFile query result. */
  nodes: Array<CardOnFile>;
  /** Provides information about the specific fetched page. This implements the PageInfo specification from the [Relay GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo). */
  pageInfo: PageInfo;
};

/** The filter to return CardOnFile. */
export type CardOnFileFilter = {
  /** Optionally limits the results to cards associated with the buyer supplied. Only a single value is accepted. */
  buyerId?: InputMaybe<BasicIdFilter>;
  /** Optionally Limits the results to cards associated with the customer supplied. By default, all cards owned by the merchant are returned. Only a single value is accepted. */
  customerId?: InputMaybe<BasicIdFilter>;
  /** Optional card on file ID to filter with. Only a single value is accepted. */
  id?: InputMaybe<BasicIdFilter>;
  /** Optionally includes disabled cards. By default, all enabled cards owned by the merchant are returned. */
  includeDisabled?: InputMaybe<BasicBooleanFilter>;
  /** The merchant ID for the card on files to query. Only a single value is accepted. */
  merchantId: BasicIdFilter;
  /** Optionally limits the results to cards associated with the reference_id supplied.  Only a single value is accepted. */
  referenceId?: InputMaybe<BasicIdFilter>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * Reflects the current status of a card payment. Contains only non-confidential information.
 */
export type CardPaymentDetails = {
  __typename?: 'CardPaymentDetails';
  /** For EMV payments, the cryptogram generated for the payment. */
  applicationCryptogram?: Maybe<Scalars['ID']['output']>;
  /** For EMV payments, the application ID identifies the EMV application used for the payment. */
  applicationIdentifier?: Maybe<Scalars['ID']['output']>;
  /** For EMV payments, the human-readable name of the EMV application used for the payment. */
  applicationName?: Maybe<Scalars['String']['output']>;
  /** The status code returned by the card issuer that describes the payment's authorization status. */
  authResultCode?: Maybe<Scalars['String']['output']>;
  /** The status code returned from the Address Verification System (AVS) check. */
  avsStatus?: Maybe<CardPaymentDetailsAvsStatus>;
  /** The credit card's non-confidential details. */
  card?: Maybe<Card>;
  /** The timeline for card payments. */
  cardPaymentTimeline?: Maybe<CardPaymentTimeline>;
  /** The status code returned from the Card Verification Value (CVV) check. */
  cvvStatus?: Maybe<CardPaymentDetailsCvvStatus>;
  /** The method used to enter the card's details for the payment. */
  entryMethod?: Maybe<CardPaymentDetailsEntryMethod>;
  /** Information about errors encountered during the request. */
  errors: Array<Error>;
  /** Whether the card must be physically present for the payment to be refunded.  If set to `true`, the card must be present. */
  refundRequiresCardPresence?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The statement description sent to the card networks.
   * Note: The actual statement description varies and is likely to be truncated and appended with
   * additional information on a per issuer basis.
   */
  statementDescription?: Maybe<Scalars['String']['output']>;
  /** The card payment's current state. */
  status?: Maybe<CardPaymentDetailsStatus>;
  /** For EMV payments, the method used to verify the cardholder's identity. */
  verificationMethod?: Maybe<CardPaymentDetailsVerificationMethod>;
  /** For EMV payments, the results of the cardholder verification. */
  verificationResults?: Maybe<CardPaymentDetailsVerificationResult>;
};

/** Enumeration of possible status codes returned from an Address Verification System (AVS) check. */
export enum CardPaymentDetailsAvsStatus {
  AvsAccepted = 'AVS_ACCEPTED',
  AvsNotChecked = 'AVS_NOT_CHECKED',
  AvsRejected = 'AVS_REJECTED'
}

/**
 * Input type used to specify filters on `CardPaymentDetailsAvsStatus` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type CardPaymentDetailsAvsStatusFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<CardPaymentDetailsAvsStatusFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<CardPaymentDetailsAvsStatus>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<CardPaymentDetailsAvsStatusFilter>;
};

/** Enumeration of possible status codes returned from a Card Verification Value (CVV) check. */
export enum CardPaymentDetailsCvvStatus {
  CvvAccepted = 'CVV_ACCEPTED',
  CvvNotChecked = 'CVV_NOT_CHECKED',
  CvvRejected = 'CVV_REJECTED'
}

/**
 * Input type used to specify filters on `CardPaymentDetailsCvvStatus` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type CardPaymentDetailsCvvStatusFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<CardPaymentDetailsCvvStatusFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<CardPaymentDetailsCvvStatus>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<CardPaymentDetailsCvvStatusFilter>;
};

/** The method used to enter a card's details for the payment. */
export enum CardPaymentDetailsEntryMethod {
  /** Card was tapped to a reader (eg NFC). */
  Contactless = 'CONTACTLESS',
  /** Card was dipped into an EMV reader, and went through the EMV payment flow. */
  Emv = 'EMV',
  /** Card was keyed in. A CNP payment. */
  Keyed = 'KEYED',
  /** Card data was pulled from an instrument store. */
  OnFile = 'ON_FILE',
  /** Card was swiped through a reader or stand. */
  Swiped = 'SWIPED'
}

/**
 * Input type used to specify filters on `CardPaymentDetailsEntryMethod` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type CardPaymentDetailsEntryMethodFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<CardPaymentDetailsEntryMethodFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<CardPaymentDetailsEntryMethod>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<CardPaymentDetailsEntryMethodFilter>;
};

/**
 * Input type used to specify filters on `CardPaymentDetails` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type CardPaymentDetailsFilter = {
  /**
   * Used to filter on the `applicationCryptogram` field:
   *
   * > For EMV payments, the cryptogram generated for the payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  applicationCryptogram?: InputMaybe<IdFilter>;
  /**
   * Used to filter on the `applicationIdentifier` field:
   *
   * > For EMV payments, the application ID identifies the EMV application used for the payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  applicationIdentifier?: InputMaybe<IdFilter>;
  /**
   * Used to filter on the `applicationName` field:
   *
   * > For EMV payments, the human-readable name of the EMV application used for the payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  applicationName?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `authResultCode` field:
   *
   * > The status code returned by the card issuer that describes the payment's authorization status.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  authResultCode?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `avsStatus` field:
   *
   * > The status code returned from the Address Verification System (AVS) check.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  avsStatus?: InputMaybe<CardPaymentDetailsAvsStatusFilter>;
  /**
   * Used to filter on the `card` field:
   *
   * > The credit card's non-confidential details.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  card?: InputMaybe<CardFilter>;
  /**
   * Used to filter on the `cardPaymentTimeline` field:
   *
   * > The timeline for card payments.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  cardPaymentTimeline?: InputMaybe<CardPaymentTimelineFilter>;
  /**
   * Used to filter on the `cvvStatus` field:
   *
   * > The status code returned from the Card Verification Value (CVV) check.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  cvvStatus?: InputMaybe<CardPaymentDetailsCvvStatusFilter>;
  /**
   * Used to filter on the `entryMethod` field:
   *
   * > The method used to enter the card's details for the payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  entryMethod?: InputMaybe<CardPaymentDetailsEntryMethodFilter>;
  /**
   * Used to filter on the `errors` field:
   *
   * > Information about errors encountered during the request.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  errors?: InputMaybe<ErrorFilter>;
  /**
   * Used to filter on the `refundRequiresCardPresence` field:
   *
   * > Whether the card must be physically present for the payment to be refunded.  If set to `true`, the card must be present.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  refundRequiresCardPresence?: InputMaybe<BooleanFilter>;
  /**
   * Used to filter on the `statementDescription` field:
   *
   * > The statement description sent to the card networks.
   * > Note: The actual statement description varies and is likely to be truncated and appended with
   * > additional information on a per issuer basis.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  statementDescription?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `status` field:
   *
   * > The card payment's current state.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  status?: InputMaybe<CardPaymentDetailsStatusFilter>;
  /**
   * Used to filter on the `verificationMethod` field:
   *
   * > For EMV payments, the method used to verify the cardholder's identity.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  verificationMethod?: InputMaybe<CardPaymentDetailsVerificationMethodFilter>;
  /**
   * Used to filter on the `verificationResults` field:
   *
   * > For EMV payments, the results of the cardholder verification.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  verificationResults?: InputMaybe<CardPaymentDetailsVerificationResultFilter>;
};

/** A card payment's current state. */
export enum CardPaymentDetailsStatus {
  Authorized = 'AUTHORIZED',
  Captured = 'CAPTURED',
  Failed = 'FAILED',
  Voided = 'VOIDED'
}

/**
 * Input type used to specify filters on `CardPaymentDetailsStatus` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type CardPaymentDetailsStatusFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<CardPaymentDetailsStatusFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<CardPaymentDetailsStatus>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<CardPaymentDetailsStatusFilter>;
};

/** Enumeration of possible methods used for EMV paymentsto verify the cardholder's identity. */
export enum CardPaymentDetailsVerificationMethod {
  None = 'NONE',
  OnDevice = 'ON_DEVICE',
  Pin = 'PIN',
  PinAndSignature = 'PIN_AND_SIGNATURE',
  Signature = 'SIGNATURE'
}

/**
 * Input type used to specify filters on `CardPaymentDetailsVerificationMethod` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type CardPaymentDetailsVerificationMethodFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<CardPaymentDetailsVerificationMethodFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<CardPaymentDetailsVerificationMethod>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<CardPaymentDetailsVerificationMethodFilter>;
};

/** Enumeration of possible card verification results for EMV payments. */
export enum CardPaymentDetailsVerificationResult {
  Failure = 'FAILURE',
  Success = 'SUCCESS',
  Unknown = 'UNKNOWN'
}

/**
 * Input type used to specify filters on `CardPaymentDetailsVerificationResult` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type CardPaymentDetailsVerificationResultFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<CardPaymentDetailsVerificationResultFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<CardPaymentDetailsVerificationResult>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<CardPaymentDetailsVerificationResultFilter>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * The timeline for card payments.
 */
export type CardPaymentTimeline = {
  __typename?: 'CardPaymentTimeline';
  /** The timestamp when the payment was authorized, in RFC 3339 format. */
  authorizedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The timestamp when the payment was captured, in RFC 3339 format. */
  capturedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The timestamp when the payment was voided, in RFC 3339 format. */
  voidedAt?: Maybe<Scalars['DateTime']['output']>;
};

/**
 * Input type used to specify filters on `CardPaymentTimeline` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type CardPaymentTimelineFilter = {
  /**
   * Used to filter on the `authorizedAt` field:
   *
   * > The timestamp when the payment was authorized, in RFC 3339 format.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  authorizedAt?: InputMaybe<DateTimeFilter>;
  /**
   * Used to filter on the `capturedAt` field:
   *
   * > The timestamp when the payment was captured, in RFC 3339 format.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  capturedAt?: InputMaybe<DateTimeFilter>;
  /**
   * Used to filter on the `voidedAt` field:
   *
   * > The timestamp when the payment was voided, in RFC 3339 format.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  voidedAt?: InputMaybe<DateTimeFilter>;
};

/** Indicates a card's prepaid type, such as `NOT_PREPAID` or `PREPAID`. */
export enum CardPrepaidType {
  NotPrepaid = 'NOT_PREPAID',
  Prepaid = 'PREPAID',
  UnknownPrepaidType = 'UNKNOWN_PREPAID_TYPE'
}

/**
 * Input type used to specify filters on `CardPrepaidType` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type CardPrepaidTypeFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<CardPrepaidTypeFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<CardPrepaidType>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<CardPrepaidTypeFilter>;
};

/** Indicates a card's type, such as `CREDIT` or `DEBIT`. */
export enum CardType {
  Credit = 'CREDIT',
  Debit = 'DEBIT',
  UnknownCardType = 'UNKNOWN_CARD_TYPE'
}

/**
 * Input type used to specify filters on `CardType` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type CardTypeFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<CardTypeFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<CardType>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<CardTypeFilter>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * Additional details about `WALLET` type payments with the `brand` of `CASH_APP`.
 */
export type CashAppPaymentDetails = {
  __typename?: 'CashAppPaymentDetails';
  /** $Cashtag of the Cash App account holder. */
  buyerCashtag?: Maybe<Scalars['String']['output']>;
  /** The country of the Cash App account holder. */
  buyerCountryCode?: Maybe<Country>;
  /** The name of the Cash App account holder. */
  buyerFullName?: Maybe<Scalars['String']['output']>;
};

/**
 * Input type used to specify filters on `CashAppPaymentDetails` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type CashAppPaymentDetailsFilter = {
  /**
   * Used to filter on the `buyerCashtag` field:
   *
   * > $Cashtag of the Cash App account holder.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  buyerCashtag?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `buyerCountryCode` field:
   *
   * > The country of the Cash App account holder.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  buyerCountryCode?: InputMaybe<CountryFilter>;
  /**
   * Used to filter on the `buyerFullName` field:
   *
   * > The name of the Cash App account holder.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  buyerFullName?: InputMaybe<StringFilter>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * Stores details about a cash payment. Contains only non-confidential information. For more information, see
 * [Take Cash Payments](https://developer.squareup.com/docs/payments-api/take-payments/cash-payments).
 */
export type CashPaymentDetails = {
  __typename?: 'CashPaymentDetails';
  /** The amount and currency of the money supplied by the buyer. */
  buyerSuppliedMoney?: Maybe<Money>;
  /**
   * The amount of change due back to the buyer.
   * This read-only field is calculated from the `amountMoney` and `buyerSuppliedMoney` fields.
   */
  changeBackMoney?: Maybe<Money>;
};

/**
 * Input type used to specify filters on `CashPaymentDetails` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type CashPaymentDetailsFilter = {
  /**
   * Used to filter on the `buyerSuppliedMoney` field:
   *
   * > The amount and currency of the money supplied by the buyer.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  buyerSuppliedMoney?: InputMaybe<MoneyFilter>;
  /**
   * Used to filter on the `changeBackMoney` field:
   *
   * > The amount of change due back to the buyer.
   * > This read-only field is calculated from the `amountMoney` and `buyerSuppliedMoney` fields.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  changeBackMoney?: InputMaybe<MoneyFilter>;
};

/** CatalogAttributeBasicStringFilter is used for filtering a query with a string attribute */
export type CatalogAttributeBasicStringFilter = {
  /** The name of the attribute to be searched. Matching of the attribute name is exact. */
  attributeName: Scalars['String']['input'];
  /** The desired values of the search attribute. Matching of the attribute values is exact and case insensitive. A maximum of 250 values may be searched in a request. */
  value: Scalars['String']['input'];
};

/** CatalogAttributeListLengthFilter is used for filtering a query with a list attribute */
export type CatalogAttributeListLengthFilter = {
  /** The name of the attribute to be searched. */
  attributeName: Scalars['String']['input'];
  /** The desired maximum value for the search attribute (inclusive). */
  max?: InputMaybe<Scalars['Int']['input']>;
  /** The desired minimum value for the search attribute (inclusive). */
  min?: InputMaybe<Scalars['Int']['input']>;
};

/** CatalogAttributeRangeFilter is used for filtering a query with an int attribute */
export type CatalogAttributeRangeFilter = {
  /** The name of the attribute to be searched. */
  attributeName: Scalars['String']['input'];
  /** The desired maximum value for the search attribute (inclusive). */
  max?: InputMaybe<Scalars['Int']['input']>;
  /** The desired minimum value for the search attribute (inclusive). */
  min?: InputMaybe<Scalars['Int']['input']>;
};

/** CatalogAttributeSort is used for filtering the result in an item query */
export type CatalogAttributeSort = {
  /** The name of the attribute used to sort the result. */
  attributeName: Scalars['String']['input'];
  /**
   * The first attribute value to be returned by the query. Ascending sorts will return only objects with this value or greater,
   * while descending sorts will return only objects with this value or less. If unset,
   * start at the beginning (for ascending sorts) or end (for descending sorts).
   */
  initialAttributeValue?: InputMaybe<Scalars['String']['input']>;
  /** ASC or DESC */
  sortOrder?: InputMaybe<SortOrder>;
};

/** CatalogAttributeStringSetFilter is used for filtering a query with a string set or array attribute */
export type CatalogAttributeStringSetFilter = {
  /** The name of the attribute to be searched. Matching of the attribute name is exact. */
  attributeName: Scalars['String']['input'];
  /** The desired values of the search attribute. Matching of the attribute values is exact and case insensitive. A maximum of 250 values may be searched in a request. */
  value: Array<Scalars['String']['input']>;
};

/**
 * A category to which a CatalogItem instance belongs.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogCategory = CatalogObject & {
  __typename?: 'CatalogCategory';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /**
   * Custom attributes and their associated values
   * Application-defined custom attributes that are set at a global (location-independent) level. Custom attribute values are intended to store additional information about a catalog object or associations with an entity in another system. Do not use custom attributes to store any sensitive information (personally identifiable information, card details, etc.).
   */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /**
   * An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a "#" character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object.
   * When the server receives the new object, it will supply a unique identifier that replaces the temporary identifier for all future references.
   */
  id: Scalars['ID']['output'];
  /** The images associated with this CatalogCategory instance. Currently these images are not displayed by Square, but are free to be displayed in 3rd party applications. */
  images?: Maybe<Array<Maybe<CatalogImage>>>;
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /**
   * The category name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.
   * Max Length 255
   */
  name?: Maybe<Scalars['String']['output']>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/**
 * Provides information when CatalogCustomAttributeValue.value is Boolean.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogCustomAttributeBoolean = {
  __typename?: 'CatalogCustomAttributeBoolean';
  /** A true or false value. */
  value?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Custom attributes are intended to store additional information about a catalog object or to associate a catalog object with an entity in another system.
 * Do not use custom attributes to store any sensitive information (personally identifiable information, card details, etc.).
 *
 * Permissions:ITEMS_READ
 */
export type CatalogCustomAttributeDefinition = CatalogObject & {
  __typename?: 'CatalogCustomAttributeDefinition';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** The set of Catalog Object Types that this Custom Attribute may be applied to. Currently, only ITEM and ITEM_VARIATION are allowed. At least one type must be included. */
  allowedObjectTypes?: Maybe<Array<Maybe<CatalogObjectType>>>;
  /** The visibility of a custom attribute to applications other than the application that created the attribute. */
  appVisibility?: Maybe<CatalogCustomAttributeDefinitionAppVisibility>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** Configuration for CatalogCustomAttributeDefinition */
  config?: Maybe<CatalogCustomAttributeDefinitionConfig>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /**
   * Seller-oriented description of the meaning of this Custom Attribute, any constraints that the seller should observe, etc. May be displayed as a tooltip in Square UIs.
   * Max Length 255
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a "#" character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object.
   * When the server receives the new object, it will supply a unique identifier that replaces the temporary identifier for all future references.
   */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The name of the desired custom attribute key that can be used to access the custom attribute value on catalog objects. Cannot be modified after the custom attribute definition has been created. Must be between 1 and 60 characters, and may only contain the characters [a-zA-Z0-9_-].
   * Max Length 60 Min Length 1
   */
  key?: Maybe<Scalars['String']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /**
   * The name of this definition for API and seller-facing UI purposes. The name must be unique within the (merchant, application) pair. Required. May not be empty and may not exceed 255 characters. Can be modified after creation.
   * Max Length 255 Min Length 1
   */
  name?: Maybe<Scalars['String']['output']>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** The visibility of a custom attribute in seller-facing UIs (including Square Point of Sale applications and Square Dashboard). May be modified. */
  sellerVisibility?: Maybe<CatalogCustomAttributeDefinitionSellerVisibility>;
  /** Contains information about the application that created this custom attribute definition. */
  sourceApplication?: Maybe<CatalogSourceApplication>;
  /** The type of this custom attribute. Cannot be modified after creation. Required. */
  type?: Maybe<CatalogCustomAttributeType>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The number of custom attributes that reference this custom attribute definition. Set by the server in response to a ListCatalog request with include_counts set to true. If the actual count is greater than 100, custom_attribute_usage_count will be set to 100. */
  usageCount?: Maybe<Scalars['Int']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/** Defines the visibility of a CatalogCustomAttributeDefinition to applications other than their creating application. */
export enum CatalogCustomAttributeDefinitionAppVisibility {
  /** Other applications cannot read this custom attribute. */
  AppVisibilityHidden = 'APP_VISIBILITY_HIDDEN',
  /** Other applications can read this custom attribute definition and values. */
  AppVisibilityReadOnly = 'APP_VISIBILITY_READ_ONLY',
  /** Other applications can read and write custom attribute values on objects. They can read but cannot edit the custom attribute definition. */
  AppVisibilityReadWriteValues = 'APP_VISIBILITY_READ_WRITE_VALUES'
}

/** Defines the config for CatalogCustomAttributeDefinition. */
export type CatalogCustomAttributeDefinitionConfig = CatalogCustomAttributeNumberConfig | CatalogCustomAttributeSelectionConfig | CatalogCustomAttributeStringConfig;

/** Defines the visibility of a CatalogCustomAttributeDefinition to sellers in Square client applications, Square APIs or in Square UIs (including Square Point of Sale applications and Square Dashboard). */
export enum CatalogCustomAttributeDefinitionSellerVisibility {
  /** Sellers cannot read this custom attribute in Square client applications or Square APIs. */
  SellerVisibilityHidden = 'SELLER_VISIBILITY_HIDDEN',
  /** Sellers can read and write this custom attribute value in catalog objects, but cannot edit the custom attribute definition. */
  SellerVisibilityReadWriteValues = 'SELLER_VISIBILITY_READ_WRITE_VALUES'
}

/** CatalogCustomAttributeFilter allows custom attribute query expressions for the item query */
export type CatalogCustomAttributeFilter = {
  /**
   * A query expression to filter items or item variations by matching their custom attributes' boolean_value property
   * values against the specified Boolean expression. Exactly one of string_filter, number_filter, selection_uids_filter,
   * or bool_filter must be specified.
   */
  bool?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * A query expression to filter items or item variations by matching their custom attributes'
   * custom_attribute_definition_id property value against the the specified id. Exactly one of custom_attribute_definition_id or key must be specified.
   */
  id: Scalars['ID']['input'];
  /**
   * A query expression to filter items or item variations by matching their custom attributes' key property value against
   * the specified key. Exactly one of custom_attribute_definition_id or key must be specified.
   */
  key?: InputMaybe<Scalars['String']['input']>;
  /** The upper bound of the number range. At least one of min or max must be specified. If unspecified, the results will have no maximum value. */
  max?: InputMaybe<Scalars['Decimal']['input']>;
  /** The lower bound of the number range. At least one of min or max must be specified. If unspecified, the results will have no minimum value. */
  min?: InputMaybe<Scalars['Decimal']['input']>;
  /**
   * A query expression to filter items or item variations by matching their custom attributes' string_value property
   * value against the specified text. Exactly one of string_filter, number_filter, selection_uids_filter, or bool_filter
   * must be specified.
   */
  string?: InputMaybe<Scalars['String']['input']>;
  /**
   * A query expression to filter items or item variations by matching their custom attributes' selection_uid_values
   * values against the specified selection uids. Exactly one of string_filter, number_filter, selection_uids_filter, or bool_filter must be specified.
   */
  uids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

/**
 * Provides information when CatalogCustomAttributeValue.value is Number.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogCustomAttributeNumber = {
  __typename?: 'CatalogCustomAttributeNumber';
  /** Contains a string representation of a decimal number, using a . as the decimal separator. */
  value?: Maybe<Scalars['Decimal']['output']>;
};

/**
 * CatalogCustomAttributeNumberConfig is present when CatalogCustomAttributeDefinition is a NUMBER type.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogCustomAttributeNumberConfig = {
  __typename?: 'CatalogCustomAttributeNumberConfig';
  /**
   * An integer between 0 and 5 that represents the maximum number of positions allowed after the decimal in number custom attribute values For example:
   * if the precision is 0, the quantity can be 1, 2, 3, etc.
   * if the precision is 1, the quantity can be 0.1, 0.2, etc.
   * if the precision is 2, the quantity can be 0.01, 0.12, etc.
   * Default: 5
   * Max 5
   */
  precision?: Maybe<Scalars['Int']['output']>;
};

/**
 * Provides information when CatalogCustomAttributeValue.value is Selection.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogCustomAttributeSelection = {
  __typename?: 'CatalogCustomAttributeSelection';
  /** One or more choices from allowed_selections. */
  uids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
};

/**
 * CatalogCustomAttributeSelectionConfig is present when CatalogCustomAttributeDefinition is a SELECTION type.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogCustomAttributeSelectionConfig = {
  __typename?: 'CatalogCustomAttributeSelectionConfig';
  /** The set of valid CatalogCustomAttributeSelections. Up to a maximum of 100 selections can be defined. Can be modified. */
  allowedSelections?: Maybe<Array<Maybe<CatalogCustomAttributeSelectionDefinition>>>;
  /** The maximum number of selections that can be set. The maximum value for this attribute is 100. The default value is 1. The value can be modified, but changing the value will not affect existing custom attribute values on objects. Clients need to handle custom attributes with more selected values than allowed by this limit. */
  maxAllowedSelections?: Maybe<Scalars['Int']['output']>;
};

/**
 * A named selection for this SELECTION-type custom attribute definition.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogCustomAttributeSelectionDefinition = {
  __typename?: 'CatalogCustomAttributeSelectionDefinition';
  /**
   * Selection name, unique within allowed_selections.
   * Max Length 255 Min Length 1
   */
  name?: Maybe<Scalars['String']['output']>;
  /** Unique ID set by Square. */
  uid?: Maybe<Scalars['ID']['output']>;
};

/**
 * Provides information when CatalogCustomAttributeValue.value is String.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogCustomAttributeString = {
  __typename?: 'CatalogCustomAttributeString';
  /** The string value of the custom attribute. */
  value?: Maybe<Scalars['String']['output']>;
};

/**
 * CatalogCustomAttributeStringConfig is present when CatalogCustomAttributeDefinition is a STRING type.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogCustomAttributeStringConfig = {
  __typename?: 'CatalogCustomAttributeStringConfig';
  /** If true, each Custom Attribute instance associated with this Custom Attribute Definition must have a unique value within the seller's catalog. For example, this may be used for a value like a SKU that should not be duplicated within a seller's catalog. May not be modified after the definition has been created. */
  enforceUniqueness?: Maybe<Scalars['Boolean']['output']>;
};

/** Defines the possible types for a custom attribute. */
export enum CatalogCustomAttributeType {
  /** A true or false value. */
  Boolean = 'BOOLEAN',
  /** A decimal string representation of a number. Can support up to 5 digits after the decimal point. */
  Number = 'NUMBER',
  /** One or more choices from allowed_selections. */
  Selection = 'SELECTION',
  /** A free-form string containing up to 255 characters. */
  String = 'STRING'
}

/**
 * An instance of a custom attribute.
 * Custom attributes can be defined and added to ITEM and ITEM_VARIATION type catalog objects.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogCustomAttributeValue = {
  __typename?: 'CatalogCustomAttributeValue';
  /** Contains information defining a custom attribute. */
  definition?: Maybe<CatalogCustomAttributeDefinition>;
  /** Provides information for CatalogCustomAttributeValue.value */
  value?: Maybe<CatalogCustomAttributeValueUnion>;
};

/** Provides information for CatalogCustomAttributeValue.value */
export type CatalogCustomAttributeValueUnion = CatalogCustomAttributeBoolean | CatalogCustomAttributeNumber | CatalogCustomAttributeSelection | CatalogCustomAttributeString;

/**
 * A discount applicable to items.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogDiscount = CatalogObject & {
  __typename?: 'CatalogDiscount';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /**
   * The amount of the discount. Specify an amount of 0 if discountType is VARIABLE_AMOUNT.
   * Do not use this field for percentage-based or variable discounts.
   */
  amountMoney?: Maybe<Money>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /** Indicates whether the discount is a fixed amount or percentage, or entered at the time of sale. */
  discountType?: Maybe<CatalogDiscountType>;
  /**
   * An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a "#" character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object.
   * When the server receives the new object, it will supply a unique identifier that replaces the temporary identifier for all future references.
   */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The color of the discount display label in the Square Point of Sale app. This must be a valid hex color code. */
  labelColor?: Maybe<Scalars['HexColor']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /**
   * Indicates whether this discount should reduce the price used to calculate tax.
   * Most discounts should use MODIFY_TAX_BASIS. However, in some circumstances taxes must be calculated based on an item's price, ignoring a particular discount. For example, in many US jurisdictions, a manufacturer coupon or instant rebate reduces the price a customer pays but does not reduce the sale price used to calculate how much sales tax is due. In this case, the discount representing that manufacturer coupon should have DO_NOT_MODIFY_TAX_BASIS for this field.
   * If you are unsure whether you need to use this field, consult your tax professional.
   */
  modifyTaxBasis?: Maybe<CatalogDiscountModifyTaxBasis>;
  /**
   * The discount name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.
   * Max Length 255
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The percentage of the discount as a string representation of a decimal number, using a . as the decimal separator and without a % sign. A value of 7.5 corresponds to 7.5%. Specify a percentage of 0 if discount_type is VARIABLE_PERCENTAGE.
   * Do not use this field for amount-based or variable discounts.
   */
  percentage?: Maybe<Scalars['String']['output']>;
  /** Indicates whether a mobile staff member needs to enter their PIN to apply the discount to a payment in the Square Point of Sale app. */
  pinRequired?: Maybe<Scalars['Boolean']['output']>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

export enum CatalogDiscountModifyTaxBasis {
  /** Application of the discount will not modify the tax basis. */
  DoNotModifyTaxBasis = 'DO_NOT_MODIFY_TAX_BASIS',
  /** Application of the discount will modify the tax basis. */
  ModifyTaxBasis = 'MODIFY_TAX_BASIS'
}

export enum CatalogDiscountType {
  /** Apply the discount as a fixed amount (e.g., $1.00) off the item price. */
  FixedAmount = 'FIXED_AMOUNT',
  /** Apply the discount as a fixed percentage (e.g., 5%) off the item price. */
  FixedPercentage = 'FIXED_PERCENTAGE',
  /** Apply the discount as a variable amount off the item price. The amount will be specified at the time of sale. */
  VariableAmount = 'VARIABLE_AMOUNT',
  /** Apply the discount as a variable percentage off the item price. The percentage will be specified at the time of sale. */
  VariablePercentage = 'VARIABLE_PERCENTAGE'
}

/**
 * An image file to use in Square catalogs.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogImage = CatalogObject & {
  __typename?: 'CatalogImage';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** A caption that describes what is shown in the image. Displayed in the Square Online Store. This is a searchable attribute for use in applicable query filters. */
  caption?: Maybe<Scalars['String']['output']>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /**
   * An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a "#" character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object.
   * When the server receives the new object, it will supply a unique identifier that replaces the temporary identifier for all future references.
   */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** The internal name to identify this image in calls to the Square API. */
  name?: Maybe<Scalars['String']['output']>;
  /** The immutable order ID for this image object created by the Photo Studio service in Square Online Store. */
  photoStudioOrderId?: Maybe<Scalars['ID']['output']>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The URL of this image, generated by Square after an image is uploaded using the CreateCatalogImage endpoint. */
  url?: Maybe<Scalars['Url']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/**
 * An CatalogObject instance of the ITEM type, also referred to as an item, in the catalog.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogItem = CatalogObject & {
  __typename?: 'CatalogItem';
  /**
   * The text of the item's display label in the Square Point of Sale app. Only up to the first five characters of the string are used. This attribute is searchable, and its value length is of Unicode code points.
   * Max Length 24
   */
  abbreviation?: Maybe<Scalars['String']['output']>;
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, the item can be added to electronically fulfilled orders from the merchant's online store. */
  availableElectronically?: Maybe<Scalars['Boolean']['output']>;
  /** If true, the item can be added to pickup orders from the merchant's online store. */
  availableForPickup?: Maybe<Scalars['Boolean']['output']>;
  /** If true, the item can be added to shipping orders from the merchant's online store. */
  availableOnline?: Maybe<Scalars['Boolean']['output']>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** The item's category, if any. */
  category?: Maybe<CatalogCategory>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /**
   * The item's description. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.
   * Max Length 4096
   */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * The item's description as expressed in valid HTML elements. The length of this field value, including those of HTML tags, is of Unicode points.
   * With application query filters, the text values of the HTML elements and attributes are searchable. Invalid or unsupported HTML elements or attributes are ignored.
   */
  descriptionHtml?: Maybe<Scalars['String']['output']>;
  /** A server-generated plaintext version of the description_html field, without formatting tags. */
  descriptionPlaintext?: Maybe<Scalars['String']['output']>;
  /**
   * An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a "#" character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object.
   * When the server receives the new object, it will supply a unique identifier that replaces the temporary identifier for all future references.
   */
  id: Scalars['ID']['output'];
  /** The images associated with this CatalogItem instance. These images will be shown to customers in Square Online Store. The first image will show up as the icon for this item in POS. */
  images?: Maybe<Array<Maybe<CatalogImage>>>;
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The color of the item's display label in the Square Point of Sale app. This must be a valid hex color code. */
  labelColor?: Maybe<Scalars['HexColor']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** A set of CatalogItemModifierListInfo objects representing the modifier lists that apply to this item, along with the overrides and min and max limits that are specific to this item. Modifier lists may also be added to or deleted from an item using UpdateItemModifierLists. */
  modifierListInfos?: Maybe<Array<Maybe<CatalogItemModifierListInfo>>>;
  /**
   * The item's name. This is a searchable attribute for use in applicable query filters, its value must not be empty, and the length is of Unicode code points.
   * Max Length 512
   */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * List of CatalogItemOption for this item. Used to manage and group item variations in a specified order.
   * Maximum: 6
   */
  options?: Maybe<Array<Maybe<CatalogItemOption>>>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The product type of the item. May not be changed once an item has been created.
   * Only items of product type REGULAR or APPOINTMENTS_SERVICE may be created by this API; items with other product types are read-only.
   */
  productType?: Maybe<CatalogItemProductType>;
  /**
   * If false, the Square Point of Sale app will present the CatalogItem's details screen immediately, allowing the merchant to choose CatalogModifiers before adding the item to the cart. This is the default behavior.
   * If true, the Square Point of Sale app will immediately add the item to the cart with the pre-selected modifiers, and merchants can edit modifiers by drilling down onto the item's details.
   * Third-party clients are encouraged to implement similar behaviors.
   */
  skipModifierScreen?: Maybe<Scalars['Boolean']['output']>;
  /**
   * A name to sort the item by. If this name is unspecified, namely, the sort_name field is absent, the regular name field is used for sorting.
   * Its value must not be empty. It is currently supported for sellers of the Japanese locale only
   */
  sortName?: Maybe<Scalars['String']['output']>;
  /** A set of the taxes enabled for this item. When updating an item, any taxes listed here will be added to the item. */
  taxes?: Maybe<Array<Maybe<CatalogTax>>>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** A list of CatalogItemVariations for this item. */
  variations?: Maybe<Array<Maybe<CatalogItemVariation>>>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/**
 * Contains information of items query result.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogItemConnection = {
  __typename?: 'CatalogItemConnection';
  /** List of CatalogItems */
  nodes: Array<CatalogItem>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/** Used for filtering results for Items of CatalogQueries */
export type CatalogItemFilter = {
  /** Filters for CatalogItems that belong to one of the specified CatalogCategory's. */
  categoryId?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * The customer attribute filter to return items or item variations matching the specified custom attribute expressions.
   * A maximum number of 10 custom attribute expressions are supported in a single call.
   */
  customAttribute?: InputMaybe<Array<InputMaybe<CatalogCustomAttributeFilter>>>;
  /** The enabled location IDs. An item must be enabled at all of the Location IDs listed here. */
  enabledLocationId?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** The Square-issued ID of the merchant. */
  merchantId: BasicIdFilter;
  /** The product types query expression to return items having the specified product types. */
  productType?: InputMaybe<CatalogItemProductTypeFilter>;
  /** The stock-level query expression to return items with the specified stock levels in their variations */
  stockLevel?: InputMaybe<Array<InputMaybe<CatalogStockLevel>>>;
  /**
   * The text filter expression to return items containing specified text in the name, description,
   * or abbreviation attribute value of an item, or in the name, sku, or upc attribute value of an item variation.
   */
  text?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Options to control the properties of a CatalogModifierList applied to a CatalogItem instance.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogItemModifierListInfo = {
  __typename?: 'CatalogItemModifierListInfo';
  /** If true, enable this CatalogModifierList. The default value is true. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** If 0 or larger, the largest number of CatalogModifiers that can be selected from this CatalogModifierList. */
  maxSelectedModifiers?: Maybe<Scalars['JsonSafeLong']['output']>;
  /** If 0 or larger, the smallest number of CatalogModifiers that must be selected from this CatalogModifierList. */
  minSelectedModifiers?: Maybe<Scalars['JsonSafeLong']['output']>;
  /** CatalogModifierList controlled by this CatalogModifierListInfo. */
  modifierList?: Maybe<CatalogModifierList>;
  /** A set of CatalogModifierOverride objects that override whether a given CatalogModifier is enabled by default. */
  modifierOverrides?: Maybe<Array<Maybe<CatalogModifierOverride>>>;
};

/**
 * A group of variations for a CatalogItem.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogItemOption = CatalogObject & {
  __typename?: 'CatalogItemOption';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /** The item option's human-readable description. Displayed in the Square Point of Sale app for the seller and in the Online Store or on receipts for the buyer. This is a searchable attribute for use in applicable query filters. */
  description?: Maybe<Scalars['String']['output']>;
  /** The item option's display name for the customer. This is a searchable attribute for use in applicable query filters. */
  displayName?: Maybe<Scalars['String']['output']>;
  /**
   * An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a "#" character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object.
   * When the server receives the new object, it will supply a unique identifier that replaces the temporary identifier for all future references.
   */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** The item option's display name for the seller. Must be unique across all item options. This is a searchable attribute for use in applicable query filters. */
  name?: Maybe<Scalars['String']['output']>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** If true, display colors for entries in values when present. */
  showColors?: Maybe<Scalars['Boolean']['output']>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** A list of CatalogItemOptionValues for this item. */
  values?: Maybe<Array<Maybe<CatalogItemOptionValue>>>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/**
 * An enumerated value that can link a CatalogItemVariation to an item option as one of its item option values.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogItemOptionValue = CatalogObject & {
  __typename?: 'CatalogItemOptionValue';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** The HTML-supported hex color for the item option (e.g., "#ff8d4e85"). Only displayed if show_colors is enabled on the parent ItemOption. When left unset, color defaults to white ("#ffffff") when show_colors is enabled on the parent ItemOption. */
  color?: Maybe<Scalars['HexColor']['output']>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /** A human-readable description for the option value. This is a searchable attribute for use in applicable query filters. */
  description?: Maybe<Scalars['String']['output']>;
  /**
   * An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a "#" character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object.
   * When the server receives the new object, it will supply a unique identifier that replaces the temporary identifier for all future references.
   */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** Name of this item option value. This is a searchable attribute for use in applicable query filters. */
  name?: Maybe<Scalars['String']['output']>;
  /** The CatalogItemOption associate with the value. */
  option?: Maybe<CatalogItemOption>;
  /** Determines where this option value appears in a list of option values. */
  ordinal?: Maybe<Scalars['Int']['output']>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

export enum CatalogItemProductType {
  /** A service that can be booked using the Square Appointments app. */
  AppointmentsService = 'APPOINTMENTS_SERVICE',
  /** A Square gift card. */
  GiftCard = 'GIFT_CARD',
  /** An ordinary item. */
  Regular = 'REGULAR'
}

/** CatalogObjectTypeFilter is used for filtering a query with CatalogItemProductType */
export type CatalogItemProductTypeFilter = {
  /** Used for filtering a query with CatalogItemProductType */
  equalToAnyOf?: InputMaybe<Array<CatalogItemProductType>>;
};

/**
 * An item variation, representing a product for sale, in the Catalog object model.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogItemVariation = CatalogObject & {
  __typename?: 'CatalogItemVariation';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** If the CatalogItem that owns this item variation is of type APPOINTMENTS_SERVICE, a bool representing whether this service is available for booking. */
  availableForBooking?: Maybe<Scalars['Boolean']['output']>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /**
   * Custom attributes and their associated values
   * Application-defined custom attributes that are set at a global (location-independent) level. Custom attribute values are intended to store additional information about a catalog object or associations with an entity in another system. Do not use custom attributes to store any sensitive information (personally identifiable information, card details, etc.).
   */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /**
   * An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a "#" character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object.
   * When the server receives the new object, it will supply a unique identifier that replaces the temporary identifier for all future references.
   */
  id: Scalars['ID']['output'];
  /** The images associated with this CatalogItemVariation instance. These images will be shown to customers in Square Online Store. */
  images?: Maybe<Array<Maybe<CatalogImage>>>;
  /** Inventory alert associated values, if it is used */
  inventoryAlert?: Maybe<InventoryAlert>;
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The CatalogItem associated with this item variation. */
  item?: Maybe<CatalogItem>;
  /** Per-location price and inventory overrides. */
  locationOverrides?: Maybe<Array<Maybe<CatalogItemVariationLocationOverride>>>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /**
   * The item variation's name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.
   * Max Length 255
   */
  name?: Maybe<Scalars['String']['output']>;
  /** List of CatalogItemOptionValue associated with this item variation. Listed in the same order as the item options of the parent item. */
  optionValues?: Maybe<Array<Maybe<CatalogItemOptionValue>>>;
  /** The order in which this item variation should be displayed. This value is read-only. On writes for REST, the ordinal for each item variation within a parent CatalogItem is set according to the item variations's position. On reads, the value is not guaranteed to be sequential or unique. */
  ordinal?: Maybe<Scalars['Int']['output']>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** The item variation's price, if fixed pricing is used. */
  priceMoney?: Maybe<Money>;
  /** Indicates whether the item variation's price is fixed or determined at the time of sale. */
  pricingType?: Maybe<CatalogPricingType>;
  /**
   * Whether this variation can be sold. The inventory count of a sellable variation indicates the number of units available for sale. When a variation is both stockable and sellable,
   * its sellable inventory count can be smaller than or equal to its stockable count.
   */
  sellable?: Maybe<Scalars['Boolean']['output']>;
  /** If the CatalogItem that owns this item variation is of type APPOINTMENTS_SERVICE, then this is the duration of the service in milliseconds. For example, a 30 minute appointment would have the value 1800000, which is equal to 30 (minutes) * 60 (seconds per minute) * 1000 (milliseconds per second). */
  serviceDuration?: Maybe<Scalars['Int']['output']>;
  /** The item variation's SKU, if any. This is a searchable attribute for use in applicable query filters. */
  sku?: Maybe<Scalars['String']['output']>;
  /**
   * Whether stock is counted directly on this variation (TRUE) or only on its components (FALSE). When a variation is both stockable and sellable, the inventory count of a stockable variation
   * keeps track of the number of units of this variation in stock and is not an indicator of the number of units of the variation that can be sold.
   */
  stockable?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The unit conversion rule, as prescribed by the CatalogStockConversion type, that describes how this non-stockable (i.e., sellable/receivable) item variation is converted to/from the stockable item
   * variation sharing the same parent item. With the stock conversion, you can accurately track inventory when an item variation is sold in one unit, but stocked in another unit.
   */
  stockableConversion?: Maybe<CatalogStockConversion>;
  /** Tokens of employees that can perform the service represented by this variation. Only valid for variations of type APPOINTMENTS_SERVICE. */
  teamMemberIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** If true, inventory tracking is active for the variation. */
  trackInventory?: Maybe<Scalars['Boolean']['output']>;
  /** The CatalogMeasurementUnit that is used to measure the quantity sold of this item variation. If left unset, the item will be sold in whole quantities. */
  unit?: Maybe<CatalogMeasurementUnit>;
  /** The item variation's UPC, if any. This is a searchable attribute for use in applicable query filters. It is only accessible through the Square API, and not exposed in the Square Seller Dashboard, Square Point of Sale or Retail Point of Sale apps. */
  upc?: Maybe<Scalars['String']['output']>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Arbitrary user metadata to associate with the item variation. This attribute value length is of Unicode code points.
   * Max Length 255
   */
  userData?: Maybe<Scalars['String']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/**
 * Price and inventory alerting overrides for a CatalogItemVariation at a specific Location.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogItemVariationLocationOverride = {
  __typename?: 'CatalogItemVariationLocationOverride';
  /** Inventory alert associated values, if it is used */
  inventoryAlert?: Maybe<InventoryAlert>;
  /** The ID of the Location. */
  location?: Maybe<Location>;
  /** The price of the CatalogItemVariation at the given Location, or blank for variable pricing. */
  priceMoney?: Maybe<Money>;
  /** The pricing type (fixed or variable) for the CatalogItemVariation at the given Location. */
  pricingType?: Maybe<CatalogPricingType>;
  /** If true, inventory tracking is active for the CatalogItemVariation at this Location. */
  trackInventory?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Represents the unit used to measure a CatalogItemVariation and specifies the precision for decimal quantities.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogMeasurementUnit = CatalogObject & {
  __typename?: 'CatalogMeasurementUnit';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /**
   * An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a "#" character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object.
   * When the server receives the new object, it will supply a unique identifier that replaces the temporary identifier for all future references.
   */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /**
   * An integer between 0 and 5 that represents the maximum number of positions allowed after the decimal in quantities measured with this unit. For example:
   * if the precision is 0, the quantity can be 1, 2, 3, etc.
   * if the precision is 1, the quantity can be 0.1, 0.2, etc.
   * if the precision is 2, the quantity can be 0.01, 0.12, etc.
   * Default: 3
   */
  precision?: Maybe<Scalars['Int']['output']>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates the unit used to measure the quantity of a catalog item variation. */
  unit?: Maybe<MeasurementUnit>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/**
 * A modifier applicable to items at the time of sale.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogModifier = CatalogObject & {
  __typename?: 'CatalogModifier';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /**
   * An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a "#" character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object.
   * When the server receives the new object, it will supply a unique identifier that replaces the temporary identifier for all future references.
   */
  id: Scalars['ID']['output'];
  /** The ID of the image associated with this CatalogModifier instance. Currently this image is not displayed by Square, but is free to be displayed in 3rd party applications. */
  image?: Maybe<CatalogImage>;
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** Location-specific price overrides. */
  locationOverrides?: Maybe<Array<Maybe<ModifierLocationOverride>>>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** The CatalogModifierList associated with this modifier. */
  modifierList?: Maybe<CatalogModifierList>;
  /**
   * The modifier name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.
   * Max Length 255
   */
  name?: Maybe<Scalars['String']['output']>;
  /** Determines where this CatalogModifier appears in the CatalogModifierList. */
  ordinal?: Maybe<Scalars['Int']['output']>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** The modifier price. */
  priceMoney?: Maybe<Money>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/**
 * A list of modifiers applicable to items at the time of sale.
 * For example, a "Condiments" modifier list applicable to a "Hot Dog" item may contain "Ketchup", "Mustard", and "Relish" modifiers. Use the selection_type field to specify whether or not multiple selections from the modifier list are allowed.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogModifierList = CatalogObject & {
  __typename?: 'CatalogModifierList';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /**
   * An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a "#" character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object.
   * When the server receives the new object, it will supply a unique identifier that replaces the temporary identifier for all future references.
   */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** The options included in the CatalogModifierList. You must include at least one CatalogModifier. */
  modifiers?: Maybe<Array<Maybe<CatalogModifier>>>;
  /**
   * The name for the CatalogModifierList instance. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.
   * Max Length 255
   */
  name?: Maybe<Scalars['String']['output']>;
  /** Determines where this modifier list appears in a list of CatalogModifierList values. */
  ordinal?: Maybe<Scalars['Int']['output']>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether multiple options from the modifier list can be applied to a single CatalogItem. */
  selectionType?: Maybe<CatalogModifierListSelectionType>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/** Indicates whether a CatalogModifierList supports multiple selections. */
export enum CatalogModifierListSelectionType {
  /** Indicates that a CatalogModifierList allows multiple CatalogModifier to be selected. */
  Multiple = 'MULTIPLE',
  /** Indicates that a CatalogModifierList allows only a single CatalogModifier to be selected. */
  Single = 'SINGLE'
}

/**
 * Options to control how to override the default behavior of the specified modifier.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogModifierOverride = {
  __typename?: 'CatalogModifierOverride';
  /** The CatalogModifier whose default behavior is being overridden. */
  modifier?: Maybe<CatalogModifier>;
  /** If true, this CatalogModifier should be selected by default for this CatalogItem. */
  onByDefault?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * CatalogObject Interface
 *
 * Permissions:ITEMS_READ
 */
export type CatalogObject = {
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /**
   * Custom attributes and their associated values
   * Application-defined custom attributes that are set at a global (location-independent) level. Custom attribute values are intended to store additional information about a catalog object or associations with an entity in another system. Do not use custom attributes to store any sensitive information (personally identifiable information, card details, etc.).
   */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /**
   * An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a "#" character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object.
   * When the server receives the new object, it will supply a unique identifier that replaces the temporary identifier for all future references.
   */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/**
 * Contains information of a query result.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogObjectConnection = {
  __typename?: 'CatalogObjectConnection';
  /** List of CatalogObjects */
  nodes: Array<CatalogObject>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/**
 * CatalogObjectFilter is used for querying catalog objects.
 *
 * There are rules on what filters can be set at a time.
 * 1. IdFilter and CatalogObjectTypeFilter do not apply if type specific query such as ItemsForTax, ItemsForModifierList,
 * ItemsForItemOptions, or ItemVariationsForItemOptionValues is set.
 * 2. Only 1 type specifc query can be set at a time.
 * 3. Only one of the followings can exist
 * (a) set one type specific query
 * (b) set any combinations of 'text', 'prefix', 'exact', 'range' together
 * (c) set 'set' query
 * 4. The rest of filters are logically AND together.s
 */
export type CatalogObjectFilter = {
  /** An exact query expression to return objects with attribute name and value matching the specified attribute name and value exactly. Value matching is case insensitive. */
  exact?: InputMaybe<CatalogAttributeBasicStringFilter>;
  /** The object IDs of any type of catalog objects to be retrieved. If the value is nil, it will return all catalog objects. */
  id?: InputMaybe<BasicIdFilter>;
  /** If true, deleted objects will be included in the results. Deleted objects will have their isDeleted field set to true. */
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  /** A query expression to return CatalogItemVariations that contain all of the specified CatalogItemOption IDs. */
  itemVariationsForItemOptionValue?: InputMaybe<BasicIdFilter>;
  /** A query expression to return CatalogItems that contains the specified CatalogItemOption IDs. */
  itemsForItemOption?: InputMaybe<BasicIdFilter>;
  /** A query expression to return CatalogItems that have any of the CatalogModifierLists IDs enabled. */
  itemsForModifierList?: InputMaybe<BasicIdFilter>;
  /** A query expression to return CatalogItems that have any of the CatalogTax IDs enabled. */
  itemsForTax?: InputMaybe<BasicIdFilter>;
  /** A list length query expression to return objects with list lengths that lie in the specified range. */
  listLength?: InputMaybe<CatalogAttributeListLengthFilter>;
  /** The Square-issued ID of the merchant. */
  merchantId: BasicIdFilter;
  /** A prefix query expression to return objects with attribute values that have a prefix matching the specified string value. Value maching is case insensitive. */
  prefix?: InputMaybe<CatalogAttributeBasicStringFilter>;
  /** A range query expression to return objects with numberic values that lie in the specified range. */
  range?: InputMaybe<CatalogAttributeRangeFilter>;
  /** A set query expression to return objects with attribute name and value matching the specified attribute name and any of the specified attribute values exactly. Value matching is case insensitive. */
  set?: InputMaybe<CatalogAttributeStringSetFilter>;
  /** A query expression to sort/filter returned query result by the given attribute. */
  sortedAttributes?: InputMaybe<Array<CatalogAttributeSort>>;
  /**
   * A text query expression to return objects whose searchable attributes contain all of the given keywords, irrespective of their order.
   * For example, if a CatalogItem contains custom attribute values of {"name": "t-shirt"} and {"description": "Small, Purple"},
   * the query filter of {"keywords": ["shirt", "sma", "purp"]} returns this item. It supports up to 3 values that are at least 3 charater long.
   */
  text?: InputMaybe<CatalogStringSetFilter>;
  /** A list of object types to retrieve. If the value is nil, it will return all types. */
  type?: InputMaybe<CatalogObjectTypeFilter>;
};

/** Possible types of CatalogObjects returned from the Catalog, each containing type-specific properties in the *_data field corresponding to the object type. */
export enum CatalogObjectType {
  /** A category, corresponding to CatalogCategory. */
  Category = 'CATEGORY',
  /** Represents the definition of a custom attribute. */
  CustomAttributeDefinition = 'CUSTOM_ATTRIBUTE_DEFINITION',
  /** A discount, corresponding to CatalogDiscount. */
  Discount = 'DISCOUNT',
  /** An image, corresponding to CatalogImage. */
  Image = 'IMAGE',
  /** An item, corresponding to CatalogItem. */
  Item = 'ITEM',
  /** Represents a list of item option values that can be assigned to item variations. For example, a color option or size option for a t-shirt. */
  ItemOption = 'ITEM_OPTION',
  /** . */
  ItemOptionValue = 'ITEM_OPTION_VALUE',
  /** An item variation, corresponding to CatalogItemVariation. */
  ItemVariation = 'ITEM_VARIATION',
  /** A measurement unit, corresponding to CatalogMeasurementUnit. The unit of measure and precision in which an item variation should be sold. */
  MeasurementUnit = 'MEASUREMENT_UNIT',
  /** A modifier, corresponding to CatalogModifier. */
  Modifier = 'MODIFIER',
  /** A modifier list, corresponding to CatalogModifierList. */
  ModifierList = 'MODIFIER_LIST',
  /**  or  */
  Medium = 'Medium',
  /** A pricing rule, corresponding to CatalogPricingRule. */
  PricingRule = 'PRICING_RULE',
  /** A product set, corresponding to CatalogProductSet. */
  ProductSet = 'PRODUCT_SET',
  /** Represents a set of Quick Amounts and their settings at each location. For example, a location may have a list of both AUTO and MANUAL quick amounts that are set to DISABLED. */
  QuickAmountsSettings = 'QUICK_AMOUNTS_SETTINGS',
  /** A subscription plan, corresponding to CatalogSubscriptionPlan. */
  SubscriptionPlan = 'SUBSCRIPTION_PLAN',
  /** Represents an option value associated with one or more item options. For example, an item option of  */
  Size = 'Size',
  /**  may have item option values such as  */
  Small = 'Small',
  /** A tax, corresponding to CatalogTax. */
  Tax = 'TAX',
  /** A time period, corresponding to CatalogTimePeriod. */
  TimePeriod = 'TIME_PERIOD'
}

/** CatalogObjectTypeFilter is used for filtering a query with CatalogObjectType */
export type CatalogObjectTypeFilter = {
  /** Used for filtering a query with CatalogObjectType */
  equalToAnyOf?: InputMaybe<Array<CatalogObjectType>>;
};

/**
 * Defines how discounts are automatically applied to a set of items that match the pricing rule during the active time period.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogPricingRule = CatalogObject & {
  __typename?: 'CatalogPricingRule';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /**
   * Deprecated: Please use the exclude_products_id field to apply an exclude set instead. Exclude sets allow better control over quantity ranges and offer more flexibility for which matched items receive a discount.
   * CatalogProductSet to apply the pricing to. An apply rule matches within the subset of the cart that fits the match rules (the match set). An apply rule can only match once in the match set. If not supplied, the pricing will be applied to all products in the match set. Other products retain their base price, or a price generated by other rules.
   */
  applyProducts?: Maybe<CatalogProductSet>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /** The CatalogDiscount to take off the price of all matched items. */
  discount?: Maybe<CatalogDiscount>;
  /** CatalogProductSet to exclude from the pricing rule. An exclude rule matches within the subset of the cart that fits the match rules (the match set). An exclude rule can only match once in the match set. If not supplied, the pricing will be applied to all products in the match set. Other products retain their base price, or a price generated by other rules. */
  excludeProducts?: Maybe<CatalogProductSet>;
  /** If an exclude_products_id was given, controls which subset of matched products is excluded from any discounts. Default value: LEAST_EXPENSIVE */
  excludeStrategy?: Maybe<CatalogPricingRuleExcludeStrategy>;
  /**
   * An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a "#" character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object.
   * When the server receives the new object, it will supply a unique identifier that replaces the temporary identifier for all future references.
   */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The CatalogProductSet that will be matched by this rule. A match rule matches within the entire cart, and can match multiple times. This field will always be set. */
  matchProducts?: Maybe<CatalogProductSet>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** User-defined name for the pricing rule. For example, "Buy one get one free" or "10% off". */
  name?: Maybe<Scalars['String']['output']>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** A list of CatalogTimePeriod when this pricing rule is in effect. If left unset, the pricing rule is always in effect. */
  timePeriods?: Maybe<Array<Maybe<CatalogTimePeriod>>>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Represents the date the Pricing Rule is valid from. Represented in RFC 3339 full-date format (YYYY-MM-DD). */
  validFrom?: Maybe<Scalars['Date']['output']>;
  /** Represents the local time the pricing rule should be valid from. Represented in RFC 3339 partial-time format (HH:MM:SS). Partial seconds will be truncated. */
  validFromLocal?: Maybe<Scalars['LocalTime']['output']>;
  /** Represents the date the Pricing Rule is valid until. Represented in RFC 3339 full-date format (YYYY-MM-DD). */
  validUntil?: Maybe<Scalars['Date']['output']>;
  /**
   * Represents the local time the pricing rule should be valid until. Represented in RFC 3339 partial-time format (HH:MM:SS). Partial seconds will be truncated.
   * @deprecated No longer supported
   */
  validUntilLocal?: Maybe<Scalars['LocalTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/** Indicates which products matched by a CatalogPricingRule will be excluded if the pricing rule uses an exclude set. */
export enum CatalogPricingRuleExcludeStrategy {
  /**
   * The least expensive matched products are excluded from the pricing. If the pricing rule is set to exclude one product and multiple products in the match set qualify as least expensive, then one will be excluded at random.
   * Excluding the least expensive product gives the best discount value to the buyer.
   */
  LeastExpensive = 'LEAST_EXPENSIVE',
  /**
   * The most expensive matched product is excluded from the pricing rule. If multiple products have the same price and all qualify as least expensive, one will be excluded at random.
   * This guarantees that the most expensive product is purchased at full price.
   */
  MostExpensive = 'MOST_EXPENSIVE'
}

/** Indicates whether the price of a CatalogItemVariation should be entered manually at the time of sale. */
export enum CatalogPricingType {
  /** The catalog item variation's price is fixed. */
  FixedPricing = 'FIXED_PRICING',
  /** The catalog item variation's price is entered at the time of sale. */
  VariablePricing = 'VARIABLE_PRICING'
}

/**
 * Represents a collection of catalog objects for the purpose of applying a PricingRule.
 * Including a catalog object will include all of its subtypes. For example, including a category in a product set will include all of its items and associated item variations in the product set. Including an item in a product set will also include its item variations.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogProductSet = CatalogObject & {
  __typename?: 'CatalogProductSet';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /**
   * If set to true, the product set will include every item in the catalog.
   * Only one of allSetProducts, anySetProducts, or allProducts can be set.
   */
  allProducts?: Maybe<Scalars['Boolean']['output']>;
  /**
   * A list of CatalogObject included in this product set. All objects in this set must be included in an order for a pricing rule to apply.
   * Only one of allSetProducts, anySetProducts, or allProducts can be set.
   * Max: 500 CatalogObject.
   */
  allSetProducts?: Maybe<Array<Maybe<CatalogObject>>>;
  /**
   * A list of CatalogObject included in this product set. Any number of these catalog objects can be in an order for a pricing rule to apply.
   * This can be used with allSetProducts in a parent CatalogProductSet to match groups of products for a bulk discount, such as a discount for an entree and side combo.
   * Only one of allSetProducts, anySetProducts, or allProducts can be set.
   * Max: 500 CatalogObject.
   */
  anySetProducts?: Maybe<Array<Maybe<CatalogObject>>>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /**
   * An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a "#" character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object.
   * When the server receives the new object, it will supply a unique identifier that replaces the temporary identifier for all future references.
   */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** User-defined name for the product set. For example, "Clearance Items" or "Winter Sale Items". */
  name?: Maybe<Scalars['String']['output']>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /**
   * If set, there must be exactly this many items from products_any or products_all in the cart for the discount to apply.
   * Cannot be combined with either quantity_min or quantity_max.
   */
  quantityExact?: Maybe<Scalars['Int']['output']>;
  /** If set, the pricing rule will apply to a maximum of this many items from products_any or products_all. */
  quantityMax?: Maybe<Scalars['Int']['output']>;
  /** If set, there must be at least this many items from products_any or products_all in a cart for the discount to apply. See quantity_exact. Defaults to 0 if quantity_exact, quantity_min and quantity_max are all unspecified. */
  quantityMin?: Maybe<Scalars['Int']['output']>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/**
 * Represents a Quick Amount in the Catalog.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogQuickAmount = {
  __typename?: 'CatalogQuickAmount';
  /** Represents the actual amount of the Quick Amount with Money type. */
  amountMoney?: Maybe<Money>;
  /** The order in which this Quick Amount should be displayed. */
  ordinal?: Maybe<Scalars['JsonSafeLong']['output']>;
  /** Describes the ranking of the Quick Amount provided by machine learning model, in the range [0, 100]. MANUAL type amount will always have score = 100. */
  score?: Maybe<Scalars['Int']['output']>;
  /** Represents the type of the Quick Amount. */
  type?: Maybe<CatalogQuickAmountType>;
};

/** Determines the type of a specific Quick Amount. */
export enum CatalogQuickAmountType {
  /** Quick Amount is generated automatically by machine learning algorithms. */
  QuickAmountTypeAuto = 'QUICK_AMOUNT_TYPE_AUTO',
  /** Quick Amount is created manually by the seller. */
  QuickAmountTypeManual = 'QUICK_AMOUNT_TYPE_MANUAL'
}

/**
 * A parent Catalog Object model represents a set of Quick Amounts and the settings control the amounts.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogQuickAmountsSettings = CatalogObject & {
  __typename?: 'CatalogQuickAmountsSettings';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** Represents a set of Quick Amounts at this location */
  amounts?: Maybe<Array<Maybe<CatalogQuickAmount>>>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /** Represents location's eligibility for auto amounts The boolean should be consistent with whether there are AUTO amounts in the amounts. */
  eligibleForAutoAmounts?: Maybe<Scalars['Boolean']['output']>;
  /**
   * An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a "#" character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object.
   * When the server receives the new object, it will supply a unique identifier that replaces the temporary identifier for all future references.
   */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** Represents the option seller currently uses on Quick Amounts. */
  option?: Maybe<CatalogQuickAmountsSettingsOption>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/** Determines a seller's option on Quick Amounts feature. */
export enum CatalogQuickAmountsSettingsOption {
  /** Option for seller to choose automatically created Quick Amounts. */
  Auto = 'AUTO',
  /** Option for seller to disable Quick Amounts. */
  Disabled = 'DISABLED',
  /** Option for seller to choose manually created Quick Amounts. */
  Manual = 'MANUAL'
}

/**
 * Catalog service charge
 *
 * Permissions:ORDERS_READ
 */
export type CatalogServiceCharge = {
  __typename?: 'CatalogServiceCharge';
  /** ID belonging to the service charge. */
  id: Scalars['ID']['output'];
};

/** CatalogSort is used for sorting the result for items query */
export enum CatalogSort {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/**
 * Provides information about the application used to generate a change.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogSourceApplication = {
  __typename?: 'CatalogSourceApplication';
  /** Square ID assigned to the application. Only used for Product type EXTERNAL_API. */
  applicationId?: Maybe<Scalars['ID']['output']>;
  /** Display name assigned to the application (e.g. "Custom Application", "Square POS 4.74 for Android"). */
  name?: Maybe<Scalars['String']['output']>;
  /** Product type for the application. */
  product?: Maybe<CatalogSquareProductType>;
};

/** Indicates the Square product used to generate an inventory change. */
export enum CatalogSquareProductType {
  /** Square Appointments. */
  Appointments = 'APPOINTMENTS',
  /** A Square subscription (various products). */
  Billing = 'BILLING',
  /** Square Dashboard */
  Dashboard = 'DASHBOARD',
  /** Square Connect APIs (Transactions API, Checkout API). */
  ExternalApi = 'EXTERNAL_API',
  /** Square Invoices. */
  Invoices = 'INVOICES',
  /** Item Library Import */
  ItemLibraryImport = 'ITEM_LIBRARY_IMPORT',
  /** Square Online Store. */
  OnlineStore = 'ONLINE_STORE',
  /** A Square product that does not match any other value. */
  Other = 'OTHER',
  /** Square Payroll. */
  Payroll = 'PAYROLL',
  /** Square Point of Sale application. */
  SquarePos = 'SQUARE_POS'
}

/**
 * Represents the rule of conversion between a stockable CatalogItemVariation and a non-stockable sell-by or receive-by CatalogItemVariation that share the same underlying stock.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogStockConversion = {
  __typename?: 'CatalogStockConversion';
  /**
   * The converted equivalent quantity of the non-stockable CatalogItemVariation in its measurement unit. The stockable_quantity value and this nonstockable_quantity value
   * together define the conversion ratio between stockable item variation and the non-stockable item variation. It accepts a decimal number in a string format that can take
   * up to 10 digits before the decimal point and up to 5 digits after the decimal point.
   */
  nonstockableQuantity?: Maybe<Scalars['String']['output']>;
  /**
   * References to the stockable CatalogItemVariation for this stock conversion. Selling, receiving or recounting the non-stockable CatalogItemVariation defined
   * with a stock conversion results in adjustments of this stockable CatalogItemVariation. This immutable field must reference a stockable CatalogItemVariation
   * that shares the parent CatalogItem of the converted CatalogItemVariation.
   */
  stockableItemVariation?: Maybe<CatalogItemVariation>;
  /**
   * The quantity of the stockable item variation (as identified by stockable_item_variation_id) equivalent to the non-stockable item variation quantity (as specified
   * in nonstockable_quantity) as defined by this stock conversion. It accepts a decimal number in a string format that can take up to 10 digits before the decimal point
   * and up to 5 digits after the decimal point.
   */
  stockableQuantity?: Maybe<Scalars['String']['output']>;
};

/** Defines supported stock levels of the item inventory. */
export enum CatalogStockLevel {
  /** The item inventory is low. */
  Low = 'LOW',
  /** The item inventory is empty. */
  Out = 'OUT'
}

/** CatalogStringSetFilter is used for filtering a query with a string set or arrays */
export type CatalogStringSetFilter = {
  /** The values belonging to the query text filter. */
  value: Array<Scalars['String']['input']>;
};

/** Determines the billing cadence of a Subscription */
export enum CatalogSubscriptionCadence {
  /** Once per year */
  Annual = 'ANNUAL',
  /** Once per day */
  Daily = 'DAILY',
  /** Once every four months */
  EveryFourMonths = 'EVERY_FOUR_MONTHS',
  /** Once every six months */
  EverySixMonths = 'EVERY_SIX_MONTHS',
  /** Once every two months */
  EveryTwoMonths = 'EVERY_TWO_MONTHS',
  /** Every two weeks */
  EveryTwoWeeks = 'EVERY_TWO_WEEKS',
  /** Once every two years */
  EveryTwoYears = 'EVERY_TWO_YEARS',
  /** Once per month */
  Monthly = 'MONTHLY',
  /** Once every 90 days */
  NinetyDays = 'NINETY_DAYS',
  /** Once every three months */
  Quarterly = 'QUARTERLY',
  /** Once every 60 days */
  SixtyDays = 'SIXTY_DAYS',
  /** Once every 30 days */
  ThirtyDays = 'THIRTY_DAYS',
  /** Once per week */
  Weekly = 'WEEKLY'
}

/**
 * Describes a phase in a subscription plan.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogSubscriptionPhase = {
  __typename?: 'CatalogSubscriptionPhase';
  /** The billing cadence of the phase. For example, weekly or monthly. This field cannot be changed after a SubscriptionPhase is created. */
  cadence?: Maybe<CatalogSubscriptionCadence>;
  /** The position this phase appears in the sequence of phases defined for the plan, indexed from 0. This field cannot be changed after a SubscriptionPhase is created. */
  ordinal?: Maybe<Scalars['JsonSafeLong']['output']>;
  /** The number of cadences the phase lasts. If not set, the phase never ends. Only the last phase can be indefinite. This field cannot be changed after a SubscriptionPhase is created. */
  periods?: Maybe<Scalars['JsonSafeLong']['output']>;
  /** The amount to bill for each cadence. */
  recurringPriceMoney?: Maybe<Money>;
  /** The Square-assigned ID of the subscription phase. This field cannot be changed after a SubscriptionPhase is created. */
  uid?: Maybe<Scalars['ID']['output']>;
};

/**
 * Describes a subscription plan.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogSubscriptionPlan = CatalogObject & {
  __typename?: 'CatalogSubscriptionPlan';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /**
   * An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a "#" character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object.
   * When the server receives the new object, it will supply a unique identifier that replaces the temporary identifier for all future references.
   */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** The name of the plan. */
  name?: Maybe<Scalars['String']['output']>;
  /** A list of SubscriptionPhase containing the SubscriptionPhase for this plan. */
  phases?: Maybe<Array<Maybe<CatalogSubscriptionPhase>>>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/**
 * A tax applicable to an item.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogTax = CatalogObject & {
  __typename?: 'CatalogTax';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, the fee applies to custom amounts entered into the Square Point of Sale app that are not associated with a particular CatalogItem. */
  appliesToCustomAmouts?: Maybe<Scalars['Boolean']['output']>;
  /** The CatalogProductSet object related to this tax. If set, the tax is applicable to all products in the product set. */
  appliesToProductSet?: Maybe<CatalogProductSet>;
  /** Whether the tax is calculated based on a payment's subtotal or total. */
  calculationPhase?: Maybe<CatalogTaxCalculationPhase>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /** A Boolean flag to indicate whether the tax is displayed as enabled (true) in the Square Point of Sale app or not (false). */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /**
   * An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a "#" character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object.
   * When the server receives the new object, it will supply a unique identifier that replaces the temporary identifier for all future references.
   */
  id: Scalars['ID']['output'];
  /** Whether the tax is ADDITIVE or INCLUSIVE. */
  inclusionType?: Maybe<CatalogTaxInclusionType>;
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /**
   * The tax's name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.
   * Max Length 255
   */
  name?: Maybe<Scalars['String']['output']>;
  /** The percentage of the tax in decimal form, using a '.' as the decimal separator and without a '%' sign. A value of 7.5 corresponds to 7.5%. */
  percentage?: Maybe<Scalars['Decimal']['output']>;
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/** When to calculate the taxes due on a cart. */
export enum CatalogTaxCalculationPhase {
  /** The fee is calculated based on the payment's subtotal. */
  TaxSubtotalPhase = 'TAX_SUBTOTAL_PHASE',
  /** The fee is calculated based on the payment's total. */
  TaxTotalPhase = 'TAX_TOTAL_PHASE'
}

/** Whether to the tax amount should be additional to or included in the CatalogItem price. */
export enum CatalogTaxInclusionType {
  /** The tax is an additive tax. The tax amount is added on top of the CatalogItemVariation price. For example, a $1.00 item with a 10% additive tax would have a total cost to the buyer of $1.10. */
  Additive = 'ADDITIVE',
  /** The tax is an inclusive tax. The tax amount is included in the CatalogItemVariation price. For example, a $1.00 item with a 10% inclusive tax would have a total cost to the buyer of $1.00, with $0.91 (91 cents) of that total being the cost of the item and $0.09 (9 cents) being tax. */
  Inclusive = 'INCLUSIVE'
}

/**
 * Represents a time period - either a single period or a repeating period.
 *
 * Permissions:ITEMS_READ
 */
export type CatalogTimePeriod = CatalogObject & {
  __typename?: 'CatalogTimePeriod';
  /** A list of locations where the object is not present, even if presentAtAll is true. Only the Location.id will be filled in. */
  absentAt?: Maybe<Array<Maybe<Location>>>;
  /** The Connect v1 IDs for this object at each location where it is present, where they differ from the object's Connect V2 ID. The field will only be present for objects that have been created or modified by legacy APIs. */
  catalogV1Ids?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** This value will always be null. Custom attributes do not apply to this object */
  customAttributes?: Maybe<Array<Maybe<CatalogCustomAttributeValue>>>;
  /**
   * An iCalendar (RFC 5545) event, which specifies the name, timing, duration and recurrence of this time period.
   *
   * Example:
   * DTSTART:20190707T180000
   * DURATION:P2H
   * RRULE:FREQ=WEEKLY;BYDAY=MO,WE,FR
   * Only SUMMARY, DTSTART, DURATION and RRULE fields are supported. DTSTART must be in local (unzoned) time format. Note that while BEGIN:VEVENT and END:VEVENT is not required in the request. The response will always include them.
   */
  event?: Maybe<Scalars['iCalendarEvent']['output']>;
  /**
   * An identifier to reference this object in the catalog. When a new CatalogObject is inserted, the client should set the id to a temporary identifier starting with a "#" character. Other objects being inserted or updated within the same request may use this identifier to refer to the new object.
   * When the server receives the new object, it will supply a unique identifier that replaces the temporary identifier for all future references.
   */
  id: Scalars['ID']['output'];
  /** If true, the object has been deleted from the database. Must be false for new objects being inserted. When deleted, updatedAt will equal the deletion time. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** A list of locations where the object is present, even if presentAtAll is false. Only the Location.id will be filled in. */
  presentAt?: Maybe<Array<Maybe<Location>>>;
  /** If true, this object is present at all locations (including future locations), except where specified in absentAt. If false, this object is not present at any locations (including future locations), except where specified in presentAt. If not specified, defaults to true. */
  presentAtAll?: Maybe<Scalars['Boolean']['output']>;
  /** Last modification timestamp. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The version of the object. For the REST API, when a new CatalogObject in inserted, the version supplied must match the version in the database otherwise the write will be rejected as conflicting. */
  version: Scalars['JsonSafeLong']['output'];
};

/**
 * Permissions: PAYMENTS_READ
 *
 * Additional details about Clearpay payments.
 */
export type ClearpayPaymentDetails = {
  __typename?: 'ClearpayPaymentDetails';
  /** Email address on the buyer's Clearpay account. */
  emailAddress?: Maybe<Scalars['EmailAddress']['output']>;
};

/**
 * Input type used to specify filters on `ClearpayPaymentDetails` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type ClearpayPaymentDetailsFilter = {
  /**
   * Used to filter on the `emailAddress` field:
   *
   * > Email address on the buyer's Clearpay account.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  emailAddress?: InputMaybe<EmailAddressFilter>;
};

/**
 * Indicates the country associated with another entity, such as a business.
 * Values are in [ISO 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm).
 */
export enum Country {
  /** Andorra */
  Ad = 'AD',
  /** United Arab Emirates */
  Ae = 'AE',
  /** Afghanistan */
  Af = 'AF',
  /** Antigua and Barbuda */
  Ag = 'AG',
  /** Anguilla */
  Ai = 'AI',
  /** Albania */
  Al = 'AL',
  /** Armenia */
  Am = 'AM',
  /** Angola */
  Ao = 'AO',
  /** Antartica */
  Aq = 'AQ',
  /** Argentina */
  Ar = 'AR',
  /** American Samoa */
  As = 'AS',
  /** Austria */
  At = 'AT',
  /** Australia */
  Au = 'AU',
  /** Aruba */
  Aw = 'AW',
  /** Åland Islands */
  Ax = 'AX',
  /** Azerbaijan */
  Az = 'AZ',
  /** Bosnia and Herzegovina */
  Ba = 'BA',
  /** Barbados */
  Bb = 'BB',
  /** Bangladesh */
  Bd = 'BD',
  /** Belgium */
  Be = 'BE',
  /** Burkina Faso */
  Bf = 'BF',
  /** Bulgaria */
  Bg = 'BG',
  /** Bahrain */
  Bh = 'BH',
  /** Burundi */
  Bi = 'BI',
  /** Benin */
  Bj = 'BJ',
  /** Saint Barthélemy */
  Bl = 'BL',
  /** Bermuda */
  Bm = 'BM',
  /** Brunei */
  Bn = 'BN',
  /** Bolivia */
  Bo = 'BO',
  /** Bonaire */
  Bq = 'BQ',
  /** Brazil */
  Br = 'BR',
  /** Bahamas */
  Bs = 'BS',
  /** Bhutan */
  Bt = 'BT',
  /** Bouvet Island */
  Bv = 'BV',
  /** Botswana */
  Bw = 'BW',
  /** Belarus */
  By = 'BY',
  /** Belize */
  Bz = 'BZ',
  /** Canada */
  Ca = 'CA',
  /** Cocos Islands */
  Cc = 'CC',
  /** Democratic Republic of the Congo */
  Cd = 'CD',
  /** Central African Republic */
  Cf = 'CF',
  /** Congo */
  Cg = 'CG',
  /** Switzerland */
  Ch = 'CH',
  /** Ivory Coast */
  Ci = 'CI',
  /** Cook Islands */
  Ck = 'CK',
  /** Chile */
  Cl = 'CL',
  /** Cameroon */
  Cm = 'CM',
  /** China */
  Cn = 'CN',
  /** Colombia */
  Co = 'CO',
  /** Costa Rica */
  Cr = 'CR',
  /** Cuba */
  Cu = 'CU',
  /** Cabo Verde */
  Cv = 'CV',
  /** Curaçao */
  Cw = 'CW',
  /** Christmas Island */
  Cx = 'CX',
  /** Cyprus */
  Cy = 'CY',
  /** Czechia */
  Cz = 'CZ',
  /** Germany */
  De = 'DE',
  /** Djibouti */
  Dj = 'DJ',
  /** Denmark */
  Dk = 'DK',
  /** Dominica */
  Dm = 'DM',
  /** Dominican Republic */
  Do = 'DO',
  /** Algeria */
  Dz = 'DZ',
  /** Ecuador */
  Ec = 'EC',
  /** Estonia */
  Ee = 'EE',
  /** Egypt */
  Eg = 'EG',
  /** Western Sahara */
  Eh = 'EH',
  /** Eritrea */
  Er = 'ER',
  /** Spain */
  Es = 'ES',
  /** Ethiopia */
  Et = 'ET',
  /** Finland */
  Fi = 'FI',
  /** Fiji */
  Fj = 'FJ',
  /** Falkland Islands */
  Fk = 'FK',
  /** Federated States of Micronesia */
  Fm = 'FM',
  /** Faroe Islands */
  Fo = 'FO',
  /** France */
  Fr = 'FR',
  /** Gabon */
  Ga = 'GA',
  /** United Kingdom */
  Gb = 'GB',
  /** Grenada */
  Gd = 'GD',
  /** Georgia */
  Ge = 'GE',
  /** French Guiana */
  Gf = 'GF',
  /** Guernsey */
  Gg = 'GG',
  /** Ghana */
  Gh = 'GH',
  /** Gibraltar */
  Gi = 'GI',
  /** Greenland */
  Gl = 'GL',
  /** Gambia */
  Gm = 'GM',
  /** Guinea */
  Gn = 'GN',
  /** Guadeloupe */
  Gp = 'GP',
  /** Equatorial Guinea */
  Gq = 'GQ',
  /** Greece */
  Gr = 'GR',
  /** South Georgia and the South Sandwich Islands */
  Gs = 'GS',
  /** Guatemala */
  Gt = 'GT',
  /** Guam */
  Gu = 'GU',
  /** Guinea-Bissau */
  Gw = 'GW',
  /** Guyana */
  Gy = 'GY',
  /** Hong Kong */
  Hk = 'HK',
  /** Heard Island and McDonald Islands */
  Hm = 'HM',
  /** Honduras */
  Hn = 'HN',
  /** Croatia */
  Hr = 'HR',
  /** Haiti */
  Ht = 'HT',
  /** Hungary */
  Hu = 'HU',
  /** Indonesia */
  Id = 'ID',
  /** Ireland */
  Ie = 'IE',
  /** Israel */
  Il = 'IL',
  /** Isle of Man */
  Im = 'IM',
  /** India */
  In = 'IN',
  /** British Indian Ocean Territory */
  Io = 'IO',
  /** Iraq */
  Iq = 'IQ',
  /** Iran */
  Ir = 'IR',
  /** Iceland */
  Is = 'IS',
  /** Italy */
  It = 'IT',
  /** Jersey */
  Je = 'JE',
  /** Jamaica */
  Jm = 'JM',
  /** Jordan */
  Jo = 'JO',
  /** Japan */
  Jp = 'JP',
  /** Kenya */
  Ke = 'KE',
  /** Kyrgyzstan */
  Kg = 'KG',
  /** Cambodia */
  Kh = 'KH',
  /** Kiribati */
  Ki = 'KI',
  /** Comoros */
  Km = 'KM',
  /** Saint Kitts and Nevis */
  Kn = 'KN',
  /** Democratic People's Republic of Korea */
  Kp = 'KP',
  /** Republic of Korea */
  Kr = 'KR',
  /** Kuwait */
  Kw = 'KW',
  /** Cayman Islands */
  Ky = 'KY',
  /** Kazakhstan */
  Kz = 'KZ',
  /** Lao People's Democratic Republic */
  La = 'LA',
  /** Lebanon */
  Lb = 'LB',
  /** Saint Lucia */
  Lc = 'LC',
  /** Liechtenstein */
  Li = 'LI',
  /** Sri Lanka */
  Lk = 'LK',
  /** Liberia */
  Lr = 'LR',
  /** Lesotho */
  Ls = 'LS',
  /** Lithuania */
  Lt = 'LT',
  /** Luxembourg */
  Lu = 'LU',
  /** Latvia */
  Lv = 'LV',
  /** Libya */
  Ly = 'LY',
  /** Morocco */
  Ma = 'MA',
  /** Monaco */
  Mc = 'MC',
  /** Moldova */
  Md = 'MD',
  /** Montenegro */
  Me = 'ME',
  /** Saint Martin */
  Mf = 'MF',
  /** Madagascar */
  Mg = 'MG',
  /** Marshall Islands */
  Mh = 'MH',
  /** North Macedonia */
  Mk = 'MK',
  /** Mali */
  Ml = 'ML',
  /** Myanmar */
  Mm = 'MM',
  /** Mongolia */
  Mn = 'MN',
  /** Macao */
  Mo = 'MO',
  /** Northern Mariana Islands */
  Mp = 'MP',
  /** Martinique */
  Mq = 'MQ',
  /** Mauritania */
  Mr = 'MR',
  /** Montserrat */
  Ms = 'MS',
  /** Malta */
  Mt = 'MT',
  /** Mauritius */
  Mu = 'MU',
  /** Maldives */
  Mv = 'MV',
  /** Malawi */
  Mw = 'MW',
  /** Mexico */
  Mx = 'MX',
  /** Malaysia */
  My = 'MY',
  /** Mozambique */
  Mz = 'MZ',
  /** Namibia */
  Na = 'NA',
  /** New Caledonia */
  Nc = 'NC',
  /** Niger */
  Ne = 'NE',
  /** Norfolk Island */
  Nf = 'NF',
  /** Nigeria */
  Ng = 'NG',
  /** Nicaragua */
  Ni = 'NI',
  /** Netherlands */
  Nl = 'NL',
  /** Norway */
  No = 'NO',
  /** Nepal */
  Np = 'NP',
  /** Nauru */
  Nr = 'NR',
  /** Niue */
  Nu = 'NU',
  /** New Zealand */
  Nz = 'NZ',
  /** Oman */
  Om = 'OM',
  /** Panama */
  Pa = 'PA',
  /** Peru */
  Pe = 'PE',
  /** French Polynesia */
  Pf = 'PF',
  /** Papua New Guinea */
  Pg = 'PG',
  /** Philippines */
  Ph = 'PH',
  /** Pakistan */
  Pk = 'PK',
  /** Poland */
  Pl = 'PL',
  /** Saint Pierre and Miquelon */
  Pm = 'PM',
  /** Pitcairn */
  Pn = 'PN',
  /** Puerto Rico */
  Pr = 'PR',
  /** Palestine */
  Ps = 'PS',
  /** Portugal */
  Pt = 'PT',
  /** Palau */
  Pw = 'PW',
  /** Paraguay */
  Py = 'PY',
  /** Qatar */
  Qa = 'QA',
  /** Réunion */
  Re = 'RE',
  /** Romania */
  Ro = 'RO',
  /** Serbia */
  Rs = 'RS',
  /** Russia */
  Ru = 'RU',
  /** Rwanda */
  Rw = 'RW',
  /** Saudi Arabia */
  Sa = 'SA',
  /** Solomon Islands */
  Sb = 'SB',
  /** Seychelles */
  Sc = 'SC',
  /** Sudan */
  Sd = 'SD',
  /** Sweden */
  Se = 'SE',
  /** Singapore */
  Sg = 'SG',
  /** Saint Helena, Ascension and Tristan da Cunha */
  Sh = 'SH',
  /** Slovenia */
  Si = 'SI',
  /** Svalbard and Jan Mayen */
  Sj = 'SJ',
  /** Slovakia */
  Sk = 'SK',
  /** Sierra Leone */
  Sl = 'SL',
  /** San Marino */
  Sm = 'SM',
  /** Senegal */
  Sn = 'SN',
  /** Somalia */
  So = 'SO',
  /** Suriname */
  Sr = 'SR',
  /** South Sudan */
  Ss = 'SS',
  /** Sao Tome and Principe */
  St = 'ST',
  /** El Salvador */
  Sv = 'SV',
  /** Sint Maarten */
  Sx = 'SX',
  /** Syrian Arab Republic */
  Sy = 'SY',
  /** Eswatini */
  Sz = 'SZ',
  /** Turks and Caicos Islands */
  Tc = 'TC',
  /** Chad */
  Td = 'TD',
  /** French Southern Territories */
  Tf = 'TF',
  /** Togo */
  Tg = 'TG',
  /** Thailand */
  Th = 'TH',
  /** Tajikistan */
  Tj = 'TJ',
  /** Tokelau */
  Tk = 'TK',
  /** Timor-Leste */
  Tl = 'TL',
  /** Turkmenistan */
  Tm = 'TM',
  /** Tunisia */
  Tn = 'TN',
  /** Tonga */
  To = 'TO',
  /** Turkey */
  Tr = 'TR',
  /** Trinidad and Tobago */
  Tt = 'TT',
  /** Tuvalu */
  Tv = 'TV',
  /** Taiwan */
  Tw = 'TW',
  /** Tanzania */
  Tz = 'TZ',
  /** Ukraine */
  Ua = 'UA',
  /** Uganda */
  Ug = 'UG',
  /** United States Minor Outlying Islands */
  Um = 'UM',
  /** United States of America */
  Us = 'US',
  /** Uruguay */
  Uy = 'UY',
  /** Uzbekistan */
  Uz = 'UZ',
  /** Vatican City */
  Va = 'VA',
  /** Saint Vincent and the Grenadines */
  Vc = 'VC',
  /** Venezuela */
  Ve = 'VE',
  /** British Virgin Islands */
  Vg = 'VG',
  /** U.S. Virgin Islands */
  Vi = 'VI',
  /** Vietnam */
  Vn = 'VN',
  /** Vanuatu */
  Vu = 'VU',
  /** Wallis and Futuna */
  Wf = 'WF',
  /** Samoa */
  Ws = 'WS',
  /** Yemen */
  Ye = 'YE',
  /** Mayotte */
  Yt = 'YT',
  /** South Africa */
  Za = 'ZA',
  /** Zambia */
  Zm = 'ZM',
  /** Zimbabwe */
  Zw = 'ZW',
  /** Unknown */
  Zz = 'ZZ'
}

/**
 * Indicates the country associated with another entity, such as a business.
 * Values are in [ISO 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm).
 */
export enum CountryCode {
  /** Andorra */
  Ad = 'AD',
  /** United Arab Emirates */
  Ae = 'AE',
  /** Afghanistan */
  Af = 'AF',
  /** Antigua and Barbuda */
  Ag = 'AG',
  /** Anguilla */
  Ai = 'AI',
  /** Albania */
  Al = 'AL',
  /** Armenia */
  Am = 'AM',
  /** Angola */
  Ao = 'AO',
  /** Antartica */
  Aq = 'AQ',
  /** Argentina */
  Ar = 'AR',
  /** American Samoa */
  As = 'AS',
  /** Austria */
  At = 'AT',
  /** Australia */
  Au = 'AU',
  /** Aruba */
  Aw = 'AW',
  /** Åland Islands */
  Ax = 'AX',
  /** Azerbaijan */
  Az = 'AZ',
  /** Bosnia and Herzegovina */
  Ba = 'BA',
  /** Barbados */
  Bb = 'BB',
  /** Bangladesh */
  Bd = 'BD',
  /** Belgium */
  Be = 'BE',
  /** Burkina Faso */
  Bf = 'BF',
  /** Bulgaria */
  Bg = 'BG',
  /** Bahrain */
  Bh = 'BH',
  /** Burundi */
  Bi = 'BI',
  /** Benin */
  Bj = 'BJ',
  /** Saint Barthélemy */
  Bl = 'BL',
  /** Bermuda */
  Bm = 'BM',
  /** Brunei */
  Bn = 'BN',
  /** Bolivia */
  Bo = 'BO',
  /** Bonaire */
  Bq = 'BQ',
  /** Brazil */
  Br = 'BR',
  /** Bahamas */
  Bs = 'BS',
  /** Bhutan */
  Bt = 'BT',
  /** Bouvet Island */
  Bv = 'BV',
  /** Botswana */
  Bw = 'BW',
  /** Belarus */
  By = 'BY',
  /** Belize */
  Bz = 'BZ',
  /** Canada */
  Ca = 'CA',
  /** Cocos Islands */
  Cc = 'CC',
  /** Democratic Republic of the Congo */
  Cd = 'CD',
  /** Central African Republic */
  Cf = 'CF',
  /** Congo */
  Cg = 'CG',
  /** Switzerland */
  Ch = 'CH',
  /** Ivory Coast */
  Ci = 'CI',
  /** Cook Islands */
  Ck = 'CK',
  /** Chile */
  Cl = 'CL',
  /** Cameroon */
  Cm = 'CM',
  /** China */
  Cn = 'CN',
  /** Colombia */
  Co = 'CO',
  /** Costa Rica */
  Cr = 'CR',
  /** Cuba */
  Cu = 'CU',
  /** Cabo Verde */
  Cv = 'CV',
  /** Curaçao */
  Cw = 'CW',
  /** Christmas Island */
  Cx = 'CX',
  /** Cyprus */
  Cy = 'CY',
  /** Czechia */
  Cz = 'CZ',
  /** Germany */
  De = 'DE',
  /** Djibouti */
  Dj = 'DJ',
  /** Denmark */
  Dk = 'DK',
  /** Dominica */
  Dm = 'DM',
  /** Dominican Republic */
  Do = 'DO',
  /** Algeria */
  Dz = 'DZ',
  /** Ecuador */
  Ec = 'EC',
  /** Estonia */
  Ee = 'EE',
  /** Egypt */
  Eg = 'EG',
  /** Western Sahara */
  Eh = 'EH',
  /** Eritrea */
  Er = 'ER',
  /** Spain */
  Es = 'ES',
  /** Ethiopia */
  Et = 'ET',
  /** Finland */
  Fi = 'FI',
  /** Fiji */
  Fj = 'FJ',
  /** Falkland Islands */
  Fk = 'FK',
  /** Federated States of Micronesia */
  Fm = 'FM',
  /** Faroe Islands */
  Fo = 'FO',
  /** France */
  Fr = 'FR',
  /** Gabon */
  Ga = 'GA',
  /** United Kingdom */
  Gb = 'GB',
  /** Grenada */
  Gd = 'GD',
  /** Georgia */
  Ge = 'GE',
  /** French Guiana */
  Gf = 'GF',
  /** Guernsey */
  Gg = 'GG',
  /** Ghana */
  Gh = 'GH',
  /** Gibraltar */
  Gi = 'GI',
  /** Greenland */
  Gl = 'GL',
  /** Gambia */
  Gm = 'GM',
  /** Guinea */
  Gn = 'GN',
  /** Guadeloupe */
  Gp = 'GP',
  /** Equatorial Guinea */
  Gq = 'GQ',
  /** Greece */
  Gr = 'GR',
  /** South Georgia and the South Sandwich Islands */
  Gs = 'GS',
  /** Guatemala */
  Gt = 'GT',
  /** Guam */
  Gu = 'GU',
  /** Guinea-Bissau */
  Gw = 'GW',
  /** Guyana */
  Gy = 'GY',
  /** Hong Kong */
  Hk = 'HK',
  /** Heard Island and McDonald Islands */
  Hm = 'HM',
  /** Honduras */
  Hn = 'HN',
  /** Croatia */
  Hr = 'HR',
  /** Haiti */
  Ht = 'HT',
  /** Hungary */
  Hu = 'HU',
  /** Indonesia */
  Id = 'ID',
  /** Ireland */
  Ie = 'IE',
  /** Israel */
  Il = 'IL',
  /** Isle of Man */
  Im = 'IM',
  /** India */
  In = 'IN',
  /** British Indian Ocean Territory */
  Io = 'IO',
  /** Iraq */
  Iq = 'IQ',
  /** Iran */
  Ir = 'IR',
  /** Iceland */
  Is = 'IS',
  /** Italy */
  It = 'IT',
  /** Jersey */
  Je = 'JE',
  /** Jamaica */
  Jm = 'JM',
  /** Jordan */
  Jo = 'JO',
  /** Japan */
  Jp = 'JP',
  /** Kenya */
  Ke = 'KE',
  /** Kyrgyzstan */
  Kg = 'KG',
  /** Cambodia */
  Kh = 'KH',
  /** Kiribati */
  Ki = 'KI',
  /** Comoros */
  Km = 'KM',
  /** Saint Kitts and Nevis */
  Kn = 'KN',
  /** Democratic People's Republic of Korea */
  Kp = 'KP',
  /** Republic of Korea */
  Kr = 'KR',
  /** Kuwait */
  Kw = 'KW',
  /** Cayman Islands */
  Ky = 'KY',
  /** Kazakhstan */
  Kz = 'KZ',
  /** Lao People's Democratic Republic */
  La = 'LA',
  /** Lebanon */
  Lb = 'LB',
  /** Saint Lucia */
  Lc = 'LC',
  /** Liechtenstein */
  Li = 'LI',
  /** Sri Lanka */
  Lk = 'LK',
  /** Liberia */
  Lr = 'LR',
  /** Lesotho */
  Ls = 'LS',
  /** Lithuania */
  Lt = 'LT',
  /** Luxembourg */
  Lu = 'LU',
  /** Latvia */
  Lv = 'LV',
  /** Libya */
  Ly = 'LY',
  /** Morocco */
  Ma = 'MA',
  /** Monaco */
  Mc = 'MC',
  /** Moldova */
  Md = 'MD',
  /** Montenegro */
  Me = 'ME',
  /** Saint Martin */
  Mf = 'MF',
  /** Madagascar */
  Mg = 'MG',
  /** Marshall Islands */
  Mh = 'MH',
  /** North Macedonia */
  Mk = 'MK',
  /** Mali */
  Ml = 'ML',
  /** Myanmar */
  Mm = 'MM',
  /** Mongolia */
  Mn = 'MN',
  /** Macao */
  Mo = 'MO',
  /** Northern Mariana Islands */
  Mp = 'MP',
  /** Martinique */
  Mq = 'MQ',
  /** Mauritania */
  Mr = 'MR',
  /** Montserrat */
  Ms = 'MS',
  /** Malta */
  Mt = 'MT',
  /** Mauritius */
  Mu = 'MU',
  /** Maldives */
  Mv = 'MV',
  /** Malawi */
  Mw = 'MW',
  /** Mexico */
  Mx = 'MX',
  /** Malaysia */
  My = 'MY',
  /** Mozambique */
  Mz = 'MZ',
  /** Namibia */
  Na = 'NA',
  /** New Caledonia */
  Nc = 'NC',
  /** Niger */
  Ne = 'NE',
  /** Norfolk Island */
  Nf = 'NF',
  /** Nigeria */
  Ng = 'NG',
  /** Nicaragua */
  Ni = 'NI',
  /** Netherlands */
  Nl = 'NL',
  /** Norway */
  No = 'NO',
  /** Nepal */
  Np = 'NP',
  /** Nauru */
  Nr = 'NR',
  /** Niue */
  Nu = 'NU',
  /** New Zealand */
  Nz = 'NZ',
  /** Oman */
  Om = 'OM',
  /** Panama */
  Pa = 'PA',
  /** Peru */
  Pe = 'PE',
  /** French Polynesia */
  Pf = 'PF',
  /** Papua New Guinea */
  Pg = 'PG',
  /** Philippines */
  Ph = 'PH',
  /** Pakistan */
  Pk = 'PK',
  /** Poland */
  Pl = 'PL',
  /** Saint Pierre and Miquelon */
  Pm = 'PM',
  /** Pitcairn */
  Pn = 'PN',
  /** Puerto Rico */
  Pr = 'PR',
  /** Palestine */
  Ps = 'PS',
  /** Portugal */
  Pt = 'PT',
  /** Palau */
  Pw = 'PW',
  /** Paraguay */
  Py = 'PY',
  /** Qatar */
  Qa = 'QA',
  /** Réunion */
  Re = 'RE',
  /** Romania */
  Ro = 'RO',
  /** Serbia */
  Rs = 'RS',
  /** Russia */
  Ru = 'RU',
  /** Rwanda */
  Rw = 'RW',
  /** Saudi Arabia */
  Sa = 'SA',
  /** Solomon Islands */
  Sb = 'SB',
  /** Seychelles */
  Sc = 'SC',
  /** Sudan */
  Sd = 'SD',
  /** Sweden */
  Se = 'SE',
  /** Singapore */
  Sg = 'SG',
  /** Saint Helena, Ascension and Tristan da Cunha */
  Sh = 'SH',
  /** Slovenia */
  Si = 'SI',
  /** Svalbard and Jan Mayen */
  Sj = 'SJ',
  /** Slovakia */
  Sk = 'SK',
  /** Sierra Leone */
  Sl = 'SL',
  /** San Marino */
  Sm = 'SM',
  /** Senegal */
  Sn = 'SN',
  /** Somalia */
  So = 'SO',
  /** Suriname */
  Sr = 'SR',
  /** South Sudan */
  Ss = 'SS',
  /** Sao Tome and Principe */
  St = 'ST',
  /** El Salvador */
  Sv = 'SV',
  /** Sint Maarten */
  Sx = 'SX',
  /** Syrian Arab Republic */
  Sy = 'SY',
  /** Eswatini */
  Sz = 'SZ',
  /** Turks and Caicos Islands */
  Tc = 'TC',
  /** Chad */
  Td = 'TD',
  /** French Southern Territories */
  Tf = 'TF',
  /** Togo */
  Tg = 'TG',
  /** Thailand */
  Th = 'TH',
  /** Tajikistan */
  Tj = 'TJ',
  /** Tokelau */
  Tk = 'TK',
  /** Timor-Leste */
  Tl = 'TL',
  /** Turkmenistan */
  Tm = 'TM',
  /** Tunisia */
  Tn = 'TN',
  /** Tonga */
  To = 'TO',
  /** Turkey */
  Tr = 'TR',
  /** Trinidad and Tobago */
  Tt = 'TT',
  /** Tuvalu */
  Tv = 'TV',
  /** Taiwan */
  Tw = 'TW',
  /** Tanzania */
  Tz = 'TZ',
  /** Ukraine */
  Ua = 'UA',
  /** Uganda */
  Ug = 'UG',
  /** United States Minor Outlying Islands */
  Um = 'UM',
  /** United States of America */
  Us = 'US',
  /** Uruguay */
  Uy = 'UY',
  /** Uzbekistan */
  Uz = 'UZ',
  /** Vatican City */
  Va = 'VA',
  /** Saint Vincent and the Grenadines */
  Vc = 'VC',
  /** Venezuela */
  Ve = 'VE',
  /** British Virgin Islands */
  Vg = 'VG',
  /** U.S. Virgin Islands */
  Vi = 'VI',
  /** Vietnam */
  Vn = 'VN',
  /** Vanuatu */
  Vu = 'VU',
  /** Wallis and Futuna */
  Wf = 'WF',
  /** Samoa */
  Ws = 'WS',
  /** Test country. */
  Xt = 'XT',
  /** Yemen */
  Ye = 'YE',
  /** Mayotte */
  Yt = 'YT',
  /** South Africa */
  Za = 'ZA',
  /** Zambia */
  Zm = 'ZM',
  /** Zimbabwe */
  Zw = 'ZW',
  /** Unknown */
  Zz = 'ZZ'
}

/**
 * Input type used to specify filters on `CountryCode` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type CountryCodeFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<CountryCodeFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<CountryCode>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<CountryCodeFilter>;
};

/**
 * Input type used to specify filters on `Country` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type CountryFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<CountryFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Country>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<CountryFilter>;
};

/**
 * Indicates the associated currency for an amount of money.
 *
 * Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
 */
export enum Currency {
  /** United Arab Emirates dirham */
  Aed = 'AED',
  /** Afghan afghani */
  Afn = 'AFN',
  /** Albanian lek */
  All = 'ALL',
  /** Armenian dram */
  Amd = 'AMD',
  /** Netherlands Antillean guilder */
  Ang = 'ANG',
  /** Angolan kwanza */
  Aoa = 'AOA',
  /** Argentine peso */
  Ars = 'ARS',
  /** Australian dollar */
  Aud = 'AUD',
  /** Aruban florin */
  Awg = 'AWG',
  /** Azerbaijani manat */
  Azn = 'AZN',
  /** Bosnia and Herzegovina convertible mark */
  Bam = 'BAM',
  /** Barbados dollar */
  Bbd = 'BBD',
  /** Bangladeshi taka */
  Bdt = 'BDT',
  /** Bulgarian lev */
  Bgn = 'BGN',
  /** Bahraini dinar */
  Bhd = 'BHD',
  /** Burundian franc */
  Bif = 'BIF',
  /** Bermudian dollar */
  Bmd = 'BMD',
  /** Brunei dollar */
  Bnd = 'BND',
  /** Boliviano */
  Bob = 'BOB',
  /** Bolivian Mvdol */
  Bov = 'BOV',
  /** Brazilian real */
  Brl = 'BRL',
  /** Bahamian dollar */
  Bsd = 'BSD',
  /** Bitcoin */
  Btc = 'BTC',
  /** Bhutanese ngultrum */
  Btn = 'BTN',
  /** Botswana pula */
  Bwp = 'BWP',
  /** Belarusian ruble */
  Byr = 'BYR',
  /** Belize dollar */
  Bzd = 'BZD',
  /** Canadian dollar */
  Cad = 'CAD',
  /** Congolese franc */
  Cdf = 'CDF',
  /** WIR Euro */
  Che = 'CHE',
  /** Swiss franc */
  Chf = 'CHF',
  /** WIR Franc */
  Chw = 'CHW',
  /** Unidad de Fomento */
  Clf = 'CLF',
  /** Chilean peso */
  Clp = 'CLP',
  /** Chinese yuan */
  Cny = 'CNY',
  /** Colombian peso */
  Cop = 'COP',
  /** Unidad de Valor Real */
  Cou = 'COU',
  /** Costa Rican colon */
  Crc = 'CRC',
  /** Cuban convertible peso */
  Cuc = 'CUC',
  /** Cuban peso */
  Cup = 'CUP',
  /** Cape Verdean escudo */
  Cve = 'CVE',
  /** Czech koruna */
  Czk = 'CZK',
  /** Djiboutian franc */
  Djf = 'DJF',
  /** Danish krone */
  Dkk = 'DKK',
  /** Dominican peso */
  Dop = 'DOP',
  /** Algerian dinar */
  Dzd = 'DZD',
  /** Egyptian pound */
  Egp = 'EGP',
  /** Eritrean nakfa */
  Ern = 'ERN',
  /** Ethiopian birr */
  Etb = 'ETB',
  /** Euro */
  Eur = 'EUR',
  /** Fiji dollar */
  Fjd = 'FJD',
  /** Falkland Islands pound */
  Fkp = 'FKP',
  /** Pound sterling */
  Gbp = 'GBP',
  /** Georgian lari */
  Gel = 'GEL',
  /** Ghanaian cedi */
  Ghs = 'GHS',
  /** Gibraltar pound */
  Gip = 'GIP',
  /** Gambian dalasi */
  Gmd = 'GMD',
  /** Guinean franc */
  Gnf = 'GNF',
  /** Guatemalan quetzal */
  Gtq = 'GTQ',
  /** Guyanese dollar */
  Gyd = 'GYD',
  /** Hong Kong dollar */
  Hkd = 'HKD',
  /** Honduran lempira */
  Hnl = 'HNL',
  /** Croatian kuna */
  Hrk = 'HRK',
  /** Haitian gourde */
  Htg = 'HTG',
  /** Hungarian forint */
  Huf = 'HUF',
  /** Indonesian rupiah */
  Idr = 'IDR',
  /** Israeli new shekel */
  Ils = 'ILS',
  /** Indian rupee */
  Inr = 'INR',
  /** Iraqi dinar */
  Iqd = 'IQD',
  /** Iranian rial */
  Irr = 'IRR',
  /** Icelandic króna */
  Isk = 'ISK',
  /** Jamaican dollar */
  Jmd = 'JMD',
  /** Jordanian dinar */
  Jod = 'JOD',
  /** Japanese yen */
  Jpy = 'JPY',
  /** Kenyan shilling */
  Kes = 'KES',
  /** Kyrgyzstani som */
  Kgs = 'KGS',
  /** Cambodian riel */
  Khr = 'KHR',
  /** Comoro franc */
  Kmf = 'KMF',
  /** North Korean won */
  Kpw = 'KPW',
  /** South Korean won */
  Krw = 'KRW',
  /** Kuwaiti dinar */
  Kwd = 'KWD',
  /** Cayman Islands dollar */
  Kyd = 'KYD',
  /** Kazakhstani tenge */
  Kzt = 'KZT',
  /** Lao kip */
  Lak = 'LAK',
  /** Lebanese pound */
  Lbp = 'LBP',
  /** Sri Lankan rupee */
  Lkr = 'LKR',
  /** Liberian dollar */
  Lrd = 'LRD',
  /** Lesotho loti */
  Lsl = 'LSL',
  /** Lithuanian litas */
  Ltl = 'LTL',
  /** Latvian lats */
  Lvl = 'LVL',
  /** Libyan dinar */
  Lyd = 'LYD',
  /** Moroccan dirham */
  Mad = 'MAD',
  /** Moldovan leu */
  Mdl = 'MDL',
  /** Malagasy ariary */
  Mga = 'MGA',
  /** Macedonian denar */
  Mkd = 'MKD',
  /** Myanmar kyat */
  Mmk = 'MMK',
  /** Mongolian tögrög */
  Mnt = 'MNT',
  /** Macanese pataca */
  Mop = 'MOP',
  /** Mauritanian ouguiya */
  Mro = 'MRO',
  /** Mauritian rupee */
  Mur = 'MUR',
  /** Maldivian rufiyaa */
  Mvr = 'MVR',
  /** Malawian kwacha */
  Mwk = 'MWK',
  /** Mexican peso */
  Mxn = 'MXN',
  /** Mexican Unidad de Inversion */
  Mxv = 'MXV',
  /** Malaysian ringgit */
  Myr = 'MYR',
  /** Mozambican metical */
  Mzn = 'MZN',
  /** Namibian dollar */
  Nad = 'NAD',
  /** Nigerian naira */
  Ngn = 'NGN',
  /** Nicaraguan córdoba */
  Nio = 'NIO',
  /** Norwegian krone */
  Nok = 'NOK',
  /** Nepalese rupee */
  Npr = 'NPR',
  /** New Zealand dollar */
  Nzd = 'NZD',
  /** Omani rial */
  Omr = 'OMR',
  /** Panamanian balboa */
  Pab = 'PAB',
  /** Peruvian sol */
  Pen = 'PEN',
  /** Papua New Guinean kina */
  Pgk = 'PGK',
  /** Philippine peso */
  Php = 'PHP',
  /** Pakistani rupee */
  Pkr = 'PKR',
  /** Polish złoty */
  Pln = 'PLN',
  /** Paraguayan guaraní */
  Pyg = 'PYG',
  /** Qatari riyal */
  Qar = 'QAR',
  /** Romanian leu */
  Ron = 'RON',
  /** Serbian dinar */
  Rsd = 'RSD',
  /** Russian ruble */
  Rub = 'RUB',
  /** Rwandan franc */
  Rwf = 'RWF',
  /** Saudi riyal */
  Sar = 'SAR',
  /** Solomon Islands dollar */
  Sbd = 'SBD',
  /** Seychelles rupee */
  Scr = 'SCR',
  /** Sudanese pound */
  Sdg = 'SDG',
  /** Swedish krona */
  Sek = 'SEK',
  /** Singapore dollar */
  Sgd = 'SGD',
  /** Saint Helena pound */
  Shp = 'SHP',
  /** Sierra Leonean leone */
  Sll = 'SLL',
  /** Somali shilling */
  Sos = 'SOS',
  /** Surinamese dollar */
  Srd = 'SRD',
  /** South Sudanese pound */
  Ssp = 'SSP',
  /** São Tomé and Príncipe dobra */
  Std = 'STD',
  /** Salvadoran colón */
  Svc = 'SVC',
  /** Syrian pound */
  Syp = 'SYP',
  /** Swazi lilangeni */
  Szl = 'SZL',
  /** Thai baht */
  Thb = 'THB',
  /** Tajikstani somoni */
  Tjs = 'TJS',
  /** Turkmenistan manat */
  Tmt = 'TMT',
  /** Tunisian dinar */
  Tnd = 'TND',
  /** Tongan pa'anga */
  Top = 'TOP',
  /** Turkish lira */
  Try = 'TRY',
  /** Trinidad and Tobago dollar */
  Ttd = 'TTD',
  /** New Taiwan dollar */
  Twd = 'TWD',
  /** Tanzanian shilling */
  Tzs = 'TZS',
  /** Ukrainian hryvnia */
  Uah = 'UAH',
  /** Ugandan shilling */
  Ugx = 'UGX',
  /** Unknown currency */
  UnknownCurrency = 'UNKNOWN_CURRENCY',
  /** United States dollar */
  Usd = 'USD',
  /** United States dollar (next day) */
  Usn = 'USN',
  /** United States dollar (same day) */
  Uss = 'USS',
  /** Uruguay Peso en Unidedades Indexadas */
  Uyi = 'UYI',
  /** Uruguyan peso */
  Uyu = 'UYU',
  /** Uzbekistan som */
  Uzs = 'UZS',
  /** Venezuelan bolívar soberano */
  Vef = 'VEF',
  /** Vietnamese đồng */
  Vnd = 'VND',
  /** Vanuatu vatu */
  Vuv = 'VUV',
  /** Samoan tala */
  Wst = 'WST',
  /** CFA franc BEAC */
  Xaf = 'XAF',
  /** Silver */
  Xag = 'XAG',
  /** Gold */
  Xau = 'XAU',
  /** European Composite Unit */
  Xba = 'XBA',
  /** European Monetary Unit */
  Xbb = 'XBB',
  /** European Unit of Account 9 */
  Xbc = 'XBC',
  /** European Unit of Account 17 */
  Xbd = 'XBD',
  /** East Caribbean dollar */
  Xcd = 'XCD',
  /** Special drawing rights (International Monetary Fund) */
  Xdr = 'XDR',
  /** CFA franc BCEAO */
  Xof = 'XOF',
  /** Palladium */
  Xpd = 'XPD',
  /** CFP franc */
  Xpf = 'XPF',
  /** Platinum */
  Xpt = 'XPT',
  /** Code reserved for testing */
  Xts = 'XTS',
  /** USD Coin */
  Xus = 'XUS',
  /** No currency */
  Xxx = 'XXX',
  /** Yemeni rial */
  Yer = 'YER',
  /** South African rand */
  Zar = 'ZAR',
  /** Zambian kwacha */
  Zmk = 'ZMK',
  /** Zambian kwacha */
  Zmw = 'ZMW'
}

/**
 * Indicates the associated currency for an amount of money. Values correspond to
 * [ISO 4217](https://wikipedia.org/wiki/ISO_4217), with the exception of BTC (Bitcoin).
 */
export enum CurrencyCode {
  /** United Arab Emirates dirham */
  Aed = 'AED',
  /** Afghan afghani */
  Afn = 'AFN',
  /** Albanian lek */
  All = 'ALL',
  /** Armenian dram */
  Amd = 'AMD',
  /** Netherlands Antillean guilder */
  Ang = 'ANG',
  /** Angolan kwanza */
  Aoa = 'AOA',
  /** Argentine peso */
  Ars = 'ARS',
  /** Australian dollar */
  Aud = 'AUD',
  /** Aruban florin */
  Awg = 'AWG',
  /** Azerbaijani manat */
  Azn = 'AZN',
  /** Bosnia and Herzegovina convertible mark */
  Bam = 'BAM',
  /** Barbados dollar */
  Bbd = 'BBD',
  /** Bangladeshi taka */
  Bdt = 'BDT',
  /** Bulgarian lev */
  Bgn = 'BGN',
  /** Bahraini dinar */
  Bhd = 'BHD',
  /** Burundian franc */
  Bif = 'BIF',
  /** Bermudian dollar */
  Bmd = 'BMD',
  /** Brunei dollar */
  Bnd = 'BND',
  /** Boliviano */
  Bob = 'BOB',
  /** Bolivian Mvdol */
  Bov = 'BOV',
  /** Brazilian real */
  Brl = 'BRL',
  /** Bahamian dollar */
  Bsd = 'BSD',
  /** Bitcoin */
  Btc = 'BTC',
  /** Bhutanese ngultrum */
  Btn = 'BTN',
  /** Botswana pula */
  Bwp = 'BWP',
  /** Belarusian ruble */
  Byr = 'BYR',
  /** Belize dollar */
  Bzd = 'BZD',
  /** Canadian dollar */
  Cad = 'CAD',
  /** Congolese franc */
  Cdf = 'CDF',
  /** WIR Euro */
  Che = 'CHE',
  /** Swiss franc */
  Chf = 'CHF',
  /** WIR Franc */
  Chw = 'CHW',
  /** Unidad de Fomento */
  Clf = 'CLF',
  /** Chilean peso */
  Clp = 'CLP',
  /** Chinese yuan */
  Cny = 'CNY',
  /** Colombian peso */
  Cop = 'COP',
  /** Unidad de Valor Real */
  Cou = 'COU',
  /** Costa Rican colon */
  Crc = 'CRC',
  /** Cuban convertible peso */
  Cuc = 'CUC',
  /** Cuban peso */
  Cup = 'CUP',
  /** Cape Verdean escudo */
  Cve = 'CVE',
  /** Czech koruna */
  Czk = 'CZK',
  /** Djiboutian franc */
  Djf = 'DJF',
  /** Danish krone */
  Dkk = 'DKK',
  /** Dominican peso */
  Dop = 'DOP',
  /** Algerian dinar */
  Dzd = 'DZD',
  /** Egyptian pound */
  Egp = 'EGP',
  /** Eritrean nakfa */
  Ern = 'ERN',
  /** Ethiopian birr */
  Etb = 'ETB',
  /** Euro */
  Eur = 'EUR',
  /** Fiji dollar */
  Fjd = 'FJD',
  /** Falkland Islands pound */
  Fkp = 'FKP',
  /** Pound sterling */
  Gbp = 'GBP',
  /** Georgian lari */
  Gel = 'GEL',
  /** Ghanaian cedi */
  Ghs = 'GHS',
  /** Gibraltar pound */
  Gip = 'GIP',
  /** Gambian dalasi */
  Gmd = 'GMD',
  /** Guinean franc */
  Gnf = 'GNF',
  /** Guatemalan quetzal */
  Gtq = 'GTQ',
  /** Guyanese dollar */
  Gyd = 'GYD',
  /** Hong Kong dollar */
  Hkd = 'HKD',
  /** Honduran lempira */
  Hnl = 'HNL',
  /** Croatian kuna */
  Hrk = 'HRK',
  /** Haitian gourde */
  Htg = 'HTG',
  /** Hungarian forint */
  Huf = 'HUF',
  /** Indonesian rupiah */
  Idr = 'IDR',
  /** Israeli new shekel */
  Ils = 'ILS',
  /** Indian rupee */
  Inr = 'INR',
  /** Iraqi dinar */
  Iqd = 'IQD',
  /** Iranian rial */
  Irr = 'IRR',
  /** Icelandic króna */
  Isk = 'ISK',
  /** Jamaican dollar */
  Jmd = 'JMD',
  /** Jordanian dinar */
  Jod = 'JOD',
  /** Japanese yen */
  Jpy = 'JPY',
  /** Kenyan shilling */
  Kes = 'KES',
  /** Kyrgyzstani som */
  Kgs = 'KGS',
  /** Cambodian riel */
  Khr = 'KHR',
  /** Comoro franc */
  Kmf = 'KMF',
  /** North Korean won */
  Kpw = 'KPW',
  /** South Korean won */
  Krw = 'KRW',
  /** Kuwaiti dinar */
  Kwd = 'KWD',
  /** Cayman Islands dollar */
  Kyd = 'KYD',
  /** Kazakhstani tenge */
  Kzt = 'KZT',
  /** Lao kip */
  Lak = 'LAK',
  /** Lebanese pound */
  Lbp = 'LBP',
  /** Sri Lankan rupee */
  Lkr = 'LKR',
  /** Liberian dollar */
  Lrd = 'LRD',
  /** Lesotho loti */
  Lsl = 'LSL',
  /** Lithuanian litas */
  Ltl = 'LTL',
  /** Latvian lats */
  Lvl = 'LVL',
  /** Libyan dinar */
  Lyd = 'LYD',
  /** Moroccan dirham */
  Mad = 'MAD',
  /** Moldovan leu */
  Mdl = 'MDL',
  /** Malagasy ariary */
  Mga = 'MGA',
  /** Macedonian denar */
  Mkd = 'MKD',
  /** Myanmar kyat */
  Mmk = 'MMK',
  /** Mongolian tögrög */
  Mnt = 'MNT',
  /** Macanese pataca */
  Mop = 'MOP',
  /** Mauritanian ouguiya */
  Mro = 'MRO',
  /** Mauritian rupee */
  Mur = 'MUR',
  /** Maldivian rufiyaa */
  Mvr = 'MVR',
  /** Malawian kwacha */
  Mwk = 'MWK',
  /** Mexican peso */
  Mxn = 'MXN',
  /** Mexican Unidad de Inversion */
  Mxv = 'MXV',
  /** Malaysian ringgit */
  Myr = 'MYR',
  /** Mozambican metical */
  Mzn = 'MZN',
  /** Namibian dollar */
  Nad = 'NAD',
  /** Nigerian naira */
  Ngn = 'NGN',
  /** Nicaraguan córdoba */
  Nio = 'NIO',
  /** Norwegian krone */
  Nok = 'NOK',
  /** Nepalese rupee */
  Npr = 'NPR',
  /** New Zealand dollar */
  Nzd = 'NZD',
  /** Omani rial */
  Omr = 'OMR',
  /** Panamanian balboa */
  Pab = 'PAB',
  /** Peruvian sol */
  Pen = 'PEN',
  /** Papua New Guinean kina */
  Pgk = 'PGK',
  /** Philippine peso */
  Php = 'PHP',
  /** Pakistani rupee */
  Pkr = 'PKR',
  /** Polish złoty */
  Pln = 'PLN',
  /** Paraguayan guaraní */
  Pyg = 'PYG',
  /** Qatari riyal */
  Qar = 'QAR',
  /** Romanian leu */
  Ron = 'RON',
  /** Serbian dinar */
  Rsd = 'RSD',
  /** Russian ruble */
  Rub = 'RUB',
  /** Rwandan franc */
  Rwf = 'RWF',
  /** Saudi riyal */
  Sar = 'SAR',
  /** Solomon Islands dollar */
  Sbd = 'SBD',
  /** Seychelles rupee */
  Scr = 'SCR',
  /** Sudanese pound */
  Sdg = 'SDG',
  /** Swedish krona */
  Sek = 'SEK',
  /** Singapore dollar */
  Sgd = 'SGD',
  /** Saint Helena pound */
  Shp = 'SHP',
  /** Sierra Leonean leone */
  Sll = 'SLL',
  /** Somali shilling */
  Sos = 'SOS',
  /** Surinamese dollar */
  Srd = 'SRD',
  /** South Sudanese pound */
  Ssp = 'SSP',
  /** São Tomé and Príncipe dobra */
  Std = 'STD',
  /** Salvadoran colón */
  Svc = 'SVC',
  /** Syrian pound */
  Syp = 'SYP',
  /** Swazi lilangeni */
  Szl = 'SZL',
  /** Thai baht */
  Thb = 'THB',
  /** Tajikstani somoni */
  Tjs = 'TJS',
  /** Turkmenistan manat */
  Tmt = 'TMT',
  /** Tunisian dinar */
  Tnd = 'TND',
  /** Tongan pa'anga */
  Top = 'TOP',
  /** Turkish lira */
  Try = 'TRY',
  /** Trinidad and Tobago dollar */
  Ttd = 'TTD',
  /** New Taiwan dollar */
  Twd = 'TWD',
  /** Tanzanian shilling */
  Tzs = 'TZS',
  /** Ukrainian hryvnia */
  Uah = 'UAH',
  /** Ugandan shilling */
  Ugx = 'UGX',
  /** United States dollar */
  Usd = 'USD',
  /** United States dollar (next day) */
  Usn = 'USN',
  /** United States dollar (same day) */
  Uss = 'USS',
  /** Uruguay Peso en Unidedades Indexadas */
  Uyi = 'UYI',
  /** Uruguyan peso */
  Uyu = 'UYU',
  /** Uzbekistan som */
  Uzs = 'UZS',
  /** Venezuelan bolívar soberano */
  Vef = 'VEF',
  /** Vietnamese đồng */
  Vnd = 'VND',
  /** Vanuatu vatu */
  Vuv = 'VUV',
  /** Samoan tala */
  Wst = 'WST',
  /** CFA franc BEAC */
  Xaf = 'XAF',
  /** Silver */
  Xag = 'XAG',
  /** Gold */
  Xau = 'XAU',
  /** European Composite Unit */
  Xba = 'XBA',
  /** European Monetary Unit */
  Xbb = 'XBB',
  /** European Unit of Account 9 */
  Xbc = 'XBC',
  /** European Unit of Account 17 */
  Xbd = 'XBD',
  /** East Caribbean dollar */
  Xcd = 'XCD',
  /** Special drawing rights (International Monetary Fund) */
  Xdr = 'XDR',
  /** CFA franc BCEAO */
  Xof = 'XOF',
  /** Palladium */
  Xpd = 'XPD',
  /** CFP franc */
  Xpf = 'XPF',
  /** Platinum */
  Xpt = 'XPT',
  /** Code reserved for testing */
  Xts = 'XTS',
  /** USD Coin */
  Xus = 'XUS',
  /** No currency */
  Xxx = 'XXX',
  /** Yemeni rial */
  Yer = 'YER',
  /** South African rand */
  Zar = 'ZAR',
  /** Zambian kwacha */
  Zmk = 'ZMK',
  /** Zambian kwacha */
  Zmw = 'ZMW'
}

/**
 * Input type used to specify filters on `CurrencyCode` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type CurrencyCodeFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<CurrencyCodeFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<CurrencyCode>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<CurrencyCodeFilter>;
};

/**
 * Input type used to specify filters on `Currency` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type CurrencyFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<CurrencyFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Currency>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<CurrencyFilter>;
};

/**
 * Indicates the associated currency for an amount of money.
 *
 * Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
 */
export enum CurrencyInput {
  Aed = 'AED',
  Afn = 'AFN',
  All = 'ALL',
  Amd = 'AMD',
  Ang = 'ANG',
  Aoa = 'AOA',
  Ars = 'ARS',
  Aud = 'AUD',
  Awg = 'AWG',
  Azn = 'AZN',
  Bam = 'BAM',
  Bbd = 'BBD',
  Bdt = 'BDT',
  Bgn = 'BGN',
  Bhd = 'BHD',
  Bif = 'BIF',
  Bmd = 'BMD',
  Bnd = 'BND',
  Bob = 'BOB',
  Bov = 'BOV',
  Brl = 'BRL',
  Bsd = 'BSD',
  Btc = 'BTC',
  Btn = 'BTN',
  Bwp = 'BWP',
  Byr = 'BYR',
  Bzd = 'BZD',
  Cad = 'CAD',
  Cdf = 'CDF',
  Che = 'CHE',
  Chf = 'CHF',
  Chw = 'CHW',
  Clf = 'CLF',
  Clp = 'CLP',
  Cny = 'CNY',
  Cop = 'COP',
  Cou = 'COU',
  Crc = 'CRC',
  Cuc = 'CUC',
  Cup = 'CUP',
  Cve = 'CVE',
  Czk = 'CZK',
  Djf = 'DJF',
  Dkk = 'DKK',
  Dop = 'DOP',
  Dzd = 'DZD',
  Egp = 'EGP',
  Ern = 'ERN',
  Etb = 'ETB',
  Eur = 'EUR',
  Fjd = 'FJD',
  Fkp = 'FKP',
  Gbp = 'GBP',
  Gel = 'GEL',
  Ghs = 'GHS',
  Gip = 'GIP',
  Gmd = 'GMD',
  Gnf = 'GNF',
  Gtq = 'GTQ',
  Gyd = 'GYD',
  Hkd = 'HKD',
  Hnl = 'HNL',
  Hrk = 'HRK',
  Htg = 'HTG',
  Huf = 'HUF',
  Idr = 'IDR',
  Ils = 'ILS',
  Inr = 'INR',
  Iqd = 'IQD',
  Irr = 'IRR',
  Isk = 'ISK',
  Jmd = 'JMD',
  Jod = 'JOD',
  Jpy = 'JPY',
  Kes = 'KES',
  Kgs = 'KGS',
  Khr = 'KHR',
  Kmf = 'KMF',
  Kpw = 'KPW',
  Krw = 'KRW',
  Kwd = 'KWD',
  Kyd = 'KYD',
  Kzt = 'KZT',
  Lak = 'LAK',
  Lbp = 'LBP',
  Lkr = 'LKR',
  Lrd = 'LRD',
  Lsl = 'LSL',
  Ltl = 'LTL',
  Lvl = 'LVL',
  Lyd = 'LYD',
  Mad = 'MAD',
  Mdl = 'MDL',
  Mga = 'MGA',
  Mkd = 'MKD',
  Mmk = 'MMK',
  Mnt = 'MNT',
  Mop = 'MOP',
  Mro = 'MRO',
  Mur = 'MUR',
  Mvr = 'MVR',
  Mwk = 'MWK',
  Mxn = 'MXN',
  Mxv = 'MXV',
  Myr = 'MYR',
  Mzn = 'MZN',
  Nad = 'NAD',
  Ngn = 'NGN',
  Nio = 'NIO',
  Nok = 'NOK',
  Npr = 'NPR',
  Nzd = 'NZD',
  Omr = 'OMR',
  Pab = 'PAB',
  Pen = 'PEN',
  Pgk = 'PGK',
  Php = 'PHP',
  Pkr = 'PKR',
  Pln = 'PLN',
  Pyg = 'PYG',
  Qar = 'QAR',
  Ron = 'RON',
  Rsd = 'RSD',
  Rub = 'RUB',
  Rwf = 'RWF',
  Sar = 'SAR',
  Sbd = 'SBD',
  Scr = 'SCR',
  Sdg = 'SDG',
  Sek = 'SEK',
  Sgd = 'SGD',
  Shp = 'SHP',
  Sll = 'SLL',
  Sos = 'SOS',
  Srd = 'SRD',
  Ssp = 'SSP',
  Std = 'STD',
  Svc = 'SVC',
  Syp = 'SYP',
  Szl = 'SZL',
  Thb = 'THB',
  Tjs = 'TJS',
  Tmt = 'TMT',
  Tnd = 'TND',
  Top = 'TOP',
  Try = 'TRY',
  Ttd = 'TTD',
  Twd = 'TWD',
  Tzs = 'TZS',
  Uah = 'UAH',
  Ugx = 'UGX',
  UnknownCurrency = 'UNKNOWN_CURRENCY',
  Usd = 'USD',
  Usn = 'USN',
  Uss = 'USS',
  Uyi = 'UYI',
  Uyu = 'UYU',
  Uzs = 'UZS',
  Vef = 'VEF',
  Vnd = 'VND',
  Vuv = 'VUV',
  Wst = 'WST',
  Xaf = 'XAF',
  Xag = 'XAG',
  Xau = 'XAU',
  Xba = 'XBA',
  Xbb = 'XBB',
  Xbc = 'XBC',
  Xbd = 'XBD',
  Xcd = 'XCD',
  Xdr = 'XDR',
  Xof = 'XOF',
  Xpd = 'XPD',
  Xpf = 'XPF',
  Xpt = 'XPT',
  Xts = 'XTS',
  Xus = 'XUS',
  Xxx = 'XXX',
  Yer = 'YER',
  Zar = 'ZAR',
  Zmk = 'ZMK',
  Zmw = 'ZMW'
}

/**
 * References to Customers subgraph entities
 *
 * Permissions:CUSTOMERS_READ
 */
export type Customer = {
  __typename?: 'Customer';
  address?: Maybe<Address>;
  birthday?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  creationSource?: Maybe<Scalars['String']['output']>;
  emailAddress?: Maybe<Scalars['EmailAddress']['output']>;
  familyName?: Maybe<Scalars['String']['output']>;
  givenName?: Maybe<Scalars['String']['output']>;
  groupIds?: Maybe<Array<Scalars['ID']['output']>>;
  /** A unique Square-assigned ID for the customer profile. */
  id: Scalars['ID']['output'];
  /** The merchantId associated with the customer. */
  merchantId: Scalars['ID']['output'];
  nickname?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<CustomerPreferences>;
  referenceId?: Maybe<Scalars['ID']['output']>;
  segmentIds?: Maybe<Array<Scalars['ID']['output']>>;
  taxIds?: Maybe<TaxIds>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CustomerConnection = {
  __typename?: 'CustomerConnection';
  nodes: Array<Customer>;
  pageInfo?: Maybe<PageInfo>;
};

/**
 * The filtering criteria for the query. A query can contain multiple filters in any combination.
 * Multiple filters are combined as `AND` statements.
 *
 * Note: Combining multiple filters as `OR` statements is not supported. Instead, send multiple single-filter
 * searches and join the result sets.
 */
export type CustomerFilter = {
  /** A filter to select customers based on when they were created. */
  createdAt?: InputMaybe<TimeRangeFilter>;
  /** A filter to select customers by their email address visible to the seller. This filter is case-insensitive. */
  email?: InputMaybe<CustomerTextFilter>;
  /**
   * This filter cannot be used in conjunction with email or createdAt filters.
   * The number of customer_ids passed through this filter must be lower than 20.
   */
  id?: InputMaybe<BasicIdFilter>;
  /** A filter to select customers by their owning merchant. */
  merchantId: BasicIdFilter;
};

export type CustomerPreferences = {
  __typename?: 'CustomerPreferences';
  emailUnsubscribed?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * A filter to select customers based on exact matching of customer attributes
 * against a specified query.
 */
export type CustomerTextFilter = {
  /** Use the exact filter to select customers whose attributes match exactly the specified query. */
  exact?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Input type used to specify filters on `Date` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type DateFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<DateFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /**
   * Matches records where the field value is greater than (>) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gt?: InputMaybe<Scalars['Date']['input']>;
  /**
   * Matches records where the field value is greater than or equal to (>=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /**
   * Matches records where the field value is less than (<) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lt?: InputMaybe<Scalars['Date']['input']>;
  /**
   * Matches records where the field value is less than or equal to (<=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lte?: InputMaybe<Scalars['Date']['input']>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<DateFilter>;
};

/**
 * Input type used to specify filters on `DateTime` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type DateTimeFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<DateTimeFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /**
   * Matches records where the field value is greater than (>) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Matches records where the field value is greater than or equal to (>=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Matches records where the field value is less than (<) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Matches records where the field value is less than or equal to (<=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<DateTimeFilter>;
  /** Matches records based on the time-of-day of the `DateTime` values. */
  timeOfDay?: InputMaybe<DateTimeTimeOfDayFilter>;
};

/**
 * Input type offered when grouping on `DateTime` fields, representing the amount of offset
 * (positive or negative) to shift the `DateTime` boundaries of each grouping bucket.
 *
 * For example, when grouping by `WEEK`, you can shift by 24 hours to change
 * what day-of-week weeks are considered to start on.
 */
export type DateTimeGroupingOffset = {
  /** Number (positive or negative) of the given `unit` to offset the boundaries of the `DateTime` groupings. */
  amount: Scalars['Int']['input'];
  /** Unit of offsetting to apply to the boundaries of the `DateTime` groupings. */
  unit: DateTimeUnit;
};

/**
 * Input type used to specify filters on the time-of-day of `DateTime` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type DateTimeTimeOfDayFilter = {
  /**
   * Matches records where the time of day of the `DateTime` field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<Scalars['LocalTime']['input']>>;
  /**
   * Matches records where the time of day of the `DateTime` field value is greater than (>) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gt?: InputMaybe<Scalars['LocalTime']['input']>;
  /**
   * Matches records where the time of day of the `DateTime` field value is greater than or equal to (>=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gte?: InputMaybe<Scalars['LocalTime']['input']>;
  /**
   * Matches records where the time of day of the `DateTime` field value is less than (<) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lt?: InputMaybe<Scalars['LocalTime']['input']>;
  /**
   * Matches records where the time of day of the `DateTime` field value is less than or equal to (<=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lte?: InputMaybe<Scalars['LocalTime']['input']>;
  /** TimeZone to use when comparing the `DateTime` values against the provided `LocalTime` values. */
  timeZone?: InputMaybe<Scalars['TimeZone']['input']>;
};

/** Enumeration of `DateTime` units. */
export enum DateTimeUnit {
  /** The time period of a full rotation of the Earth with respect to the Sun. */
  Day = 'DAY',
  /** 1/24th of a day. */
  Hour = 'HOUR',
  /** 1/1000th of a second. */
  Millisecond = 'MILLISECOND',
  /** 1/60th of an hour. */
  Minute = 'MINUTE',
  /** 1/60th of a minute. */
  Second = 'SECOND'
}

/** Indicates the specific day of the week. */
export enum DayOfWeek {
  /** Friday */
  Fri = 'FRI',
  /** Monday */
  Mon = 'MON',
  /** Saturday */
  Sat = 'SAT',
  /** Sunday */
  Sun = 'SUN',
  /** Thursday */
  Thu = 'THU',
  /** Tuesday */
  Tue = 'TUE',
  /** Wednesday */
  Wed = 'WED'
}

/** The brand used for a `WALLET` payment. */
export enum DigitalWalletPaymentBrand {
  Alipay = 'ALIPAY',
  CashApp = 'CASH_APP',
  Paypay = 'PAYPAY',
  Unknown = 'UNKNOWN'
}

/**
 * Input type used to specify filters on `DigitalWalletPaymentBrand` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type DigitalWalletPaymentBrandFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<DigitalWalletPaymentBrandFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<DigitalWalletPaymentBrand>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<DigitalWalletPaymentBrandFilter>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * Additional details about `WALLET` type payments. Contains only non-confidential information.
 */
export type DigitalWalletPaymentDetails = {
  __typename?: 'DigitalWalletPaymentDetails';
  /** The brand used for the `WALLET` payment. */
  brand?: Maybe<DigitalWalletPaymentBrand>;
  /** Brand-specific details for payments with the `brand` of `CASH_APP`. */
  cashAppDetails?: Maybe<CashAppPaymentDetails>;
  /** The status of the `WALLET` payment. */
  status?: Maybe<DigitalWalletPaymentStatus>;
};

/**
 * Input type used to specify filters on `DigitalWalletPaymentDetails` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type DigitalWalletPaymentDetailsFilter = {
  /**
   * Used to filter on the `brand` field:
   *
   * > The brand used for the `WALLET` payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  brand?: InputMaybe<DigitalWalletPaymentBrandFilter>;
  /**
   * Used to filter on the `cashAppDetails` field:
   *
   * > Brand-specific details for payments with the `brand` of `CASH_APP`.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  cashAppDetails?: InputMaybe<CashAppPaymentDetailsFilter>;
  /**
   * Used to filter on the `status` field:
   *
   * > The status of the `WALLET` payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  status?: InputMaybe<DigitalWalletPaymentStatusFilter>;
};

/** The status of a `WALLET` payment. */
export enum DigitalWalletPaymentStatus {
  Authorized = 'AUTHORIZED',
  Captured = 'CAPTURED',
  Failed = 'FAILED',
  Voided = 'VOIDED'
}

/**
 * Input type used to specify filters on `DigitalWalletPaymentStatus` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type DigitalWalletPaymentStatusFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<DigitalWalletPaymentStatusFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<DigitalWalletPaymentStatus>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<DigitalWalletPaymentStatusFilter>;
};

/**
 * Discount code belonging to the order.
 *
 * Permissions:ORDERS_READ
 */
export type DiscountCode = {
  __typename?: 'DiscountCode';
  /** The identifier of the Discount Code. */
  id: Scalars['ID']['output'];
  /** The ID of the pricing rule corresponding to this discount code. */
  pricingRuleId?: Maybe<Scalars['ID']['output']>;
  /** The number of instances of the Discount Code. */
  quantity?: Maybe<Scalars['Int']['output']>;
};

/** Enumerates the supported distance units. */
export enum DistanceUnit {
  /** A metric system unit equal to 1/100th of a meter. */
  Centimeter = 'CENTIMETER',
  /** A United States customary unit of 12 inches. */
  Foot = 'FOOT',
  /** A United States customary unit equal to 1/12th of a foot. */
  Inch = 'INCH',
  /** A metric system unit equal to 1,000 meters. */
  Kilometer = 'KILOMETER',
  /** The base unit of length in the metric system. */
  Meter = 'METER',
  /** A United States customary unit of 5,280 feet. */
  Mile = 'MILE',
  /** A metric system unit equal to 1/1,000th of a meter. */
  Millimeter = 'MILLIMETER',
  /** An international unit of length used for air, marine, and space navigation. Equivalent to 1,852 meters. */
  NauticalMile = 'NAUTICAL_MILE',
  /** A United States customary unit of 3 feet. */
  Yard = 'YARD'
}

/**
 * Input type used to specify filters on `Duration` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type DurationFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<DurationFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Scalars['Duration']['input']>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<DurationFilter>;
};

/**
 * Input type used to specify filters on `EmailAddress` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type EmailAddressFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<EmailAddressFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<EmailAddressFilter>;
};

/**
 * An employee object that is used by the external API.
 *
 * Permissions:EMPLOYEES_READ
 */
export type Employee = {
  __typename?: 'Employee';
  /** The Square-issued ID of the employee. */
  id: Scalars['ID']['output'];
};

/**
 * Represents an error encountered during a request to the Connect API.
 *
 * See [Handling errors](https://developer.squareup.com/docs/build-basics/handling-errors) for more information.
 */
export type Error = {
  __typename?: 'Error';
  /** The high-level category for the error. */
  category?: Maybe<ErrorCategory>;
  /** The specific code of the error. */
  code?: Maybe<ErrorCode>;
  /** A human-readable description of the error for debugging purposes. */
  detail?: Maybe<Scalars['String']['output']>;
  /** The name of the field provided in the original request (if any) that the error pertains to. */
  field?: Maybe<Scalars['String']['output']>;
};

/** Indicates which high-level category of error has occurred during a request to the Connect API. */
export enum ErrorCategory {
  /** An error occurred with the Connect API itself. */
  ApiError = 'API_ERROR',
  /**
   * An authentication error occurred. Most commonly, the request had a missing,
   * malformed, or otherwise invalid `Authorization` header.
   */
  AuthenticationError = 'AUTHENTICATION_ERROR',
  /** An error that is returned from an external vendor's API. */
  ExternalVendorError = 'EXTERNAL_VENDOR_ERROR',
  /** The request was invalid. Most commonly, a required parameter was missing, or a provided parameter had an invalid value. */
  InvalidRequestError = 'INVALID_REQUEST_ERROR',
  /** An error occurred when checking a merchant subscription status. */
  MerchantSubscriptionError = 'MERCHANT_SUBSCRIPTION_ERROR',
  /**
   * An error occurred while processing a payment method. Most commonly, the
   * details of the payment method were invalid (such as a card's CVV or expiration date).
   */
  PaymentMethodError = 'PAYMENT_METHOD_ERROR',
  /**
   * Your application reached the Square API rate limit. You might receive this
   * error if your application sends a high number of requests
   * to Square APIs in a short period of time.
   *
   * Your application should monitor responses for `429 RATE_LIMITED` errors and
   * use a retry mechanism with an [exponential
   * backoff](https://en.wikipedia.org/wiki/Exponential_backoff)
   * schedule to resend the requests at an increasingly slower rate. It is also a
   * good practice to use a randomized delay (jitter) in your retry schedule.
   */
  RateLimitError = 'RATE_LIMIT_ERROR',
  /** An error occurred while attempting to process a refund. */
  RefundError = 'REFUND_ERROR'
}

/**
 * Input type used to specify filters on `ErrorCategory` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type ErrorCategoryFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<ErrorCategoryFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<ErrorCategory>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<ErrorCategoryFilter>;
};

/** Indicates the specific error that occurred during a request to a Square API. */
export enum ErrorCode {
  /** The provided access token has expired. */
  AccessTokenExpired = 'ACCESS_TOKEN_EXPIRED',
  /** The provided access token has been revoked. */
  AccessTokenRevoked = 'ACCESS_TOKEN_REVOKED',
  /** The account provided cannot carry out transactions. */
  AccountUnusable = 'ACCOUNT_UNUSABLE',
  /** The card issuer declined the request because the postal code is invalid. */
  AddressVerificationFailure = 'ADDRESS_VERIFICATION_FAILURE',
  /**
   * The card has exhausted its available pin entry retries set by the card issuer.
   * Resolving the error typically requires the card holder to contact the card issuer.
   */
  AllowablePinTriesExceeded = 'ALLOWABLE_PIN_TRIES_EXCEEDED',
  /** The requested payment amount is too high for the provided payment source. */
  AmountTooHigh = 'AMOUNT_TOO_HIGH',
  /** The provided Square-Version is incompatible with the requested action. */
  ApiVersionIncompatible = 'API_VERSION_INCOMPATIBLE',
  /** Square could not find the associated Apple Pay certificate. */
  ApplePaymentProcessingCertificateHashNotFound = 'APPLE_PAYMENT_PROCESSING_CERTIFICATE_HASH_NOT_FOUND',
  /**
   * The payment was declined by the card issuer during an Apple Tap to Pay (TTP) transaction with a request for the
   * card's PIN. This code will be returned alongside CARD_DECLINED_VERIFICATION_REQUIRED as a supplemental error,
   * and will include an issuer-provided token in the details field that is needed to initiate the PIN collection
   * flow on the iOS device.
   */
  AppleTtpPinToken = 'APPLE_TTP_PIN_TOKEN',
  /** The calling application was disabled. */
  ApplicationDisabled = 'APPLICATION_DISABLED',
  /** The provided array is empty. */
  ArrayEmpty = 'ARRAY_EMPTY',
  /** The provided array has too many elements. */
  ArrayLengthTooLong = 'ARRAY_LENGTH_TOO_LONG',
  /** The provided array has too few elements. */
  ArrayLengthTooShort = 'ARRAY_LENGTH_TOO_SHORT',
  /** Bad certificate. */
  BadCertificate = 'BAD_CERTIFICATE',
  /** The card expiration date is either missing or incorrectly formatted. */
  BadExpiration = 'BAD_EXPIRATION',
  /** Bad Gateway - a general error occurred. */
  BadGateway = 'BAD_GATEWAY',
  /** A general error occurred with the request. */
  BadRequest = 'BAD_REQUEST',
  /** The card issuer declined the refund. */
  BlockedByBlocklist = 'BLOCKED_BY_BLOCKLIST',
  /** The provided buyer id can't be found */
  BuyerNotFound = 'BUYER_NOT_FOUND',
  /** Bank account rejected or was not authorized for the payment. */
  BuyerRefusedPayment = 'BUYER_REFUSED_PAYMENT',
  /** Fulfillment type is not supported for calculating fulfillment rates. */
  CalculateFulfillmentRatesFulfillmentTypeNotSupported = 'CALCULATE_FULFILLMENT_RATES_FULFILLMENT_TYPE_NOT_SUPPORTED',
  /** No profiles are configured with the requested shipment destination. */
  CalculateFulfillmentRatesInvalidRecipientAddress = 'CALCULATE_FULFILLMENT_RATES_INVALID_RECIPIENT_ADDRESS',
  /** No profiles are configured for the fufillment type requested. */
  CalculateFulfillmentRatesNoProfilesConfigured = 'CALCULATE_FULFILLMENT_RATES_NO_PROFILES_CONFIGURED',
  /** No profiles are configured with the requested shipment destination. */
  CalculateFulfillmentRatesShipmentDestinationNotConfigured = 'CALCULATE_FULFILLMENT_RATES_SHIPMENT_DESTINATION_NOT_CONFIGURED',
  /**
   * The card issuer has declined the transaction due to restrictions on where the
   * card can be used.  For example, a gift card is limited to a single merchant.
   */
  CardholderInsufficientPermissions = 'CARDHOLDER_INSUFFICIENT_PERMISSIONS',
  /** The card was declined. */
  CardDeclined = 'CARD_DECLINED',
  /** The payment card was declined with a request for the card holder to call the issuer. */
  CardDeclinedCallIssuer = 'CARD_DECLINED_CALL_ISSUER',
  /** The payment card was declined with a request for additional verification. */
  CardDeclinedVerificationRequired = 'CARD_DECLINED_VERIFICATION_REQUIRED',
  /** The card issuer declined the request because the card is expired. */
  CardExpired = 'CARD_EXPIRED',
  /** The API request references an unsupported source type. */
  CardMismatch = 'CARD_MISMATCH',
  /** The card is not supported either in the geographic region or by the [merchant category code](https://developer.squareup.com/docs/locations-api#initialize-a-merchant-category-code) (MCC). */
  CardNotSupported = 'CARD_NOT_SUPPORTED',
  /** The transaction requires that a card be present. */
  CardPresenceRequired = 'CARD_PRESENCE_REQUIRED',
  /** The location provided in the API call is not enabled for credit card processing. */
  CardProcessingNotEnabled = 'CARD_PROCESSING_NOT_ENABLED',
  /** The provided card token (nonce) has expired. */
  CardTokenExpired = 'CARD_TOKEN_EXPIRED',
  /** The provided card token (nonce) was already used to process the payment or refund. */
  CardTokenUsed = 'CARD_TOKEN_USED',
  /** The provided checkout URL has expired. */
  CheckoutExpired = 'CHECKOUT_EXPIRED',
  /** The card issuer requires that the card be read using a chip reader. */
  ChipInsertionRequired = 'CHIP_INSERTION_REQUIRED',
  /**
   * External clients are not supposed to see this response code as used to reflect
   * when clients close the connection before we're able to serve a response.
   * This non-standard response code was adopted by ngnix.
   */
  ClientClosedRequest = 'CLIENT_CLOSED_REQUEST',
  /** The provided client has been disabled. */
  ClientDisabled = 'CLIENT_DISABLED',
  /** The provided client is not supported. */
  ClientNotSupported = 'CLIENT_NOT_SUPPORTED',
  /** Conflict - a general error occurred. */
  Conflict = 'CONFLICT',
  /** One or more of the request parameters conflict with each other. */
  ConflictingParameters = 'CONFLICTING_PARAMETERS',
  /**
   * The currency associated with the payment is not valid for the provided funding
   * source. For example, a gift card funded in USD cannot be used to process
   * payments in GBP.
   */
  CurrencyMismatch = 'CURRENCY_MISMATCH',
  /** The provided customer does not have a recorded email. */
  CustomerMissingEmail = 'CUSTOMER_MISSING_EMAIL',
  /** The provided customer does not have a recorded name. */
  CustomerMissingName = 'CUSTOMER_MISSING_NAME',
  /** The provided customer id can't be found in the merchant's customers list. */
  CustomerNotFound = 'CUSTOMER_NOT_FOUND',
  /** The card issuer declined the request because the CVV value is invalid. */
  CvvFailure = 'CVV_FAILURE',
  /** The application tried to cancel a delayed-capture payment that was already cancelled. */
  DelayedTransactionCanceled = 'DELAYED_TRANSACTION_CANCELED',
  /** The application tried to capture a delayed-capture payment that was already captured. */
  DelayedTransactionCaptured = 'DELAYED_TRANSACTION_CAPTURED',
  /** The application tried to update a delayed-capture payment that has expired. */
  DelayedTransactionExpired = 'DELAYED_TRANSACTION_EXPIRED',
  /** The application tried to update a delayed-capture payment that failed. */
  DelayedTransactionFailed = 'DELAYED_TRANSACTION_FAILED',
  /** Deprecated now means only that the field is listed as such in the API tech ref. This is not an error. */
  DeprecatedFieldSet = 'DEPRECATED_FIELD_SET',
  /** The endpoint expected the provided value to be an array or list. */
  ExpectedArray = 'EXPECTED_ARRAY',
  /** The endpoint expected the provided value to be an array encoded in base64. */
  ExpectedBase64EncodedByteArray = 'EXPECTED_BASE64_ENCODED_BYTE_ARRAY',
  /** The endpoint expected the provided value to be a boolean. */
  ExpectedBoolean = 'EXPECTED_BOOLEAN',
  /** The endpoint expected the provided value to be a float. */
  ExpectedFloat = 'EXPECTED_FLOAT',
  /** The endpoint expected the provided value to be an integer. */
  ExpectedInteger = 'EXPECTED_INTEGER',
  /** The request body is not a JSON object. */
  ExpectedJsonBody = 'EXPECTED_JSON_BODY',
  /** The endpoint expected the provided value to be a map or associative array. */
  ExpectedMap = 'EXPECTED_MAP',
  /** The endpoint expected the provided value to be a JSON object. */
  ExpectedObject = 'EXPECTED_OBJECT',
  /** The endpoint expected the provided value to be a string. */
  ExpectedString = 'EXPECTED_STRING',
  /** The card expiration date is either invalid or indicates that the card is expired. */
  ExpirationFailure = 'EXPIRATION_FAILURE',
  /** A general access error occurred. */
  Forbidden = 'FORBIDDEN',
  /** Unable to re-assign preferences assignment. Preferences assignment is a write-once field. */
  FulfillmentPreferencesAssignmentIsImmutable = 'FULFILLMENT_PREFERENCES_ASSIGNMENT_IS_IMMUTABLE',
  /** The provided preferences assignment types should be consistent within request */
  FulfillmentPreferencesConflictingAssignmentType = 'FULFILLMENT_PREFERENCES_CONFLICTING_ASSIGNMENT_TYPE',
  /** Fulfillment Preferences with fulfillment schedules cannot be assigned to a CATALOG_ITEM */
  FulfillmentPreferencesFulfillmentScheduleNotAllowed = 'FULFILLMENT_PREFERENCES_FULFILLMENT_SCHEDULE_NOT_ALLOWED',
  /** Parameters being used for FulfillmentAvailabilityWindow object are not valid. */
  FulfillmentPreferencesInvalidFulfillmentAvailabilityWindow = 'FULFILLMENT_PREFERENCES_INVALID_FULFILLMENT_AVAILABILITY_WINDOW',
  /** The datetime value is not in the correct format per app business logic. */
  FulfillmentPreferencesInvalidSchedulingDatetime = 'FULFILLMENT_PREFERENCES_INVALID_SCHEDULING_DATETIME',
  /** This restricted date is a duplicate within the list. */
  FulfillmentPreferencesRestrictedDateNotUnique = 'FULFILLMENT_PREFERENCES_RESTRICTED_DATE_NOT_UNIQUE',
  /** Gateway Timeout - a general error occurred. */
  GatewayTimeout = 'GATEWAY_TIMEOUT',
  /**
   * Square received a decline without any additional information.  If the payment
   * information seems correct, the buyer can contact their issuer to ask for more information.
   */
  GenericDecline = 'GENERIC_DECLINE',
  /**
   * When a Gift Card is a payment source, you can allow taking a partial payment
   * by adding the `accept_partial_authorization` parameter in the request.
   * However, taking such a partial payment does not work if your request also includes
   * `tipMoney`, `appFeeMoney`, or both. Square declines such payments and returns
   * the `GIFT_CARD_AVAILABLE_AMOUNT` error.
   * For more information, see
   * [CreatePayment errors (additional information)](https://developer.squareup.com/docs/payments-api/error-codes#createpayment-errors-additional-information).
   */
  GiftCardAvailableAmount = 'GIFT_CARD_AVAILABLE_AMOUNT',
  /** The buyer attempting to add value to the gift card has reached daily purchase limits. */
  GiftCardBuyerDailyLimitReached = 'GIFT_CARD_BUYER_DAILY_LIMIT_REACHED',
  /** The specified gift card amount is zero, negative, in the incorrect currency, or too large. */
  GiftCardInvalidAmount = 'GIFT_CARD_INVALID_AMOUNT',
  /** The gift card's maximum value has been reached. */
  GiftCardMaxValueReached = 'GIFT_CARD_MAX_VALUE_REACHED',
  /** The merchant's maximum total of outstanding gift card balances has been reached. */
  GiftCardMerchantMaxOutstandingBalanceReached = 'GIFT_CARD_MERCHANT_MAX_OUTSTANDING_BALANCE_REACHED',
  /** Attempted to add an amount to a gift card that is beyond its limits. */
  GiftCardValueAdditionLimitReached = 'GIFT_CARD_VALUE_ADDITION_LIMIT_REACHED',
  /** The target resource is no longer available and this condition is likely to be permanent. */
  Gone = 'GONE',
  /** HTTPS only. */
  HttpsOnly = 'HTTPS_ONLY',
  /** The provided idempotency key has already been used. */
  IdempotencyKeyReused = 'IDEMPOTENCY_KEY_REUSED',
  /** The value provided in the request is the wrong type. For example, a string instead of an integer. */
  IncorrectType = 'INCORRECT_TYPE',
  /** The funding source has insufficient funds to cover the payment. */
  InsufficientFunds = 'INSUFFICIENT_FUNDS',
  /** The referenced inventory item has insufficient inventory. */
  InsufficientInventory = 'INSUFFICIENT_INVENTORY',
  /**
   * The Square account does not have the permissions to accept this payment. For
   * example, Square may limit which merchants are allowed to receive gift card payments.
   */
  InsufficientPermissions = 'INSUFFICIENT_PERMISSIONS',
  /** The Square account does not have the permissions to process this refund. */
  InsufficientPermissionsForRefund = 'INSUFFICIENT_PERMISSIONS_FOR_REFUND',
  /** The provided access token does not have permission to execute the requested action. */
  InsufficientScopes = 'INSUFFICIENT_SCOPES',
  /** A general server error occurred. */
  InternalServerError = 'INTERNAL_SERVER_ERROR',
  /** The issuer was not able to locate the account on record. */
  InvalidAccount = 'INVALID_ACCOUNT',
  /** One or more objects in the array does not match the array type. */
  InvalidArrayValue = 'INVALID_ARRAY_VALUE',
  /** The credit card cannot be validated based on the provided details. */
  InvalidCard = 'INVALID_CARD',
  /** Generic error - the provided card data is invalid. */
  InvalidCardData = 'INVALID_CARD_DATA',
  /** Invalid content type header. */
  InvalidContentType = 'INVALID_CONTENT_TYPE',
  /** The pagination cursor included in the request is invalid. */
  InvalidCursor = 'INVALID_CURSOR',
  /** The subscription cannot be paused/resumed on the given date. */
  InvalidDate = 'INVALID_DATE',
  /** The provided email address is invalid. */
  InvalidEmailAddress = 'INVALID_EMAIL_ADDRESS',
  /** The encrypted card information is invalid. */
  InvalidEncryptedCard = 'INVALID_ENCRYPTED_CARD',
  /** The provided static string is not valid for the field. */
  InvalidEnumValue = 'INVALID_ENUM_VALUE',
  /** The expiration date for the payment card is invalid. For example, it indicates a date in the past. */
  InvalidExpiration = 'INVALID_EXPIRATION',
  /** The expiration date for the payment card is invalid. For example, it contains invalid characters. */
  InvalidExpirationDate = 'INVALID_EXPIRATION_DATE',
  /**
   * The expiration year for the payment card is invalid. For example, it indicates
   * a year in the past or contains invalid characters.
   */
  InvalidExpirationYear = 'INVALID_EXPIRATION_YEAR',
  /** The app_fee_money on a payment is too high. */
  InvalidFees = 'INVALID_FEES',
  /** Only relevant for applications created prior to 2016-03-30. Indicates there was an error while parsing form values. */
  InvalidFormValue = 'INVALID_FORM_VALUE',
  /**
   * The Square account cannot take payments in the specified region.  A Square
   * account can take payments only from the region where the account was created.
   */
  InvalidLocation = 'INVALID_LOCATION',
  /** The subscription cannot be paused longer than the duration of the current phase. */
  InvalidPauseLength = 'INVALID_PAUSE_LENGTH',
  /** The provided phone number is invalid. */
  InvalidPhoneNumber = 'INVALID_PHONE_NUMBER',
  /** The card issuer declined the request because the PIN is invalid. */
  InvalidPin = 'INVALID_PIN',
  /** The postal code is incorrectly formatted. */
  InvalidPostalCode = 'INVALID_POSTAL_CODE',
  /** The provided sort order is not a valid key.  Currently, sort order must be `ASC` or `DESC`. */
  InvalidSortOrder = 'INVALID_SORT_ORDER',
  /** The provided Square-Version is incorrectly formatted. */
  InvalidSquareVersionFormat = 'INVALID_SQUARE_VERSION_FORMAT',
  /** Formatting for the provided time value is incorrect. */
  InvalidTime = 'INVALID_TIME',
  /** Value is not a valid timezone. */
  InvalidTimezone = 'INVALID_TIMEZONE',
  /** The time range provided in the request is invalid.  For example, the end time is before the start time. */
  InvalidTimeRange = 'INVALID_TIME_RANGE',
  /** The provided API URL is invalid. */
  InvalidUrl = 'INVALID_URL',
  /** The provided value is invalid. For example, including `%` in a phone number. */
  InvalidValue = 'INVALID_VALUE',
  /** The verification code provided is invalid. */
  InvalidVerificationCode = 'INVALID_VERIFICATION_CODE',
  /** There already exists a job template with the given name. */
  JobTemplateNameTaken = 'JOB_TEMPLATE_NAME_TAKEN',
  /** Generic error - the given location does not matching what is expected. */
  LocationMismatch = 'LOCATION_MISMATCH',
  /** The card must be swiped, tapped, or dipped. Payments attempted by manually entering the card number are declined. */
  ManuallyEnteredPaymentNotSupported = 'MANUALLY_ENTERED_PAYMENT_NOT_SUPPORTED',
  /** The length of one of the provided keys in the map is too long. */
  MapKeyLengthTooLong = 'MAP_KEY_LENGTH_TOO_LONG',
  /** The length of one of the provided keys in the map is too short. */
  MapKeyLengthTooShort = 'MAP_KEY_LENGTH_TOO_SHORT',
  /** A required subscription was not found for the merchant */
  MerchantSubscriptionNotFound = 'MERCHANT_SUBSCRIPTION_NOT_FOUND',
  /** Method Not Allowed - a general error occurred. */
  MethodNotAllowed = 'METHOD_NOT_ALLOWED',
  /** The payment is missing a required ACCOUNT_TYPE parameter. */
  MissingAccountType = 'MISSING_ACCOUNT_TYPE',
  /** The payment is missing a required PIN. */
  MissingPin = 'MISSING_PIN',
  /** The request is missing a required path, query, or body parameter. */
  MissingRequiredParameter = 'MISSING_REQUIRED_PARAMETER',
  /** Not Acceptable - a general error occurred. */
  NotAcceptable = 'NOT_ACCEPTABLE',
  /** Not Found - a general error occurred. */
  NotFound = 'NOT_FOUND',
  /** Not Implemented - a general error occurred. */
  NotImplemented = 'NOT_IMPLEMENTED',
  /** A general error occurred. */
  NoFieldsSet = 'NO_FIELDS_SET',
  /** A general error occurred. */
  OneInstrumentExpected = 'ONE_INSTRUMENT_EXPECTED',
  /** The order was already used. */
  OrderAlreadyUsed = 'ORDER_ALREADY_USED',
  /** The requested order has expired and cannot be updated. */
  OrderExpired = 'ORDER_EXPIRED',
  /** The creation request contains too many catalog IDs. */
  OrderTooManyCatalogObjects = 'ORDER_TOO_MANY_CATALOG_OBJECTS',
  /** The specified card number is invalid. For example, it is of incorrect length or is incorrectly formatted. */
  PanFailure = 'PAN_FAILURE',
  /**
   * The payment was declined because there was a payment amount mismatch.  The
   * money amount Square was expecting does not match the amount provided.
   */
  PaymentAmountMismatch = 'PAYMENT_AMOUNT_MISMATCH',
  /** Square declined the request because the payment amount exceeded the processing limit for this merchant. */
  PaymentLimitExceeded = 'PAYMENT_LIMIT_EXCEEDED',
  /** The payment is not refundable. For example, the payment has been disputed and is no longer eligible for refunds. */
  PaymentNotRefundable = 'PAYMENT_NOT_REFUNDABLE',
  /** Generic plaid error. */
  PlaidError = 'PLAID_ERROR',
  /** Plaid error - ITEM_LOGIN_REQUIRED. */
  PlaidErrorItemLoginRequired = 'PLAID_ERROR_ITEM_LOGIN_REQUIRED',
  /** Plaid error - RATE_LIMIT. */
  PlaidErrorRateLimit = 'PLAID_ERROR_RATE_LIMIT',
  /** There is a price mismatch. */
  PriceMismatch = 'PRICE_MISMATCH',
  /** Rate Limited - a general error occurred. */
  RateLimited = 'RATE_LIMITED',
  /** The payment already has a pending refund. */
  RefundAlreadyPending = 'REFUND_ALREADY_PENDING',
  /** The requested refund amount exceeds the amount available to refund. */
  RefundAmountInvalid = 'REFUND_AMOUNT_INVALID',
  /** Request failed - The card issuer declined the refund. */
  RefundDeclined = 'REFUND_DECLINED',
  /** Request Entity Too Large - a general error occurred. */
  RequestEntityTooLarge = 'REQUEST_ENTITY_TOO_LARGE',
  /** Request Timeout - a general error occurred. */
  RequestTimeout = 'REQUEST_TIMEOUT',
  /** The card issuer declined the refund. */
  ReservationDeclined = 'RESERVATION_DECLINED',
  /** The fields are not accessible at the request api version. Use API_VERSION_INCOMPATIBLE instead. */
  RetiredFieldSet = 'RETIRED_FIELD_SET',
  /** The API request is not supported in sandbox. */
  SandboxNotSupported = 'SANDBOX_NOT_SUPPORTED',
  /** Service Unavailable - a general error occurred. */
  ServiceUnavailable = 'SERVICE_UNAVAILABLE',
  /** A session associated with the payment has expired. */
  SessionExpired = 'SESSION_EXPIRED',
  /** The provided source id has expired. */
  SourceExpired = 'SOURCE_EXPIRED',
  /** The provided source id was already used to create a card. */
  SourceUsed = 'SOURCE_USED',
  /** A temporary internal error occurred. You can safely retry your call using the same idempotency key. */
  TemporaryError = 'TEMPORARY_ERROR',
  /** Too many entries in the map field. */
  TooManyMapEntries = 'TOO_MANY_MAP_ENTRIES',
  /**
   * The card issuer has determined the payment amount is either too high or too low.
   * The API returns the error code mostly for credit cards (for example, the card reached
   * the credit limit). However, sometimes the issuer bank can indicate the error for debit
   * or prepaid cards (for example, card has insufficient funds).
   */
  TransactionLimit = 'TRANSACTION_LIMIT',
  /** A general authorization error occurred. */
  Unauthorized = 'UNAUTHORIZED',
  /** General error - the value provided was unexpected. */
  UnexpectedValue = 'UNEXPECTED_VALUE',
  /** The body parameter is not recognized by the requested endpoint. */
  UnknownBodyParameter = 'UNKNOWN_BODY_PARAMETER',
  /** The query parameters provided is invalid for the requested endpoint. */
  UnknownQueryParameter = 'UNKNOWN_QUERY_PARAMETER',
  /** Unprocessable Entity - a general error occurred. */
  UnprocessableEntity = 'UNPROCESSABLE_ENTITY',
  /** The provided URL is unreachable. */
  UnreachableUrl = 'UNREACHABLE_URL',
  /** The credit card provided is not from a supported issuer. */
  UnsupportedCardBrand = 'UNSUPPORTED_CARD_BRAND',
  /** The API request references an unsupported country. */
  UnsupportedCountry = 'UNSUPPORTED_COUNTRY',
  /** The API request references an unsupported currency. */
  UnsupportedCurrency = 'UNSUPPORTED_CURRENCY',
  /** The entry method for the credit card (swipe, dip, tap) is not supported. */
  UnsupportedEntryMethod = 'UNSUPPORTED_ENTRY_METHOD',
  /** The API request references an unsupported instrument type/ */
  UnsupportedInstrumentType = 'UNSUPPORTED_INSTRUMENT_TYPE',
  /**
   * The referenced loyalty program reward tier is not supported.  This could
   * happen if the reward tier created in a first party application is incompatible
   * with the Loyalty API.
   */
  UnsupportedLoyaltyRewardTier = 'UNSUPPORTED_LOYALTY_REWARD_TIER',
  /** Unsupported Media Type - a general error occurred. */
  UnsupportedMediaType = 'UNSUPPORTED_MEDIA_TYPE',
  /** The API request references an unsupported source type. */
  UnsupportedSourceType = 'UNSUPPORTED_SOURCE_TYPE',
  /**
   * The calling application is using an access token created prior to 2016-03-30
   * and is not compatible with v2 Square API calls.
   */
  V1AccessToken = 'V1_ACCESS_TOKEN',
  /** The calling application was created prior to 2016-03-30 and is not compatible with v2 Square API calls. */
  V1Application = 'V1_APPLICATION',
  /** The provided value has a default (empty) value such as a blank string. */
  ValueEmpty = 'VALUE_EMPTY',
  /** The provided value does not match an expected regular expression. */
  ValueRegexMismatch = 'VALUE_REGEX_MISMATCH',
  /** The provided value is greater than the supported maximum. */
  ValueTooHigh = 'VALUE_TOO_HIGH',
  /** The provided string value is longer than the maximum length allowed. */
  ValueTooLong = 'VALUE_TOO_LONG',
  /** The provided value is less than the supported minimum. */
  ValueTooLow = 'VALUE_TOO_LOW',
  /** The provided string value is shorter than the minimum length allowed. */
  ValueTooShort = 'VALUE_TOO_SHORT',
  /** The AVS could not be verified. */
  VerifyAvsFailure = 'VERIFY_AVS_FAILURE',
  /** The CVV could not be verified. */
  VerifyCvvFailure = 'VERIFY_CVV_FAILURE',
  /** The provided object version does not match the expected value. */
  VersionMismatch = 'VERSION_MISMATCH',
  /** The card issuer declined the request because the issuer requires voice authorization from the cardholder. */
  VoiceFailure = 'VOICE_FAILURE'
}

/**
 * Input type used to specify filters on `ErrorCode` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type ErrorCodeFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<ErrorCodeFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<ErrorCode>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<ErrorCodeFilter>;
};

/**
 * Input type used to specify filters on `Error` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type ErrorFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<ErrorFilter>>;
  /**
   * Used to filter on the `category` field:
   *
   * > The high-level category for the error.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  category?: InputMaybe<ErrorCategoryFilter>;
  /**
   * Used to filter on the `code` field:
   *
   * > The specific code of the error.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  code?: InputMaybe<ErrorCodeFilter>;
  /**
   * Used to filter on the `detail` field:
   *
   * > A human-readable description of the error for debugging purposes.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  detail?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `field` field:
   *
   * > The name of the field provided in the original request (if any) that the error pertains to.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  field?: InputMaybe<StringFilter>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<ErrorFilter>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * Stores details about an external payment. Contains only non-confidential information.
 * For more information, see
 * [Take External Payments](https://developer.squareup.com/docs/payments-api/take-payments/external-payments).
 */
export type ExternalPaymentDetails = {
  __typename?: 'ExternalPaymentDetails';
  /** A description of the external payment source. For example, "Food Delivery Service". */
  source?: Maybe<Scalars['String']['output']>;
  /** The fees paid to the source. The `amountMoney` minus this field is the net amount seller receives. */
  sourceFeeMoney?: Maybe<Money>;
  /** An ID to associate the payment to its originating source. */
  sourceId?: Maybe<Scalars['ID']['output']>;
  /** The type of external payment the seller received. */
  type?: Maybe<ExternalPaymentType>;
};

/**
 * Input type used to specify filters on `ExternalPaymentDetails` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type ExternalPaymentDetailsFilter = {
  /**
   * Used to filter on the `source` field:
   *
   * > A description of the external payment source. For example, "Food Delivery Service".
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  source?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `sourceFeeMoney` field:
   *
   * > The fees paid to the source. The `amountMoney` minus this field is the net amount seller receives.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  sourceFeeMoney?: InputMaybe<MoneyFilter>;
  /**
   * Used to filter on the `sourceId` field:
   *
   * > An ID to associate the payment to its originating source.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  sourceId?: InputMaybe<IdFilter>;
  /**
   * Used to filter on the `type` field:
   *
   * > The type of external payment the seller received.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  type?: InputMaybe<ExternalPaymentTypeFilter>;
};

/** The type of external payment the seller received. */
export enum ExternalPaymentType {
  /** Paid using external bank transfer. */
  BankTransfer = 'BANK_TRANSFER',
  /** A credit or debit card that Square does not support. */
  Card = 'CARD',
  /** Paid using a physical check. */
  Check = 'CHECK',
  /** Paid using a crypto currency. */
  Crypto = 'CRYPTO',
  /** Paid using an E-money provider. */
  Emoney = 'EMONEY',
  /** A third-party application gathered this payment outside of Square. */
  External = 'EXTERNAL',
  /** Restaurant voucher provided by employers to employees to pay for meals. */
  FoodVoucher = 'FOOD_VOUCHER',
  /** A type not listed here. */
  Other = 'OTHER',
  /** Paid using a non-Square gift card. */
  OtherGiftCard = 'OTHER_GIFT_CARD',
  /** Paid using peer-to-peer payment applications. */
  Social = 'SOCIAL',
  /** Paid using Square Cash App. */
  SquareCash = 'SQUARE_CASH',
  /** Use for house accounts, store credit, and so forth. */
  StoredBalance = 'STORED_BALANCE'
}

/**
 * Input type used to specify filters on `ExternalPaymentType` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type ExternalPaymentTypeFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<ExternalPaymentTypeFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<ExternalPaymentType>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<ExternalPaymentTypeFilter>;
};

/**
 * Input type used to specify filters on `Float` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type FloatFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<FloatFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /**
   * Matches records where the field value is greater than (>) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gt?: InputMaybe<Scalars['Float']['input']>;
  /**
   * Matches records where the field value is greater than or equal to (>=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gte?: InputMaybe<Scalars['Float']['input']>;
  /**
   * Matches records where the field value is less than (<) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lt?: InputMaybe<Scalars['Float']['input']>;
  /**
   * Matches records where the field value is less than or equal to (<=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lte?: InputMaybe<Scalars['Float']['input']>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<FloatFilter>;
};

/** Latitude and longitude coordinates. */
export type GeoCoordinates = {
  __typename?: 'GeoCoordinates';
  /** The latitude of the coordinate expressed in degrees. */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** The longitude of the coordinate expressed in degrees. */
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** Geographic coordinates representing a location on the Earth's surface. */
export type GeoLocation = {
  __typename?: 'GeoLocation';
  /** Angular distance north or south of the Earth's equator, measured in degrees from -90 to +90. */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** Angular distance east or west of the Prime Meridian at Greenwich, UK, measured in degrees from -180 to +180. */
  longitude?: Maybe<Scalars['Float']['output']>;
};

/** Input type used to specify distance filtering parameters on `GeoLocation` fields. */
export type GeoLocationDistanceFilter = {
  /** Angular distance north or south of the Earth's equator, measured in degrees from -90 to +90. */
  latitude: Scalars['Float']['input'];
  /** Angular distance east or west of the Prime Meridian at Greenwich, UK, measured in degrees from -180 to +180. */
  longitude: Scalars['Float']['input'];
  /**
   * Maximum distance (of the provided `unit`) to consider "near" the location identified
   * by `latitude` and `longitude`.
   */
  maxDistance: Scalars['Float']['input'];
  /** Determines the unit of the specified `maxDistance`. */
  unit: DistanceUnit;
};

/**
 * Input type used to specify filters on `GeoLocation` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type GeoLocationFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<GeoLocationFilter>>;
  /**
   * Matches records where the field's geographic location is within a specified distance from the
   * location identified by `latitude` and `longitude`.
   *
   * Will be ignored when `null` is passed.
   */
  near?: InputMaybe<GeoLocationDistanceFilter>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<GeoLocationFilter>;
};

/**
 * Input type used to specify filters on `ID` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type IdFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<IdFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<IdFilter>;
};

/**
 * Input type used to specify filters on `Int` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type IntFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<IntFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /**
   * Matches records where the field value is greater than (>) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Matches records where the field value is greater than or equal to (>=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Matches records where the field value is less than (<) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Matches records where the field value is less than or equal to (<=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lte?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<IntFilter>;
};

/**
 * Represents a change in state or quantity of product inventory at a particular time and location.
 *
 * Permissions:INVENTORY_READ
 */
export type InventoryAdjustment = InventoryChange & {
  __typename?: 'InventoryAdjustment';
  /** An adjustment group bundling the related adjustments of item variations through stock conversions in a single inventory event. */
  adjustmentGroup?: Maybe<InventoryAdjustmentGroup>;
  /** The CatalogObject being tracked. */
  catalog?: Maybe<CatalogObject>;
  /**
   * An RFC 3339-formatted timestamp that indicates when the physical count is received.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The Employee responsible for */
  employee?: Maybe<Employee>;
  /** The inventory state of the related quantity of items before the adjustment. */
  fromState?: Maybe<InventoryState>;
  /** The Square-generated ID of the goods receipt that caused the adjustment. Only relevant for state transitions from the Square for Retail app. */
  goodsReceiptId?: Maybe<Scalars['ID']['output']>;
  /** A unique ID generated by Square */
  id: Scalars['ID']['output'];
  /** The Location where the related quantity of items is being tracked. */
  location?: Maybe<Location>;
  /**
   * A client-generated RFC 3339-formatted timestamp that indicates when the physical count was examined. For physical count updates, the occurred_at timestamp cannot be older than 24 hours or in the future relative to the time of the request.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  occurredAt?: Maybe<Scalars['DateTime']['output']>;
  /** The Square-generated ID of the purchase order that caused the adjustment. Only relevant for state transitions from the Square for Retail app. */
  purchaseOrderId?: Maybe<Scalars['ID']['output']>;
  /** The number of items affected as a decimal string. Can support up to 5 digits after the decimal point. */
  quantity?: Maybe<Scalars['String']['output']>;
  /** An optional ID provided by the application to tie the InventoryChange to an external system. */
  referenceId?: Maybe<Scalars['ID']['output']>;
  /** The Square-generated ID of the Refund that caused the adjustment. Only relevant for refund-related state transitions. */
  refundId?: Maybe<Scalars['ID']['output']>;
  /** Information about the application with which the physical count is submitted. */
  source?: Maybe<SourceApplication>;
  /** The Team Member responsible for */
  teamMember?: Maybe<TeamMember>;
  /** The inventory state of the related quantity of items after the adjustment. */
  toState?: Maybe<InventoryState>;
  /** The Square-generated ID of the Transaction that caused the adjustment. Only relevant for payment-related state transitions. */
  transactionId?: Maybe<Scalars['ID']['output']>;
  /** Indicates how the inventory change is applied. See InventoryChangeType for all possible values. */
  type?: Maybe<InventoryChangeType>;
};

/**
 * Represents information about the adjustments of the inventory group.
 *
 * Permissions:INVENTORY_READ
 */
export type InventoryAdjustmentGroup = {
  __typename?: 'InventoryAdjustmentGroup';
  /** Representative from_state for adjustments within the group. For example, for a group adjustment from IN_STOCK to SOLD, there can be two component adjustments in the group: one from IN_STOCKto COMPOSED and the other one from COMPOSED to SOLD. Here, the representative from_state for the InventoryAdjustmentGroup is IN_STOCK. */
  fromState?: Maybe<InventoryState>;
  /** A unique ID generated by Square for the InventoryAdjustmentGroup. */
  id: Scalars['ID']['output'];
  /** The inventory adjustment of the composed variation. */
  rootAdjustmentId?: Maybe<Scalars['ID']['output']>;
  /** Representative to_state for adjustments within group. For example, for a group adjustment from IN_STOCK to SOLD, the two component adjustments in the group can be from IN_STOCK to COMPOSED and from COMPOSED to SOLD. Here, the representative to_state of the InventoryAdjustmentGroup is SOLD. */
  toState?: Maybe<InventoryState>;
};

/**
 * Inventory alert definition's associated values.
 *
 * Permissions:ITEMS_READ
 */
export type InventoryAlert = {
  __typename?: 'InventoryAlert';
  /**
   * If the inventory quantity for the variation is less than or equal to this value and type is LOW_QUANTITY, the variation displays an alert in the merchant dashboard.
   * This value is always an integer.
   */
  threshold?: Maybe<Scalars['JsonSafeLong']['output']>;
  /** Indicates whether the item variation displays an alert when its inventory quantity is less than or equal to its threshold. */
  type?: Maybe<InventoryAlertType>;
};

/** Indicates whether Square should alert the merchant when the inventory quantity of a CatalogItemVariation is low. */
export enum InventoryAlertType {
  /** The variation generates an alert when its quantity is low. */
  LowQuantity = 'LOW_QUANTITY',
  /** The variation does not display an alert. */
  None = 'NONE'
}

/**
 * Represents a single physical count, inventory, adjustment, or transfer that is part of the history of inventory changes for a particular CatalogObject instance.
 *
 * Permissions:INVENTORY_READ
 */
export type InventoryChange = {
  /** The CatalogObject being tracked. */
  catalog?: Maybe<CatalogObject>;
  /**
   * An RFC 3339-formatted timestamp that indicates when the physical count is received.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The Employee responsible for */
  employee?: Maybe<Employee>;
  /** A unique ID generated by Square */
  id: Scalars['ID']['output'];
  /**
   * A client-generated RFC 3339-formatted timestamp that indicates when the physical count was examined. For physical count updates, the occurred_at timestamp cannot be older than 24 hours or in the future relative to the time of the request.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  occurredAt?: Maybe<Scalars['DateTime']['output']>;
  /** The number of items affected as a decimal string. Can support up to 5 digits after the decimal point. */
  quantity?: Maybe<Scalars['String']['output']>;
  /** An optional ID provided by the application to tie the InventoryChange to an external system. */
  referenceId?: Maybe<Scalars['ID']['output']>;
  /** Information about the application with which the physical count is submitted. */
  source?: Maybe<SourceApplication>;
  /** The Team Member responsible for */
  teamMember?: Maybe<TeamMember>;
  /** Indicates how the inventory change is applied. See InventoryChangeType for all possible values. */
  type?: Maybe<InventoryChangeType>;
};

/**
 * Contains information of InventoryChange result.
 *
 * Permissions:INVENTORY_READ
 */
export type InventoryChangeConnection = {
  __typename?: 'InventoryChangeConnection';
  /** List of InventoryChange */
  nodes: Array<InventoryChange>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/** Used for filtering query inventoryChanges. */
export type InventoryChangeFilter = {
  /** The object IDs of any type of catalog objects to be retrieved. If the value is nil, it will return all catalog objects. */
  catalog?: InputMaybe<BasicIdFilter>;
  /** ID of the InventoryChange to retrieve. */
  id?: InputMaybe<BasicIdFilter>;
  /** The filter to return results by Location ID. */
  location?: InputMaybe<BasicIdFilter>;
  /** The merchant IDs associated with the InventoryChanges. */
  merchantId: BasicIdFilter;
  /** The filter to return ADJUSTMENT query results by InventoryState. */
  state?: InputMaybe<InventoryStateFilter>;
  /** The filter to return results by InventoryChangeType values other than TRANSFER. The default value is [PHYSICAL_COUNT, ADJUSTMENT]. */
  type?: InputMaybe<InventoryChangeTypeFilter>;
  /**
   * The filter to return results with their calculated_at value after the given time as specified in an RFC 3339 timestamp. The default value is the UNIX epoch of (1970-01-01T00:00:00Z).
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  updatedAfter?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * The filter to return results with their created_at or calculated_at value strictly before the given time as specified in an RFC 3339 timestamp. The default value is the UNIX epoch of (1970-01-01T00:00:00Z).
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  updatedBefore?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Indicates how the inventory change was applied to a tracked product quantity. */
export enum InventoryChangeType {
  /** The change occurred as part of the normal lifecycle of goods (e.g., as an inventory adjustment). */
  Adjustment = 'ADJUSTMENT',
  /** The change occurred as part of a physical count update. */
  PhysicalCount = 'PHYSICAL_COUNT',
  /** The change occurred as part of an inventory transfer. */
  Transfer = 'TRANSFER'
}

/** Used for filtering with InventoryChangeType. */
export type InventoryChangeTypeFilter = {
  /** Indicates how the inventory change was applied to a tracked product quantity. */
  equalToAnyOf?: InputMaybe<Array<InventoryChangeType>>;
};

/**
 * Represents Square-estimated quantity of items in a particular state at a particular seller location based on the known history of physical counts and inventory adjustments.
 *
 * Permissions:INVENTORY_READ
 */
export type InventoryCount = {
  __typename?: 'InventoryCount';
  /**
   * An RFC 3339-formatted timestamp that indicates when the most recent physical count or adjustment affecting the estimated count is received.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  calculatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The CatalogObject being tracked. */
  catalog?: Maybe<CatalogObject>;
  /** Whether the inventory count is for composed variation (TRUE) or not (FALSE). */
  isEstimated?: Maybe<Scalars['Boolean']['output']>;
  /** The Location where the related quantity of items is being tracked. */
  location?: Maybe<Location>;
  /** The number of items affected by the estimated count as a decimal string. Can support up to 5 digits after the decimal point. */
  quantity?: Maybe<Scalars['String']['output']>;
  /** The current inventory state for the related quantity of items. */
  state?: Maybe<InventoryState>;
};

/**
 * Contains information of InventoryCount result.
 *
 * Permissions:INVENTORY_READ
 */
export type InventoryCountConnection = {
  __typename?: 'InventoryCountConnection';
  /** List of InventoryCount */
  nodes: Array<InventoryCount>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/** Used for filtering query inventoryCounts. */
export type InventoryCountFilter = {
  /** The object IDs of any type of catalog objects to be retrieved. If the value is nil, it will return all catalog objects. */
  catalog?: InputMaybe<BasicIdFilter>;
  /** The filter to return results by Location ID. */
  location?: InputMaybe<BasicIdFilter>;
  /** The merchant IDs associated with the InventoryCounts. */
  merchantId: BasicIdFilter;
  /** The filter to return ADJUSTMENT query results by InventoryState. */
  state?: InputMaybe<InventoryStateFilter>;
  /**
   * The filter to return results with their calculated_at value after the given time as specified in an RFC 3339 timestamp. The default value is the UNIX epoch of (1970-01-01T00:00:00Z).
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  updatedAfter?: InputMaybe<Scalars['DateTime']['input']>;
};

/**
 * Represents the quantity of an item variation that is physically present at a specific location, verified by a seller or a seller's employee.
 *
 * Permissions:INVENTORY_READ
 */
export type InventoryPhysicalCount = InventoryChange & {
  __typename?: 'InventoryPhysicalCount';
  /** The CatalogObject being tracked. */
  catalog?: Maybe<CatalogObject>;
  /**
   * An RFC 3339-formatted timestamp that indicates when the physical count is received.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The Employee responsible for */
  employee?: Maybe<Employee>;
  /** A unique ID generated by Square */
  id: Scalars['ID']['output'];
  /** The Location where the related quantity of items is being tracked. */
  location?: Maybe<Location>;
  /**
   * A client-generated RFC 3339-formatted timestamp that indicates when the physical count was examined. For physical count updates, the occurred_at timestamp cannot be older than 24 hours or in the future relative to the time of the request.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  occurredAt?: Maybe<Scalars['DateTime']['output']>;
  /** The number of items affected as a decimal string. Can support up to 5 digits after the decimal point. */
  quantity?: Maybe<Scalars['String']['output']>;
  /** An optional ID provided by the application to tie the InventoryChange to an external system. */
  referenceId?: Maybe<Scalars['ID']['output']>;
  /** Information about the application with which the physical count is submitted. */
  source?: Maybe<SourceApplication>;
  /** The InventoryState for the quantity of items. */
  state?: Maybe<InventoryState>;
  /** The Team Member responsible for */
  teamMember?: Maybe<TeamMember>;
  /** Indicates how the inventory change is applied. See InventoryChangeType for all possible values. */
  type?: Maybe<InventoryChangeType>;
};

/** Indicates the Square product used to generate a change. */
export enum InventoryProduct {
  /** Square Appointments. */
  Appointments = 'APPOINTMENTS',
  /** A Square subscription (various products). */
  Billing = 'BILLING',
  /** Square Dashboard. */
  Dashboard = 'DASHBOARD',
  /** Square Connect APIs (for example, Orders API or Checkout API). */
  ExternalApi = 'EXTERNAL_API',
  /** Square Invoices. */
  Invoices = 'INVOICES',
  /** Item Library Import. */
  ItemLibraryImport = 'ITEM_LIBRARY_IMPORT',
  /** Square Online Store. */
  OnlineStore = 'ONLINE_STORE',
  /** A Square product that does not match any other value. */
  Other = 'OTHER',
  /** Square Payroll. */
  Payroll = 'PAYROLL',
  /** Square Point of Sale application. */
  SquarePos = 'SQUARE_POS'
}

/** Indicates the state of a tracked item quantity in the lifecycle of goods. */
export enum InventoryState {
  /** The related quantity of items that are part of a composition consisting one or more components. */
  Composed = 'COMPOSED',
  /** The related quantity of items are in a custom state. READ-ONLY: the Inventory API cannot move quantities to or from this state. */
  Custom = 'CUSTOM',
  /** The related quantity of items that are part of a component. */
  Decomposed = 'DECOMPOSED',
  /** The related quantity of items are on hand and available for sale. */
  InStock = 'IN_STOCK',
  /** The related quantity of items are in transit between locations. */
  InTransitTo = 'IN_TRANSIT_TO',
  /** A placeholder indicating that the related quantity of items are not currently tracked in Square. Transferring quantities from the NONE state to a tracked state (e.g., IN_STOCK) introduces stock into the system. */
  None = 'NONE',
  /** The related quantity of items were ordered from a vendor but not yet received. */
  OrderedFromVendor = 'ORDERED_FROM_VENDOR',
  /** The related quantity of items were received from a vendor but are not yet available for sale. */
  ReceivedFromVendor = 'RECEIVED_FROM_VENDOR',
  /** The related quantity of items are on hand, but not currently available for sale. READ-ONLY: the Inventory API cannot move quantities to or from this state. */
  ReservedForSale = 'RESERVED_FOR_SALE',
  /** The related quantity of items were returned through the Square Point of Sale application, but are not yet available for sale. */
  ReturnedByCustomer = 'RETURNED_BY_CUSTOMER',
  /** The related quantity of items were sold as part of an itemized transaction. Quantities in the SOLD state are no longer tracked. */
  Sold = 'SOLD',
  /** The related quantity of items were sold online. */
  SoldOnline = 'SOLD_ONLINE',
  /** This state is not supported by this version of the Square API. We recommend that you upgrade the client to use the appropriate version of the Square API supporting this state. */
  SupportedByNewerVersion = 'SUPPORTED_BY_NEWER_VERSION',
  /** The related quantity of items were returned but not linked to a previous transaction. Unlinked returns are not tracked in Square. Transferring a quantity from UNLINKED_RETURN to a tracked state (e.g., IN_STOCK) introduces new stock into the system. */
  UnlinkedReturn = 'UNLINKED_RETURN',
  /** The related quantity of items are lost or damaged and cannot be sold. */
  Waste = 'WASTE'
}

/** Used for filtering with InventoryState. */
export type InventoryStateFilter = {
  /** Indicates the state of a tracked item quantity in the lifecycle of goods. */
  equalToAnyOf?: InputMaybe<Array<InventoryState>>;
};

/**
 * Represents the transfer of a quantity of product inventory at a particular time from one location to another.
 *
 * Permissions:INVENTORY_READ
 */
export type InventoryTransfer = InventoryChange & {
  __typename?: 'InventoryTransfer';
  /** The CatalogObject being tracked. */
  catalog?: Maybe<CatalogObject>;
  /**
   * An RFC 3339-formatted timestamp that indicates when the physical count is received.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The Employee responsible for */
  employee?: Maybe<Employee>;
  /** The Location where the related quantity of item swas tracked before the transfer. */
  fromLocation?: Maybe<Location>;
  /** A unique ID generated by Square */
  id: Scalars['ID']['output'];
  /**
   * A client-generated RFC 3339-formatted timestamp that indicates when the physical count was examined. For physical count updates, the occurred_at timestamp cannot be older than 24 hours or in the future relative to the time of the request.
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  occurredAt?: Maybe<Scalars['DateTime']['output']>;
  /** The number of items affected as a decimal string. Can support up to 5 digits after the decimal point. */
  quantity?: Maybe<Scalars['String']['output']>;
  /** An optional ID provided by the application to tie the InventoryChange to an external system. */
  referenceId?: Maybe<Scalars['ID']['output']>;
  /** Information about the application with which the physical count is submitted. */
  source?: Maybe<SourceApplication>;
  /** The InventoryState for the quantity of items. */
  state?: Maybe<InventoryState>;
  /** The Team Member responsible for */
  teamMember?: Maybe<TeamMember>;
  /** The Location where the related quantity of item swas tracked after the transfer. */
  toLocation?: Maybe<Location>;
  /** Indicates how the inventory change is applied. See InventoryChangeType for all possible values. */
  type?: Maybe<InventoryChangeType>;
};

/**
 * Input type used to specify filters on `JsonSafeLong` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type JsonSafeLongFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<JsonSafeLongFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Scalars['JsonSafeLong']['input']>>>;
  /**
   * Matches records where the field value is greater than (>) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gt?: InputMaybe<Scalars['JsonSafeLong']['input']>;
  /**
   * Matches records where the field value is greater than or equal to (>=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gte?: InputMaybe<Scalars['JsonSafeLong']['input']>;
  /**
   * Matches records where the field value is less than (<) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lt?: InputMaybe<Scalars['JsonSafeLong']['input']>;
  /**
   * Matches records where the field value is less than or equal to (<=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lte?: InputMaybe<Scalars['JsonSafeLong']['input']>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<JsonSafeLongFilter>;
};

/**
 * A location for a Merchant. The location may be a physical location, such as a storefront, or it may be an abstract
 * location, such as an online store, facebook/instagram property, etc.
 *
 * Permissions:MERCHANT_PROFILE_READ
 */
export type Location = {
  __typename?: 'Location';
  /** The physical address of the location. */
  address?: Maybe<Address>;
  /** The email of the location. This email is visible to the customers of the location. For example, the email appears on customer receipts */
  businessEmail?: Maybe<Scalars['EmailAddress']['output']>;
  /** The hours of operation for the location. */
  businessHours?: Maybe<BusinessHours>;
  /** The business name of the location This is the name visible to the customers of the location. For example, this name appears on customer receipts. */
  businessName?: Maybe<Scalars['String']['output']>;
  /** The Square features that are enabled for the location. */
  capabilities?: Maybe<Array<Maybe<LocationCapability>>>;
  /** The physical coordinates (latitude and longitude) of the location. */
  coordinates?: Maybe<GeoCoordinates>;
  /** The country of the location. */
  country?: Maybe<Country>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The currency used for all transactions at this location. */
  currency?: Maybe<Currency>;
  /** The description of the location. */
  description?: Maybe<Scalars['String']['output']>;
  /** The Facebook profile URL of the location. The URL's domain should be 'facebook.com'. */
  facebookUrl?: Maybe<Scalars['Url']['output']>;
  /** The Square-issued ID of the location. */
  id: Scalars['ID']['output'];
  /** The Instagram username of the location without the '@' symbol. */
  instagramUsername?: Maybe<Scalars['String']['output']>;
  /** The language associated with the location. */
  language?: Maybe<Scalars['LanguageCode']['output']>;
  /** The URL of the logo image for the location. */
  logoUrl?: Maybe<Scalars['Url']['output']>;
  mcc?: Maybe<Scalars['String']['output']>;
  /** The merchant of the location. */
  merchant: Merchant;
  name?: Maybe<Scalars['String']['output']>;
  /** The phone number of the location. */
  phoneNumber?: Maybe<Scalars['PhoneNumber']['output']>;
  /** The URL of the Point of Sal background image for the location. */
  posBackgroundUrl?: Maybe<Scalars['Url']['output']>;
  /** The status of the location, e.g. whether a location is active or inactive. */
  status?: Maybe<LocationStatus>;
  /** The timezone of the location. */
  timezone?: Maybe<Scalars['TimeZone']['output']>;
  /** The Twitter username of the location without the '@' symbol. */
  twitterUsername?: Maybe<Scalars['String']['output']>;
  /** The type of the location. */
  type?: Maybe<LocationType>;
  /** The website URL of the location. */
  websiteUrl?: Maybe<Scalars['Url']['output']>;
};

/** The capabilities a location might have. */
export enum LocationCapability {
  /** The capability to receive automatic transfers from Square. */
  AutomaticTransfers = 'AUTOMATIC_TRANSFERS',
  /** The capability to process credit card transactions with Square. */
  CreditCardProcessing = 'CREDIT_CARD_PROCESSING'
}

export type LocationConnection = {
  __typename?: 'LocationConnection';
  nodes: Array<Location>;
  pageInfo: PageInfo;
};

/** A location's status. */
export enum LocationStatus {
  /** A location that is active for business. */
  Active = 'ACTIVE',
  /**
   * A location that is not active for business. Inactive locations provide historical
   * information. Hide inactive locations unless the user has requested to see them.
   */
  Inactive = 'INACTIVE'
}

/** A location's type. */
export enum LocationType {
  /** A place of business that is mobile, such as a food truck or online store. */
  Mobile = 'MOBILE',
  /** A place of business with a physical location. */
  Physical = 'PHYSICAL'
}

/**
 * Input type used to specify filters on `LongString` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type LongStringFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<LongStringFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Scalars['LongString']['input']>>>;
  /**
   * Matches records where the field value is greater than (>) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gt?: InputMaybe<Scalars['LongString']['input']>;
  /**
   * Matches records where the field value is greater than or equal to (>=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  gte?: InputMaybe<Scalars['LongString']['input']>;
  /**
   * Matches records where the field value is less than (<) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lt?: InputMaybe<Scalars['LongString']['input']>;
  /**
   * Matches records where the field value is less than or equal to (<=) the provided value.
   *
   * Will be ignored when `null` is passed.
   */
  lte?: InputMaybe<Scalars['LongString']['input']>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<LongStringFilter>;
};

/** Represents a unit of measurement to use with a quantity, such as ounces or inches. */
export type MeasurementUnit = MeasurementUnitAreaValue | MeasurementUnitCustom | MeasurementUnitGenericValue | MeasurementUnitLengthValue | MeasurementUnitTimeValue | MeasurementUnitVolumeValue | MeasurementUnitWeightValue;

/** Unit of area used to measure a quantity. */
export enum MeasurementUnitArea {
  /** The area is measured in acres. */
  ImperialAcre = 'IMPERIAL_ACRE',
  /** The area is measured in square feet. */
  ImperialSquareFoot = 'IMPERIAL_SQUARE_FOOT',
  /** The area is measured in square inches. */
  ImperialSquareInch = 'IMPERIAL_SQUARE_INCH',
  /** The area is measured in square miles. */
  ImperialSquareMile = 'IMPERIAL_SQUARE_MILE',
  /** The area is measured in square yards. */
  ImperialSquareYard = 'IMPERIAL_SQUARE_YARD',
  /** The area is measured in square centimeters. */
  MetricSquareCentimeter = 'METRIC_SQUARE_CENTIMETER',
  /** The area is measured in square kilometer. */
  MetricSquareKilometer = 'METRIC_SQUARE_KILOMETER',
  /** The area is measured in square meters. */
  MetricSquareMeter = 'METRIC_SQUARE_METER'
}

/**
 * MeasurementUnitAreaValue
 *
 * Permissions:ITEMS_READ
 */
export type MeasurementUnitAreaValue = {
  __typename?: 'MeasurementUnitAreaValue';
  /** Represents a standard area unit. */
  value?: Maybe<MeasurementUnitArea>;
};

/**
 * The information needed to define a custom unit, provided by the seller.
 *
 * Permissions:ITEMS_READ
 */
export type MeasurementUnitCustom = {
  __typename?: 'MeasurementUnitCustom';
  /** The abbreviation of the custom unit, such as bsh (bushel). This appears in the cart for the Point of Sale app, and in reports. */
  abbreviation?: Maybe<Scalars['String']['output']>;
  /** The name of the custom unit, for example bushel */
  name?: Maybe<Scalars['String']['output']>;
};

/** A generic unit used to measure a quantity. */
export enum MeasurementUnitGeneric {
  /** The generic unit. */
  Unit = 'UNIT'
}

/**
 * MeasurementUnitGenericValue
 *
 * Permissions:ITEMS_READ
 */
export type MeasurementUnitGenericValue = {
  __typename?: 'MeasurementUnitGenericValue';
  /** Reserved for API integrations that lack the ability to specify a real measurement unit */
  value?: Maybe<MeasurementUnitGeneric>;
};

/** The unit of length used to measure a quantity. */
export enum MeasurementUnitLength {
  /** The length is measured in feet. */
  ImperialFoot = 'IMPERIAL_FOOT',
  /** The length is measured in inches. */
  ImperialInch = 'IMPERIAL_INCH',
  /** The length is measured in miles. */
  ImperialMile = 'IMPERIAL_MILE',
  /** The length is measured in yards. */
  ImperialYard = 'IMPERIAL_YARD',
  /** The length is measured in centimeters. */
  MetricCentimeter = 'METRIC_CENTIMETER',
  /** The length is measured in kilometers. */
  MetricKilometer = 'METRIC_KILOMETER',
  /** The length is measured in meters. */
  MetricMeter = 'METRIC_METER',
  /** The length is measured in millimeters. */
  MetricMillimeter = 'METRIC_MILLIMETER'
}

/**
 * MeasurementUnitLengthValue
 *
 * Permissions:ITEMS_READ
 */
export type MeasurementUnitLengthValue = {
  __typename?: 'MeasurementUnitLengthValue';
  /** Represents a standard length unit. */
  value?: Maybe<MeasurementUnitLength>;
};

/** Unit of time used to measure a quantity (a duration). */
export enum MeasurementUnitTime {
  /** The time is measured in days. */
  GenericDay = 'GENERIC_DAY',
  /** The time is measured in hours. */
  GenericHour = 'GENERIC_HOUR',
  /** The time is measured in milliseconds. */
  GenericMillisecond = 'GENERIC_MILLISECOND',
  /** The time is measured in minutes. */
  GenericMinute = 'GENERIC_MINUTE',
  /** The time is measured in seconds. */
  GenericSecond = 'GENERIC_SECOND'
}

/**
 * MeasurementUnitTimeValue
 *
 * Permissions:ITEMS_READ
 */
export type MeasurementUnitTimeValue = {
  __typename?: 'MeasurementUnitTimeValue';
  /** Represents a standard unit of time. */
  value?: Maybe<MeasurementUnitTime>;
};

/** The unit of volume used to measure a quantity. */
export enum MeasurementUnitVolume {
  /** The volume is measured in cups. */
  GenericCup = 'GENERIC_CUP',
  /** The volume is measured in ounces. */
  GenericFluidOunce = 'GENERIC_FLUID_OUNCE',
  /** The volume is measured in gallons. */
  GenericGallon = 'GENERIC_GALLON',
  /** The volume is measured in pints. */
  GenericPint = 'GENERIC_PINT',
  /** The volume is measured in quarts. */
  GenericQuart = 'GENERIC_QUART',
  /** The volume is measured in shots. */
  GenericShot = 'GENERIC_SHOT',
  /** The volume is measured in cubic feet. */
  ImperialCubicFoot = 'IMPERIAL_CUBIC_FOOT',
  /** The volume is measured in cubic inches. */
  ImperialCubicInch = 'IMPERIAL_CUBIC_INCH',
  /** The volume is measured in cubic yards. */
  ImperialCubicYard = 'IMPERIAL_CUBIC_YARD',
  /** The volume is measured in cubic liters. */
  MetricLiter = 'METRIC_LITER',
  /** The volume is measured in cubic milliliters. */
  MetricMilliliter = 'METRIC_MILLILITER'
}

/**
 * MeasurementUnitVolumeValue
 *
 * Permissions:ITEMS_READ
 */
export type MeasurementUnitVolumeValue = {
  __typename?: 'MeasurementUnitVolumeValue';
  /** Represents a standard volume unit. */
  value?: Maybe<MeasurementUnitVolume>;
};

/** Unit of weight used to measure a quantity. */
export enum MeasurementUnitWeight {
  /** The weight is measured in ounces. */
  ImperialOunce = 'IMPERIAL_OUNCE',
  /** The weight is measured in pounds. */
  ImperialPound = 'IMPERIAL_POUND',
  /** The weight is measured in stones. */
  ImperialStone = 'IMPERIAL_STONE',
  /** The weight is measured in ounces. */
  ImperialWeightOunce = 'IMPERIAL_WEIGHT_OUNCE',
  /** The weight is measured in grams. */
  MetricGram = 'METRIC_GRAM',
  /** The weight is measured in kilograms. */
  MetricKilogram = 'METRIC_KILOGRAM',
  /** The weight is measured in milligrams. */
  MetricMilligram = 'METRIC_MILLIGRAM'
}

/**
 * MeasurementUnitWeightValue
 *
 * Permissions:ITEMS_READ
 */
export type MeasurementUnitWeightValue = {
  __typename?: 'MeasurementUnitWeightValue';
  /** Represents a standard unit of weight or mass. */
  value?: Maybe<MeasurementUnitWeight>;
};

/**
 * A Square seller.
 *
 * Permissions:MERCHANT_PROFILE_READ
 */
export type Merchant = {
  __typename?: 'Merchant';
  /** The business name of the merchant. */
  businessName?: Maybe<Scalars['String']['output']>;
  /** The country associated with the merchant. */
  country?: Maybe<Country>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The currency associated with the merchant. */
  currency?: Maybe<Currency>;
  /** The Square-issued ID of the merchant. */
  id: Scalars['ID']['output'];
  /** The language associated with the merchant account. */
  language?: Maybe<Scalars['LanguageCode']['output']>;
  /** The locations for the merchant. */
  locations?: Maybe<LocationConnection>;
  /** The main location of the merchant. */
  mainLocation: Location;
  status?: Maybe<MerchantStatus>;
};


/**
 * A Square seller.
 *
 * Permissions:MERCHANT_PROFILE_READ
 */
export type MerchantLocationsArgs = {
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type MerchantConnection = {
  __typename?: 'MerchantConnection';
  nodes: Array<Merchant>;
  pageInfo: PageInfo;
};

export type MerchantFilterInput = {
  id: BasicIdFilterInput;
};

export enum MerchantStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Inactive = 'INACTIVE'
}

/**
 * Application-defined data attached to an object. Metadata fields are intended to store descriptive references or
 * associations with an entity in another system or store brief information about the object. Square does not process
 * this field; it only stores and returns it in relevant API calls. Do not use metadata to store any sensitive
 * information (personally identifiable information, card details, etc.).
 *
 * Keys written by applications must be 60 characters or less and must be in the character set [a-zA-Z0-9_-]. Entries
 * may also include metadata generated by Square. These keys are prefixed with a namespace, separated from the key with
 * a ':' character.
 *
 * Values have a max length of 255 characters.
 *
 * An application may have up to 10 entries per metadata field.
 *
 * Entries written by applications are private and can only be read or modified by the same application.
 *
 * See [Metadata](https://developer.squareup.com/docs/orders-api/metadata) for more information.
 */
export type Metadata = {
  __typename?: 'Metadata';
  /** A list of entries. */
  entries?: Maybe<Array<Maybe<MetadataEntry>>>;
};

/** A key-value pair for Metadata. */
export type MetadataEntry = {
  __typename?: 'MetadataEntry';
  /** The key of the Metadata entry */
  key?: Maybe<Scalars['String']['output']>;
  /** The value of the Metadata entry */
  value?: Maybe<Scalars['String']['output']>;
};

/**
 * Location-specific overrides for specified properties of a `CatalogModifier` object.
 *
 * Permissions:ITEMS_READ
 */
export type ModifierLocationOverride = {
  __typename?: 'ModifierLocationOverride';
  /** The ID of the `Location` object representing the location. This can include a deactivated location. */
  location?: Maybe<Location>;
  /**
   * The overridden price at the specified location. If this is unspecified, the modifier price is not overridden.
   * The modifier becomes free of charge at the specified location, when this `price_money` field is set to 0.
   */
  priceMoney?: Maybe<Money>;
};

/**
 * Represents an amount of money.
 *
 * Money fields can be signed or unsigned. Fields that do not explicitly define whether they are signed or unsigned are
 * considered unsigned and can only hold positive amounts. For signed fields, the sign of the value indicates the purpose
 * of the money transfer. See
 * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
 * more information.
 */
export type Money = {
  __typename?: 'Money';
  /**
   * The amount of money, in the smallest denomination of the currency indicated by currency. For example, when currency
   * is USD, amount is in cents. Monetary amounts can be positive or negative. See the specific field description to
   * determine the meaning of the sign in a particular case.
   */
  amount: Scalars['JsonSafeLong']['output'];
  /** The type of currency. */
  currency?: Maybe<Currency>;
  /**
   * The type of currency in currency code.
   * @deprecated Use currency instead.
   */
  currencyCode: CurrencyCode;
};

/**
 * Input type used to specify filters on `Money` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type MoneyFilter = {
  /**
   * Used to filter on the `amount` field:
   *
   * > The amount of money, in the smallest denomination of the currency
   * > indicated by `currency`. For example, when `currency` is `USD`, `amount` is
   * > in cents. Monetary amounts can be positive or negative. See the specific
   * > field description to determine the meaning of the sign in a particular case.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  amount?: InputMaybe<JsonSafeLongFilter>;
  /**
   * Used to filter on the `currency` field:
   *
   * > The type of currency, in __ISO 4217 format__. For example, the currency
   * > code for US dollars is `USD`.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  currency?: InputMaybe<CurrencyFilter>;
};

/** OAuth scopes */
export enum OAuthScope {
  AppointmentsAllRead = 'APPOINTMENTS_ALL_READ',
  AppointmentsRead = 'APPOINTMENTS_READ',
  BankAccountsRead = 'BANK_ACCOUNTS_READ',
  CashDrawerRead = 'CASH_DRAWER_READ',
  CustomersRead = 'CUSTOMERS_READ',
  DisputesRead = 'DISPUTES_READ',
  EmployeesRead = 'EMPLOYEES_READ',
  GiftcardsRead = 'GIFTCARDS_READ',
  InventoryRead = 'INVENTORY_READ',
  InvoicesRead = 'INVOICES_READ',
  ItemsRead = 'ITEMS_READ',
  LoyaltyRead = 'LOYALTY_READ',
  MerchantProfileRead = 'MERCHANT_PROFILE_READ',
  None = 'NONE',
  OnlineStoreSiteRead = 'ONLINE_STORE_SITE_READ',
  OnlineStoreSnippetsRead = 'ONLINE_STORE_SNIPPETS_READ',
  OrdersRead = 'ORDERS_READ',
  PaymentsRead = 'PAYMENTS_READ',
  SettlementsRead = 'SETTLEMENTS_READ',
  SubscriptionsRead = 'SUBSCRIPTIONS_READ',
  TimecardsRead = 'TIMECARDS_READ',
  TimecardsSettingsRead = 'TIMECARDS_SETTINGS_READ',
  VendorRead = 'VENDOR_READ'
}

/**
 * Contains all information related to a single order to process with Square, including line items that specify the
 * products to purchase. Order objects also include information on any associated payments, refunds, and returns.
 *
 * All Connect V2 Transactions have been converted to Orders including all associated itemization data.
 *
 * Permissions:ORDERS_READ
 */
export type Order = {
  __typename?: 'Order';
  /** Timestamp for when the order reached a terminal state. */
  closedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Timestamp for when the order was created. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The customer associated with the order. */
  customer?: Maybe<Customer>;
  /** A set-like list of DiscountCodes that have been added to the Order. */
  discountCodes?: Maybe<Array<Maybe<DiscountCode>>>;
  /**
   * The list of all discounts associated with the order.
   * Discounts can be scoped to either ORDER or LINE_ITEM. For discounts scoped to LINE_ITEM, an
   * OrderLineItemAppliedDiscount must be added to each line item that the discount applies to. For discounts with ORDER
   * scope, the server will generate an OrderLineItemAppliedDiscount for every line item.
   * IMPORTANT: If LINE_ITEM scope is set on any discounts in this field, usage of the deprecated line_items.discounts
   * field will result in an error. Please use line_items.applied_discounts instead.
   */
  discounts?: Maybe<Array<Maybe<OrderLineItemDiscount>>>;
  /**
   * Details on order fulfillment.
   *
   * Orders can only be created with at most one fulfillment. However, orders returned by the API may contain multiple
   * fulfillments.
   */
  fulfillments?: Maybe<Array<Maybe<OrderFulfillment>>>;
  /** The order's unique ID. */
  id: Scalars['ID']['output'];
  /** The line items included in the order. */
  lineItems?: Maybe<Array<Maybe<OrderLineItem>>>;
  /** The Merchant Location this order is associated with. */
  location?: Maybe<Location>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** The metadata for the order. */
  metadata?: Maybe<Metadata>;
  /** Net money amounts (sale money - return money). */
  netAmounts?: Maybe<OrderMoneyAmounts>;
  /**
   * Pricing options for an order. The options affect how the order's price is calculated. They can be used,
   * for example, to apply automatic price adjustments that are based on pre-configured pricing rules.
   */
  pricingOptions?: Maybe<OrderPricingOptions>;
  /** A client specified identifier to associate an entity in another system with this order. */
  referenceId?: Maybe<Scalars['ID']['output']>;
  /** The Refunds that are part of this Order. */
  refunds?: Maybe<Array<Maybe<Refund>>>;
  /** Rollup of returned money amounts. */
  returnAmounts?: Maybe<OrderMoneyAmounts>;
  /**
   * Collection of items from sale Orders being returned in this one. Normally part of an Itemized Return or Exchange.
   * There will be exactly one Return object per sale Order being referenced.
   */
  returns?: Maybe<Array<Maybe<OrderReturn>>>;
  /** A set-like list of rewards that have been added to the order. */
  rewards?: Maybe<Array<Maybe<Reward>>>;
  /**
   * A positive or negative rounding adjustment to the total of the order, commonly used to apply Cash Rounding when the
   * minimum unit of account is smaller than the lowest physical denomination of currency.
   */
  roundingAdjustment?: Maybe<OrderRoundingAdjustment>;
  /** A list of service charges applied to the order. */
  serviceCharges?: Maybe<Array<Maybe<OrderServiceCharge>>>;
  /** The origination details of the order. */
  source?: Maybe<OrderSource>;
  /** The current state of the order. */
  state?: Maybe<OrderState>;
  /**
   * The list of all taxes associated with the order.
   *
   * Taxes can be scoped to either ORDER or LINE_ITEM. For taxes with LINE_ITEM scope, an OrderLineItemAppliedTax must
   * be added to each line item that the tax applies to. For taxes with ORDER scope, the server will generate an
   * OrderLineItemAppliedTax for every line item.
   *
   * On reads, each tax in the list will include the total amount of that tax applied to the order.
   *
   * IMPORTANT: If LINE_ITEM scope is set on any taxes in this field, usage of the deprecated line_items.taxes field
   * will result in an error. Please use line_items.applied_taxes instead.
   */
  taxes?: Maybe<Array<Maybe<OrderLineItemTax>>>;
  /** The Tenders which were used to pay for the Order. */
  tenders?: Maybe<Array<Maybe<OrderTender>>>;
  /** A short-term identifier for the order (such as a customer first name, table number, or auto-generated order number that resets daily) */
  ticketName?: Maybe<Scalars['String']['output']>;
  /** The total discount amount of money to collect for the order. */
  totalDiscount?: Maybe<Money>;
  /** The total amount of money to collect for the order. */
  totalMoney?: Maybe<Money>;
  /**
   * The total amount of money collected in service charges for the order.
   *
   * Note: totalServiceCharge is the sum of appliedMoney fields for each individual service charge. Therefore,
   * totalServiceChargeMoney will only include inclusive tax amounts, not additive tax amounts.
   */
  totalServiceCharge?: Maybe<Money>;
  /** The total tax amount of money to collect for the order. */
  totalTax?: Maybe<Money>;
  /** The total tip amount of money to collect for the order. */
  totalTip?: Maybe<Money>;
  /** When the order was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Version number which is incremented each time an update is committed to the order. Orders that were not created
   * through the API will not include a version and thus cannot be updated.
   *
   * Read more about [working with versions](https://developer.squareup.com/docs/orders-api/manage-orders#update-orders).
   */
  version?: Maybe<Scalars['JsonSafeLong']['output']>;
};

/**
 * A bank transfer, aka ACH payment. See PaymentBankTransferDetails for more details.
 *
 * Permissions:ORDERS_READ
 */
export type OrderBankTransfer = OrderTender & {
  __typename?: 'OrderBankTransfer';
  /**
   * Additional recipients (other than the merchant) receiving a portion of this tender. For example, fees assessed on
   * the purchase by a third party integration.
   * @deprecated additionalRecipients have been deprecated
   */
  additionalRecipients?: Maybe<Array<Maybe<OrderTenderAdditionalRecipient>>>;
  /**
   * The total amount of the tender, including tip. If the tender has a Payment, the totalMoney of the
   * corresponding Payment will be equal to the amount of the tender.
   */
  amount?: Maybe<Money>;
  /** When the Tender was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Present if the tender is associated with a customer or is a customer's card on file. */
  customer?: Maybe<Customer>;
  /** The tender's unique ID. */
  id: Scalars['ID']['output'];
  /** The tender's associated location. */
  location?: Maybe<Location>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** An optional note associated with the tender at the time of payment. */
  note?: Maybe<Scalars['String']['output']>;
  /**
   * The Payment that corresponds to this tender. This value is only present for payments created with the
   * V2 Payments API
   */
  payment?: Maybe<Payment>;
  /**
   * The amount of any Square processing fees applied to the tender.
   *
   * This field is not immediately populated when a new transaction is created. It is usually available after about
   * ten seconds.
   */
  processingFee?: Maybe<Money>;
  /** The bank transfer's current state. */
  status?: Maybe<OrderBankTransferStatus>;
  /** The tip's amount of the tender. */
  tip?: Maybe<Money>;
  /**
   * The ID of the tender's associated transaction.
   *
   * Transactions are not represented in graphql, and need to be retrieved through the REST API.
   */
  transactionId?: Maybe<Scalars['ID']['output']>;
  /** The type of tender, such as CARD or CASH. */
  type?: Maybe<OrderTenderType>;
};

/** Indicates the bank transfer's current status. */
export enum OrderBankTransferStatus {
  /** The bank transfer has been completed. */
  Completed = 'COMPLETED',
  /** The bank transfer failed. */
  Failed = 'FAILED',
  /** The bank transfer is in progress. */
  Pending = 'PENDING'
}

/** The method used to enter the card's details. */
export enum OrderCardEntryMethod {
  /** The card was processed via a contactless (i.e., NFC) transaction with a Square reader. */
  Contactless = 'CONTACTLESS',
  /** The card was processed via EMV with a Square reader. */
  Emv = 'EMV',
  /** The card information was keyed manually into Square Point of Sale or a Square-hosted web form. */
  Keyed = 'KEYED',
  /** The buyer's card details were already on file with Square. */
  OnFile = 'ON_FILE',
  /** The card was swiped through a Square reader or Square stand. */
  Swiped = 'SWIPED'
}

/**
 * A tender of type card.
 *
 * Permissions:ORDERS_READ
 */
export type OrderCardTender = OrderTender & {
  __typename?: 'OrderCardTender';
  /**
   * Additional recipients (other than the merchant) receiving a portion of this tender. For example, fees assessed on
   * the purchase by a third party integration.
   * @deprecated additionalRecipients have been deprecated
   */
  additionalRecipients?: Maybe<Array<Maybe<OrderTenderAdditionalRecipient>>>;
  /**
   * The total amount of the tender, including tip. If the tender has a Payment, the totalMoney of the
   * corresponding Payment will be equal to the amount of the tender.
   */
  amount?: Maybe<Money>;
  /** The card's non-confidential details. */
  card?: Maybe<Card>;
  /** When the Tender was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Present if the tender is associated with a customer or is a customer's card on file. */
  customer?: Maybe<Customer>;
  /** The method used to enter the card's details for the transaction. */
  entryMethod?: Maybe<OrderCardEntryMethod>;
  /** The tender's unique ID. */
  id: Scalars['ID']['output'];
  /** The tender's associated location. */
  location?: Maybe<Location>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** An optional note associated with the tender at the time of payment. */
  note?: Maybe<Scalars['String']['output']>;
  /**
   * The Payment that corresponds to this tender. This value is only present for payments created with the
   * V2 Payments API
   */
  payment?: Maybe<Payment>;
  /**
   * The amount of any Square processing fees applied to the tender.
   *
   * This field is not immediately populated when a new transaction is created. It is usually available after about
   * ten seconds.
   */
  processingFee?: Maybe<Money>;
  /** The card payment's current state. */
  status?: Maybe<OrderCardTenderStatus>;
  /** The tip's amount of the tender. */
  tip?: Maybe<Money>;
  /**
   * The ID of the tender's associated transaction.
   *
   * Transactions are not represented in graphql, and need to be retrieved through the REST API.
   */
  transactionId?: Maybe<Scalars['ID']['output']>;
  /** The type of tender, such as CARD or CASH. */
  type?: Maybe<OrderTenderType>;
};

/** The card transaction's current status. */
export enum OrderCardTenderStatus {
  /** The card transaction has been authorized but not yet captured. */
  Authorized = 'AUTHORIZED',
  /** The card transaction was authorized and subsequently captured (i.e., completed). */
  Captured = 'CAPTURED',
  /** The card transaction failed. */
  Failed = 'FAILED',
  /** The card transaction was authorized and subsequently voided (i.e., canceled). */
  Voided = 'VOIDED'
}

/**
 * A tender of type cash.
 *
 * Permissions:ORDERS_READ
 */
export type OrderCashTender = OrderTender & {
  __typename?: 'OrderCashTender';
  /**
   * Additional recipients (other than the merchant) receiving a portion of this tender. For example, fees assessed on
   * the purchase by a third party integration.
   * @deprecated additionalRecipients have been deprecated
   */
  additionalRecipients?: Maybe<Array<Maybe<OrderTenderAdditionalRecipient>>>;
  /**
   * The total amount of the tender, including tip. If the tender has a Payment, the totalMoney of the
   * corresponding Payment will be equal to the amount of the tender.
   */
  amount?: Maybe<Money>;
  /** The total amount of cash provided by the buyer, before change is given. */
  buyerTenderedMoney?: Maybe<Money>;
  /** The amount of change returned to the buyer. */
  changeBankMoney?: Maybe<Money>;
  /** When the Tender was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Present if the tender is associated with a customer or is a customer's card on file. */
  customer?: Maybe<Customer>;
  /** The tender's unique ID. */
  id: Scalars['ID']['output'];
  /** The tender's associated location. */
  location?: Maybe<Location>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** An optional note associated with the tender at the time of payment. */
  note?: Maybe<Scalars['String']['output']>;
  /**
   * The Payment that corresponds to this tender. This value is only present for payments created with the
   * V2 Payments API
   */
  payment?: Maybe<Payment>;
  /**
   * The amount of any Square processing fees applied to the tender.
   *
   * This field is not immediately populated when a new transaction is created. It is usually available after about
   * ten seconds.
   */
  processingFee?: Maybe<Money>;
  /** The tip's amount of the tender. */
  tip?: Maybe<Money>;
  /**
   * The ID of the tender's associated transaction.
   *
   * Transactions are not represented in graphql, and need to be retrieved through the REST API.
   */
  transactionId?: Maybe<Scalars['ID']['output']>;
  /** The type of tender, such as CARD or CASH. */
  type?: Maybe<OrderTenderType>;
};

/**
 * A list of Orders.
 *
 * Permissions:ORDERS_READ
 */
export type OrderConnection = {
  __typename?: 'OrderConnection';
  /** List of Order. */
  nodes: Array<Order>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
};

/**
 * Specific details for order fulfillment of curbside pickup.
 *
 * Permissions:ORDERS_READ
 */
export type OrderCurbsidePickup = {
  __typename?: 'OrderCurbsidePickup';
  /** When the buyer arrived and is waiting for pickup. */
  buyerArrivedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Ad-hoc details for curbside pickup, such as parking number, vehicle model, etc. */
  curbsidePickupDetails?: Maybe<Scalars['String']['output']>;
};

/**
 * Describes delivery details of an order fulfillment.
 *
 * Permissions:ORDERS_READ
 */
export type OrderDelivery = {
  __typename?: 'OrderDelivery';
  /** A description of why the shipment was canceled. */
  cancelReason?: Maybe<Scalars['String']['output']>;
  /** The timestamp indicating the shipment was canceled. */
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The timestamp indicates when the seller completed the fulfillment.
   * This field is automatically set when fulfillment state changes to COMPLETED. The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  completeAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The timestamp indicating when an order can be picked up by the courier for delivery. The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  courierPickupAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The period of time in which the order should be picked up by the courier after the courier_pickup_at timestamp. The time must be in RFC 3339 format (for example, "P1W3D").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  courierPickupWindowDuration?: Maybe<Scalars['Duration']['output']>;
  /** The name of the courier provider. */
  courierProviderName?: Maybe<Scalars['String']['output']>;
  /** The support phone number of the courier. */
  courierSupportPhoneNumber?: Maybe<Scalars['String']['output']>;
  /**
   * The timestamp that represents the start of the delivery period. When the fulfillment schedule_type is ASAP,
   * the field is automatically set to the current time plus the prep_time_duration.
   * Otherwise, the application can set this field while the fulfillment state is PROPOSED, RESERVED, or
   * PREPARED (any time before the terminal state such as COMPLETED, CANCELED, and FAILED).
   *
   * The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  deliverAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The timestamp indicating when the fulfillment was delivered to the recipient. The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  deliveredAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The time period after the deliver_at timestamp in which to deliver the order. Applications can set this field when the fulfillment state is PROPOSED, RESERVED, or PREPARED (any time before the terminal state such as COMPLETED, CANCELED, and FAILED). The timestamp must be in RFC 3339 format (for example, "P1W3D").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  deliveryWindowDuration?: Maybe<Scalars['Duration']['output']>;
  /** A note to provide additional instructions about how to deliver the order. */
  dropoffNotes?: Maybe<Scalars['String']['output']>;
  /** The identifier for the delivery created by the third-party courier service */
  externalDeliveryId?: Maybe<Scalars['ID']['output']>;
  /**
   * The timestamp indicates when the seller started processing the fulfillment.
   * This field is automatically set when the fulfillment state changes to RESERVED. The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  inProgressAt?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the delivery is preferred to be no contact. */
  isNoContactDelivery?: Maybe<Scalars['Boolean']['output']>;
  /** The flag to indicate the delivery is managed by a third party (ie DoorDash), which means we may not receive all recipient information for PII purposes. */
  managedDelivery?: Maybe<Scalars['Boolean']['output']>;
  /** Provides additional instructions about the delivery fulfillment. It is displayed in the Square Point of Sale application and set by the API. */
  note?: Maybe<Scalars['String']['output']>;
  /**
   * The timestamp indicating when the fulfillment was placed. The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   * Must be in RFC 3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  placeAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The duration of time it takes to prepare and deliver this fulfillment. The timestamp must be in RFC 3339 format (for example, "P1W3D").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  prepTimeDuration?: Maybe<Scalars['Duration']['output']>;
  /**
   * The timestamp indicating when the seller marked the fulfillment as ready for courier pickup.
   * This field is automatically set when the fulfillment state changes to PREPARED. The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  readyAt?: Maybe<Scalars['DateTime']['output']>;
  /** Information on the person meant to receive this shipment fulfillment. */
  recipient?: Maybe<OrderFulfillmentRecipient>;
  /**
   * The timestamp indicating when the fulfillment was rejected.
   * This field is automatically set when the fulfillment state changes to FAILED. The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   *
   * Examples for January 25th, 2020 6:25:34pm Pacific Standard Time:
   *
   * UTC: 2020-01-26T02:25:34Z
   *
   * Pacific Standard Time with UTC offset: 2020-01-25T18:25:34-08:00
   */
  rejectAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Indicates the fulfillment delivery schedule type. If SCHEDULED, then deliver_at is required.
   * If ASAP, then prep_time_duration is required. The default is SCHEDULED.
   */
  scheduleType?: Maybe<OrderDeliveryScheduleType>;
  /** The identifier for the delivery created by Square. */
  squareDeliveryId?: Maybe<Scalars['ID']['output']>;
};

export enum OrderDeliveryScheduleType {
  /** Indicates that the fulfillment to deliver as soon as possible and should be prepared immediately. */
  Asap = 'ASAP',
  /** Indicates the fulfillment to deliver at a scheduled deliver time. */
  Scheduled = 'SCHEDULED'
}

/** OrderFilter is used for filtering a query with Order */
export type OrderFilter = {
  /** Time range for filtering on the closedAt timestamp. If you use this value, you must also set the orderBy of the query to closedAt. */
  closedAt?: InputMaybe<TimeRangeFilter>;
  /** Time range for filtering on the createdAt timestamp. If you use this value, you must also set the orderBy of the query to createdAt. */
  createdAt?: InputMaybe<TimeRangeFilter>;
  /** Filter by customers associated with the order. */
  customer?: InputMaybe<BasicIdFilter>;
  /** List of fulfillment states to filter for. Will return orders if any of its fulfillments match any of the fulfillment states listed in this field. */
  fulfillmentState?: InputMaybe<OrderFulfillmentStateFilter>;
  /** List of fulfillment types to filter for. Will return orders if any of its fulfillments match any of the fulfillment types listed in this field. */
  fulfillmentType?: InputMaybe<OrderFulfillmentTypeFilter>;
  /** The order IDs to filter with. */
  id?: InputMaybe<BasicIdFilter>;
  /** The location IDs for the orders to query. All locations must belong to the same merchant. */
  location?: InputMaybe<BasicIdFilter>;
  /** The merchant IDs for the orders to query. */
  merchantId: BasicIdFilter;
  /** Filters by Source name. Will return any orders with with a source.name that matches any of the listed source names. */
  sourceName?: InputMaybe<BasicStringFilter>;
  /** States to filter for. */
  state?: InputMaybe<OrderStateFilter>;
  /** Time range for filtering on the updatedAt timestamp. If you use this value, you must also set the orderBy of the query to updatedAt. */
  updatedAt?: InputMaybe<TimeRangeFilter>;
};

/**
 * Contains details about how to fulfill this order.
 *
 * Permissions:ORDERS_READ
 */
export type OrderFulfillment = {
  __typename?: 'OrderFulfillment';
  /** Describes delivery details of an order fulfillment. */
  delivery?: Maybe<OrderDelivery>;
  /**
   * A list of entries pertaining to the fulfillment of an order. Each entry must reference a valid uid for an order line item in the line_item_uid field,
   * as well as a quantity to fulfill. Multiple entries can reference the same line item uid, as long as the total quantity among all fulfillment entries referencing
   * a single line item does not exceed the quantity of the order's line item itself. An order cannot be marked as COMPLETED before all fulfillments are COMPLETED, CANCELED, or FAILED. Fulfillments can be created and completed independently before order completion.
   */
  entries?: Maybe<OrderFulfillmentFulfillmentEntry>;
  /** Describes what order line items this fulfillment applies to. It can be ALL or ENTRY_LIST with a supplied list of fulfillment entries. */
  lineItemApplication?: Maybe<Scalars['String']['output']>;
  /** The metadata for the fulfillment. */
  metadata?: Maybe<Metadata>;
  /** Contains details for a pickup fulfillment. Required when fulfillment type is PICKUP. */
  pickup?: Maybe<OrderPickup>;
  /**
   * Contains details for a shipment fulfillment. Required when fulfillment type is SHIPMENT.
   *
   * A shipment fulfillment's relationship to fulfillment state:
   * - PROPOSED: A shipment is requested.
   * - RESERVED: Fulfillment accepted. Shipment processing.
   * - PREPARED: Shipment packaged. Shipping label created.
   * - COMPLETED: Package has been shipped.
   * - CANCELED: Shipment has been canceled.
   * - FAILED: Shipment has failed.
   */
  shipment?: Maybe<OrderShipment>;
  /** The state of the fulfillment. */
  state?: Maybe<OrderFulfillmentState>;
  /** The type of the fulfillment. */
  type?: Maybe<OrderFulfillmentType>;
  /** Unique ID. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * Links an order line item to a fulfillment.
 *
 * Permissions:ORDERS_READ
 */
export type OrderFulfillmentFulfillmentEntry = {
  __typename?: 'OrderFulfillmentFulfillmentEntry';
  /** The uid from the order line item. */
  lineItemUid?: Maybe<Scalars['ID']['output']>;
  /**
   * The quantity of the line item being fulfilled, formatted as a decimal number. For example, "3".
   * Fulfillments for line items with a quantity_unit can have non-integer quantities. For example, "1.70000".
   */
  quantity?: Maybe<Scalars['String']['output']>;
  /** A unique ID that identifies the fulfillment entry only within this order. */
  uid?: Maybe<Scalars['ID']['output']>;
};

/**
 * The recipient of a fulfillment.
 *
 * Permissions:ORDERS_READ
 */
export type OrderFulfillmentRecipient = {
  __typename?: 'OrderFulfillmentRecipient';
  /** The address of the fulfillment recipient. If provided, overrides the customer's address. */
  address?: Maybe<Address>;
  /** The customer associated with the fulfillment. */
  customer?: Maybe<Customer>;
  /** The display name of the fulfillment recipient. If provided, overrides the customer's displayName. */
  displayName?: Maybe<Scalars['String']['output']>;
  /** The email address of the fulfillment recipient. If provided, overrides the customer's emailAddress. */
  emailAddress?: Maybe<Scalars['String']['output']>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** The phone number of the fulfillment recipient. If provided, overrides the customer's phoneNumber. */
  phoneNumber?: Maybe<Scalars['String']['output']>;
};

/** The current state of an order fulfillment. */
export enum OrderFulfillmentState {
  /** The fulfillment was canceled. */
  Canceled = 'CANCELED',
  /** The fulfillment was successfully completed. */
  Completed = 'COMPLETED',
  /** The fulfillment failed to be completed but was not explicitly canceled. */
  Failed = 'FAILED',
  /** The fulfillment has been prepared. */
  Prepared = 'PREPARED',
  /** The fulfillment has been proposed */
  Proposed = 'PROPOSED',
  /** The fulfillment has been reserved. */
  Reserved = 'RESERVED'
}

/** OrderFulfillmentStateFilter is used for filtering a query with OrderFulfillmentState */
export type OrderFulfillmentStateFilter = {
  /** Used for filtering a query with OrderFulfillmentState */
  equalToAnyOf?: InputMaybe<Array<OrderFulfillmentState>>;
};

/** The type of an order fulfillment */
export enum OrderFulfillmentType {
  /** A courier to deliver the fulfillment. */
  Delivery = 'DELIVERY',
  Digital = 'DIGITAL',
  /** A fulfillment to be picked up from a physical location by a recipient. */
  Pickup = 'PICKUP',
  /** A fulfillment to be shipped by a shipping carrier. */
  Shipment = 'SHIPMENT'
}

/** OrderFulfillmentTypeFilter is used for filtering a query with OrderFulfillmentType */
export type OrderFulfillmentTypeFilter = {
  /** Used for filtering a query with OrderFulfillmentType */
  equalToAnyOf?: InputMaybe<Array<OrderFulfillmentType>>;
};

/**
 * A line item in an order. Each line item describes a different product to purchase, with its own quantity and price
 * details.
 *
 * Permissions:ORDERS_READ
 */
export type OrderLineItem = {
  __typename?: 'OrderLineItem';
  /**
   * The list of references to discounts applied to this line item. Each OrderLineItemAppliedDiscount has a discountUid
   * that references the uid of a top-level OrderLineItemDiscounts applied to the line item. On reads, the amount applied
   * is populated.
   *
   * An OrderLineItemAppliedDiscount will be automatically created on every line item for all ORDER scoped discounts that
   * are added to the order. OrderLineItemAppliedDiscount records for LINE_ITEM scoped discounts must be added in
   * requests for the discount to apply to any line items.
   *
   * To change the amount of a discount, modify the referenced top-level discount.
   */
  appliedDiscounts?: Maybe<Array<Maybe<OrderLineItemAppliedDiscount>>>;
  /**
   * The list of references to service charges applied to this line item.
   * Each OrderLineItemAppliedServiceCharge has a service_charge_id that references the uid of a top-level OrderServiceCharge applied to the line item. On reads, the amount applied is populated.
   *
   * To change the amount of a service charge, modify the referenced top-level service charge.
   */
  appliedServiceCharges?: Maybe<Array<Maybe<OrderLineItemAppliedServiceCharge>>>;
  /**
   * The list of references to taxes applied to this line item. Each OrderLineItemAppliedTax has a taxUid that
   * references the uid of a top-level OrderLineItemTax applied to the line item. On reads, the amount applied is
   * populated.
   *
   * An OrderLineItemAppliedTax will be automatically created on every line item for all ORDER scoped taxes added to the
   * order. OrderLineItemAppliedTax records for LINE_ITEM scoped taxes must be added in requests for the tax to apply to
   * any line items.
   *
   * To change the amount of a tax, modify the referenced top-level tax.
   */
  appliedTaxes?: Maybe<Array<Maybe<OrderLineItemAppliedTax>>>;
  /** The base price for a single unit of the line item. */
  basePrice?: Maybe<Money>;
  /**
   * The amount of money made in gross sales for this line item. Calculated as the sum of the variation's total price and
   * each modifier's total price.
   */
  grossSales?: Maybe<Money>;
  /** CatalogItemVariation of the variation applied to this line item. */
  itemVariation?: Maybe<CatalogItemVariation>;
  /** The metadata for the line item. */
  metadata?: Maybe<Metadata>;
  /** The CatalogModifiers applied to this line item. */
  modifiers?: Maybe<Array<Maybe<OrderLineItemModifier>>>;
  /** The name of the line item. */
  name?: Maybe<Scalars['String']['output']>;
  /** The note of the line item. */
  note?: Maybe<Scalars['String']['output']>;
  /**
   * The quantity purchased, formatted as a decimal number. For example: "3".
   *
   * Line items with a quantity_unit can have non-integer quantities. For example: "1.70000".
   */
  quantity?: Maybe<Scalars['Decimal']['output']>;
  /** The unit and precision that this line item's quantity is measured in. */
  quantityUnit?: Maybe<OrderQuantityUnit>;
  /** The total discount amount of money to collect for the line item. */
  totalDiscount?: Maybe<Money>;
  /** The total amount of money to collect for this line item. */
  totalMoney?: Maybe<Money>;
  /** The total tax amount of money to collect for the line item. */
  totalTax?: Maybe<Money>;
  /** Unique ID. */
  uid?: Maybe<Scalars['UID']['output']>;
  /**
   * The total price of all item variations sold in this line item. Calculated as base_price_money multiplied by
   * quantity. Does not include modifiers.
   */
  variationTotalPrice?: Maybe<Money>;
};

/**
 * An applied portion of a discount to a line item in an order.
 *
 * Order scoped discounts will automatically have applied discounts present for each line item. Line item scoped discounts
 * must have applied discounts added manually for any applicable line items. The corresponding applied money will
 * automatically be computed based on participating line items.
 *
 * Permissions:ORDERS_READ
 */
export type OrderLineItemAppliedDiscount = {
  __typename?: 'OrderLineItemAppliedDiscount';
  /** The amount of money applied by the discount to the line item. */
  appliedMoney?: Maybe<Money>;
  /**
   * The uid of the discount the applied discount represents. Must reference a discount present in the order.discounts
   * field.
   *
   * This field is immutable. To change which discounts apply to a line item, you must delete the discount and re-add it
   * as a new OrderLineItemAppliedDiscount.
   */
  discountUid?: Maybe<Scalars['ID']['output']>;
  /** Unique ID. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * References to service charges applied to this line item.
 *
 * Permissions:ORDERS_READ
 */
export type OrderLineItemAppliedServiceCharge = {
  __typename?: 'OrderLineItemAppliedServiceCharge';
  /** The amount of money applied by the service charge to the line item. */
  appliedMoney?: Maybe<Money>;
  /**
   * The uid of the service charge that the applied service charge represents. It must reference a service charge present in the order.service_charges field.
   *
   * This field is immutable. To change which service charges apply to a line item, delete and add a new OrderLineItemAppliedServiceCharge.
   */
  serviceChargeUid?: Maybe<Scalars['UID']['output']>;
  /** Unique ID. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * An applied portion of a tax to a line item in an order.
 *
 * Order-scoped taxes automatically include the applied taxes in each line item. Line item taxes must be referenced from
 * any applicable line items. The corresponding applied money is automatically computed, based on the set of participating
 * line items.
 *
 * Permissions:ORDERS_READ
 */
export type OrderLineItemAppliedTax = {
  __typename?: 'OrderLineItemAppliedTax';
  /** The amount of money applied by the tax to the line item. */
  appliedMoney?: Maybe<Money>;
  /**
   * The uid of the tax for which this applied tax represents. Must reference a tax present in the order.taxes field.
   *
   * This field is immutable. To change which taxes apply to a line item, delete and add new OrderLineItemAppliedTaxs.
   */
  taxUid?: Maybe<Scalars['UID']['output']>;
  /** Unique ID. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * Represents a discount that applies to one or more line items in an order.
 *
 * Permissions:ORDERS_READ
 */
export type OrderLineItemDiscount = {
  __typename?: 'OrderLineItemDiscount';
  /**
   * The total declared monetary amount of the discount.
   * amount is not set for percentage-based discounts.
   */
  amount?: Maybe<Money>;
  /**
   * The amount of discount actually applied to the line item.
   *
   * Represents the amount of money applied as a line item-scoped discount. When an amount-based discount is scoped to
   * the entire order, the value of appliedMoney is different from amount because the total amount of the discount
   * is distributed across all line items.
   */
  appliedMoney?: Maybe<Money>;
  /** The CatalogDiscount for a line item */
  discount?: Maybe<CatalogDiscount>;
  /** The discount code IDs corresponding to this discount. */
  discountCodeIds?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** The metadata for the discount. */
  metadata?: Maybe<Metadata>;
  /** The discount's name. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The percentage of the discount, as a string representation of a decimal number. A value of 7.25 corresponds to a
   * percentage of 7.25%.
   *
   * percentage is not set for amount-based discounts.
   */
  percentage?: Maybe<Scalars['String']['output']>;
  /**
   * The pricing rule to be applied automatically to this discount. The specification and application of the discounts,
   * to which a pricing rule is assigned, are completely controlled by the corresponding pricing rule.
   */
  pricingRule?: Maybe<CatalogPricingRule>;
  /**
   * The reward identifiers corresponding to this discount. The application and specification of discounts that have
   * rewards are completely controlled by the backing criteria corresponding to the reward tiers of the rewards that are
   * added to the order through the Loyalty API. To manually unapply discounts that are the result of added rewards, the
   * rewards must be removed from the order through the Loyalty API.
   */
  rewards?: Maybe<Array<Maybe<Reward>>>;
  /**
   * Indicates the level at which the discount applies. For ORDER scoped discounts, Square generates references in
   * applied_discounts on all order line items that do not have them. For LINE_ITEM scoped discounts, the discount only
   * applies to line items with a discount reference in their appliedDiscounts field. To change the scope of a discount
   * you must delete the discount and re-add it as a new discount.
   */
  scope?: Maybe<OrderLineItemDiscountScope>;
  /**
   * The type of the discount.
   *
   * Discounts that aren't backed by a CatalogDiscount must have a type of FIXED_PERCENTAGE or FIXED_AMOUNT.
   */
  type?: Maybe<OrderLineItemDiscountType>;
  /** Unique ID. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/** Indicates whether this is a line-item or order-level discount. */
export enum OrderLineItemDiscountScope {
  /** The discount should be applied to only line items specified by OrderLineItemAppliedDiscount reference records. */
  LineItem = 'LINE_ITEM',
  /** The discount should be applied to the entire order. */
  Order = 'ORDER',
  /** Used for reporting only. The original transaction discount scope is currently not supported by the API. */
  OtherDiscountScope = 'OTHER_DISCOUNT_SCOPE'
}

export enum OrderLineItemDiscountType {
  /** Apply the discount as a fixed monetary value (e.g., $1.00) off the item price. */
  FixedAmount = 'FIXED_AMOUNT',
  /** Apply the discount as a fixed percentage (e.g., 5%) off the item price. */
  FixedPercentage = 'FIXED_PERCENTAGE',
  /** Used for reporting only. The original transaction discount type is currently not supported by the API. */
  UnknownDiscount = 'UNKNOWN_DISCOUNT',
  /**
   * Apply the discount as a variable amount based on the item price.
   *
   * The specific discount amount of a VARIABLE_AMOUNT discount is assigned at the time of the purchase.
   */
  VariableAmount = 'VARIABLE_AMOUNT',
  /**
   * Apply the discount as a variable percentage based on the item price.
   *
   * The specific discount percentage of a VARIABLE_PERCENTAGE discount is assigned at the time of the purchase.
   */
  VariablePercentage = 'VARIABLE_PERCENTAGE'
}

/**
 * A CatalogModifier.
 *
 * Permissions:ORDERS_READ
 */
export type OrderLineItemModifier = {
  __typename?: 'OrderLineItemModifier';
  /**
   * The base price for the modifier.
   *
   * basePrice is required for ad hoc modifiers. If both modifier and basePrice are set,
   * basePrice will override the predefined modifier price.
   */
  basePrice?: Maybe<Money>;
  /** The catalog modiifier. */
  modifier?: Maybe<CatalogModifier>;
  /** The name of the item modifier */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The total price of the item modifier for its line item. This is the modifier's basePrice multiplied by the
   * line item's quantity.
   */
  totalPrice?: Maybe<Money>;
  /** Unique ID. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * A tax that applies to one or more line item in the order.
 *
 * Fixed-amount, order-scoped taxes are distributed across all non-zero line item totals. The amount distributed to each
 * line item is relative to the amount the item contributes to the order subtotal.
 *
 * Permissions:ORDERS_READ
 */
export type OrderLineItemTax = {
  __typename?: 'OrderLineItemTax';
  /** The amount of the money applied by the tax in the order. */
  appliedMoney?: Maybe<Money>;
  /** Determines whether the tax was automatically applied to the order based on the catalog configuration. For an example, see Automatically Apply Taxes to an Order. */
  autoApplied?: Maybe<Scalars['Boolean']['output']>;
  /** The metadata for the tax */
  metadata?: Maybe<Metadata>;
  /** The tax's name. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The percentage of the tax, as a string representation of a decimal number. For example, a value of "7.25"
   * corresponds to a percentage of 7.25%."
   */
  percentage?: Maybe<Scalars['Decimal']['output']>;
  /**
   * The level at which the tax applies. For ORDER scoped taxes, Square generates references in appliedTaxes
   * on all order line items that do not have them. For LINE_ITEM scoped taxes, the tax will only apply to line items
   * with references in their appliedTaxes field.
   */
  scope?: Maybe<OrderLineItemTaxScope>;
  /** The CatalogTax. */
  tax?: Maybe<CatalogTax>;
  /** The calculation method used to apply the tax. */
  type?: Maybe<OrderLineItemTaxType>;
  /** Unique ID. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/** Whether this is a line item or order level tax. */
export enum OrderLineItemTaxScope {
  /** The tax should be applied only to line items specified by the OrderLineItemAppliedTax reference records. */
  LineItem = 'LINE_ITEM',
  /** The tax should be applied to the entire order. */
  Order = 'ORDER',
  /** Used for reporting only. The original transaction tax scope is currently not supported by the API. */
  OtherTaxScope = 'OTHER_TAX_SCOPE'
}

export enum OrderLineItemTaxType {
  /**
   * The tax is an additive tax. The tax amount is added on top of the price. For example, an item with a cost of
   * 1.00 USD and a 10% additive tax would have a total cost to the buyer of 1.10 USD.
   */
  Additive = 'ADDITIVE',
  /**
   * The tax is an inclusive tax. Inclusive taxes are already included in the line item price or order total. For
   * example, an item with cost 1.00 USD with a 10% inclusive tax would have a pre-tax cost of 0.91 USD (91 cents)
   * and a 0.09 (9 cents) tax for a total cost of 1.00 USD to the buyer.
   */
  Inclusive = 'INCLUSIVE',
  /** Used for reporting only. The original transaction tax type is currently not supported by the API. */
  UnknownTax = 'UNKNOWN_TAX'
}

/**
 * A collection of various money amounts.
 *
 * Permissions:ORDERS_READ
 */
export type OrderMoneyAmounts = {
  __typename?: 'OrderMoneyAmounts';
  /** Money associated with discounts. */
  discount?: Maybe<Money>;
  /** Money associated with service charges. */
  serviceCharge?: Maybe<Money>;
  /** Money associated with taxes. */
  tax?: Maybe<Money>;
  /** Money associated with tips. */
  tip?: Maybe<Money>;
  /** Total money. */
  totalMoney?: Maybe<Money>;
};

/**
 * A tender of other type.
 *
 * Permissions:ORDERS_READ
 */
export type OrderOtherTender = OrderTender & {
  __typename?: 'OrderOtherTender';
  /**
   * Additional recipients (other than the merchant) receiving a portion of this tender. For example, fees assessed on
   * the purchase by a third party integration.
   * @deprecated additionalRecipients have been deprecated
   */
  additionalRecipients?: Maybe<Array<Maybe<OrderTenderAdditionalRecipient>>>;
  /**
   * The total amount of the tender, including tip. If the tender has a Payment, the totalMoney of the
   * corresponding Payment will be equal to the amount of the tender.
   */
  amount?: Maybe<Money>;
  /** When the Tender was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Present if the tender is associated with a customer or is a customer's card on file. */
  customer?: Maybe<Customer>;
  /** The tender's unique ID. */
  id: Scalars['ID']['output'];
  /** The tender's associated location. */
  location?: Maybe<Location>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** An optional note associated with the tender at the time of payment. */
  note?: Maybe<Scalars['String']['output']>;
  /**
   * The Payment that corresponds to this tender. This value is only present for payments created with the
   * V2 Payments API
   */
  payment?: Maybe<Payment>;
  /**
   * The amount of any Square processing fees applied to the tender.
   *
   * This field is not immediately populated when a new transaction is created. It is usually available after about
   * ten seconds.
   */
  processingFee?: Maybe<Money>;
  /** The tip's amount of the tender. */
  tip?: Maybe<Money>;
  /**
   * The ID of the tender's associated transaction.
   *
   * Transactions are not represented in graphql, and need to be retrieved through the REST API.
   */
  transactionId?: Maybe<Scalars['ID']['output']>;
  /** The type of tender, such as CARD or CASH. */
  type?: Maybe<OrderTenderType>;
};

/**
 * Details necessary to fulfill a pickup order
 *
 * Permissions:ORDERS_READ
 */
export type OrderPickup = {
  __typename?: 'OrderPickup';
  /** When the fulfillment was accepted. */
  acceptedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The duration of time after which an open and accepted pickup fulfillment will automatically move to the COMPLETED
   * state. If not set, this pickup fulfillment will remain accepted until it is canceled or completed.
   */
  autoCompleteDuration?: Maybe<Scalars['Duration']['output']>;
  /** A description of why the pickup was canceled. Max length: 100 characters. */
  cancelReason?: Maybe<Scalars['String']['output']>;
  /** When the fulfillment was canceled. */
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  /** Specific details for curbside pickup. Only present if isCurbsidePickup is true. */
  curbsidePickup?: Maybe<OrderCurbsidePickup>;
  /** When the fulfillment expired. */
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * When the fulfillment will expire if it is not accepted. Expiration time can only be set up to 7 days in the future.
   * If expires_at is not set, this pickup fulfillment will be automatically accepted when placed.
   */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** If true, indicates this pickup order is for curbside pickup, not in-store pickup. */
  isCurbsidePickup?: Maybe<Scalars['Boolean']['output']>;
  /**
   * "
   * A note meant to provide additional instructions about the pickup fulfillment displayed in the Square Point
   * of Sale and set by the API.
   */
  note?: Maybe<Scalars['String']['output']>;
  /** When the fulfillment was picked up by the recipient. */
  pickedUpAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The start of the pickup window. For fulfillments with the schedule type ASAP, this is automatically set to the
   * current time plus the expected duration to prepare the fulfillment.
   */
  pickupAt?: Maybe<Scalars['DateTime']['output']>;
  /** The window of time in which the order should be picked up after the pickupAt timestamp. */
  pickupWindowDuration?: Maybe<Scalars['Duration']['output']>;
  /** When the fulfillment was placed. Can be used as an informational guideline for merchants. */
  placedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The duration of time it takes to prepare this fulfillment. */
  prepTimeDuration?: Maybe<Scalars['Duration']['output']>;
  /** When the fulfillment is marked as ready for pickup. */
  readyAt?: Maybe<Scalars['DateTime']['output']>;
  /** Information on the person meant to pick up this fulfillment from a physical location. */
  recipient?: Maybe<OrderFulfillmentRecipient>;
  /** When the fulfillment was rejected. */
  rejectedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The schedule type of the pickup fulfillment. Defaults to SCHEDULED. */
  scheduleType?: Maybe<OrderPickupScheduleType>;
};

/** The schedule type of the pickup fulfillment. */
export enum OrderPickupScheduleType {
  /** Indicates the fulfillment will be picked up as soon as possible and should be prepared immediately. */
  Asap = 'ASAP',
  /** Indicates the fulfillment will be picked up at a scheduled pickup time. */
  Scheduled = 'SCHEDULED'
}

/**
 * Pricing options for an order.
 *
 *
 * The options affect how the order's price is calculated. They can be used, for example, to apply automatic price
 * adjustments that are based on pre-configured pricing rules.
 *
 * Permissions:ORDERS_READ
 */
export type OrderPricingOptions = {
  __typename?: 'OrderPricingOptions';
  /** The option to determine whether or not pricing rule-based discounts are automatically applied to an order. */
  autoApplyDiscounts?: Maybe<Scalars['Boolean']['output']>;
  /** The option to determine whether rule-based taxes are automatically applied to an order when the criteria of the corresponding rules are met. */
  autoApplyTaxes?: Maybe<Scalars['Boolean']['output']>;
};

/**
 * Contains the measurement unit for a quantity and a precision which specifies the number of digits after the decimal
 * point for decimal quantities.
 *
 * Permissions:ORDERS_READ
 */
export type OrderQuantityUnit = {
  __typename?: 'OrderQuantityUnit';
  /** A MeasurementUnit that represents the unit of measure for the quantity. */
  measurementUnit?: Maybe<MeasurementUnit>;
  /**
   * For non-integer quantities, represents the number of digits after the decimal point that are recorded for this
   * quantity.
   *
   * For example, a precision of 1 allows quantities like "1.0" and "1.1", but not "1.01".
   */
  precision?: Maybe<Scalars['Int']['output']>;
};

/**
 * The set of line items, service charges, taxes, discounts, tips, etc. being returned in an Order
 *
 * Permissions:ORDERS_READ
 */
export type OrderReturn = {
  __typename?: 'OrderReturn';
  /** Aggregate monetary value being returned by this Return entry. */
  amounts?: Maybe<OrderMoneyAmounts>;
  /**
   * Collection of references to discounts being returned for an order, including the total applied discount amount to
   * be returned. The discounts must reference a top-level discount ID from the source order.
   */
  discounts?: Maybe<Array<Maybe<OrderReturnDiscount>>>;
  /** Collection of line items which are being returned. */
  lineItems?: Maybe<Array<Maybe<OrderReturnLineItem>>>;
  /**
   * A positive or negative rounding adjustment to the total value being returned. Commonly used to apply Cash Rounding
   * when the minimum unit of account is smaller than the lowest physical denomination of currency.
   */
  roundingAdjustment?: Maybe<OrderRoundingAdjustment>;
  /** Collection of service charges which are being returned. */
  serviceCharges?: Maybe<Array<Maybe<OrderReturnServiceCharge>>>;
  /** The Order which contains the original sale of these returned line items. This will be null for unlinked returns. */
  source?: Maybe<Order>;
  /**
   * Collection of references to taxes being returned for an order, including the total applied tax amount to be
   * returned. The taxes must reference a top-level tax ID from the source order.
   */
  taxes?: Maybe<Array<Maybe<OrderReturnTax>>>;
  /** Unique ID. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * A discount being returned that applies to one or more return line items in an order.
 *
 * Fixed-amount, order-scoped discounts are distributed across all non-zero return line item totals. The amount
 * distributed to each return line item is relative to that item?s contribution to the order subtotal.
 *
 * Permissions:ORDERS_READ
 */
export type OrderReturnDiscount = {
  __typename?: 'OrderReturnDiscount';
  /** The total declared monetary amount of the discount. amount is not set for percentage-based discounts. */
  amount?: Maybe<Money>;
  /**
   * The amount of discount actually applied to this line item. When an amount-based discount is at order-level, this
   * value is different from amount because the discount is distributed across the line items.
   */
  appliedMoney?: Maybe<Money>;
  /** The discount. */
  discount?: Maybe<CatalogDiscount>;
  /** The discount's name. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The percentage of the tax, as a string representation of a decimal number. A value of 7.25 corresponds to a
   * percentage of 7.25%.
   *
   * percentage is not set for amount-based discounts.
   */
  percentage?: Maybe<Scalars['Decimal']['output']>;
  /**
   * Indicates the level at which the OrderReturnDiscount applies. For ORDER scoped discounts, the server will generate
   * references in appliedDiscounts on all OrderReturnLineItems. For LINE_ITEM scoped discounts, the discount will only
   * apply to OrderReturnLineItems with references in their appliedDiscounts field.
   */
  scope?: Maybe<OrderLineItemDiscountScope>;
  /** UID of the Discount from the Order which contains the original application of this discount. */
  sourceDiscountUid?: Maybe<Scalars['UID']['output']>;
  /**
   * The type of the discount.
   *
   * Discounts that aren't backed by a CatalogDiscount must have a type of FIXED_PERCENTAGE or FIXED_AMOUNT.
   */
  type?: Maybe<OrderLineItemDiscountType>;
  /** Unique ID */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * The line item being returned in an Order.
 *
 * Permissions:ORDERS_READ
 */
export type OrderReturnLineItem = {
  __typename?: 'OrderReturnLineItem';
  /**
   * The list of references to discounts applied to this line item. Each OrderLineItemAppliedDiscount has a discountUid
   * that references the uid of a top-level OrderLineItemDiscounts applied to the line item. On reads, the amount applied
   * is populated.
   *
   * An OrderLineItemAppliedDiscount will be automatically created on every line item for all ORDER scoped discounts that
   * are added to the order. OrderLineItemAppliedDiscount records for LINE_ITEM scoped discounts must be added in
   * requests for the discount to apply to any line items.
   *
   * To change the amount of a discount, modify the referenced top-level discount.
   */
  appliedDiscounts?: Maybe<Array<Maybe<OrderLineItemAppliedDiscount>>>;
  /**
   * The list of references to taxes applied to this line item. Each OrderLineItemAppliedTax has a taxUid that
   * references the uid of a top-level OrderLineItemTax applied to the line item. On reads, the amount applied is
   * populated.
   *
   * An OrderLineItemAppliedTax will be automatically created on every line item for all ORDER scoped taxes added to the
   * order. OrderLineItemAppliedTax records for LINE_ITEM scoped taxes must be added in requests for the tax to apply to
   * any line items.
   *
   * To change the amount of a tax, modify the referenced top-level tax.
   */
  appliedTaxes?: Maybe<Array<Maybe<OrderLineItemAppliedTax>>>;
  /** The base price for a single unit of the line item. */
  basePrice?: Maybe<Money>;
  /** The gross return amount of money calculated as (item base price + modifiers price) * quantity. */
  grossReturn?: Maybe<Money>;
  /** The CatalogItemVariation id applied to this line item. */
  itemVariation?: Maybe<CatalogItemVariation>;
  /** The CatalogModifiers applied to this line item. */
  modifiers?: Maybe<Array<Maybe<OrderReturnLineItemModifier>>>;
  /** The name of the line item. */
  name?: Maybe<Scalars['String']['output']>;
  /** The note of the line item. */
  note?: Maybe<Scalars['String']['output']>;
  /**
   * The quantity purchased, formatted as a decimal number. For example: "3".
   *
   * Line items with a quantity_unit can have non-integer quantities. For example: "1.70000".
   */
  quantity?: Maybe<Scalars['Decimal']['output']>;
  /** The unit and precision that this line item's quantity is measured in. */
  quantityUnit?: Maybe<OrderQuantityUnit>;
  /** The line item of the original sale Order */
  sourceLineItem?: Maybe<OrderLineItem>;
  /** The total discount amount of money to collect for the line item. */
  totalDiscount?: Maybe<Money>;
  /** The total amount of money to collect for this line item. */
  totalMoney?: Maybe<Money>;
  /** The total tax amount of money to collect for the line item. */
  totalTax?: Maybe<Money>;
  /** Unique ID. */
  uid?: Maybe<Scalars['UID']['output']>;
  /** The name of the variation applied to this line item. */
  variationName?: Maybe<Scalars['String']['output']>;
  /**
   * The total price of all item variations sold in this line item. Calculated as base_price_money multiplied by
   * quantity. Does not include modifiers.
   */
  variationTotalPrice?: Maybe<Money>;
};

/**
 * A line item modifier being returned.
 *
 * Permissions:ORDERS_READ
 */
export type OrderReturnLineItemModifier = {
  __typename?: 'OrderReturnLineItemModifier';
  /**
   * The base price for the modifier.
   *
   * basePrice is required for ad hoc modifiers. If both modifier and basePrice are set,
   * basePrice will override the predefined modifier price.
   */
  basePrice?: Maybe<Money>;
  /** The catalog modiifier. */
  modifier?: Maybe<CatalogModifier>;
  /** The name of the item modifier */
  name?: Maybe<Scalars['String']['output']>;
  /** The OrderLineItemModifier from the original sale Order. */
  sourceModifierUid?: Maybe<Scalars['ID']['output']>;
  /**
   * The total price of the item modifier for its line item. This is the modifier's basePrice multiplied by the
   * line item's quantity.
   */
  totalPrice?: Maybe<Money>;
  /** Unique ID. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * A service charge applied to an order.
 *
 * Permissions:ORDERS_READ
 */
export type OrderReturnServiceCharge = {
  __typename?: 'OrderReturnServiceCharge';
  /**
   * The amount of a non-percentage based service charge.
   * Exactly one of percentage or amount_money should be set.
   */
  amount?: Maybe<Money>;
  /**
   * The amount of money applied to the order by the service charge, including any inclusive tax amounts, as calculated
   * by Square.
   *
   * - For fixed-amount service charges, appliedMoney is equal to amount.
   * - For percentage-based service charges, appliedMoney is the money calculated using the percentage.
   */
  appliedMoney?: Maybe<Money>;
  /**
   * The list of references to taxes applied to this service charge. Each OrderLineItemAppliedTax has a taxUid that
   * references the uid of a top-level OrderLineItemTax that is being applied to this service charge. On reads, the
   * amount applied is populated.
   *
   * An OrderLineItemAppliedTax will be automatically created on every taxable service charge for all ORDER scoped taxes
   * that are added to the order. OrderLineItemAppliedTax records for LINE_ITEM scoped taxes must be added in requests
   * for the tax to apply to any taxable service charge. Taxable service charges have the taxable field set to true and
   * calculated in the SUBTOTAL_PHASE.
   *
   * To change the amount of a tax, modify the referenced top-level tax.
   */
  appliedTaxes?: Maybe<Array<Maybe<OrderLineItemAppliedTax>>>;
  /** The calculation phase at which to apply the service charge. */
  calculationPhase?: Maybe<OrderServiceChargeCalculationPhase>;
  /** The name of the service charge. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The service charge percentage as a string representation of a decimal number. For example, "7.25" indicates a
   * service charge of 7.25%.
   *
   * Exactly one of percentage or amount_money should be set.
   */
  percentage?: Maybe<Scalars['Decimal']['output']>;
  /** The catalog object for the service charge. */
  serviceCharge?: Maybe<CatalogServiceCharge>;
  /**
   * The uid of the Service Charge from the Order containing the original charge of the service charge.
   * This field is null for unlinked returns.
   */
  sourceServiceCharge?: Maybe<Scalars['UID']['output']>;
  /**
   * Indicates whether the service charge can be taxed. If set to true, order-level taxes automatically apply to the
   * service charge. Note that service charges calculated in the TOTAL_PHASE cannot be marked as taxable."
   */
  taxable?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The total amount of money to collect for the service charge.
   *
   * Note: if an inclusive tax is applied to the service charge, totalMoney does not equal appliedMoney plus
   * totalTax since the inclusive tax amount will already be included in both appliedMoney and totalTax.
   */
  totalMoney?: Maybe<Money>;
  /** The total amount of tax money to collect for the service charge. */
  totalTax?: Maybe<Money>;
  /** Unique ID */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * A tax being returned that applies to one or more return line items in an order.
 *
 * Fixed-amount, order-scoped taxes are distributed across all non-zero return line item totals. The amount
 * distributed to each return line item is relative to that item?s contribution to the order subtotal.
 *
 * Permissions:ORDERS_READ
 */
export type OrderReturnTax = {
  __typename?: 'OrderReturnTax';
  /** The amount of the money applied by the tax in the order. */
  appliedMoney?: Maybe<Money>;
  /** The tax's name. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The percentage of the tax, as a string representation of a decimal number. For example, a value of "7.25"
   * corresponds to a percentage of 7.25%."
   */
  percentage?: Maybe<Scalars['Decimal']['output']>;
  /**
   * The level at which the tax applies. For ORDER scoped taxes, Square generates references in appliedTaxes
   * on all order line items that do not have them. For LINE_ITEM scoped taxes, the tax will only apply to line items
   * with references in their appliedTaxes field.
   */
  scope?: Maybe<OrderLineItemTaxScope>;
  /** UID of the Tax from the Order which contains the original charge of this tax. */
  sourceUid?: Maybe<Scalars['UID']['output']>;
  /** The CatalogTax. */
  tax?: Maybe<CatalogTax>;
  /** The calculation method used to apply the tax. */
  type?: Maybe<OrderLineItemTaxType>;
  /** Unique ID. */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * A rounding adjustment of the money being returned.
 *
 * Commonly used to apply Cash Rounding when the minimum unit of account is smaller than the lowest physical denomination
 * of currency.
 *
 * Permissions:ORDERS_READ
 */
export type OrderRoundingAdjustment = {
  __typename?: 'OrderRoundingAdjustment';
  /** Actual rounding adjustment amount. */
  amount?: Maybe<Money>;
  /** The name of the rounding adjustment from the original sale Order. */
  name?: Maybe<Scalars['String']['output']>;
  /** Unique ID */
  uid?: Maybe<Scalars['UID']['output']>;
};

/**
 * A service charge applied to an order.
 *
 * Permissions:ORDERS_READ
 */
export type OrderServiceCharge = {
  __typename?: 'OrderServiceCharge';
  /**
   * The amount of a non-percentage based service charge.
   * Exactly one of percentage or amount_money should be set.
   */
  amount?: Maybe<Money>;
  /**
   * The amount of money applied to the order by the service charge, including any inclusive tax amounts, as calculated
   * by Square.
   *
   * - For fixed-amount service charges, appliedMoney is equal to amount.
   * - For percentage-based service charges, appliedMoney is the money calculated using the percentage.
   */
  appliedMoney?: Maybe<Money>;
  /**
   * The list of references to taxes applied to this service charge. Each OrderLineItemAppliedTax has a taxUid that
   * references the uid of a top-level OrderLineItemTax that is being applied to this service charge. On reads, the
   * amount applied is populated.
   *
   * An OrderLineItemAppliedTax will be automatically created on every taxable service charge for all ORDER scoped taxes
   * that are added to the order. OrderLineItemAppliedTax records for LINE_ITEM scoped taxes must be added in requests
   * for the tax to apply to any taxable service charge. Taxable service charges have the taxable field set to true and
   * calculated in the SUBTOTAL_PHASE.
   *
   * To change the amount of a tax, modify the referenced top-level tax.
   */
  appliedTaxes?: Maybe<Array<Maybe<OrderLineItemAppliedTax>>>;
  /** The calculation phase at which to apply the service charge. */
  calculationPhase?: Maybe<OrderServiceChargeCalculationPhase>;
  /** The metadata for the service charge. */
  metadata?: Maybe<Metadata>;
  /** The name of the service charge. */
  name?: Maybe<Scalars['String']['output']>;
  /**
   * The service charge percentage as a string representation of a decimal number. For example, "7.25" indicates a
   * service charge of 7.25%.
   *
   * Exactly one of percentage or amount_money should be set.
   */
  percentage?: Maybe<Scalars['Decimal']['output']>;
  /** The catalog object for the service charge. */
  serviceCharge?: Maybe<CatalogServiceCharge>;
  /**
   * Indicates whether the service charge can be taxed. If set to true, order-level taxes automatically apply to the
   * service charge. Note that service charges calculated in the TOTAL_PHASE cannot be marked as taxable."
   */
  taxable?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The total amount of money to collect for the service charge.
   *
   * Note: if an inclusive tax is applied to the service charge, totalMoney does not equal appliedMoney plus
   * totalTax since the inclusive tax amount will already be included in both appliedMoney and totalTax.
   */
  totalMoney?: Maybe<Money>;
  /** The total amount of tax money to collect for the service charge. */
  totalTax?: Maybe<Money>;
  /** Unique ID */
  uid?: Maybe<Scalars['UID']['output']>;
};

export enum OrderServiceChargeCalculationPhase {
  /** The service charge is calculated as a compounding adjustment after any discounts and percentage based apportioned service charges, but before any tax considerations. */
  ApportionedAmountPhase = 'APPORTIONED_AMOUNT_PHASE',
  /** The service charge is calculated as a compounding adjustment after any discounts, but before amount based apportioned service charges and any tax considerations. */
  ApportionedPercentagePhase = 'APPORTIONED_PERCENTAGE_PHASE',
  /** The service charge will be applied after discounts, but before taxes. */
  SubtotalPhase = 'SUBTOTAL_PHASE',
  /** The service charge will be applied after all discounts and taxes are applied. */
  TotalPhase = 'TOTAL_PHASE'
}

/**
 * Contains details necessary to fulfill a shipment order.
 *
 * Permissions:ORDERS_READ
 */
export type OrderShipment = {
  __typename?: 'OrderShipment';
  /** A description of why the shipment was canceled. */
  cancelReason?: Maybe<Scalars['String']['output']>;
  /** The timestamp indicating the shipment was canceled. */
  canceledAt?: Maybe<Scalars['DateTime']['output']>;
  /** The shipping carrier being used to ship this fulfillment. May be a carrier from ShipmentCarrier as well as others. */
  carrier?: Maybe<Scalars['String']['output']>;
  /** When the shipment is expected to be delivered to the shipping carrier. */
  expectedShippedAt?: Maybe<Scalars['DateTime']['output']>;
  /** When the shipment failed to be completed. */
  failedAt?: Maybe<Scalars['DateTime']['output']>;
  /** A description of why the shipment failed to be completed. */
  failureReason?: Maybe<Scalars['String']['output']>;
  /** When this fulfillment was moved to the RESERVED state. Indicates that preparation of this shipment has begun. */
  inProgressAt?: Maybe<Scalars['DateTime']['output']>;
  /** When this fulfillment was moved to the PREPARED state. Indicates that the fulfillment is packaged. */
  packagedAt?: Maybe<Scalars['DateTime']['output']>;
  /** When the shipment was requested. */
  placedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Information on the person meant to receive this shipment fulfillment. */
  recipient?: Maybe<OrderFulfillmentRecipient>;
  /**
   * When this fulfillment was moved to the COMPLETED state. Indicates that the fulfillment has been given to the
   * shipping carrier.
   */
  shippedAt?: Maybe<Scalars['DateTime']['output']>;
  /** A note with additional information for the shipping carrier. */
  shippingNote?: Maybe<Scalars['String']['output']>;
  /**
   * A description of the type of shipping product purchased from the carrier. May be a type from ShippingType as well
   * as others.
   */
  shippingType?: Maybe<Scalars['String']['output']>;
  /** The reference number provided by the carrier to track the shipment's progress. */
  trackingNumber?: Maybe<Scalars['String']['output']>;
  /** A link to the tracking webpage on the carrier's website. */
  trackingUrl?: Maybe<Scalars['Url']['output']>;
};

/**
 * Criteria to sort results by. The chronological order in which results are returned. Defaults to createdAt_DESC.
 *
 * When using a BasicDateTimeFilter, OrderSort must match the timestamp field that the BasicDateTimeFilter uses to filter. For example, If you set your sort_field to closedAt and you use a BasicDateTimeFilter,
 * your BasicDateTimeFilter must filter for orders by their closedAt date. If this field does not match the timestamp field in BasicDateTimeFilter, it will return an error.
 */
export enum OrderSort {
  ClosedAtAsc = 'closedAt_ASC',
  ClosedAtDesc = 'closedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/**
 * The origination details of an order.
 *
 * Permissions:ORDERS_READ
 */
export type OrderSource = {
  __typename?: 'OrderSource';
  /**
   * The name used to identify the place (physical or digital) that an order originates. If unset, the name defaults to
   * the name of the application that created the order.
   */
  name?: Maybe<Scalars['String']['output']>;
};

/** The state of the order. */
export enum OrderState {
  /** The order is canceled. Canceled orders are not paid. This is a terminal state. */
  Canceled = 'CANCELED',
  /** The order is completed. Completed orders are fully paid. This is a terminal state. */
  Completed = 'COMPLETED',
  /** Indicates that the order is in a draft state. Draft orders can be updated, but cannot be paid or fulfilled. */
  Draft = 'DRAFT',
  /** The order is open. Open orders may be updated. */
  Open = 'OPEN'
}

/** OrderStateFilter is used for filtering a query with OrderState */
export type OrderStateFilter = {
  /** Used for filtering a query with OrderState */
  equalToAnyOf?: InputMaybe<Array<OrderState>>;
};

/**
 * A tender (i.e., a method of payment) used in a Square transaction.
 *
 * Permissions:ORDERS_READ
 */
export type OrderTender = {
  /**
   * Additional recipients (other than the merchant) receiving a portion of this tender. For example, fees assessed on
   * the purchase by a third party integration.
   * @deprecated additionalRecipients have been deprecated
   */
  additionalRecipients?: Maybe<Array<Maybe<OrderTenderAdditionalRecipient>>>;
  /**
   * The total amount of the tender, including tip. If the tender has a Payment, the totalMoney of the
   * corresponding Payment will be equal to the amount of the tender.
   */
  amount?: Maybe<Money>;
  /** When the Tender was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Present if the tender is associated with a customer or is a customer's card on file. */
  customer?: Maybe<Customer>;
  /** The tender's unique ID. */
  id: Scalars['ID']['output'];
  /** The tender's associated location. */
  location?: Maybe<Location>;
  /** The Square-issued ID of the merchant. */
  merchantId: Scalars['ID']['output'];
  /** An optional note associated with the tender at the time of payment. */
  note?: Maybe<Scalars['String']['output']>;
  /**
   * The Payment that corresponds to this tender. This value is only present for payments created with the
   * V2 Payments API
   */
  payment?: Maybe<Payment>;
  /**
   * The amount of any Square processing fees applied to the tender.
   *
   * This field is not immediately populated when a new transaction is created. It is usually available after about
   * ten seconds.
   */
  processingFee?: Maybe<Money>;
  /** The tip's amount of the tender. */
  tip?: Maybe<Money>;
  /**
   * The ID of the tender's associated transaction.
   *
   * Transactions are not represented in graphql, and need to be retrieved through the REST API.
   */
  transactionId?: Maybe<Scalars['ID']['output']>;
  /** The type of tender, such as CARD or CASH. */
  type?: Maybe<OrderTenderType>;
};

/**
 * An additional recipient (other than the merchant) receiving a portion of this tender.
 *
 * Permissions:ORDERS_READ
 */
export type OrderTenderAdditionalRecipient = {
  __typename?: 'OrderTenderAdditionalRecipient';
  /** The amount of money distributed to the recipient. */
  amount?: Maybe<Money>;
  /** The description of the additional recipient. */
  description?: Maybe<Scalars['String']['output']>;
  /** The location for a recipient (other than the merchant) receiving a portion of this tender. */
  location?: Maybe<Location>;
  /** A monetary distribution of part of a Transaction's amount for Transactions which included additional recipients. */
  receivable?: Maybe<OrderTenderAdditionalRecipientReceivable>;
};

/**
 * A monetary distribution of part of a Transaction's amount for Transactions which included additional recipients.
 *
 * Permissions:ORDERS_READ
 */
export type OrderTenderAdditionalRecipientReceivable = {
  __typename?: 'OrderTenderAdditionalRecipientReceivable';
  /** The amount of the receivable. This will always be non-negative. */
  amount?: Maybe<Money>;
  /** The time when the additional recipient receivable was created */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The additional recipient receivable's unique ID, issued by Square payments servers. */
  id: Scalars['ID']['output'];
  /** Any refunds of the receivable that have been applied. */
  refunds?: Maybe<Array<Maybe<OrderTenderAdditionalRecipientReceivableRefund>>>;
  /** The ID of the transaction that the additional recipient receivable was applied to. */
  transactionId?: Maybe<Scalars['ID']['output']>;
  /** The location that created the receivable. This is the same as the location on the associated transaction. */
  transactionLocation?: Maybe<Location>;
};

/**
 * A refund of an AdditionalRecipientReceivable.
 *
 *
 * This includes the ID of the additional recipient receivable associated to this object, as well as a reference to the
 * Refund that created this receivable refund.
 *
 * Permissions:ORDERS_READ
 */
export type OrderTenderAdditionalRecipientReceivableRefund = {
  __typename?: 'OrderTenderAdditionalRecipientReceivableRefund';
  /** The amount of the refund. This will always be non-negative. */
  amount?: Maybe<Money>;
  /** The time when the refund was created. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The receivable refund's unique ID, issued by Square payments servers. */
  id: Scalars['ID']['output'];
  /** The receivable that the refund was applied to. */
  receivable?: Maybe<OrderTenderAdditionalRecipientReceivable>;
  /** The refund that is associated to this receivable refund. */
  refund?: Maybe<Refund>;
};

/** A tender's type. */
export enum OrderTenderType {
  /** An ACH payment. */
  BankTransfer = 'BANK_TRANSFER',
  /** A Buy Now Pay Later payment. */
  BuyNowPayLater = 'BUY_NOW_PAY_LATER',
  /** A credit card. */
  Card = 'CARD',
  /** Cash. */
  Cash = 'CASH',
  /**  event. */
  NoSale = 'NO_SALE',
  /** A form of tender that does not match any other value. */
  Other = 'OTHER',
  /** A Square gift card. */
  SquareGiftCard = 'SQUARE_GIFT_CARD',
  /**
   * A credit card processed with a card processor other than Square.
   *
   * This value applies only to merchants in countries where Square does not yet provide card processing.
   */
  ThirdPartyCard = 'THIRD_PARTY_CARD',
  /**
   * A payment from a digital wallet, e.g. Cash App.
   * Note: Some "digital wallets", including Google Pay and Apple Pay, facilitate card payments. Those payments have the CARD type.
   */
  Wallet = 'WALLET'
}

/** Provides information about the specific fetched page. This implements the PageInfo specification from the [Relay GraphQL Cursor Connections Specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo). */
export type PageInfo = {
  __typename?: 'PageInfo';
  /**
   * The `Cursor` of the last edge of the current page. This can be passed in the next query as
   * a `after` argument to paginate forwards.
   */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** Indicates if there is another page of results available after the current one. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates if there is another page of results available before the current one. */
  hasPreviousPage: Scalars['Boolean']['output'];
  /**
   * The `Cursor` of the first edge of the current page. This can be passed in the next query as
   * a `before` argument to paginate backwards.
   */
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};

/**
 * References to Payments subgraph entities
 *
 * Permissions:PAYMENTS_READ
 */
export type Payment = {
  __typename?: 'Payment';
  /**
   * The amount processed for this payment, not including `tipMoney`.
   *
   * The amount is specified in the smallest denomination of the applicable currency (for example,
   * US dollar amounts are specified in cents). For more information, see
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts).
   */
  amountMoney?: Maybe<Money>;
  /**
   * The amount the developer is taking as a fee for facilitating the payment on behalf
   * of the seller. This amount is specified in the smallest denomination of the applicable currency
   * (for example, US dollar amounts are specified in cents). For more information,
   * see [Take Payments and Collect Fees](https://developer.squareup.com/docs/payments-api/take-payments-and-collect-fees).
   *
   * The amount cannot be more than 90% of the `total_money` value.
   *
   * To set this field, `PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS` OAuth permission is required.
   * For more information, see [Permissions](https://developer.squareup.com/docs/payments-api/take-payments-and-collect-fees#permissions).
   */
  appFeeMoney?: Maybe<Money>;
  /** Details about the application that took the payment. */
  applicationDetails?: Maybe<PaymentApplicationDetails>;
  /** The initial amount of money approved for this payment. */
  approvedMoney?: Maybe<Money>;
  /** Details about a bank account payment. These details are only populated if the `sourceType` is `BANK_ACCOUNT`. */
  bankAccountDetails?: Maybe<BankAccountPaymentDetails>;
  /** The buyer's billing address. */
  billingAddress?: Maybe<Address>;
  /**
   * Details about a Buy Now Pay Later payment. The details are only populated
   * if the `source_type` is `BUY_NOW_PAY_LATER`. For more information, see
   * [Afterpay Payments](https://developer.squareup.com/docs/payments-api/take-payments/afterpay-payments).
   */
  buyNowPayLaterDetails?: Maybe<BuyNowPayLaterPaymentDetails>;
  /** The buyer's email address. */
  buyerEmailAddress?: Maybe<Scalars['String']['output']>;
  /** Actions that can be performed on this payment. */
  capabilities: Array<PaymentCapability>;
  /** Details about a card payment. These details are only populated if the `sourceType` is CARD. */
  cardDetails?: Maybe<CardPaymentDetails>;
  /** Details about a cash payment. These details are only populated if the `sourceType` is `CASH`. */
  cashDetails?: Maybe<CashPaymentDetails>;
  /** The timestamp of when the payment was created, in RFC 3339 format. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The [Customer](https://developer.squareup.com/reference/square/payments-api/list-payments#type-customer)
   * ID of the customer associated with the payment.
   */
  customerId?: Maybe<Scalars['ID']['output']>;
  /** The action to be applied to the payment when the `delay_duration` has elapsed. */
  delayAction?: Maybe<PaymentDelayAction>;
  /**
   * The duration of time after the payment's creation when Square automatically applies the
   * `delayAction` to the payment. This automatic `delayAction` applies only to payments that
   * don't reach a terminal state (COMPLETED, CANCELED, or FAILED) before the `delayDuration`
   * time period.
   *
   * This field is specified as a time duration, in RFC 3339 format.
   *
   * Notes:
   * This feature is only supported for card payments.
   *
   * Default:
   *
   *   - Card Present payments: "PT36H" (36 hours) from the creation time.
   *   - Card Not Present payments: "P7D" (7 days) from the creation time.
   */
  delayDuration?: Maybe<Scalars['Duration']['output']>;
  /**
   * The read-only timestamp of when the `delay_action` is automatically applied,
   * in RFC 3339 format.
   *
   * Note that this field is calculated by summing the payment's `delay_duration` and `created_at`
   * fields. The `created_at` field is generated by Square and might not exactly match the
   * time on your local machine.
   */
  delayedUntil?: Maybe<Scalars['DateTime']['output']>;
  /** Details about the device that took the payment. */
  deviceDetails?: Maybe<PaymentDeviceDetails>;
  /** Details about an external payment. The details are only populated if the `sourceType` is `EXTERNAL`. */
  externalDetails?: Maybe<ExternalPaymentDetails>;
  /** Unique ID for the payment. */
  id: Scalars['ID']['output'];
  /** The ID of the location associated with the payment. */
  locationId?: Maybe<Scalars['ID']['output']>;
  /** The ID of the merchant associated with the payment. */
  merchantId?: Maybe<Scalars['ID']['output']>;
  /** An optional note to include when creating a payment. */
  note?: Maybe<Scalars['String']['output']>;
  /** The ID of the order associated with the payment. */
  orderId?: Maybe<Scalars['ID']['output']>;
  /** The processing fees and fee adjustments assessed by Square for this payment. */
  processingFees: Array<PaymentProcessingFee>;
  /**
   * The payment's receipt number.
   * The field will be missing if a payment is canceled.
   */
  receiptNumber?: Maybe<Scalars['String']['output']>;
  /**
   * The URL for the payment's receipt.
   * The field is only populated for COMPLETED payments.
   */
  receiptUrl?: Maybe<Scalars['Url']['output']>;
  /** An optional ID that associates this payment with an entity in another system. */
  referenceId?: Maybe<Scalars['ID']['output']>;
  /**
   * The total amount of the payment refunded to date.
   *
   * This amount is specified in the smallest denomination of the applicable currency (for example,
   * US dollar amounts are specified in cents).
   */
  refundedMoney?: Maybe<Money>;
  /** The refunds for this payment. */
  refunds?: Maybe<PaymentRefundConnection>;
  /**
   * Provides information about the risk associated with this payment, as determined by Square.
   * This field will be present for payments to sellers that have opted in to receive risk
   * evaluations.
   */
  riskEvaluation?: Maybe<PaymentRiskEvaluation>;
  /** The buyer's shipping address. */
  shippingAddress?: Maybe<Address>;
  /**
   * The source type for the payment.
   *
   * For information about these payment source types,
   * see [Take Payments](https://developer.squareup.com/docs/payments-api/take-payments).
   */
  sourceType?: Maybe<PaymentSourceType>;
  /**
   * Additional payment information that gets added on the customer's card statement
   * as part of the statement description.
   *
   * Note that the `statementDescriptionIdentifier` may get truncated on the statement description
   * to fit the required information including the Square identifier (SQ *) and name of the
   * seller taking the payment.
   */
  statementDescriptionIdentifier?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the payment is APPROVED, PENDING, COMPLETED, CANCELED, or FAILED. */
  status?: Maybe<PaymentStatus>;
  /** An optional ID of the TeamMember associated with taking the payment. */
  teamMemberId?: Maybe<Scalars['ID']['output']>;
  /**
   * The amount designated as a tip.
   *
   * This amount is specified in the smallest denomination of the applicable currency (for example,
   * US dollar amounts are specified in cents). For more information, see
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts).
   */
  tipMoney?: Maybe<Money>;
  /**
   * The total amount for the payment, including `amountMoney` and `tipMoney`.
   *
   * This amount is specified in the smallest denomination of the applicable currency (for example,
   * US dollar amounts are specified in cents). For more information, see
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts).
   */
  totalMoney?: Maybe<Money>;
  /** The timestamp of when the payment was last updated, in RFC 3339 format. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Details about an wallet payment. The details are only populated if the `sourceType` is `WALLET`. */
  walletDetails?: Maybe<DigitalWalletPaymentDetails>;
};


/**
 * References to Payments subgraph entities
 *
 * Permissions:PAYMENTS_READ
 */
export type PaymentRefundsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PaymentRefundFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentRefundSortOrder>>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * Represents an application processing fee.
 */
export type PaymentAppProcessingFee = {
  __typename?: 'PaymentAppProcessingFee';
  /** The exact fee amount assessed based on the payment fee rate. */
  amountMoney?: Maybe<Money>;
  /** The timestamp of when the fee takes effect, in RFC 3339 format. */
  effectiveAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * The platform account token for this payment fee.
   * For a capture, this is the recipient of funds. For a refund, this is the source of funds.
   */
  partyAccountId?: Maybe<Scalars['ID']['output']>;
  /** The price selector IDs of the payment fee being applied. */
  priceSelectors: Array<Scalars['ID']['output']>;
  /** The type of payment fee being applied (for example, `THIRD_PARTY_PAYMENT_FEE` or `THIRD_PARTY_REFUND_FEE`). */
  type?: Maybe<PaymentAppProcessingFeeType>;
};

/**
 * Input type used to specify filters on `PaymentAppProcessingFee` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type PaymentAppProcessingFeeFilter = {
  /**
   * Used to filter on the `amountMoney` field:
   *
   * > The exact fee amount assessed based on the payment fee rate.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  amountMoney?: InputMaybe<MoneyFilter>;
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<PaymentAppProcessingFeeFilter>>;
  /**
   * Used to filter on the `effectiveAt` field:
   *
   * > The timestamp of when the fee takes effect, in RFC 3339 format.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  effectiveAt?: InputMaybe<DateTimeFilter>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<PaymentAppProcessingFeeFilter>;
  /**
   * Used to filter on the `partyAccountId` field:
   *
   * > The platform account token for this payment fee.
   * > For a capture, this is the recipient of funds. For a refund, this is the source of funds.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  partyAccountId?: InputMaybe<IdFilter>;
  /**
   * Used to filter on the `priceSelectors` field:
   *
   * > The price selector IDs of the payment fee being applied.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  priceSelectors?: InputMaybe<IdFilter>;
  /**
   * Used to filter on the `type` field:
   *
   * > The type of payment fee being applied (for example, `THIRD_PARTY_PAYMENT_FEE` or `THIRD_PARTY_REFUND_FEE`).
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  type?: InputMaybe<PaymentAppProcessingFeeTypeFilter>;
};

/** The type of payment fee being applied. */
export enum PaymentAppProcessingFeeType {
  ThirdPartyPaymentFee = 'THIRD_PARTY_PAYMENT_FEE',
  ThirdPartyRefundFee = 'THIRD_PARTY_REFUND_FEE'
}

/**
 * Input type used to specify filters on `PaymentAppProcessingFeeType` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type PaymentAppProcessingFeeTypeFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<PaymentAppProcessingFeeTypeFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<PaymentAppProcessingFeeType>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<PaymentAppProcessingFeeTypeFilter>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * Details about the application that took the payment.
 */
export type PaymentApplicationDetails = {
  __typename?: 'PaymentApplicationDetails';
  /**
   * The Square ID assigned to the application used to take the payment.
   * Application developers can use this information to identify payments that
   * their application processed.
   * For example, if a developer uses a custom application to process payments,
   * this field contains the application ID from the Developer Dashboard.
   * If a seller uses a [Square App Marketplace](https://developer.squareup.com/docs/app-marketplace)
   * application to process payments, the field contains the corresponding application ID.
   */
  applicationId?: Maybe<Scalars['ID']['output']>;
  /** The Square product, such as Square Point of Sale (POS), Square Invoices, or Square Virtual Terminal. */
  squareProduct?: Maybe<PaymentApplicationDetailsExternalSquareProduct>;
};

/** A list of products to return to external callers. */
export enum PaymentApplicationDetailsExternalSquareProduct {
  Appointments = 'APPOINTMENTS',
  EcommerceApi = 'ECOMMERCE_API',
  Invoices = 'INVOICES',
  OnlineStore = 'ONLINE_STORE',
  Other = 'OTHER',
  Restaurants = 'RESTAURANTS',
  Retail = 'RETAIL',
  SquarePos = 'SQUARE_POS',
  TerminalApi = 'TERMINAL_API',
  VirtualTerminal = 'VIRTUAL_TERMINAL'
}

/**
 * Input type used to specify filters on `PaymentApplicationDetailsExternalSquareProduct` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type PaymentApplicationDetailsExternalSquareProductFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<PaymentApplicationDetailsExternalSquareProductFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<PaymentApplicationDetailsExternalSquareProduct>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<PaymentApplicationDetailsExternalSquareProductFilter>;
};

/**
 * Input type used to specify filters on `PaymentApplicationDetails` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type PaymentApplicationDetailsFilter = {
  /**
   * Used to filter on the `applicationId` field:
   *
   * > The Square ID assigned to the application used to take the payment.
   * > Application developers can use this information to identify payments that
   * > their application processed.
   * > For example, if a developer uses a custom application to process payments,
   * > this field contains the application ID from the Developer Dashboard.
   * > If a seller uses a [Square App Marketplace](https://developer.squareup.com/docs/app-marketplace)
   * > application to process payments, the field contains the corresponding application ID.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  applicationId?: InputMaybe<IdFilter>;
  /**
   * Used to filter on the `squareProduct` field:
   *
   * > The Square product, such as Square Point of Sale (POS), Square Invoices, or Square Virtual Terminal.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  squareProduct?: InputMaybe<PaymentApplicationDetailsExternalSquareProductFilter>;
};

/** Actions that can be performed on a payment. */
export enum PaymentCapability {
  /** The payment amount can be edited down. */
  EditAmountDown = 'EDIT_AMOUNT_DOWN',
  /** The payment amount can be edited up. */
  EditAmountUp = 'EDIT_AMOUNT_UP',
  /** The delay action can be edited. */
  EditDelayAction = 'EDIT_DELAY_ACTION',
  /** The tip amount can be edited down. */
  EditTipAmountDown = 'EDIT_TIP_AMOUNT_DOWN',
  /** The tip amount can be edited up. */
  EditTipAmountUp = 'EDIT_TIP_AMOUNT_UP'
}

/**
 * Input type used to specify filters on `PaymentCapability` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type PaymentCapabilityFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<PaymentCapabilityFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<PaymentCapability>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<PaymentCapabilityFilter>;
};

/**
 * Represents a paginated collection of `Payment` results.
 *
 * See the [Relay GraphQL Cursor Connections
 * Specification](https://relay.dev/graphql/connections.htm#sec-Connection-Types) for more info.
 *
 * Permissions: PAYMENTS_READ.
 */
export type PaymentConnection = {
  __typename?: 'PaymentConnection';
  /** Wraps a specific `Payment` to pair it with its pagination cursor. */
  edges: Array<PaymentEdge>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
  /** The total number of edges available in this connection to paginate over. */
  totalEdgeCount: Scalars['JsonSafeLong']['output'];
};

/** The action to be applied to the payment when the `delayDuration` has elapsed. */
export enum PaymentDelayAction {
  Cancel = 'CANCEL',
  Complete = 'COMPLETE'
}

/**
 * Input type used to specify filters on `PaymentDelayAction` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type PaymentDelayActionFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<PaymentDelayActionFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<PaymentDelayAction>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<PaymentDelayActionFilter>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * Details about the device that took the payment.
 */
export type PaymentDeviceDetails = {
  __typename?: 'PaymentDeviceDetails';
  /** Square-issued ID of the device. */
  deviceId?: Maybe<Scalars['ID']['output']>;
  /** Square-issued installation ID for the device. */
  deviceInstallationId?: Maybe<Scalars['ID']['output']>;
  /** The name of the device set by the seller. */
  deviceName?: Maybe<Scalars['String']['output']>;
};

/**
 * Input type used to specify filters on `PaymentDeviceDetails` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type PaymentDeviceDetailsFilter = {
  /**
   * Used to filter on the `deviceId` field:
   *
   * > Square-issued ID of the device.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  deviceId?: InputMaybe<IdFilter>;
  /**
   * Used to filter on the `deviceInstallationId` field:
   *
   * > Square-issued installation ID for the device.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  deviceInstallationId?: InputMaybe<IdFilter>;
  /**
   * Used to filter on the `deviceName` field:
   *
   * > The name of the device set by the seller.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  deviceName?: InputMaybe<StringFilter>;
};

/**
 * Represents a specific `Payment` in the context of a `PaymentConnection`,
 * providing access to both the `Payment` and a pagination `Cursor`.
 *
 * See the [Relay GraphQL Cursor Connections
 * Specification](https://relay.dev/graphql/connections.htm#sec-Edge-Types) for more info.
 *
 * Permissions: PAYMENTS_READ.
 */
export type PaymentEdge = {
  __typename?: 'PaymentEdge';
  /**
   * The `Cursor` of this `Payment`. This can be passed in the next query as
   * a `before` or `after` argument to continue paginating from this `Payment`.
   */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Payment` of this edge. */
  node?: Maybe<Payment>;
};

/**
 * Input type used to specify filters on `Payment` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type PaymentFilter = {
  /**
   * Used to filter on the `amountMoney` field:
   *
   * > The amount processed for this payment, not including `tipMoney`.
   * >
   * > The amount is specified in the smallest denomination of the applicable currency (for example,
   * > US dollar amounts are specified in cents). For more information, see
   * > [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts).
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  amountMoney?: InputMaybe<MoneyFilter>;
  /**
   * Used to filter on the `appFeeMoney` field:
   *
   * > The amount the developer is taking as a fee for facilitating the payment on behalf
   * > of the seller. This amount is specified in the smallest denomination of the applicable currency
   * > (for example, US dollar amounts are specified in cents). For more information,
   * > see [Take Payments and Collect Fees](https://developer.squareup.com/docs/payments-api/take-payments-and-collect-fees).
   * >
   * > The amount cannot be more than 90% of the `total_money` value.
   * >
   * > To set this field, `PAYMENTS_WRITE_ADDITIONAL_RECIPIENTS` OAuth permission is required.
   * > For more information, see [Permissions](https://developer.squareup.com/docs/payments-api/take-payments-and-collect-fees#permissions).
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  appFeeMoney?: InputMaybe<MoneyFilter>;
  /**
   * Used to filter on the `applicationDetails` field:
   *
   * > Details about the application that took the payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  applicationDetails?: InputMaybe<PaymentApplicationDetailsFilter>;
  /**
   * Used to filter on the `approvedMoney` field:
   *
   * > The initial amount of money approved for this payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  approvedMoney?: InputMaybe<MoneyFilter>;
  /**
   * Used to filter on the `bankAccountDetails` field:
   *
   * > Details about a bank account payment. These details are only populated if the `sourceType` is `BANK_ACCOUNT`.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  bankAccountDetails?: InputMaybe<BankAccountPaymentDetailsFilter>;
  /**
   * Used to filter on the `billingAddress` field:
   *
   * > The buyer's billing address.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  billingAddress?: InputMaybe<AddressFilter>;
  /**
   * Used to filter on the `buyNowPayLaterDetails` field:
   *
   * > Details about a Buy Now Pay Later payment. The details are only populated
   * > if the `source_type` is `BUY_NOW_PAY_LATER`. For more information, see
   * > [Afterpay Payments](https://developer.squareup.com/docs/payments-api/take-payments/afterpay-payments).
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  buyNowPayLaterDetails?: InputMaybe<BuyNowPayLaterPaymentDetailsFilter>;
  /**
   * Used to filter on the `buyerEmailAddress` field:
   *
   * > The buyer's email address.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  buyerEmailAddress?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `capabilities` field:
   *
   * > Actions that can be performed on this payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  capabilities?: InputMaybe<PaymentCapabilityFilter>;
  /**
   * Used to filter on the `cardDetails` field:
   *
   * > Details about a card payment. These details are only populated if the `sourceType` is CARD.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  cardDetails?: InputMaybe<CardPaymentDetailsFilter>;
  /**
   * Used to filter on the `cashDetails` field:
   *
   * > Details about a cash payment. These details are only populated if the `sourceType` is `CASH`.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  cashDetails?: InputMaybe<CashPaymentDetailsFilter>;
  /**
   * Used to filter on the `createdAt` field:
   *
   * > The timestamp of when the payment was created, in RFC 3339 format.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  createdAt?: InputMaybe<DateTimeFilter>;
  /**
   * Used to filter on the `customerId` field:
   *
   * > The [Customer](https://developer.squareup.com/reference/square/payments-api/list-payments#type-customer)
   * > ID of the customer associated with the payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  customerId?: InputMaybe<IdFilter>;
  /**
   * Used to filter on the `delayAction` field:
   *
   * > The action to be applied to the payment when the `delay_duration` has elapsed.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  delayAction?: InputMaybe<PaymentDelayActionFilter>;
  /**
   * Used to filter on the `delayDuration` field:
   *
   * > The duration of time after the payment's creation when Square automatically applies the
   * > `delayAction` to the payment. This automatic `delayAction` applies only to payments that
   * > don't reach a terminal state (COMPLETED, CANCELED, or FAILED) before the `delayDuration`
   * > time period.
   * >
   * > This field is specified as a time duration, in RFC 3339 format.
   * >
   * > Notes:
   * > This feature is only supported for card payments.
   * >
   * > Default:
   * >
   * >   - Card Present payments: "PT36H" (36 hours) from the creation time.
   * >   - Card Not Present payments: "P7D" (7 days) from the creation time.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  delayDuration?: InputMaybe<DurationFilter>;
  /**
   * Used to filter on the `delayedUntil` field:
   *
   * > The read-only timestamp of when the `delay_action` is automatically applied,
   * > in RFC 3339 format.
   * >
   * > Note that this field is calculated by summing the payment's `delay_duration` and `created_at`
   * > fields. The `created_at` field is generated by Square and might not exactly match the
   * > time on your local machine.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  delayedUntil?: InputMaybe<DateTimeFilter>;
  /**
   * Used to filter on the `deviceDetails` field:
   *
   * > Details about the device that took the payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  deviceDetails?: InputMaybe<PaymentDeviceDetailsFilter>;
  /**
   * Used to filter on the `externalDetails` field:
   *
   * > Details about an external payment. The details are only populated if the `sourceType` is `EXTERNAL`.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  externalDetails?: InputMaybe<ExternalPaymentDetailsFilter>;
  /**
   * Used to filter on the `id` field:
   *
   * > Unique ID for the payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  id?: InputMaybe<IdFilter>;
  /**
   * Used to filter on the `locationId` field:
   *
   * > The ID of the location associated with the payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  locationId?: InputMaybe<IdFilter>;
  /**
   * Used to filter on the `merchantId` field:
   *
   * > The ID of the merchant associated with the payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  merchantId?: InputMaybe<IdFilter>;
  /**
   * Used to filter on the `note` field:
   *
   * > An optional note to include when creating a payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  note?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `orderId` field:
   *
   * > The ID of the order associated with the payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  orderId?: InputMaybe<IdFilter>;
  /**
   * Used to filter on the `receiptNumber` field:
   *
   * > The payment's receipt number.
   * > The field will be missing if a payment is canceled.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  receiptNumber?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `receiptUrl` field:
   *
   * > The URL for the payment's receipt.
   * > The field is only populated for COMPLETED payments.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  receiptUrl?: InputMaybe<UrlFilter>;
  /**
   * Used to filter on the `referenceId` field:
   *
   * > An optional ID that associates this payment with an entity in another system.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  referenceId?: InputMaybe<IdFilter>;
  /**
   * Used to filter on the `refundedMoney` field:
   *
   * > The total amount of the payment refunded to date.
   * >
   * > This amount is specified in the smallest denomination of the applicable currency (for example,
   * > US dollar amounts are specified in cents).
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  refundedMoney?: InputMaybe<MoneyFilter>;
  /**
   * Used to filter on the `riskEvaluation` field:
   *
   * > Provides information about the risk associated with this payment, as determined by Square.
   * > This field will be present for payments to sellers that have opted in to receive risk
   * > evaluations.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  riskEvaluation?: InputMaybe<PaymentRiskEvaluationFilter>;
  /**
   * Used to filter on the `shippingAddress` field:
   *
   * > The buyer's shipping address.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  shippingAddress?: InputMaybe<AddressFilter>;
  /**
   * Used to filter on the `sourceType` field:
   *
   * > The source type for the payment.
   * >
   * > For information about these payment source types,
   * > see [Take Payments](https://developer.squareup.com/docs/payments-api/take-payments).
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  sourceType?: InputMaybe<PaymentSourceTypeFilter>;
  /**
   * Used to filter on the `statementDescriptionIdentifier` field:
   *
   * > Additional payment information that gets added on the customer's card statement
   * > as part of the statement description.
   * >
   * > Note that the `statementDescriptionIdentifier` may get truncated on the statement description
   * > to fit the required information including the Square identifier (SQ *) and name of the
   * > seller taking the payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  statementDescriptionIdentifier?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `status` field:
   *
   * > Indicates whether the payment is APPROVED, PENDING, COMPLETED, CANCELED, or FAILED.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  status?: InputMaybe<PaymentStatusFilter>;
  /**
   * Used to filter on the `teamMemberId` field:
   *
   * > An optional ID of the TeamMember associated with taking the payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  teamMemberId?: InputMaybe<IdFilter>;
  /**
   * Used to filter on the `tipMoney` field:
   *
   * > The amount designated as a tip.
   * >
   * > This amount is specified in the smallest denomination of the applicable currency (for example,
   * > US dollar amounts are specified in cents). For more information, see
   * > [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts).
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  tipMoney?: InputMaybe<MoneyFilter>;
  /**
   * Used to filter on the `totalMoney` field:
   *
   * > The total amount for the payment, including `amountMoney` and `tipMoney`.
   * >
   * > This amount is specified in the smallest denomination of the applicable currency (for example,
   * > US dollar amounts are specified in cents). For more information, see
   * > [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts).
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  totalMoney?: InputMaybe<MoneyFilter>;
  /**
   * Used to filter on the `updatedAt` field:
   *
   * > The timestamp of when the payment was last updated, in RFC 3339 format.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  updatedAt?: InputMaybe<DateTimeFilter>;
  /**
   * Used to filter on the `walletDetails` field:
   *
   * > Details about an wallet payment. The details are only populated if the `sourceType` is `WALLET`.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  walletDetails?: InputMaybe<DigitalWalletPaymentDetailsFilter>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * Represents the Square processing fee.
 */
export type PaymentProcessingFee = {
  __typename?: 'PaymentProcessingFee';
  /**
   * The fee amount, which might be negative, that is assessed or adjusted by Square.
   *
   * Positive values represent funds being assessed, while negative values represent funds being returned.
   */
  amountMoney?: Maybe<Money>;
  /** The timestamp of when the fee takes effect, in RFC 3339 format. */
  effectiveAt?: Maybe<Scalars['String']['output']>;
  /** The type of fee assessed or adjusted. */
  type?: Maybe<PaymentProcessingFeeType>;
};

/**
 * Input type used to specify filters on `PaymentProcessingFee` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type PaymentProcessingFeeFilter = {
  /**
   * Used to filter on the `amountMoney` field:
   *
   * > The fee amount, which might be negative, that is assessed or adjusted by Square.
   * >
   * > Positive values represent funds being assessed, while negative values represent funds being returned.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  amountMoney?: InputMaybe<MoneyFilter>;
};

/** The type of fee assessed or adjusted. */
export enum PaymentProcessingFeeType {
  /** Type used for an adjustment to the initial processing fee. */
  Adjustment = 'ADJUSTMENT',
  /** Type used on the initial processing fee. */
  Initial = 'INITIAL'
}

/**
 * Permissions: PAYMENTS_READ
 *
 * Represents a refund of a payment made using Square. Contains information about
 * the original payment and the amount of money refunded.
 *
 *
 * For more performant queries on this type, please filter on `merchantId` if you can.
 */
export type PaymentRefund = {
  __typename?: 'PaymentRefund';
  /**
   * The amount of money refunded. This amount is specified in the smallest denomination
   * of the applicable currency (for example, US dollar amounts are specified in cents).
   */
  amountMoney?: Maybe<Money>;
  /**
   * The amount of money the application developer contributed to help cover the refunded amount.
   * This amount is specified in the smallest denomination of the applicable currency (for example,
   * US dollar amounts are specified in cents). For more information, see
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts).
   */
  appFeeMoney?: Maybe<Money>;
  /** The timestamp of when the refund was created, in RFC 3339 format. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The unique ID for this refund, generated by Square. */
  id: Scalars['ID']['output'];
  /** The location ID associated with the payment this refund is attached to. */
  locationId?: Maybe<Scalars['ID']['output']>;
  /** The merchant ID associated with the payment this refund is attached to. */
  merchantId?: Maybe<Scalars['ID']['output']>;
  /** The ID of the order associated with the refund. */
  orderId?: Maybe<Scalars['ID']['output']>;
  /** The payment this refund belongs to. */
  payment?: Maybe<Payment>;
  /** The ID of the payment associated with this refund. */
  paymentId?: Maybe<Scalars['ID']['output']>;
  /** Processing fees and fee adjustments assessed by Square for this refund. */
  processingFees: Array<PaymentProcessingFee>;
  /** The reason for the refund. */
  reason?: Maybe<Scalars['String']['output']>;
  /** The refund's status. */
  status?: Maybe<PaymentRefundStatus>;
  /** An optional ID of the team member associated with taking the payment. */
  teamMemberId?: Maybe<Scalars['ID']['output']>;
  /** The timestamp of when the refund was last updated, in RFC 3339 format. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/**
 * Represents a paginated collection of `PaymentRefund` results.
 *
 * See the [Relay GraphQL Cursor Connections
 * Specification](https://relay.dev/graphql/connections.htm#sec-Connection-Types) for more info.
 *
 * Permissions: PAYMENTS_READ.
 */
export type PaymentRefundConnection = {
  __typename?: 'PaymentRefundConnection';
  /** Wraps a specific `PaymentRefund` to pair it with its pagination cursor. */
  edges: Array<PaymentRefundEdge>;
  /** Provides pagination-related information. */
  pageInfo: PageInfo;
  /** The total number of edges available in this connection to paginate over. */
  totalEdgeCount: Scalars['JsonSafeLong']['output'];
};

/**
 * Represents a specific `PaymentRefund` in the context of a `PaymentRefundConnection`,
 * providing access to both the `PaymentRefund` and a pagination `Cursor`.
 *
 * See the [Relay GraphQL Cursor Connections
 * Specification](https://relay.dev/graphql/connections.htm#sec-Edge-Types) for more info.
 *
 * Permissions: PAYMENTS_READ.
 */
export type PaymentRefundEdge = {
  __typename?: 'PaymentRefundEdge';
  /**
   * The `Cursor` of this `PaymentRefund`. This can be passed in the next query as
   * a `before` or `after` argument to continue paginating from this `PaymentRefund`.
   */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `PaymentRefund` of this edge. */
  node?: Maybe<PaymentRefund>;
};

/**
 * Input type used to specify filters on `PaymentRefund` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type PaymentRefundFilter = {
  /**
   * Used to filter on the `amountMoney` field:
   *
   * > The amount of money refunded. This amount is specified in the smallest denomination
   * > of the applicable currency (for example, US dollar amounts are specified in cents).
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  amountMoney?: InputMaybe<MoneyFilter>;
  /**
   * Used to filter on the `appFeeMoney` field:
   *
   * > The amount of money the application developer contributed to help cover the refunded amount.
   * > This amount is specified in the smallest denomination of the applicable currency (for example,
   * > US dollar amounts are specified in cents). For more information, see
   * > [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts).
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  appFeeMoney?: InputMaybe<MoneyFilter>;
  /**
   * Used to filter on the `createdAt` field:
   *
   * > The timestamp of when the refund was created, in RFC 3339 format.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  createdAt?: InputMaybe<DateTimeFilter>;
  /**
   * Used to filter on the `id` field:
   *
   * > The unique ID for this refund, generated by Square.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  id?: InputMaybe<IdFilter>;
  /**
   * Used to filter on the `locationId` field:
   *
   * > The location ID associated with the payment this refund is attached to.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  locationId?: InputMaybe<IdFilter>;
  /**
   * Used to filter on the `merchantId` field:
   *
   * > The merchant ID associated with the payment this refund is attached to.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  merchantId?: InputMaybe<IdFilter>;
  /**
   * Used to filter on the `orderId` field:
   *
   * > The ID of the order associated with the refund.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  orderId?: InputMaybe<IdFilter>;
  /**
   * Used to filter on the `paymentId` field:
   *
   * > The ID of the payment associated with this refund.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentId?: InputMaybe<IdFilter>;
  /**
   * Used to filter on the `processingFees` field:
   *
   * > Processing fees and fee adjustments assessed by Square for this refund.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  processingFees?: InputMaybe<PaymentProcessingFeeFilter>;
  /**
   * Used to filter on the `reason` field:
   *
   * > The reason for the refund.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  reason?: InputMaybe<StringFilter>;
  /**
   * Used to filter on the `status` field:
   *
   * > The refund's status.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  status?: InputMaybe<PaymentRefundStatusFilter>;
  /**
   * Used to filter on the `teamMemberId` field:
   *
   * > An optional ID of the team member associated with taking the payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  teamMemberId?: InputMaybe<IdFilter>;
  /**
   * Used to filter on the `updatedAt` field:
   *
   * > The timestamp of when the refund was last updated, in RFC 3339 format.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  updatedAt?: InputMaybe<DateTimeFilter>;
};

/** Enumerates the ways `PaymentRefund`s can be sorted. */
export enum PaymentRefundSortOrder {
  /** Sorts ascending by the `amountMoney.amount` field. */
  AmountMoneyAmountAsc = 'amountMoney_amount_ASC',
  /** Sorts descending by the `amountMoney.amount` field. */
  AmountMoneyAmountDesc = 'amountMoney_amount_DESC',
  /** Sorts ascending by the `amountMoney.currency` field. */
  AmountMoneyCurrencyAsc = 'amountMoney_currency_ASC',
  /** Sorts descending by the `amountMoney.currency` field. */
  AmountMoneyCurrencyDesc = 'amountMoney_currency_DESC',
  /** Sorts ascending by the `appFeeMoney.amount` field. */
  AppFeeMoneyAmountAsc = 'appFeeMoney_amount_ASC',
  /** Sorts descending by the `appFeeMoney.amount` field. */
  AppFeeMoneyAmountDesc = 'appFeeMoney_amount_DESC',
  /** Sorts ascending by the `appFeeMoney.currency` field. */
  AppFeeMoneyCurrencyAsc = 'appFeeMoney_currency_ASC',
  /** Sorts descending by the `appFeeMoney.currency` field. */
  AppFeeMoneyCurrencyDesc = 'appFeeMoney_currency_DESC',
  /** Sorts ascending by the `createdAt` field. */
  CreatedAtAsc = 'createdAt_ASC',
  /** Sorts descending by the `createdAt` field. */
  CreatedAtDesc = 'createdAt_DESC',
  /** Sorts ascending by the `id` field. */
  IdAsc = 'id_ASC',
  /** Sorts descending by the `id` field. */
  IdDesc = 'id_DESC',
  /** Sorts ascending by the `locationId` field. */
  LocationIdAsc = 'locationId_ASC',
  /** Sorts descending by the `locationId` field. */
  LocationIdDesc = 'locationId_DESC',
  /** Sorts ascending by the `merchantId` field. */
  MerchantIdAsc = 'merchantId_ASC',
  /** Sorts descending by the `merchantId` field. */
  MerchantIdDesc = 'merchantId_DESC',
  /** Sorts ascending by the `orderId` field. */
  OrderIdAsc = 'orderId_ASC',
  /** Sorts descending by the `orderId` field. */
  OrderIdDesc = 'orderId_DESC',
  /** Sorts ascending by the `paymentId` field. */
  PaymentIdAsc = 'paymentId_ASC',
  /** Sorts descending by the `paymentId` field. */
  PaymentIdDesc = 'paymentId_DESC',
  /** Sorts ascending by the `reason` field. */
  ReasonAsc = 'reason_ASC',
  /** Sorts descending by the `reason` field. */
  ReasonDesc = 'reason_DESC',
  /** Sorts ascending by the `status` field. */
  StatusAsc = 'status_ASC',
  /** Sorts descending by the `status` field. */
  StatusDesc = 'status_DESC',
  /** Sorts ascending by the `teamMemberId` field. */
  TeamMemberIdAsc = 'teamMemberId_ASC',
  /** Sorts descending by the `teamMemberId` field. */
  TeamMemberIdDesc = 'teamMemberId_DESC',
  /** Sorts ascending by the `updatedAt` field. */
  UpdatedAtAsc = 'updatedAt_ASC',
  /** Sorts descending by the `updatedAt` field. */
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Indicates the current status of a `PaymentRefund` object. */
export enum PaymentRefundStatus {
  /** Successfully completed. */
  Completed = 'COMPLETED',
  /** An error occurred. */
  Failed = 'FAILED',
  /** Awaiting approval. */
  Pending = 'PENDING',
  /** The refund was rejected. */
  Rejected = 'REJECTED'
}

/**
 * Input type used to specify filters on `PaymentRefundStatus` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type PaymentRefundStatusFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<PaymentRefundStatusFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<PaymentRefundStatus>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<PaymentRefundStatusFilter>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * Represents fraud risk information for the associated payment.
 *
 * When you take a payment through Square's Payments API (using the `CreatePayment`
 * endpoint), Square evaluates it and assigns a risk level to the payment. Sellers
 * can use this information to determine the course of action (for example,
 * provide the goods/services or refund the payment).
 */
export type PaymentRiskEvaluation = {
  __typename?: 'PaymentRiskEvaluation';
  /** The timestamp when payment risk was evaluated, in RFC3339 format. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The risk level associated with the payment. */
  riskLevel?: Maybe<PaymentRiskEvaluationRiskLevel>;
};

/**
 * Input type used to specify filters on `PaymentRiskEvaluation` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type PaymentRiskEvaluationFilter = {
  /**
   * Used to filter on the `createdAt` field:
   *
   * > The timestamp when payment risk was evaluated, in RFC3339 format.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  createdAt?: InputMaybe<DateTimeFilter>;
  /**
   * Used to filter on the `riskLevel` field:
   *
   * > The risk level associated with the payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  riskLevel?: InputMaybe<PaymentRiskEvaluationRiskLevelFilter>;
};

/** Represents a risk level produced by evaluating a payment. */
export enum PaymentRiskEvaluationRiskLevel {
  /** Indicates significantly elevated risk level with the payment. */
  High = 'HIGH',
  /** Indicates elevated risk level associated with the payment. */
  Moderate = 'MODERATE',
  /** Indicates payment risk is within the normal range. */
  Normal = 'NORMAL',
  /** Indicates Square is still evaluating the payment. */
  Pending = 'PENDING'
}

/**
 * Input type used to specify filters on `PaymentRiskEvaluationRiskLevel` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type PaymentRiskEvaluationRiskLevelFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<PaymentRiskEvaluationRiskLevelFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<PaymentRiskEvaluationRiskLevel>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<PaymentRiskEvaluationRiskLevelFilter>;
};

/** Enumerates the ways `Payment`s can be sorted. */
export enum PaymentSortOrder {
  /** Sorts ascending by the `amountMoney.amount` field. */
  AmountMoneyAmountAsc = 'amountMoney_amount_ASC',
  /** Sorts descending by the `amountMoney.amount` field. */
  AmountMoneyAmountDesc = 'amountMoney_amount_DESC',
  /** Sorts ascending by the `amountMoney.currency` field. */
  AmountMoneyCurrencyAsc = 'amountMoney_currency_ASC',
  /** Sorts descending by the `amountMoney.currency` field. */
  AmountMoneyCurrencyDesc = 'amountMoney_currency_DESC',
  /** Sorts ascending by the `appFeeMoney.amount` field. */
  AppFeeMoneyAmountAsc = 'appFeeMoney_amount_ASC',
  /** Sorts descending by the `appFeeMoney.amount` field. */
  AppFeeMoneyAmountDesc = 'appFeeMoney_amount_DESC',
  /** Sorts ascending by the `appFeeMoney.currency` field. */
  AppFeeMoneyCurrencyAsc = 'appFeeMoney_currency_ASC',
  /** Sorts descending by the `appFeeMoney.currency` field. */
  AppFeeMoneyCurrencyDesc = 'appFeeMoney_currency_DESC',
  /** Sorts ascending by the `applicationDetails.applicationId` field. */
  ApplicationDetailsApplicationIdAsc = 'applicationDetails_applicationId_ASC',
  /** Sorts descending by the `applicationDetails.applicationId` field. */
  ApplicationDetailsApplicationIdDesc = 'applicationDetails_applicationId_DESC',
  /** Sorts ascending by the `applicationDetails.squareProduct` field. */
  ApplicationDetailsSquareProductAsc = 'applicationDetails_squareProduct_ASC',
  /** Sorts descending by the `applicationDetails.squareProduct` field. */
  ApplicationDetailsSquareProductDesc = 'applicationDetails_squareProduct_DESC',
  /** Sorts ascending by the `approvedMoney.amount` field. */
  ApprovedMoneyAmountAsc = 'approvedMoney_amount_ASC',
  /** Sorts descending by the `approvedMoney.amount` field. */
  ApprovedMoneyAmountDesc = 'approvedMoney_amount_DESC',
  /** Sorts ascending by the `approvedMoney.currency` field. */
  ApprovedMoneyCurrencyAsc = 'approvedMoney_currency_ASC',
  /** Sorts descending by the `approvedMoney.currency` field. */
  ApprovedMoneyCurrencyDesc = 'approvedMoney_currency_DESC',
  /** Sorts ascending by the `bankAccountDetails.accountOwnershipType` field. */
  BankAccountDetailsAccountOwnershipTypeAsc = 'bankAccountDetails_accountOwnershipType_ASC',
  /** Sorts descending by the `bankAccountDetails.accountOwnershipType` field. */
  BankAccountDetailsAccountOwnershipTypeDesc = 'bankAccountDetails_accountOwnershipType_DESC',
  /** Sorts ascending by the `bankAccountDetails.bankName` field. */
  BankAccountDetailsBankNameAsc = 'bankAccountDetails_bankName_ASC',
  /** Sorts descending by the `bankAccountDetails.bankName` field. */
  BankAccountDetailsBankNameDesc = 'bankAccountDetails_bankName_DESC',
  /** Sorts ascending by the `bankAccountDetails.country` field. */
  BankAccountDetailsCountryAsc = 'bankAccountDetails_country_ASC',
  /** Sorts descending by the `bankAccountDetails.country` field. */
  BankAccountDetailsCountryDesc = 'bankAccountDetails_country_DESC',
  /** Sorts ascending by the `bankAccountDetails.fingerprint` field. */
  BankAccountDetailsFingerprintAsc = 'bankAccountDetails_fingerprint_ASC',
  /** Sorts descending by the `bankAccountDetails.fingerprint` field. */
  BankAccountDetailsFingerprintDesc = 'bankAccountDetails_fingerprint_DESC',
  /** Sorts ascending by the `bankAccountDetails.statementDescription` field. */
  BankAccountDetailsStatementDescriptionAsc = 'bankAccountDetails_statementDescription_ASC',
  /** Sorts descending by the `bankAccountDetails.statementDescription` field. */
  BankAccountDetailsStatementDescriptionDesc = 'bankAccountDetails_statementDescription_DESC',
  /** Sorts ascending by the `bankAccountDetails.transferType` field. */
  BankAccountDetailsTransferTypeAsc = 'bankAccountDetails_transferType_ASC',
  /** Sorts descending by the `bankAccountDetails.transferType` field. */
  BankAccountDetailsTransferTypeDesc = 'bankAccountDetails_transferType_DESC',
  /** Sorts ascending by the `buyNowPayLaterDetails.afterpayDetails.emailAddress` field. */
  BuyNowPayLaterDetailsAfterpayDetailsEmailAddressAsc = 'buyNowPayLaterDetails_afterpayDetails_emailAddress_ASC',
  /** Sorts descending by the `buyNowPayLaterDetails.afterpayDetails.emailAddress` field. */
  BuyNowPayLaterDetailsAfterpayDetailsEmailAddressDesc = 'buyNowPayLaterDetails_afterpayDetails_emailAddress_DESC',
  /** Sorts ascending by the `buyNowPayLaterDetails.brand` field. */
  BuyNowPayLaterDetailsBrandAsc = 'buyNowPayLaterDetails_brand_ASC',
  /** Sorts descending by the `buyNowPayLaterDetails.brand` field. */
  BuyNowPayLaterDetailsBrandDesc = 'buyNowPayLaterDetails_brand_DESC',
  /** Sorts ascending by the `buyNowPayLaterDetails.clearpayDetails.emailAddress` field. */
  BuyNowPayLaterDetailsClearpayDetailsEmailAddressAsc = 'buyNowPayLaterDetails_clearpayDetails_emailAddress_ASC',
  /** Sorts descending by the `buyNowPayLaterDetails.clearpayDetails.emailAddress` field. */
  BuyNowPayLaterDetailsClearpayDetailsEmailAddressDesc = 'buyNowPayLaterDetails_clearpayDetails_emailAddress_DESC',
  /** Sorts ascending by the `buyerEmailAddress` field. */
  BuyerEmailAddressAsc = 'buyerEmailAddress_ASC',
  /** Sorts descending by the `buyerEmailAddress` field. */
  BuyerEmailAddressDesc = 'buyerEmailAddress_DESC',
  /** Sorts ascending by the `cardDetails.applicationCryptogram` field. */
  CardDetailsApplicationCryptogramAsc = 'cardDetails_applicationCryptogram_ASC',
  /** Sorts descending by the `cardDetails.applicationCryptogram` field. */
  CardDetailsApplicationCryptogramDesc = 'cardDetails_applicationCryptogram_DESC',
  /** Sorts ascending by the `cardDetails.applicationIdentifier` field. */
  CardDetailsApplicationIdentifierAsc = 'cardDetails_applicationIdentifier_ASC',
  /** Sorts descending by the `cardDetails.applicationIdentifier` field. */
  CardDetailsApplicationIdentifierDesc = 'cardDetails_applicationIdentifier_DESC',
  /** Sorts ascending by the `cardDetails.applicationName` field. */
  CardDetailsApplicationNameAsc = 'cardDetails_applicationName_ASC',
  /** Sorts descending by the `cardDetails.applicationName` field. */
  CardDetailsApplicationNameDesc = 'cardDetails_applicationName_DESC',
  /** Sorts ascending by the `cardDetails.authResultCode` field. */
  CardDetailsAuthResultCodeAsc = 'cardDetails_authResultCode_ASC',
  /** Sorts descending by the `cardDetails.authResultCode` field. */
  CardDetailsAuthResultCodeDesc = 'cardDetails_authResultCode_DESC',
  /** Sorts ascending by the `cardDetails.avsStatus` field. */
  CardDetailsAvsStatusAsc = 'cardDetails_avsStatus_ASC',
  /** Sorts descending by the `cardDetails.avsStatus` field. */
  CardDetailsAvsStatusDesc = 'cardDetails_avsStatus_DESC',
  /** Sorts ascending by the `cardDetails.cardPaymentTimeline.authorizedAt` field. */
  CardDetailsCardPaymentTimelineAuthorizedAtAsc = 'cardDetails_cardPaymentTimeline_authorizedAt_ASC',
  /** Sorts descending by the `cardDetails.cardPaymentTimeline.authorizedAt` field. */
  CardDetailsCardPaymentTimelineAuthorizedAtDesc = 'cardDetails_cardPaymentTimeline_authorizedAt_DESC',
  /** Sorts ascending by the `cardDetails.cardPaymentTimeline.capturedAt` field. */
  CardDetailsCardPaymentTimelineCapturedAtAsc = 'cardDetails_cardPaymentTimeline_capturedAt_ASC',
  /** Sorts descending by the `cardDetails.cardPaymentTimeline.capturedAt` field. */
  CardDetailsCardPaymentTimelineCapturedAtDesc = 'cardDetails_cardPaymentTimeline_capturedAt_DESC',
  /** Sorts ascending by the `cardDetails.cardPaymentTimeline.voidedAt` field. */
  CardDetailsCardPaymentTimelineVoidedAtAsc = 'cardDetails_cardPaymentTimeline_voidedAt_ASC',
  /** Sorts descending by the `cardDetails.cardPaymentTimeline.voidedAt` field. */
  CardDetailsCardPaymentTimelineVoidedAtDesc = 'cardDetails_cardPaymentTimeline_voidedAt_DESC',
  /** Sorts ascending by the `cardDetails.card.bin` field. */
  CardDetailsCardBinAsc = 'cardDetails_card_bin_ASC',
  /** Sorts descending by the `cardDetails.card.bin` field. */
  CardDetailsCardBinDesc = 'cardDetails_card_bin_DESC',
  /** Sorts ascending by the `cardDetails.card.cardBrand` field. */
  CardDetailsCardCardBrandAsc = 'cardDetails_card_cardBrand_ASC',
  /** Sorts descending by the `cardDetails.card.cardBrand` field. */
  CardDetailsCardCardBrandDesc = 'cardDetails_card_cardBrand_DESC',
  /** Sorts ascending by the `cardDetails.card.cardCoBrand` field. */
  CardDetailsCardCardCoBrandAsc = 'cardDetails_card_cardCoBrand_ASC',
  /** Sorts descending by the `cardDetails.card.cardCoBrand` field. */
  CardDetailsCardCardCoBrandDesc = 'cardDetails_card_cardCoBrand_DESC',
  /** Sorts ascending by the `cardDetails.card.cardType` field. */
  CardDetailsCardCardTypeAsc = 'cardDetails_card_cardType_ASC',
  /** Sorts descending by the `cardDetails.card.cardType` field. */
  CardDetailsCardCardTypeDesc = 'cardDetails_card_cardType_DESC',
  /** Sorts ascending by the `cardDetails.card.cardholderName` field. */
  CardDetailsCardCardholderNameAsc = 'cardDetails_card_cardholderName_ASC',
  /** Sorts descending by the `cardDetails.card.cardholderName` field. */
  CardDetailsCardCardholderNameDesc = 'cardDetails_card_cardholderName_DESC',
  /** Sorts ascending by the `cardDetails.card.expMonth` field. */
  CardDetailsCardExpMonthAsc = 'cardDetails_card_expMonth_ASC',
  /** Sorts descending by the `cardDetails.card.expMonth` field. */
  CardDetailsCardExpMonthDesc = 'cardDetails_card_expMonth_DESC',
  /** Sorts ascending by the `cardDetails.card.expYear` field. */
  CardDetailsCardExpYearAsc = 'cardDetails_card_expYear_ASC',
  /** Sorts descending by the `cardDetails.card.expYear` field. */
  CardDetailsCardExpYearDesc = 'cardDetails_card_expYear_DESC',
  /** Sorts ascending by the `cardDetails.card.fingerprint` field. */
  CardDetailsCardFingerprintAsc = 'cardDetails_card_fingerprint_ASC',
  /** Sorts descending by the `cardDetails.card.fingerprint` field. */
  CardDetailsCardFingerprintDesc = 'cardDetails_card_fingerprint_DESC',
  /** Sorts ascending by the `cardDetails.card.last4` field. */
  CardDetailsCardLast4Asc = 'cardDetails_card_last4_ASC',
  /** Sorts descending by the `cardDetails.card.last4` field. */
  CardDetailsCardLast4Desc = 'cardDetails_card_last4_DESC',
  /** Sorts ascending by the `cardDetails.card.prepaidType` field. */
  CardDetailsCardPrepaidTypeAsc = 'cardDetails_card_prepaidType_ASC',
  /** Sorts descending by the `cardDetails.card.prepaidType` field. */
  CardDetailsCardPrepaidTypeDesc = 'cardDetails_card_prepaidType_DESC',
  /** Sorts ascending by the `cardDetails.cvvStatus` field. */
  CardDetailsCvvStatusAsc = 'cardDetails_cvvStatus_ASC',
  /** Sorts descending by the `cardDetails.cvvStatus` field. */
  CardDetailsCvvStatusDesc = 'cardDetails_cvvStatus_DESC',
  /** Sorts ascending by the `cardDetails.entryMethod` field. */
  CardDetailsEntryMethodAsc = 'cardDetails_entryMethod_ASC',
  /** Sorts descending by the `cardDetails.entryMethod` field. */
  CardDetailsEntryMethodDesc = 'cardDetails_entryMethod_DESC',
  /** Sorts ascending by the `cardDetails.statementDescription` field. */
  CardDetailsStatementDescriptionAsc = 'cardDetails_statementDescription_ASC',
  /** Sorts descending by the `cardDetails.statementDescription` field. */
  CardDetailsStatementDescriptionDesc = 'cardDetails_statementDescription_DESC',
  /** Sorts ascending by the `cardDetails.status` field. */
  CardDetailsStatusAsc = 'cardDetails_status_ASC',
  /** Sorts descending by the `cardDetails.status` field. */
  CardDetailsStatusDesc = 'cardDetails_status_DESC',
  /** Sorts ascending by the `cardDetails.verificationMethod` field. */
  CardDetailsVerificationMethodAsc = 'cardDetails_verificationMethod_ASC',
  /** Sorts descending by the `cardDetails.verificationMethod` field. */
  CardDetailsVerificationMethodDesc = 'cardDetails_verificationMethod_DESC',
  /** Sorts ascending by the `cardDetails.verificationResults` field. */
  CardDetailsVerificationResultsAsc = 'cardDetails_verificationResults_ASC',
  /** Sorts descending by the `cardDetails.verificationResults` field. */
  CardDetailsVerificationResultsDesc = 'cardDetails_verificationResults_DESC',
  /** Sorts ascending by the `cashDetails.buyerSuppliedMoney.amount` field. */
  CashDetailsBuyerSuppliedMoneyAmountAsc = 'cashDetails_buyerSuppliedMoney_amount_ASC',
  /** Sorts descending by the `cashDetails.buyerSuppliedMoney.amount` field. */
  CashDetailsBuyerSuppliedMoneyAmountDesc = 'cashDetails_buyerSuppliedMoney_amount_DESC',
  /** Sorts ascending by the `cashDetails.buyerSuppliedMoney.currency` field. */
  CashDetailsBuyerSuppliedMoneyCurrencyAsc = 'cashDetails_buyerSuppliedMoney_currency_ASC',
  /** Sorts descending by the `cashDetails.buyerSuppliedMoney.currency` field. */
  CashDetailsBuyerSuppliedMoneyCurrencyDesc = 'cashDetails_buyerSuppliedMoney_currency_DESC',
  /** Sorts ascending by the `cashDetails.changeBackMoney.amount` field. */
  CashDetailsChangeBackMoneyAmountAsc = 'cashDetails_changeBackMoney_amount_ASC',
  /** Sorts descending by the `cashDetails.changeBackMoney.amount` field. */
  CashDetailsChangeBackMoneyAmountDesc = 'cashDetails_changeBackMoney_amount_DESC',
  /** Sorts ascending by the `cashDetails.changeBackMoney.currency` field. */
  CashDetailsChangeBackMoneyCurrencyAsc = 'cashDetails_changeBackMoney_currency_ASC',
  /** Sorts descending by the `cashDetails.changeBackMoney.currency` field. */
  CashDetailsChangeBackMoneyCurrencyDesc = 'cashDetails_changeBackMoney_currency_DESC',
  /** Sorts ascending by the `createdAt` field. */
  CreatedAtAsc = 'createdAt_ASC',
  /** Sorts descending by the `createdAt` field. */
  CreatedAtDesc = 'createdAt_DESC',
  /** Sorts ascending by the `customerId` field. */
  CustomerIdAsc = 'customerId_ASC',
  /** Sorts descending by the `customerId` field. */
  CustomerIdDesc = 'customerId_DESC',
  /** Sorts ascending by the `delayAction` field. */
  DelayActionAsc = 'delayAction_ASC',
  /** Sorts descending by the `delayAction` field. */
  DelayActionDesc = 'delayAction_DESC',
  /** Sorts ascending by the `delayDuration` field. */
  DelayDurationAsc = 'delayDuration_ASC',
  /** Sorts descending by the `delayDuration` field. */
  DelayDurationDesc = 'delayDuration_DESC',
  /** Sorts ascending by the `delayedUntil` field. */
  DelayedUntilAsc = 'delayedUntil_ASC',
  /** Sorts descending by the `delayedUntil` field. */
  DelayedUntilDesc = 'delayedUntil_DESC',
  /** Sorts ascending by the `deviceDetails.deviceId` field. */
  DeviceDetailsDeviceIdAsc = 'deviceDetails_deviceId_ASC',
  /** Sorts descending by the `deviceDetails.deviceId` field. */
  DeviceDetailsDeviceIdDesc = 'deviceDetails_deviceId_DESC',
  /** Sorts ascending by the `deviceDetails.deviceInstallationId` field. */
  DeviceDetailsDeviceInstallationIdAsc = 'deviceDetails_deviceInstallationId_ASC',
  /** Sorts descending by the `deviceDetails.deviceInstallationId` field. */
  DeviceDetailsDeviceInstallationIdDesc = 'deviceDetails_deviceInstallationId_DESC',
  /** Sorts ascending by the `deviceDetails.deviceName` field. */
  DeviceDetailsDeviceNameAsc = 'deviceDetails_deviceName_ASC',
  /** Sorts descending by the `deviceDetails.deviceName` field. */
  DeviceDetailsDeviceNameDesc = 'deviceDetails_deviceName_DESC',
  /** Sorts ascending by the `externalDetails.sourceFeeMoney.amount` field. */
  ExternalDetailsSourceFeeMoneyAmountAsc = 'externalDetails_sourceFeeMoney_amount_ASC',
  /** Sorts descending by the `externalDetails.sourceFeeMoney.amount` field. */
  ExternalDetailsSourceFeeMoneyAmountDesc = 'externalDetails_sourceFeeMoney_amount_DESC',
  /** Sorts ascending by the `externalDetails.sourceFeeMoney.currency` field. */
  ExternalDetailsSourceFeeMoneyCurrencyAsc = 'externalDetails_sourceFeeMoney_currency_ASC',
  /** Sorts descending by the `externalDetails.sourceFeeMoney.currency` field. */
  ExternalDetailsSourceFeeMoneyCurrencyDesc = 'externalDetails_sourceFeeMoney_currency_DESC',
  /** Sorts ascending by the `externalDetails.sourceId` field. */
  ExternalDetailsSourceIdAsc = 'externalDetails_sourceId_ASC',
  /** Sorts descending by the `externalDetails.sourceId` field. */
  ExternalDetailsSourceIdDesc = 'externalDetails_sourceId_DESC',
  /** Sorts ascending by the `externalDetails.source` field. */
  ExternalDetailsSourceAsc = 'externalDetails_source_ASC',
  /** Sorts descending by the `externalDetails.source` field. */
  ExternalDetailsSourceDesc = 'externalDetails_source_DESC',
  /** Sorts ascending by the `externalDetails.type` field. */
  ExternalDetailsTypeAsc = 'externalDetails_type_ASC',
  /** Sorts descending by the `externalDetails.type` field. */
  ExternalDetailsTypeDesc = 'externalDetails_type_DESC',
  /** Sorts ascending by the `id` field. */
  IdAsc = 'id_ASC',
  /** Sorts descending by the `id` field. */
  IdDesc = 'id_DESC',
  /** Sorts ascending by the `locationId` field. */
  LocationIdAsc = 'locationId_ASC',
  /** Sorts descending by the `locationId` field. */
  LocationIdDesc = 'locationId_DESC',
  /** Sorts ascending by the `merchantId` field. */
  MerchantIdAsc = 'merchantId_ASC',
  /** Sorts descending by the `merchantId` field. */
  MerchantIdDesc = 'merchantId_DESC',
  /** Sorts ascending by the `note` field. */
  NoteAsc = 'note_ASC',
  /** Sorts descending by the `note` field. */
  NoteDesc = 'note_DESC',
  /** Sorts ascending by the `orderId` field. */
  OrderIdAsc = 'orderId_ASC',
  /** Sorts descending by the `orderId` field. */
  OrderIdDesc = 'orderId_DESC',
  /** Sorts ascending by the `receiptNumber` field. */
  ReceiptNumberAsc = 'receiptNumber_ASC',
  /** Sorts descending by the `receiptNumber` field. */
  ReceiptNumberDesc = 'receiptNumber_DESC',
  /** Sorts ascending by the `receiptUrl` field. */
  ReceiptUrlAsc = 'receiptUrl_ASC',
  /** Sorts descending by the `receiptUrl` field. */
  ReceiptUrlDesc = 'receiptUrl_DESC',
  /** Sorts ascending by the `referenceId` field. */
  ReferenceIdAsc = 'referenceId_ASC',
  /** Sorts descending by the `referenceId` field. */
  ReferenceIdDesc = 'referenceId_DESC',
  /** Sorts ascending by the `refundedMoney.amount` field. */
  RefundedMoneyAmountAsc = 'refundedMoney_amount_ASC',
  /** Sorts descending by the `refundedMoney.amount` field. */
  RefundedMoneyAmountDesc = 'refundedMoney_amount_DESC',
  /** Sorts ascending by the `refundedMoney.currency` field. */
  RefundedMoneyCurrencyAsc = 'refundedMoney_currency_ASC',
  /** Sorts descending by the `refundedMoney.currency` field. */
  RefundedMoneyCurrencyDesc = 'refundedMoney_currency_DESC',
  /** Sorts ascending by the `riskEvaluation.createdAt` field. */
  RiskEvaluationCreatedAtAsc = 'riskEvaluation_createdAt_ASC',
  /** Sorts descending by the `riskEvaluation.createdAt` field. */
  RiskEvaluationCreatedAtDesc = 'riskEvaluation_createdAt_DESC',
  /** Sorts ascending by the `riskEvaluation.riskLevel` field. */
  RiskEvaluationRiskLevelAsc = 'riskEvaluation_riskLevel_ASC',
  /** Sorts descending by the `riskEvaluation.riskLevel` field. */
  RiskEvaluationRiskLevelDesc = 'riskEvaluation_riskLevel_DESC',
  /** Sorts ascending by the `sourceType` field. */
  SourceTypeAsc = 'sourceType_ASC',
  /** Sorts descending by the `sourceType` field. */
  SourceTypeDesc = 'sourceType_DESC',
  /** Sorts ascending by the `statementDescriptionIdentifier` field. */
  StatementDescriptionIdentifierAsc = 'statementDescriptionIdentifier_ASC',
  /** Sorts descending by the `statementDescriptionIdentifier` field. */
  StatementDescriptionIdentifierDesc = 'statementDescriptionIdentifier_DESC',
  /** Sorts ascending by the `status` field. */
  StatusAsc = 'status_ASC',
  /** Sorts descending by the `status` field. */
  StatusDesc = 'status_DESC',
  /** Sorts ascending by the `teamMemberId` field. */
  TeamMemberIdAsc = 'teamMemberId_ASC',
  /** Sorts descending by the `teamMemberId` field. */
  TeamMemberIdDesc = 'teamMemberId_DESC',
  /** Sorts ascending by the `tipMoney.amount` field. */
  TipMoneyAmountAsc = 'tipMoney_amount_ASC',
  /** Sorts descending by the `tipMoney.amount` field. */
  TipMoneyAmountDesc = 'tipMoney_amount_DESC',
  /** Sorts ascending by the `tipMoney.currency` field. */
  TipMoneyCurrencyAsc = 'tipMoney_currency_ASC',
  /** Sorts descending by the `tipMoney.currency` field. */
  TipMoneyCurrencyDesc = 'tipMoney_currency_DESC',
  /** Sorts ascending by the `totalMoney.amount` field. */
  TotalMoneyAmountAsc = 'totalMoney_amount_ASC',
  /** Sorts descending by the `totalMoney.amount` field. */
  TotalMoneyAmountDesc = 'totalMoney_amount_DESC',
  /** Sorts ascending by the `totalMoney.currency` field. */
  TotalMoneyCurrencyAsc = 'totalMoney_currency_ASC',
  /** Sorts descending by the `totalMoney.currency` field. */
  TotalMoneyCurrencyDesc = 'totalMoney_currency_DESC',
  /** Sorts ascending by the `updatedAt` field. */
  UpdatedAtAsc = 'updatedAt_ASC',
  /** Sorts descending by the `updatedAt` field. */
  UpdatedAtDesc = 'updatedAt_DESC',
  /** Sorts ascending by the `walletDetails.brand` field. */
  WalletDetailsBrandAsc = 'walletDetails_brand_ASC',
  /** Sorts descending by the `walletDetails.brand` field. */
  WalletDetailsBrandDesc = 'walletDetails_brand_DESC',
  /** Sorts ascending by the `walletDetails.cashAppDetails.buyerCashtag` field. */
  WalletDetailsCashAppDetailsBuyerCashtagAsc = 'walletDetails_cashAppDetails_buyerCashtag_ASC',
  /** Sorts descending by the `walletDetails.cashAppDetails.buyerCashtag` field. */
  WalletDetailsCashAppDetailsBuyerCashtagDesc = 'walletDetails_cashAppDetails_buyerCashtag_DESC',
  /** Sorts ascending by the `walletDetails.cashAppDetails.buyerCountryCode` field. */
  WalletDetailsCashAppDetailsBuyerCountryCodeAsc = 'walletDetails_cashAppDetails_buyerCountryCode_ASC',
  /** Sorts descending by the `walletDetails.cashAppDetails.buyerCountryCode` field. */
  WalletDetailsCashAppDetailsBuyerCountryCodeDesc = 'walletDetails_cashAppDetails_buyerCountryCode_DESC',
  /** Sorts ascending by the `walletDetails.cashAppDetails.buyerFullName` field. */
  WalletDetailsCashAppDetailsBuyerFullNameAsc = 'walletDetails_cashAppDetails_buyerFullName_ASC',
  /** Sorts descending by the `walletDetails.cashAppDetails.buyerFullName` field. */
  WalletDetailsCashAppDetailsBuyerFullNameDesc = 'walletDetails_cashAppDetails_buyerFullName_DESC',
  /** Sorts ascending by the `walletDetails.status` field. */
  WalletDetailsStatusAsc = 'walletDetails_status_ASC',
  /** Sorts descending by the `walletDetails.status` field. */
  WalletDetailsStatusDesc = 'walletDetails_status_DESC'
}

/**
 * The source type for a payment.
 *
 * For information about these payment source types,
 * see [Take Payments](https://developer.squareup.com/docs/payments-api/take-payments).
 */
export enum PaymentSourceType {
  BankAccount = 'BANK_ACCOUNT',
  BuyNowPayLater = 'BUY_NOW_PAY_LATER',
  Card = 'CARD',
  Cash = 'CASH',
  External = 'EXTERNAL',
  SquareAccount = 'SQUARE_ACCOUNT',
  Wallet = 'WALLET'
}

/**
 * Input type used to specify filters on `PaymentSourceType` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type PaymentSourceTypeFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<PaymentSourceTypeFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<PaymentSourceType>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<PaymentSourceTypeFilter>;
};

/** Indicates the current status of a `Payment` object. */
export enum PaymentStatus {
  Approved = 'APPROVED',
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Pending = 'PENDING'
}

/**
 * Input type used to specify filters on `PaymentStatus` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type PaymentStatusFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<PaymentStatusFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<PaymentStatus>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<PaymentStatusFilter>;
};

/** The filtering and sorting criteria for the customer graph. */
export type Query = {
  __typename?: 'Query';
  /**
   * Retrieves a list of cards owned by the merchant. A max of 25 cards will be returned.
   *
   * Permissions:PAYMENTS_READ
   */
  cardsOnFile?: Maybe<CardOnFileConnection>;
  /**
   * Query for catalog
   *
   * Permissions:ITEMS_READ
   */
  catalog?: Maybe<CatalogObjectConnection>;
  /**
   * Query for CatalogItems
   *
   * Permissions:ITEMS_READ
   */
  catalogItems?: Maybe<CatalogItemConnection>;
  /** Returns the Merchant the access token is granted permission to view */
  currentMerchant?: Maybe<Merchant>;
  customers?: Maybe<CustomerConnection>;
  /**
   * Retrieve InventoryChanges by the specified filter
   *
   * Permissions:INVENTORY_READ
   */
  inventoryChanges?: Maybe<InventoryChangeConnection>;
  /**
   * Retrieve InventoryCounts by the specified filter
   *
   * Permissions:INVENTORY_READ
   */
  inventoryCounts?: Maybe<InventoryCountConnection>;
  /** Returns Merchants by IDs. Order is not guaranteed. */
  merchants?: Maybe<MerchantConnection>;
  /**
   * Returns Orders by the specified filter.
   *
   * Permissions:ORDERS_READ
   */
  orders?: Maybe<OrderConnection>;
  /** Fetches `PaymentRefund`s based on the provided arguments. */
  paymentRefunds?: Maybe<PaymentRefundConnection>;
  /** Fetches `Payment`s based on the provided arguments. */
  payments?: Maybe<PaymentConnection>;
};


/** The filtering and sorting criteria for the customer graph. */
export type QueryCardsOnFileArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter: CardOnFileFilter;
  orderBy?: InputMaybe<Array<SortOrder>>;
};


/** The filtering and sorting criteria for the customer graph. */
export type QueryCatalogArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CatalogObjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** The filtering and sorting criteria for the customer graph. */
export type QueryCatalogItemsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CatalogItemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CatalogSort>>;
};


/** The filtering and sorting criteria for the customer graph. */
export type QueryCustomersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter: CustomerFilter;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** The filtering and sorting criteria for the customer graph. */
export type QueryInventoryChangesArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter: InventoryChangeFilter;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** The filtering and sorting criteria for the customer graph. */
export type QueryInventoryCountsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter: InventoryCountFilter;
  first?: InputMaybe<Scalars['Int']['input']>;
};


/** The filtering and sorting criteria for the customer graph. */
export type QueryMerchantsArgs = {
  filter: MerchantFilterInput;
};


/** The filtering and sorting criteria for the customer graph. */
export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  filter: OrderFilter;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrderSort>>;
};


/** The filtering and sorting criteria for the customer graph. */
export type QueryPaymentRefundsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PaymentRefundFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentRefundSortOrder>>;
};


/** The filtering and sorting criteria for the customer graph. */
export type QueryPaymentsArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PaymentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PaymentSortOrder>>;
};

/**
 * A refund processed for a Square transaction.
 *
 * Permissions:ORDERS_READ
 */
export type Refund = {
  __typename?: 'Refund';
  /**
   * Additional recipients (other than the merchant) receiving a portion of this refund. For example, fees assessed on a
   * refund of a purchase by a third party integration.
   * @deprecated additionalRecipients have been deprecated
   */
  additionalRecipients?: Maybe<Array<Maybe<OrderTenderAdditionalRecipient>>>;
  /** The amount of money refunded to the buyer. */
  amount?: Maybe<Money>;
  /** When the refund was created. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The refund's unique ID. */
  id: Scalars['ID']['output'];
  /** This refund's associated location. */
  location?: Maybe<Location>;
  /** The amount of Square processing fee money refunded to the merchant. */
  processingFee?: Maybe<Money>;
  /** The reason for the refund being issued. */
  reason?: Maybe<Scalars['String']['output']>;
  /** The current status of the refund */
  status?: Maybe<RefundStatus>;
  /** The refunded Tender */
  tender?: Maybe<OrderTender>;
  /**
   * The ID of the transaction that the refunded tender is part of.
   * @deprecated Transactions have been deprecated
   */
  transactionId?: Maybe<Scalars['ID']['output']>;
};

export enum RefundStatus {
  /** The refund has been approved by Square. */
  Approved = 'APPROVED',
  /** The refund failed. */
  Failed = 'FAILED',
  /** The refund is pending. */
  Pending = 'PENDING',
  /** The refund has been rejected by Square. */
  Rejected = 'REJECTED'
}

/**
 * A loyalty reward.
 *
 * Loyalty rewards are not currently fully represented in graphql, and their details must be retrieved through the
 * REST API.
 *
 * Permissions:LOYALTY_READ
 */
export type Reward = {
  __typename?: 'Reward';
  /** The Square-assigned ID of the loyalty reward. */
  id: Scalars['ID']['output'];
  /** The reward tier used to create the reward. */
  tier?: Maybe<RewardTier>;
};

/**
 * A loyalty program reward tier.
 *
 * Loyalty reward tiers are not currently fully represented in graphql, and their details must be retrieved through the
 * REST API.
 *
 * Permissions:LOYALTY_READ
 */
export type RewardTier = {
  __typename?: 'RewardTier';
  /** The Square-assigned ID of the reward tier. */
  id: Scalars['ID']['output'];
};

export enum ShipmentCarrier {
  Fedex = 'FEDEX',
  Ups = 'UPS',
  Usps = 'USPS'
}

export enum ShippingType {
  Express = 'EXPRESS',
  FirstClass = 'FIRST_CLASS',
  Priority = 'PRIORITY'
}

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

/**
 * Represents information about the application used to generate a change.
 *
 * Permissions:INVENTORY_READ
 */
export type SourceApplication = {
  __typename?: 'SourceApplication';
  /** The Square-assigned ID of the application. This field is used only if the product type is EXTERNAL_API. */
  applicationId?: Maybe<Scalars['ID']['output']>;
  /** The display name of the application (for example, "Custom Application" or "Square POS 4.74 for Android"). */
  name?: Maybe<Scalars['String']['output']>;
  /** The product type of the application */
  product?: Maybe<InventoryProduct>;
};

/**
 * Permissions: PAYMENTS_READ
 *
 * Additional details about Square Account payments.
 */
export type SquareAccountPaymentDetails = {
  __typename?: 'SquareAccountPaymentDetails';
  /** Information about errors encountered during the request. */
  errors: Array<Error>;
  /** Unique identifier for the payment source used for this payment. */
  paymentSourceToken?: Maybe<Scalars['ID']['output']>;
};

/**
 * Input type used to specify filters on `SquareAccountPaymentDetails` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type SquareAccountPaymentDetailsFilter = {
  /**
   * Used to filter on the `errors` field:
   *
   * > Information about errors encountered during the request.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  errors?: InputMaybe<ErrorFilter>;
  /**
   * Used to filter on the `paymentSourceToken` field:
   *
   * > Unique identifier for the payment source used for this payment.
   *
   * Will be ignored if `null` or an empty object is passed.
   */
  paymentSourceToken?: InputMaybe<IdFilter>;
};

/** An enumeration of Square products. */
export enum SquareProduct {
  BuyerDashboard = 'BUYER_DASHBOARD',
  ConnectApi = 'CONNECT_API',
  Dashboard = 'DASHBOARD',
  GiftCard = 'GIFT_CARD',
  Invoices = 'INVOICES',
  ReaderSdk = 'READER_SDK',
  RegisterClient = 'REGISTER_CLIENT',
  SquareLocal = 'SQUARE_LOCAL',
  SquareProfile = 'SQUARE_PROFILE',
  UnknownSquareProduct = 'UNKNOWN_SQUARE_PRODUCT',
  VirtualTerminal = 'VIRTUAL_TERMINAL',
  Web = 'WEB'
}

/**
 * Input type used to specify filters on `String` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type StringFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<StringFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<StringFilter>;
};

export type TaxIds = {
  __typename?: 'TaxIds';
  euVat?: Maybe<Scalars['String']['output']>;
};

/**
 * A record representing an individual team member for a business.
 *
 * Permissions:EMPLOYEES_READ
 */
export type TeamMember = {
  __typename?: 'TeamMember';
  /** The Square-issued ID of the team member. */
  id: Scalars['ID']['output'];
};

/**
 * Represents a generic time range. The start and end values are
 * represented in RFC 3339 format. Time ranges are customized to be
 * inclusive or exclusive based on the needs of a particular endpoint.
 * Refer to the relevant endpoint-specific documentation to determine
 * how time ranges are handled.
 */
export type TimeRangeFilter = {
  /** A datetime value in RFC 3339 format indicating when the time range ends. */
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * A datetime value in RFC 3339 format indicating when the time range
   * ends.
   */
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
};

/**
 * Input type used to specify filters on `Untyped` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type UntypedFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<UntypedFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Scalars['Untyped']['input']>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<UntypedFilter>;
};

/**
 * Input type used to specify filters on `Url` fields.
 *
 * Will be completely ignored if passed as an empty object (or as `null`).
 */
export type UrlFilter = {
  /**
   * Matches records where any of the provided sub-filters evaluate to true.
   * This works just like an OR operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents.
   */
  anyOf?: InputMaybe<Array<UrlFilter>>;
  /**
   * Matches records where the field value is equal to any of the provided values.
   * This works just like an IN operator in SQL.
   *
   * Will be ignored when `null` is passed. When an empty list is passed, will cause this
   * part of the filter to match no documents. When `null` is passed in the list, will
   * match records where the field value is `null`.
   */
  equalToAnyOf?: InputMaybe<Array<InputMaybe<Scalars['Url']['input']>>>;
  /**
   * Matches records where the provided sub-filter does not evaluate to true.
   * This works just like a NOT operator in SQL.
   *
   * Will be ignored when `null` is passed.
   */
  not?: InputMaybe<UrlFilter>;
};


export const CatalogQueryDocument = gql`
    query CatalogQuery($merchantId: ID!) {
  catalogItems(
    filter: {merchantId: {equalToAnyOf: [$merchantId]}, productType: {equalToAnyOf: APPOINTMENTS_SERVICE}}
  ) {
    pageInfo {
      hasNextPage
      endCursor
    }
    nodes {
      __typename
      id
      version
      isDeleted
      updatedAt
      absentAt {
        id
      }
      presentAt {
        id
      }
      presentAtAll
      ... on CatalogItem {
        abbreviation
        availableElectronically
        availableForPickup
        availableOnline
        category {
          id
        }
        description
        images {
          id
          url
        }
        options {
          id
          name
        }
        labelColor
        modifierListInfos {
          modifierList {
            id
          }
          enabled
          maxSelectedModifiers
          minSelectedModifiers
          modifierOverrides {
            modifier {
              id
            }
            onByDefault
          }
        }
        name
        productType
        skipModifierScreen
        taxes {
          id
          name
        }
        variations {
          id
          name
        }
      }
    }
  }
}
    `;

/**
 * __useCatalogQueryQuery__
 *
 * To run a query within a React component, call `useCatalogQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCatalogQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCatalogQueryQuery({
 *   variables: {
 *      merchantId: // value for 'merchantId'
 *   },
 * });
 */
export function useCatalogQueryQuery(baseOptions: Apollo.QueryHookOptions<CatalogQueryQuery, CatalogQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CatalogQueryQuery, CatalogQueryQueryVariables>(CatalogQueryDocument, options);
      }
export function useCatalogQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CatalogQueryQuery, CatalogQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CatalogQueryQuery, CatalogQueryQueryVariables>(CatalogQueryDocument, options);
        }
export type CatalogQueryQueryHookResult = ReturnType<typeof useCatalogQueryQuery>;
export type CatalogQueryLazyQueryHookResult = ReturnType<typeof useCatalogQueryLazyQuery>;
export type CatalogQueryQueryResult = Apollo.QueryResult<CatalogQueryQuery, CatalogQueryQueryVariables>;