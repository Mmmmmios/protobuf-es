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

// Test proto for redaction

// @generated by protoc-gen-es v2.6.2 with parameter "target=js+dts,import_extension=js"
// @generated from file google/protobuf/unittest_redaction.proto (package proto2_unittest, edition 2023)
// option features.repeated_field_encoding = EXPANDED;
// option features.utf8_validation = NONE;
/* eslint-disable */

import type { GenEnum, GenExtension, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
import type { Any, FieldOptions } from "@bufbuild/protobuf/wkt";

/**
 * Describes the file google/protobuf/unittest_redaction.proto.
 */
export declare const file_google_protobuf_unittest_redaction: GenFile;

/**
 * @generated from message proto2_unittest.TestRedactedNestMessage
 */
export declare type TestRedactedNestMessage = Message<"proto2_unittest.TestRedactedNestMessage"> & {
  /**
   * @generated from field: string foo = 1;
   */
  foo: string;
};

/**
 * Describes the message proto2_unittest.TestRedactedNestMessage.
 * Use `create(TestRedactedNestMessageSchema)` to create a new message.
 */
export declare const TestRedactedNestMessageSchema: GenMessage<TestRedactedNestMessage>;

/**
 * @generated from message proto2_unittest.TestRepeatedRedactedNestMessage
 */
export declare type TestRepeatedRedactedNestMessage = Message<"proto2_unittest.TestRepeatedRedactedNestMessage"> & {
  /**
   * @generated from field: string bar = 1;
   */
  bar: string;
};

/**
 * Describes the message proto2_unittest.TestRepeatedRedactedNestMessage.
 * Use `create(TestRepeatedRedactedNestMessageSchema)` to create a new message.
 */
export declare const TestRepeatedRedactedNestMessageSchema: GenMessage<TestRepeatedRedactedNestMessage>;

/**
 * @generated from message proto2_unittest.TestMessageEnum
 */
export declare type TestMessageEnum = Message<"proto2_unittest.TestMessageEnum"> & {
  /**
   * @generated from field: repeated proto2_unittest.MetaAnnotatedEnum redactable_enum = 1;
   */
  redactableEnum: MetaAnnotatedEnum[];
};

/**
 * Describes the message proto2_unittest.TestMessageEnum.
 * Use `create(TestMessageEnumSchema)` to create a new message.
 */
export declare const TestMessageEnumSchema: GenMessage<TestMessageEnum>;

/**
 * @generated from message proto2_unittest.TestNestedMessageEnum
 */
export declare type TestNestedMessageEnum = Message<"proto2_unittest.TestNestedMessageEnum"> & {
  /**
   * @generated from field: repeated proto2_unittest.MetaAnnotatedEnum direct_enum = 1;
   */
  directEnum: MetaAnnotatedEnum[];

  /**
   * @generated from field: proto2_unittest.TestMessageEnum nested_enum = 2;
   */
  nestedEnum?: TestMessageEnum;

  /**
   * @generated from field: string redacted_string = 3;
   */
  redactedString: string;
};

/**
 * Describes the message proto2_unittest.TestNestedMessageEnum.
 * Use `create(TestNestedMessageEnumSchema)` to create a new message.
 */
export declare const TestNestedMessageEnumSchema: GenMessage<TestNestedMessageEnum>;

/**
 * @generated from message proto2_unittest.TestRedactedMessage
 */
export declare type TestRedactedMessage = Message<"proto2_unittest.TestRedactedMessage"> & {
  /**
   * @generated from field: string text_field = 1 [deprecated = true];
   * @deprecated
   */
  textField: string;

  /**
   * @generated from field: string meta_annotated = 8;
   */
  metaAnnotated: string;

  /**
   * @generated from field: string repeated_meta_annotated = 9;
   */
  repeatedMetaAnnotated: string;

  /**
   * @generated from field: string unredacted_repeated_annotations = 10;
   */
  unredactedRepeatedAnnotations: string;

  /**
   * @generated from field: string unreported_non_meta_debug_redact_field = 17;
   */
  unreportedNonMetaDebugRedactField: string;

  /**
   * @generated from field: google.protobuf.Any any_field = 18;
   */
  anyField?: Any;

  /**
   * @generated from field: string redactable_false = 19;
   */
  redactableFalse: string;

  /**
   * @generated from field: string test_direct_message_enum = 22;
   */
  testDirectMessageEnum: string;

  /**
   * @generated from field: string test_nested_message_enum = 23;
   */
  testNestedMessageEnum: string;

  /**
   * @generated from field: string test_redacted_message_enum = 24;
   */
  testRedactedMessageEnum: string;
};

/**
 * Describes the message proto2_unittest.TestRedactedMessage.
 * Use `create(TestRedactedMessageSchema)` to create a new message.
 */
export declare const TestRedactedMessageSchema: GenMessage<TestRedactedMessage>;

/**
 * @generated from enum proto2_unittest.MetaAnnotatedEnum
 */
export enum MetaAnnotatedEnum {
  /**
   * @generated from enum value: TEST_NULL = 0;
   */
  TEST_NULL = 0,

  /**
   * @generated from enum value: TEST_REDACTABLE = 1;
   */
  TEST_REDACTABLE = 1,

  /**
   * @generated from enum value: TEST_NO_REDACT = 2;
   */
  TEST_NO_REDACT = 2,

  /**
   * @generated from enum value: TEST_NO_REDACT_AGAIN = 3;
   */
  TEST_NO_REDACT_AGAIN = 3,

  /**
   * @generated from enum value: TEST_REDACTABLE_FALSE = 4;
   */
  TEST_REDACTABLE_FALSE = 4,
}

/**
 * Describes the enum proto2_unittest.MetaAnnotatedEnum.
 */
export declare const MetaAnnotatedEnumSchema: GenEnum<MetaAnnotatedEnum>;

/**
 * @generated from extension: proto2_unittest.MetaAnnotatedEnum meta_annotated_enum = 535801413;
 */
export declare const meta_annotated_enum: GenExtension<FieldOptions, MetaAnnotatedEnum>;

/**
 * @generated from extension: repeated proto2_unittest.MetaAnnotatedEnum repeated_meta_annotated_enum = 535801414;
 */
export declare const repeated_meta_annotated_enum: GenExtension<FieldOptions, MetaAnnotatedEnum[]>;

/**
 * @generated from extension: proto2_unittest.TestNestedMessageEnum test_nested_message_enum = 535801415;
 */
export declare const test_nested_message_enum: GenExtension<FieldOptions, TestNestedMessageEnum>;

