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

// Author: kenton@google.com (Kenton Varda)
//  Based on original Protocol Buffers design by
//  Sanjay Ghemawat, Jeff Dean, and others.
//
// A proto file which is imported by unittest.proto to test importing.

// @generated by protoc-gen-es v2.6.2 with parameter "target=js+dts,import_extension=js"
// @generated from file google/protobuf/unittest_import.proto (package proto2_unittest_import, syntax proto2)
/* eslint-disable */

// We don't put this in a package within proto2 because we need to make sure
// that the generated code doesn't depend on being in the proto2 namespace.
// In test_util.h we do
// "using namespace unittest_import = proto2_unittest_import".

import { enumDesc, fileDesc, messageDesc, tsEnum } from "@bufbuild/protobuf/codegenv2";
import { file_google_protobuf_unittest_import_public } from "./unittest_import_public_pb.js";

/**
 * Describes the file google/protobuf/unittest_import.proto.
 */
export const file_google_protobuf_unittest_import = /*@__PURE__*/
  fileDesc("CiVnb29nbGUvcHJvdG9idWYvdW5pdHRlc3RfaW1wb3J0LnByb3RvEhZwcm90bzJfdW5pdHRlc3RfaW1wb3J0IhoKDUltcG9ydE1lc3NhZ2USCQoBZBgBIAEoBSo8CgpJbXBvcnRFbnVtEg4KCklNUE9SVF9GT08QBxIOCgpJTVBPUlRfQkFSEAgSDgoKSU1QT1JUX0JBWhAJKjEKEEltcG9ydEVudW1Gb3JNYXASCwoHVU5LTk9XThAAEgcKA0ZPTxABEgcKA0JBUhACQh8KGGNvbS5nb29nbGUucHJvdG9idWYudGVzdEgB+AEBUAA", [file_google_protobuf_unittest_import_public]);

/**
 * Describes the message proto2_unittest_import.ImportMessage.
 * Use `create(ImportMessageSchema)` to create a new message.
 */
export const ImportMessageSchema = /*@__PURE__*/
  messageDesc(file_google_protobuf_unittest_import, 0);

/**
 * Describes the enum proto2_unittest_import.ImportEnum.
 */
export const ImportEnumSchema = /*@__PURE__*/
  enumDesc(file_google_protobuf_unittest_import, 0);

/**
 * @generated from enum proto2_unittest_import.ImportEnum
 */
export const ImportEnum = /*@__PURE__*/
  tsEnum(ImportEnumSchema);

/**
 * Describes the enum proto2_unittest_import.ImportEnumForMap.
 */
export const ImportEnumForMapSchema = /*@__PURE__*/
  enumDesc(file_google_protobuf_unittest_import, 1);

/**
 * To use an enum in a map, it must has the first value as 0.
 *
 * @generated from enum proto2_unittest_import.ImportEnumForMap
 */
export const ImportEnumForMap = /*@__PURE__*/
  tsEnum(ImportEnumForMapSchema);

