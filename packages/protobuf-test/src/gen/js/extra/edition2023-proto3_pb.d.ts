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
// @generated from file extra/edition2023-proto3.proto (package spec, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file extra/edition2023-proto3.proto.
 */
export declare const file_extra_edition2023_proto3: GenFile;

/**
 * see edition2023.proto
 *
 * @generated from message spec.Proto3MessageForEdition2023
 */
export declare type Proto3MessageForEdition2023 = Message<"spec.Proto3MessageForEdition2023"> & {
  /**
   * @generated from field: bool implicit_bool_field = 1;
   */
  implicitBoolField: boolean;

  /**
   * @generated from field: spec.Proto3EnumForEdition2023 implicit_open_enum_field = 2;
   */
  implicitOpenEnumField: Proto3EnumForEdition2023;

  /**
   * @generated from field: optional bool explicit_bool_field = 5;
   */
  explicitBoolField?: boolean;

  /**
   * @generated from field: optional spec.Proto3EnumForEdition2023 explicit_open_enum_field = 6;
   */
  explicitOpenEnumField?: Proto3EnumForEdition2023;

  /**
   * @generated from field: repeated double packed_double_field = 9 [packed = true];
   */
  packedDoubleField: number[];

  /**
   * @generated from field: repeated double unpacked_double_field = 10 [packed = false];
   */
  unpackedDoubleField: number[];
};

/**
 * Describes the message spec.Proto3MessageForEdition2023.
 * Use `create(Proto3MessageForEdition2023Schema)` to create a new message.
 */
export declare const Proto3MessageForEdition2023Schema: GenMessage<Proto3MessageForEdition2023>;

/**
 * @generated from enum spec.Proto3EnumForEdition2023
 */
export enum Proto3EnumForEdition2023 {
  /**
   * @generated from enum value: PROTO3_ENUM_FOR_EDITION2023_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: PROTO3_ENUM_FOR_EDITION2023_A = 1;
   */
  A = 1,
}

/**
 * Describes the enum spec.Proto3EnumForEdition2023.
 */
export declare const Proto3EnumForEdition2023Schema: GenEnum<Proto3EnumForEdition2023>;

