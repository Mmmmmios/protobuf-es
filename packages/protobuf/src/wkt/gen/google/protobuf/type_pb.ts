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

// @generated by protoc-gen-es v2.6.2 with parameter "bootstrap_wkt=true,target=ts,import_extension=js,json_types=true"
// @generated from file google/protobuf/type.proto (package google.protobuf, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "../../../../codegenv2/types.js";
import { fileDesc } from "../../../../codegenv2/file.js";
import type { Any, AnyJson } from "./any_pb.js";
import { file_google_protobuf_any } from "./any_pb.js";
import type { SourceContext, SourceContextJson } from "./source_context_pb.js";
import { file_google_protobuf_source_context } from "./source_context_pb.js";
import type { Message } from "../../../../types.js";
import { messageDesc } from "../../../../codegenv2/message.js";
import { enumDesc } from "../../../../codegenv2/enum.js";

/**
 * Describes the file google/protobuf/type.proto.
 */
export const file_google_protobuf_type: GenFile = /*@__PURE__*/
  fileDesc("Chpnb29nbGUvcHJvdG9idWYvdHlwZS5wcm90bxIPZ29vZ2xlLnByb3RvYnVmIugBCgRUeXBlEgwKBG5hbWUYASABKAkSJgoGZmllbGRzGAIgAygLMhYuZ29vZ2xlLnByb3RvYnVmLkZpZWxkEg4KBm9uZW9mcxgDIAMoCRIoCgdvcHRpb25zGAQgAygLMhcuZ29vZ2xlLnByb3RvYnVmLk9wdGlvbhI2Cg5zb3VyY2VfY29udGV4dBgFIAEoCzIeLmdvb2dsZS5wcm90b2J1Zi5Tb3VyY2VDb250ZXh0EicKBnN5bnRheBgGIAEoDjIXLmdvb2dsZS5wcm90b2J1Zi5TeW50YXgSDwoHZWRpdGlvbhgHIAEoCSLVBQoFRmllbGQSKQoEa2luZBgBIAEoDjIbLmdvb2dsZS5wcm90b2J1Zi5GaWVsZC5LaW5kEjcKC2NhcmRpbmFsaXR5GAIgASgOMiIuZ29vZ2xlLnByb3RvYnVmLkZpZWxkLkNhcmRpbmFsaXR5Eg4KBm51bWJlchgDIAEoBRIMCgRuYW1lGAQgASgJEhAKCHR5cGVfdXJsGAYgASgJEhMKC29uZW9mX2luZGV4GAcgASgFEg4KBnBhY2tlZBgIIAEoCBIoCgdvcHRpb25zGAkgAygLMhcuZ29vZ2xlLnByb3RvYnVmLk9wdGlvbhIRCglqc29uX25hbWUYCiABKAkSFQoNZGVmYXVsdF92YWx1ZRgLIAEoCSLIAgoES2luZBIQCgxUWVBFX1VOS05PV04QABIPCgtUWVBFX0RPVUJMRRABEg4KClRZUEVfRkxPQVQQAhIOCgpUWVBFX0lOVDY0EAMSDwoLVFlQRV9VSU5UNjQQBBIOCgpUWVBFX0lOVDMyEAUSEAoMVFlQRV9GSVhFRDY0EAYSEAoMVFlQRV9GSVhFRDMyEAcSDQoJVFlQRV9CT09MEAgSDwoLVFlQRV9TVFJJTkcQCRIOCgpUWVBFX0dST1VQEAoSEAoMVFlQRV9NRVNTQUdFEAsSDgoKVFlQRV9CWVRFUxAMEg8KC1RZUEVfVUlOVDMyEA0SDQoJVFlQRV9FTlVNEA4SEQoNVFlQRV9TRklYRUQzMhAPEhEKDVRZUEVfU0ZJWEVENjQQEBIPCgtUWVBFX1NJTlQzMhAREg8KC1RZUEVfU0lOVDY0EBIidAoLQ2FyZGluYWxpdHkSFwoTQ0FSRElOQUxJVFlfVU5LTk9XThAAEhgKFENBUkRJTkFMSVRZX09QVElPTkFMEAESGAoUQ0FSRElOQUxJVFlfUkVRVUlSRUQQAhIYChRDQVJESU5BTElUWV9SRVBFQVRFRBADIt8BCgRFbnVtEgwKBG5hbWUYASABKAkSLQoJZW51bXZhbHVlGAIgAygLMhouZ29vZ2xlLnByb3RvYnVmLkVudW1WYWx1ZRIoCgdvcHRpb25zGAMgAygLMhcuZ29vZ2xlLnByb3RvYnVmLk9wdGlvbhI2Cg5zb3VyY2VfY29udGV4dBgEIAEoCzIeLmdvb2dsZS5wcm90b2J1Zi5Tb3VyY2VDb250ZXh0EicKBnN5bnRheBgFIAEoDjIXLmdvb2dsZS5wcm90b2J1Zi5TeW50YXgSDwoHZWRpdGlvbhgGIAEoCSJTCglFbnVtVmFsdWUSDAoEbmFtZRgBIAEoCRIOCgZudW1iZXIYAiABKAUSKAoHb3B0aW9ucxgDIAMoCzIXLmdvb2dsZS5wcm90b2J1Zi5PcHRpb24iOwoGT3B0aW9uEgwKBG5hbWUYASABKAkSIwoFdmFsdWUYAiABKAsyFC5nb29nbGUucHJvdG9idWYuQW55KkMKBlN5bnRheBIRCg1TWU5UQVhfUFJPVE8yEAASEQoNU1lOVEFYX1BST1RPMxABEhMKD1NZTlRBWF9FRElUSU9OUxACQnsKE2NvbS5nb29nbGUucHJvdG9idWZCCVR5cGVQcm90b1ABWi1nb29nbGUuZ29sYW5nLm9yZy9wcm90b2J1Zi90eXBlcy9rbm93bi90eXBlcGL4AQGiAgNHUEKqAh5Hb29nbGUuUHJvdG9idWYuV2VsbEtub3duVHlwZXNiBnByb3RvMw", [file_google_protobuf_any, file_google_protobuf_source_context]);

