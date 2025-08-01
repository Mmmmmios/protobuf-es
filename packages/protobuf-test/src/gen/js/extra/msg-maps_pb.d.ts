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

// @generated by protoc-gen-es v2.6.2 with parameter "target=js+dts,import_extension=js"
// @generated from file extra/msg-maps.proto (package spec, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file extra/msg-maps.proto.
 */
export declare const file_extra_msg_maps: GenFile;

/**
 * @generated from message spec.MapsMessage
 */
export declare type MapsMessage = Message<"spec.MapsMessage"> & {
  /**
   * @generated from field: map<string, string> str_str_field = 1;
   */
  strStrField: { [key: string]: string };

  /**
   * @generated from field: map<string, int32> str_int32_field = 2;
   */
  strInt32Field: { [key: string]: number };

  /**
   * @generated from field: map<string, int64> str_int64_field = 3;
   */
  strInt64Field: { [key: string]: bigint };

  /**
   * @generated from field: map<string, bool> str_bool_field = 4;
   */
  strBoolField: { [key: string]: boolean };

  /**
   * @generated from field: map<string, bytes> str_bytes_field = 5;
   */
  strBytesField: { [key: string]: Uint8Array };

  /**
   * @generated from field: map<int32, string> int32_str_field = 6;
   */
  int32StrField: { [key: number]: string };

  /**
   * @generated from field: map<int64, string> int64_str_field = 7;
   */
  int64StrField: { [key: string]: string };

  /**
   * @generated from field: map<bool, string> bool_str_field = 8;
   */
  boolStrField: { [key: string]: string };

  /**
   * @generated from field: map<string, spec.MapsMessage> str_msg_field = 9;
   */
  strMsgField: { [key: string]: MapsMessage };

  /**
   * @generated from field: map<int32, spec.MapsMessage> int32_msg_field = 10;
   */
  int32MsgField: { [key: number]: MapsMessage };

  /**
   * @generated from field: map<int64, spec.MapsMessage> int64_msg_field = 11;
   */
  int64MsgField: { [key: string]: MapsMessage };

  /**
   * @generated from field: map<string, spec.MapsEnum> str_enu_field = 12;
   */
  strEnuField: { [key: string]: MapsEnum };

  /**
   * @generated from field: map<int32, spec.MapsEnum> int32_enu_field = 13;
   */
  int32EnuField: { [key: number]: MapsEnum };

  /**
   * @generated from field: map<int64, spec.MapsEnum> int64_enu_field = 14;
   */
  int64EnuField: { [key: string]: MapsEnum };
};

/**
 * Describes the message spec.MapsMessage.
 * Use `create(MapsMessageSchema)` to create a new message.
 */
export declare const MapsMessageSchema: GenMessage<MapsMessage>;

/**
 * @generated from enum spec.MapsEnum
 */
export enum MapsEnum {
  /**
   * @generated from enum value: MAPS_ENUM_ANY = 0;
   */
  ANY = 0,

  /**
   * @generated from enum value: MAPS_ENUM_YES = 1;
   */
  YES = 1,

  /**
   * @generated from enum value: MAPS_ENUM_NO = 2;
   */
  NO = 2,
}

/**
 * Describes the enum spec.MapsEnum.
 */
export declare const MapsEnumSchema: GenEnum<MapsEnum>;

