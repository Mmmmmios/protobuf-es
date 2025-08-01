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
// @generated from file google/protobuf/unittest_retention.proto (package proto2_unittest, syntax proto2)
/* eslint-disable */

import type { GenEnum, GenExtension, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
import type { EnumOptions, EnumValueOptions, ExtensionRangeOptions, FieldOptions, FileOptions, MessageOptions, MethodOptions, OneofOptions, ServiceOptions } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file google/protobuf/unittest_retention.proto.
 */
export declare const file_google_protobuf_unittest_retention: GenFile;

/**
 * Retention attributes set on fields nested within a message
 *
 * @generated from message proto2_unittest.OptionsMessage
 */
export declare type OptionsMessage = Message<"proto2_unittest.OptionsMessage"> & {
  /**
   * @generated from field: optional int32 plain_field = 1;
   */
  plainField: number;

  /**
   * @generated from field: optional int32 runtime_retention_field = 2;
   */
  runtimeRetentionField: number;

  /**
   * @generated from field: optional int32 source_retention_field = 3;
   */
  sourceRetentionField: number;
};

/**
 * Describes the message proto2_unittest.OptionsMessage.
 * Use `create(OptionsMessageSchema)` to create a new message.
 */
export declare const OptionsMessageSchema: GenMessage<OptionsMessage>;

/**
 * @generated from message proto2_unittest.Extendee
 */
export declare type Extendee = Message<"proto2_unittest.Extendee"> & {
};

/**
 * Describes the message proto2_unittest.Extendee.
 * Use `create(ExtendeeSchema)` to create a new message.
 */
export declare const ExtendeeSchema: GenMessage<Extendee>;

/**
 * @generated from message proto2_unittest.TopLevelMessage
 */
export declare type TopLevelMessage = Message<"proto2_unittest.TopLevelMessage"> & {
  /**
   * @generated from field: optional float f = 1;
   */
  f: number;

  /**
   * @generated from oneof proto2_unittest.TopLevelMessage.o
   */
  o: {
    /**
     * @generated from field: int64 i = 2;
     */
    value: bigint;
    case: "i";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message proto2_unittest.TopLevelMessage.
 * Use `create(TopLevelMessageSchema)` to create a new message.
 */
export declare const TopLevelMessageSchema: GenMessage<TopLevelMessage>;

/**
 * @generated from message proto2_unittest.TopLevelMessage.NestedMessage
 */
export declare type TopLevelMessage_NestedMessage = Message<"proto2_unittest.TopLevelMessage.NestedMessage"> & {
};

/**
 * Describes the message proto2_unittest.TopLevelMessage.NestedMessage.
 * Use `create(TopLevelMessage_NestedMessageSchema)` to create a new message.
 */
export declare const TopLevelMessage_NestedMessageSchema: GenMessage<TopLevelMessage_NestedMessage>;

/**
 * @generated from enum proto2_unittest.TopLevelMessage.NestedEnum
 */
export enum TopLevelMessage_NestedEnum {
  /**
   * @generated from enum value: NESTED_UNKNOWN = 0;
   */
  NESTED_UNKNOWN = 0,
}

/**
 * Describes the enum proto2_unittest.TopLevelMessage.NestedEnum.
 */
export declare const TopLevelMessage_NestedEnumSchema: GenEnum<TopLevelMessage_NestedEnum>;

/**
 * @generated from extension: optional string s = 2;
 */
export declare const TopLevelMessage_s: GenExtension<Extendee, string>;

/**
 * @generated from enum proto2_unittest.TopLevelEnum
 */
export enum TopLevelEnum {
  /**
   * @generated from enum value: TOP_LEVEL_UNKNOWN = 0;
   */
  TOP_LEVEL_UNKNOWN = 0,
}

/**
 * Describes the enum proto2_unittest.TopLevelEnum.
 */
export declare const TopLevelEnumSchema: GenEnum<TopLevelEnum>;

/**
 * @generated from service proto2_unittest.Service
 */
export declare const Service: GenService<{
  /**
   * @generated from rpc proto2_unittest.Service.DoStuff
   */
  doStuff: {
    methodKind: "unary";
    input: typeof TopLevelMessageSchema;
    output: typeof TopLevelMessageSchema;
  },
}>;

/**
 * @generated from extension: optional int32 plain_option = 505092806;
 */
export declare const plain_option: GenExtension<FileOptions, number>;

/**
 * @generated from extension: optional int32 runtime_retention_option = 505039132;
 */
export declare const runtime_retention_option: GenExtension<FileOptions, number>;

/**
 * @generated from extension: optional int32 source_retention_option = 504878676;
 */
export declare const source_retention_option: GenExtension<FileOptions, number>;

/**
 * @generated from extension: optional proto2_unittest.OptionsMessage file_option = 504871168;
 */
export declare const file_option: GenExtension<FileOptions, OptionsMessage>;

/**
 * @generated from extension: repeated proto2_unittest.OptionsMessage repeated_options = 504823570;
 */
export declare const repeated_options: GenExtension<FileOptions, OptionsMessage[]>;

/**
 * @generated from extension: optional proto2_unittest.OptionsMessage extension_range_option = 504822148;
 */
export declare const extension_range_option: GenExtension<ExtensionRangeOptions, OptionsMessage>;

/**
 * @generated from extension: optional proto2_unittest.OptionsMessage message_option = 504820819;
 */
export declare const message_option: GenExtension<MessageOptions, OptionsMessage>;

/**
 * @generated from extension: optional proto2_unittest.OptionsMessage field_option = 504589219;
 */
export declare const field_option: GenExtension<FieldOptions, OptionsMessage>;

/**
 * @generated from extension: optional proto2_unittest.OptionsMessage oneof_option = 504479153;
 */
export declare const oneof_option: GenExtension<OneofOptions, OptionsMessage>;

/**
 * @generated from extension: optional proto2_unittest.OptionsMessage enum_option = 504451567;
 */
export declare const enum_option: GenExtension<EnumOptions, OptionsMessage>;

/**
 * @generated from extension: optional proto2_unittest.OptionsMessage enum_entry_option = 504450522;
 */
export declare const enum_entry_option: GenExtension<EnumValueOptions, OptionsMessage>;

/**
 * @generated from extension: optional proto2_unittest.OptionsMessage service_option = 504387709;
 */
export declare const service_option: GenExtension<ServiceOptions, OptionsMessage>;

/**
 * @generated from extension: optional proto2_unittest.OptionsMessage method_option = 504349420;
 */
export declare const method_option: GenExtension<MethodOptions, OptionsMessage>;

/**
 * @generated from extension: optional int32 i = 1;
 */
export declare const i: GenExtension<Extendee, number>;