/**
 * A protocol buffer message type.
 *
 * @generated from message google.protobuf.Type
 */
export type Type = Message<"google.protobuf.Type"> & {
  /**
   * The fully qualified message name.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The list of fields.
   *
   * @generated from field: repeated google.protobuf.Field fields = 2;
   */
  fields: Field[];

  /**
   * The list of types appearing in `oneof` definitions in this type.
   *
   * @generated from field: repeated string oneofs = 3;
   */
  oneofs: string[];

  /**
   * The protocol buffer options.
   *
   * @generated from field: repeated google.protobuf.Option options = 4;
   */
  options: Option[];

  /**
   * The source context.
   *
   * @generated from field: google.protobuf.SourceContext source_context = 5;
   */
  sourceContext?: SourceContext;

  /**
   * The source syntax.
   *
   * @generated from field: google.protobuf.Syntax syntax = 6;
   */
  syntax: Syntax;

  /**
   * The source edition string, only valid when syntax is SYNTAX_EDITIONS.
   *
   * @generated from field: string edition = 7;
   */
  edition: string;
};

/**
 * A protocol buffer message type.
 *
 * @generated from message google.protobuf.Type
 */
export type TypeJson = {
  /**
   * The fully qualified message name.
   *
   * @generated from field: string name = 1;
   */
  name?: string;

  /**
   * The list of fields.
   *
   * @generated from field: repeated google.protobuf.Field fields = 2;
   */
  fields?: FieldJson[];

  /**
   * The list of types appearing in `oneof` definitions in this type.
   *
   * @generated from field: repeated string oneofs = 3;
   */
  oneofs?: string[];

  /**
   * The protocol buffer options.
   *
   * @generated from field: repeated google.protobuf.Option options = 4;
   */
  options?: OptionJson[];

  /**
   * The source context.
   *
   * @generated from field: google.protobuf.SourceContext source_context = 5;
   */
  sourceContext?: SourceContextJson;

  /**
   * The source syntax.
   *
   * @generated from field: google.protobuf.Syntax syntax = 6;
   */
  syntax?: SyntaxJson;

  /**
   * The source edition string, only valid when syntax is SYNTAX_EDITIONS.
   *
   * @generated from field: string edition = 7;
   */
  edition?: string;
};

