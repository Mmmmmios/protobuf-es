// Copyright 2021-2025 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v2.6.2 with parameter "target=ts"
// @generated from file google/type/phone_number.proto (package google.type, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/type/phone_number.proto.
 */
export const file_google_type_phone_number: GenFile = /*@__PURE__*/
  fileDesc("Ch5nb29nbGUvdHlwZS9waG9uZV9udW1iZXIucHJvdG8SC2dvb2dsZS50eXBlIqsBCgtQaG9uZU51bWJlchIVCgtlMTY0X251bWJlchgBIAEoCUgAEjgKCnNob3J0X2NvZGUYAiABKAsyIi5nb29nbGUudHlwZS5QaG9uZU51bWJlci5TaG9ydENvZGVIABIRCglleHRlbnNpb24YAyABKAkaMAoJU2hvcnRDb2RlEhMKC3JlZ2lvbl9jb2RlGAEgASgJEg4KBm51bWJlchgCIAEoCUIGCgRraW5kQnQKD2NvbS5nb29nbGUudHlwZUIQUGhvbmVOdW1iZXJQcm90b1ABWkRnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL3R5cGUvcGhvbmVfbnVtYmVyO3Bob25lX251bWJlcvgBAaICA0dUUGIGcHJvdG8z");

/**
 * An object representing a phone number, suitable as an API wire format.
 *
 * This representation:
 *
 *  - should not be used for locale-specific formatting of a phone number, such
 *    as "+1 (650) 253-0000 ext. 123"
 *
 *  - is not designed for efficient storage
 *  - may not be suitable for dialing - specialized libraries (see references)
 *    should be used to parse the number for that purpose
 *
 * To do something meaningful with this number, such as format it for various
 * use-cases, convert it to an `i18n.phonenumbers.PhoneNumber` object first.
 *
 * For instance, in Java this would be:
 *
 *    com.google.type.PhoneNumber wireProto =
 *        com.google.type.PhoneNumber.newBuilder().build();
 *    com.google.i18n.phonenumbers.Phonenumber.PhoneNumber phoneNumber =
 *        PhoneNumberUtil.getInstance().parse(wireProto.getE164Number(), "ZZ");
 *    if (!wireProto.getExtension().isEmpty()) {
 *      phoneNumber.setExtension(wireProto.getExtension());
 *    }
 *
 *  Reference(s):
 *   - https://github.com/google/libphonenumber
 *
 * @generated from message google.type.PhoneNumber
 */
export type PhoneNumber = Message<"google.type.PhoneNumber"> & {
  /**
   * Required.  Either a regular number, or a short code.  New fields may be
   * added to the oneof below in the future, so clients should ignore phone
   * numbers for which none of the fields they coded against are set.
   *
   * @generated from oneof google.type.PhoneNumber.kind
   */
  kind: {
    /**
     * The phone number, represented as a leading plus sign ('+'), followed by a
     * phone number that uses a relaxed ITU E.164 format consisting of the
     * country calling code (1 to 3 digits) and the subscriber number, with no
     * additional spaces or formatting, e.g.:
     *  - correct: "+15552220123"
     *  - incorrect: "+1 (555) 222-01234 x123".
     *
     * The ITU E.164 format limits the latter to 12 digits, but in practice not
     * all countries respect that, so we relax that restriction here.
     * National-only numbers are not allowed.
     *
     * References:
     *  - https://www.itu.int/rec/T-REC-E.164-201011-I
     *  - https://en.wikipedia.org/wiki/E.164.
     *  - https://en.wikipedia.org/wiki/List_of_country_calling_codes
     *
     * @generated from field: string e164_number = 1;
     */
    value: string;
    case: "e164Number";
  } | {
    /**
     * A short code.
     *
     * Reference(s):
     *  - https://en.wikipedia.org/wiki/Short_code
     *
     * @generated from field: google.type.PhoneNumber.ShortCode short_code = 2;
     */
    value: PhoneNumber_ShortCode;
    case: "shortCode";
  } | { case: undefined; value?: undefined };

  /**
   * The phone number's extension. The extension is not standardized in ITU
   * recommendations, except for being defined as a series of numbers with a
   * maximum length of 40 digits. Other than digits, some other dialing
   * characters such as ',' (indicating a wait) or '#' may be stored here.
   *
   * Note that no regions currently use extensions with short codes, so this
   * field is normally only set in conjunction with an E.164 number. It is held
   * separately from the E.164 number to allow for short code extensions in the
   * future.
   *
   * @generated from field: string extension = 3;
   */
  extension: string;
};

/**
 * Describes the message google.type.PhoneNumber.
 * Use `create(PhoneNumberSchema)` to create a new message.
 */
export const PhoneNumberSchema: GenMessage<PhoneNumber> = /*@__PURE__*/
  messageDesc(file_google_type_phone_number, 0);

/**
 * An object representing a short code, which is a phone number that is
 * typically much shorter than regular phone numbers and can be used to
 * address messages in MMS and SMS systems, as well as for abbreviated dialing
 * (e.g. "Text 611 to see how many minutes you have remaining on your plan.").
 *
 * Short codes are restricted to a region and are not internationally
 * dialable, which means the same short code can exist in different regions,
 * with different usage and pricing, even if those regions share the same
 * country calling code (e.g. US and CA).
 *
 * @generated from message google.type.PhoneNumber.ShortCode
 */
export type PhoneNumber_ShortCode = Message<"google.type.PhoneNumber.ShortCode"> & {
  /**
   * Required. The BCP-47 region code of the location where calls to this
   * short code can be made, such as "US" and "BB".
   *
   * Reference(s):
   *  - http://www.unicode.org/reports/tr35/#unicode_region_subtag
   *
   * @generated from field: string region_code = 1;
   */
  regionCode: string;

  /**
   * Required. The short code digits, without a leading plus ('+') or country
   * calling code, e.g. "611".
   *
   * @generated from field: string number = 2;
   */
  number: string;
};

/**
 * Describes the message google.type.PhoneNumber.ShortCode.
 * Use `create(PhoneNumber_ShortCodeSchema)` to create a new message.
 */
export const PhoneNumber_ShortCodeSchema: GenMessage<PhoneNumber_ShortCode> = /*@__PURE__*/
  messageDesc(file_google_type_phone_number, 0, 0);