/**
 * Describes the message google.protobuf.Type.
 * Use `create(TypeSchema)` to create a new message.
 */
export const TypeSchema: GenMessage<Type, {jsonType: TypeJson}> = /*@__PURE__*/
  messageDesc(file_google_protobuf_type, 0);

/**
 * A single field of a message type.
 *
 * @generated from message google.protobuf.Field
 */
export type Field = Message<"google.protobuf.Field"> & {
  /**
   * The field type.
   *
   * @generated from field: google.protobuf.Field.Kind kind = 1;
   */
  kind: Field_Kind;

  /**
   * The field cardinality.
   *
   * @generated from field: google.protobuf.Field.Cardinality cardinality = 2;
   */
  cardinality: Field_Cardinality;

  /**
   * The field number.
   *
   * @generated from field: int32 number = 3;
   */
  number: number;

  /**
   * The field name.
   *
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * The field type URL, without the scheme, for message or enumeration
   * types. Example: `"type.googleapis.com/google.protobuf.Timestamp"`.
   *
   * @generated from field: string type_url = 6;
   */
  typeUrl: string;

  /**
   * The index of the field type in `Type.oneofs`, for message or enumeration
   * types. The first type has index 1; zero means the type is not in the list.
   *
   * @generated from field: int32 oneof_index = 7;
   */
  oneofIndex: number;

  /**
   * Whether to use alternative packed wire representation.
   *
   * @generated from field: bool packed = 8;
   */
  packed: boolean;

  /**
   * The protocol buffer options.
   *
   * @generated from field: repeated google.protobuf.Option options = 9;
   */
  options: Option[];

  /**
   * The field JSON name.
   *
   * @generated from field: string json_name = 10;
   */
  jsonName: string;

  /**
   * The string value of the default value of this field. Proto2 syntax only.
   *
   * @generated from field: string default_value = 11;
   */
  defaultValue: string;
};

/**
 * A single field of a message type.
 *
 * @generated from message google.protobuf.Field
 */
export type FieldJson = {
  /**
   * The field type.
   *
   * @generated from field: google.protobuf.Field.Kind kind = 1;
   */
  kind?: Field_KindJson;

  /**
   * The field cardinality.
   *
   * @generated from field: google.protobuf.Field.Cardinality cardinality = 2;
   */
  cardinality?: Field_CardinalityJson;

  /**
   * The field number.
   *
   * @generated from field: int32 number = 3;
   */
  number?: number;

  /**
   * The field name.
   *
   * @generated from field: string name = 4;
   */
  name?: string;

  /**
   * The field type URL, without the scheme, for message or enumeration
   * types. Example: `"type.googleapis.com/google.protobuf.Timestamp"`.
   *
   * @generated from field: string type_url = 6;
   */
  typeUrl?: string;

  /**
   * The index of the field type in `Type.oneofs`, for message or enumeration
   * types. The first type has index 1; zero means the type is not in the list.
   *
   * @generated from field: int32 oneof_index = 7;
   */
  oneofIndex?: number;

  /**
   * Whether to use alternative packed wire representation.
   *
   * @generated from field: bool packed = 8;
   */
  packed?: boolean;

  /**
   * The protocol buffer options.
   *
   * @generated from field: repeated google.protobuf.Option options = 9;
   */
  options?: OptionJson[];

  /**
   * The field JSON name.
   *
   * @generated from field: string json_name = 10;
   */
  jsonName?: string;

  /**
   * The string value of the default value of this field. Proto2 syntax only.
   *
   * @generated from field: string default_value = 11;
   */
  defaultValue?: string;
};

/**
 * Describes the message google.protobuf.Field.
 * Use `create(FieldSchema)` to create a new message.
 */
export const FieldSchema: GenMessage<Field, {jsonType: FieldJson}> = /*@__PURE__*/
  messageDesc(file_google_protobuf_type, 1);

/**
 * Basic field types.
 *
 * @generated from enum google.protobuf.Field.Kind
 */
export enum Field_Kind {
  /**
   * Field type unknown.
   *
   * @generated from enum value: TYPE_UNKNOWN = 0;
   */
  TYPE_UNKNOWN = 0,

  /**
   * Field type double.
   *
   * @generated from enum value: TYPE_DOUBLE = 1;
   */
  TYPE_DOUBLE = 1,

  /**
   * Field type float.
   *
   * @generated from enum value: TYPE_FLOAT = 2;
   */
  TYPE_FLOAT = 2,

  /**
   * Field type int64.
   *
   * @generated from enum value: TYPE_INT64 = 3;
   */
  TYPE_INT64 = 3,

  /**
   * Field type uint64.
   *
   * @generated from enum value: TYPE_UINT64 = 4;
   */
  TYPE_UINT64 = 4,

  /**
   * Field type int32.
   *
   * @generated from enum value: TYPE_INT32 = 5;
   */
  TYPE_INT32 = 5,

  /**
   * Field type fixed64.
   *
   * @generated from enum value: TYPE_FIXED64 = 6;
   */
  TYPE_FIXED64 = 6,

  /**
   * Field type fixed32.
   *
   * @generated from enum value: TYPE_FIXED32 = 7;
   */
  TYPE_FIXED32 = 7,

  /**
   * Field type bool.
   *
   * @generated from enum value: TYPE_BOOL = 8;
   */
  TYPE_BOOL = 8,

  /**
   * Field type string.
   *
   * @generated from enum value: TYPE_STRING = 9;
   */
  TYPE_STRING = 9,

  /**
   * Field type group. Proto2 syntax only, and deprecated.
   *
   * @generated from enum value: TYPE_GROUP = 10;
   */
  TYPE_GROUP = 10,

  /**
   * Field type message.
   *
   * @generated from enum value: TYPE_MESSAGE = 11;
   */
  TYPE_MESSAGE = 11,

  /**
   * Field type bytes.
   *
   * @generated from enum value: TYPE_BYTES = 12;
   */
  TYPE_BYTES = 12,

  /**
   * Field type uint32.
   *
   * @generated from enum value: TYPE_UINT32 = 13;
   */
  TYPE_UINT32 = 13,

  /**
   * Field type enum.
   *
   * @generated from enum value: TYPE_ENUM = 14;
   */
  TYPE_ENUM = 14,

  /**
   * Field type sfixed32.
   *
   * @generated from enum value: TYPE_SFIXED32 = 15;
   */
  TYPE_SFIXED32 = 15,

  /**
   * Field type sfixed64.
   *
   * @generated from enum value: TYPE_SFIXED64 = 16;
   */
  TYPE_SFIXED64 = 16,

  /**
   * Field type sint32.
   *
   * @generated from enum value: TYPE_SINT32 = 17;
   */
  TYPE_SINT32 = 17,

  /**
   * Field type sint64.
   *
   * @generated from enum value: TYPE_SINT64 = 18;
   */
  TYPE_SINT64 = 18,
}

/**
 * Basic field types.
 *
 * @generated from enum google.protobuf.Field.Kind
 */
export type Field_KindJson = "TYPE_UNKNOWN" | "TYPE_DOUBLE" | "TYPE_FLOAT" | "TYPE_INT64" | "TYPE_UINT64" | "TYPE_INT32" | "TYPE_FIXED64" | "TYPE_FIXED32" | "TYPE_BOOL" | "TYPE_STRING" | "TYPE_GROUP" | "TYPE_MESSAGE" | "TYPE_BYTES" | "TYPE_UINT32" | "TYPE_ENUM" | "TYPE_SFIXED32" | "TYPE_SFIXED64" | "TYPE_SINT32" | "TYPE_SINT64";

/**
 * Describes the enum google.protobuf.Field.Kind.
 */
export const Field_KindSchema: GenEnum<Field_Kind, Field_KindJson> = /*@__PURE__*/
  enumDesc(file_google_protobuf_type, 1, 0);

/**
 * Whether a field is optional, required, or repeated.
 *
 * @generated from enum google.protobuf.Field.Cardinality
 */
export enum Field_Cardinality {
  /**
   * For fields with unknown cardinality.
   *
   * @generated from enum value: CARDINALITY_UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * For optional fields.
   *
   * @generated from enum value: CARDINALITY_OPTIONAL = 1;
   */
  OPTIONAL = 1,

  /**
   * For required fields. Proto2 syntax only.
   *
   * @generated from enum value: CARDINALITY_REQUIRED = 2;
   */
  REQUIRED = 2,

  /**
   * For repeated fields.
   *
   * @generated from enum value: CARDINALITY_REPEATED = 3;
   */
  REPEATED = 3,
}

/**
 * Whether a field is optional, required, or repeated.
 *
 * @generated from enum google.protobuf.Field.Cardinality
 */
export type Field_CardinalityJson = "CARDINALITY_UNKNOWN" | "CARDINALITY_OPTIONAL" | "CARDINALITY_REQUIRED" | "CARDINALITY_REPEATED";

/**
 * Describes the enum google.protobuf.Field.Cardinality.
 */
export const Field_CardinalitySchema: GenEnum<Field_Cardinality, Field_CardinalityJson> = /*@__PURE__*/
  enumDesc(file_google_protobuf_type, 1, 1);

/**
 * Enum type definition.
 *
 * @generated from message google.protobuf.Enum
 */
export type Enum = Message<"google.protobuf.Enum"> & {
  /**
   * Enum type name.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Enum value definitions.
   *
   * @generated from field: repeated google.protobuf.EnumValue enumvalue = 2;
   */
  enumvalue: EnumValue[];

  /**
   * Protocol buffer options.
   *
   * @generated from field: repeated google.protobuf.Option options = 3;
   */
  options: Option[];

  /**
   * The source context.
   *
   * @generated from field: google.protobuf.SourceContext source_context = 4;
   */
  sourceContext?: SourceContext;

  /**
   * The source syntax.
   *
   * @generated from field: google.protobuf.Syntax syntax = 5;
   */
  syntax: Syntax;

  /**
   * The source edition string, only valid when syntax is SYNTAX_EDITIONS.
   *
   * @generated from field: string edition = 6;
   */
  edition: string;
};

/**
 * Enum type definition.
 *
 * @generated from message google.protobuf.Enum
 */
export type EnumJson = {
  /**
   * Enum type name.
   *
   * @generated from field: string name = 1;
   */
  name?: string;

  /**
   * Enum value definitions.
   *
   * @generated from field: repeated google.protobuf.EnumValue enumvalue = 2;
   */
  enumvalue?: EnumValueJson[];

  /**
   * Protocol buffer options.
   *
   * @generated from field: repeated google.protobuf.Option options = 3;
   */
  options?: OptionJson[];

  /**
   * The source context.
   *
   * @generated from field: google.protobuf.SourceContext source_context = 4;
   */
  sourceContext?: SourceContextJson;

  /**
   * The source syntax.
   *
   * @generated from field: google.protobuf.Syntax syntax = 5;
   */
  syntax?: SyntaxJson;

  /**
   * The source edition string, only valid when syntax is SYNTAX_EDITIONS.
   *
   * @generated from field: string edition = 6;
   */
  edition?: string;
};

/**
 * Describes the message google.protobuf.Enum.
 * Use `create(EnumSchema)` to create a new message.
 */
export const EnumSchema: GenMessage<Enum, {jsonType: EnumJson}> = /*@__PURE__*/
  messageDesc(file_google_protobuf_type, 2);

/**
 * Enum value definition.
 *
 * @generated from message google.protobuf.EnumValue
 */
export type EnumValue = Message<"google.protobuf.EnumValue"> & {
  /**
   * Enum value name.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * Enum value number.
   *
   * @generated from field: int32 number = 2;
   */
  number: number;

  /**
   * Protocol buffer options.
   *
   * @generated from field: repeated google.protobuf.Option options = 3;
   */
  options: Option[];
};

/**
 * Enum value definition.
 *
 * @generated from message google.protobuf.EnumValue
 */
export type EnumValueJson = {
  /**
   * Enum value name.
   *
   * @generated from field: string name = 1;
   */
  name?: string;

  /**
   * Enum value number.
   *
   * @generated from field: int32 number = 2;
   */
  number?: number;

  /**
   * Protocol buffer options.
   *
   * @generated from field: repeated google.protobuf.Option options = 3;
   */
  options?: OptionJson[];
};

/**
 * Describes the message google.protobuf.EnumValue.
 * Use `create(EnumValueSchema)` to create a new message.
 */
export const EnumValueSchema: GenMessage<EnumValue, {jsonType: EnumValueJson}> = /*@__PURE__*/
  messageDesc(file_google_protobuf_type, 3);

/**
 * A protocol buffer option, which can be attached to a message, field,
 * enumeration, etc.
 *
 * @generated from message google.protobuf.Option
 */
export type Option = Message<"google.protobuf.Option"> & {
  /**
   * The option's name. For protobuf built-in options (options defined in
   * descriptor.proto), this is the short name. For example, `"map_entry"`.
   * For custom options, it should be the fully-qualified name. For example,
   * `"google.api.http"`.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The option's value packed in an Any message. If the value is a primitive,
   * the corresponding wrapper type defined in google/protobuf/wrappers.proto
   * should be used. If the value is an enum, it should be stored as an int32
   * value using the google.protobuf.Int32Value type.
   *
   * @generated from field: google.protobuf.Any value = 2;
   */
  value?: Any;
};

/**
 * A protocol buffer option, which can be attached to a message, field,
 * enumeration, etc.
 *
 * @generated from message google.protobuf.Option
 */
export type OptionJson = {
  /**
   * The option's name. For protobuf built-in options (options defined in
   * descriptor.proto), this is the short name. For example, `"map_entry"`.
   * For custom options, it should be the fully-qualified name. For example,
   * `"google.api.http"`.
   *
   * @generated from field: string name = 1;
   */
  name?: string;

  /**
   * The option's value packed in an Any message. If the value is a primitive,
   * the corresponding wrapper type defined in google/protobuf/wrappers.proto
   * should be used. If the value is an enum, it should be stored as an int32
   * value using the google.protobuf.Int32Value type.
   *
   * @generated from field: google.protobuf.Any value = 2;
   */
  value?: AnyJson;
};

/**
 * Describes the message google.protobuf.Option.
 * Use `create(OptionSchema)` to create a new message.
 */
export const OptionSchema: GenMessage<Option, {jsonType: OptionJson}> = /*@__PURE__*/
  messageDesc(file_google_protobuf_type, 4);

/**
 * The syntax in which a protocol buffer element is defined.
 *
 * @generated from enum google.protobuf.Syntax
 */
export enum Syntax {
  /**
   * Syntax `proto2`.
   *
   * @generated from enum value: SYNTAX_PROTO2 = 0;
   */
  PROTO2 = 0,

  /**
   * Syntax `proto3`.
   *
   * @generated from enum value: SYNTAX_PROTO3 = 1;
   */
  PROTO3 = 1,

  /**
   * Syntax `editions`.
   *
   * @generated from enum value: SYNTAX_EDITIONS = 2;
   */
  EDITIONS = 2,
}

/**
 * The syntax in which a protocol buffer element is defined.
 *
 * @generated from enum google.protobuf.Syntax
 */
export type SyntaxJson = "SYNTAX_PROTO2" | "SYNTAX_PROTO3" | "SYNTAX_EDITIONS";

/**
 * Describes the enum google.protobuf.Syntax.
 */
export const SyntaxSchema: GenEnum<Syntax, SyntaxJson> = /*@__PURE__*/
  enumDesc(file_google_protobuf_type, 0);

