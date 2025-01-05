# Globalization Translation Service APIs

What do you want to understand today?

1. [Overview of Globalization Translation Service APIs](#overview)
2. [APIs for Globalization Translation Service](#apis-for-globalization-translation-service)
3. [Search tasks API](#search-tasks-api)
4. [Claim task API](#claim-task-api)
5. [Export package API](#export-package-api)
6. [Export package status API](#export-package-status-api)
7. [Import package API](#import-package-api)
8. [Import package status API](#import-package-status-api)

## Overview

Globalization Trasnslation Service APIs are divided into four categories: fetching, claiming, exporting, and importing.

## Search tasks API

This API retrieves all tasks based on search criteria passed inside payload. It returns information such as task name, locale, state, workflowName, number of assets etc.

`Path: /v1/task/search?tenantId={tenant_Id}&userGroupName={user_group_name}&page={page}&size={size}`

### Key Parameters

1. **tenantId**: The unique ID of the tenant within a customer org.
2. **userGroupName**: Vendor company name to which tasks are assigned.
3. **page**: Page number of the pagination.
4. **size**: Size of each page.

### Request URL

```java
curl --request GET \
  --url 'https://ali-service.adobe.io/tie/api/v1/task/search?tenantId=<tenant_Id>&userGroupName=<user_group_name>&page=<page_no>&size=<page_size>' \
  --header 'Authorization: Bearer eyJhbGciOiJS....' \
  --header 'x-api-key: <client_id>'
```


### Request Payload
```java
{
  "completionDate": {
    "endDate": "string",
    "startDate": "string"
  },
  "creationDate": {
    "endDate": "string",
    "startDate": "string"
  },
  "locale": "string",
  "minAssignedAssets": 0,
  "minTranslatedWords": 0,
  "minWords": 0,
  "productName": "string",
  "projectName": "string",
  "statusList": [
    "CANCELLED"
  ],
  "taskName": "string",
  "workflowType": [
    "Document_Translation"
  ]
}
```

### Responses

You get the following responses:

1. **200 OK**: The 200 OK status code indicates that the request has been processed successfully on the server
1. **401 Unauthorized**: The 401 unauthorized error status response code indicates that the request was not processed because the destination resource's authentication credentials were invalid. Reauthenticating with right credentials is recommended.
1. **403 Forbidden**: The 403 Forbidden error status code indicates that the server has received the request but has refused to allow it. The client may have insufficient rights to a resource.
1. **404 Not Found**: The 404 error is returned when the server can't find the requested resource. It could be broken or dead link because of file movements or entering a non-existent task name.

### Understanding the successful response

The following is the successful response with the 200 Response code.

```java
{
  "totalCount": 1,
  "tasks": [
    {
      "taskName": "Adobe Connect_1727476096_Auto_27Sep24_de-DE",
      "locale": "de-DE",
      "workflowType": "Document_Translation",
      "status": "READY_TO_TRANSLATE",
      "acl": {
        "vendors": {
          "translators": [
            "Moravia"
          ],
          "reviewers": []
        },
        "users": {
          "translators": [],
          "reviewers": []
        }
      },
      "totalAssets": 2,
      "claimedAssets": 0,
      "assignedAssets": 0,
      "totalWords": 646,
      "translatedWords": 611,
      "translatedPercentage": 95,
      "reviewedWords": 0,
      "reviewedPercentage": 0,
      "creationDate": "2024-09-27 22:30:25",
      "completionDate": null,
      "claimedBy": null,
      "sourceIdentifier": {
        "identifiers": [
          {
            "key": "ProjectName",
            "value": "Connect_Branch"
          },
          {
            "key": "ProductName",
            "value": "Adobe Connect"
          }
        ]
      },
      "scopingInfo": {
        "total": 646,
        "iceMatched": 582,
        "match100": 32,
        "match100_95": 15,
        "match95_75": 0,
        "match75_0": 17,
        "repetitions": 56,
        "mtFuzzyWords": 0
      },
      "config": {
        "properties": {
          "leveragingServiceTenantId": "adobe connect_docs",
          "catsIMTOnlyConfig": [
            {
              "key": "catsIMTOnly",
              "value": "false"
            }
          ],
          "contentSource": "Help",
          "leverageSource": [
            {
              "key": "leverageSource",
              "value": "leverage-service"
            }
          ],
          "requestId": "68PNlS5b8S0yDljvvrW3huXF1ytFTidU",
          "autoTranslationProviderInfo": {
            "default": {
              "name": "CLSMT Adapter:Amethyst Systran DME DOCS",
              "engineType": "MT"
            },
            "providerList": [
              {
                "name": "CLSMT Adapter:Amethyst Systran DME DOCS",
                "engineType": "MT"
              }
            ]
          },
          "translationConfig": [
            {
              "key": "translationConfig",
              "value": null
            }
          ]
        }
      },
      "workflowInstanceId": "{\"workflowInstanceId\":\"c6245131-21d6-48e7-a3e4-88ea9cd3d12b\",\"workflowWorkspaceId\":\"workflows/system_CATSI_TASK_CREATION_WORKFLOW-cdt4733/cce90670-1cd0-42da-a511-d22d12f2afa2/\"}",
      "externalTaskName": "Adobe Connect_1727476096_Auto_27Sep24",
      "claimedStatus": "UNCLAIM"
    }
  ]
}
```

Here are the key sections in the response:

- **taskName**: This field represents the name of the task.
- **tenantId**: The unique ID of the tenant within a customer org.
- **status**: This field indicates the task's current status
- **locale**: ield shows the language locale of the task
- **workflowType**: he "workflowType" field indicates the type of workflow,.
- **totalAssets**: A field indicates the total number of assets in the task,
- **totalWords**: A field provides the total word count for the task
- **translatedWords**: A field shows how many words have been translated
- **sourceIdentifier**: This field contains additional metadata about the project or product.
- **scopingInfo**:A field provides details about the word matches, repetitions, and MT fuzzy words

```java
<tenant_id>/<ProjectId>/<TaskId>/normalized/<AssetName>.json/en-US/<AssetName>.json.xlf
```

> **Note**: To know more about the Get Asset API, see [Get All Assets in Swagger](https://gcscore-dev-va7.stage.cloud.adobe.io/swagger-ui/index.html#/Asset%20Service/getAssetsUsingGET).

## Claim task API

This Claim task API claims task by any user.
This api marks task as claimed by the person used inside it's request payload..

### Request URL

```java
curl --request GET \
  --url 'https://ali-service-stage.adobe.io/tie/api/v1/task/<task_name>/claim?tenantId=<tenant_id>' \
  --header 'Authorization: Bearer eyJhbGciOiJSU....' \
  --header 'x-api-key: <client_id>'
```

### Request Payload
```java
{
  "claimedStatus": "CLAIM_IN_PROGRESS",
  "claimedBy": ""
}
```

### Response Payload
```java
{
  "taskName": "Sample_TestTaskTranscreation_11_fr-FR",
  "locale": "fr-FR",
  "workflowType": "Transcreation",
  "status": "READY_TO_TRANSCREATE",
  "acl": {
    "vendors": {
      "translators": [
        "Transcreator_Test_Internal"
      ],
      "reviewers": []
    },
    "users": {
      "translators": [],
      "reviewers": []
    }
  },
  "totalAssets": 1,
  "claimedAssets": 0,
  "assignedAssets": 0,
  "totalWords": 119,
  "translatedWords": 110,
  "translatedPercentage": 100,
  "reviewedWords": 0,
  "reviewedPercentage": 0,
  "creationDate": "2024-07-18 09:45:16",
  "completionDate": null,
  "claimedBy": "sunshah@adobe.com",
  "sourceIdentifier": {
    "identifiers": [
      {
        "key": "ProjectName",
        "value": "WorkfrontFusion_CATSi"
      },
      {
        "key": "ProductName",
        "value": "SWValidator"
      }
    ]
  },
  "scopingInfo": {
    "total": 119,
    "iceMatched": 0,
    "match100": 12,
    "match100_95": 0,
    "match95_75": 0,
    "match75_0": 107,
    "repetitions": 0,
    "mtFuzzyWords": 0
  },
  "config": {
    "properties": {
      "gLaaSAIConfig": [
        {
          "key": "gLaaSAIConfig",
          "value": "{\"briefs\":[{\"key\":\"Type of Email\",\"displayName\":\"Type of Email\",\"value\":\"Product launch\",\"type\":\"dropdown\",\"possibleValues\":[\"Product launch\",\"Welcome email\",\"New feature\"],\"isOptional\":false},{\"key\":\"Target Audience\",\"displayName\":\"Target Audience\",\"value\":\"New customers\",\"type\":\"dropdown\",\"possibleValues\":[\"New customers\",\"Prospective customer\",\"Existing users\"],\"isOptional\":false},{\"key\":\"Pre-header\",\"displayName\":\"Pre-header\",\"value\":\"Discover the new features.\",\"type\":\"textbox\",\"possibleValues\":null,\"isOptional\":false},{\"key\":\"Subject\",\"displayName\":\"Subject\",\"value\":\"New Product Launch\",\"type\":\"textbox\",\"possibleValues\":null,\"isOptional\":false},{\"key\":\"Primary goal of email\",\"displayName\":\"Primary goal of email\",\"value\":\"Introducing the latest product.\",\"type\":\"textbox\",\"possibleValues\":null,\"isOptional\":false},{\"key\":\"Call to action\",\"displayName\":\"Call to action\",\"value\":\"Act now\",\"type\":\"dropdown\",\"possibleValues\":[\"Act now\",\"Add to cart\",\"Animate your video\",\"Attend the event\"],\"isOptional\":false},{\"key\":\"Tone of email\",\"displayName\":\"Tone of email\",\"value\":\"Professional\",\"type\":\"dropdown\",\"possibleValues\":[\"Professional\",\"Formal\",\"Informal\"],\"isOptional\":false},{\"key\":\"Number of paragraph\",\"displayName\":\"Number of paragraph\",\"value\":\"2\",\"type\":\"dropdown\",\"possibleValues\":[\"1\",\"2\",\"3\"],\"isOptional\":false},{\"key\":\"Description\",\"displayName\":\"Description\",\"value\":\"Discover the next generation of innovation with our latest product launch.\",\"type\":\"textbox\",\"possibleValues\":null,\"isOptional\":false}]}"
        }
      ],
      "leveragingServiceTenantId": "wcms_transcreation_adhoc",
      "catsIMTOnlyConfig": [
        {
          "key": "catsIMTOnly",
          "value": "true"
        }
      ],
      "leverageSource": [
        {
          "key": "leverageSource",
          "value": null
        }
      ],
      "requestId": "LtBlYVcblAR5eKAP3d3xseEZKgN2dcYL",
      "autoTranslationProviderInfo": {},
      "translationConfig": [
        {
          "key": "translationConfig",
          "value": null
        }
      ]
    }
  },
  "workflowInstanceId": "M:f249e3ee-1088-429e-9097-c0bbb8e4b845",
  "externalTaskName": "Sample_TestTaskTranscreation_11",
  "claimedStatus": "CLAIM_IN_PROGRESS"
}
```

### Successful response

The following is the successful response which is a byte stream with the 200 Response code.

```java
Content of asset as byte array with Content-Type as    "application/octet-stream;charset=UTF-8"
```

## Export package API

This export package API is used to download the translation package for offline processing.
Translation package generation is an async process so it returns export request id, which is then used to check status of download package..

### Request URL

```java
curl --request POST \
  --url https://ali-service-stage.adobe.io/tie/api/v1/translation-package/export?tenantId=<tenant_id> \
  --header 'Authorization: Bearer eyJhbGci...O_meqYghG0IX5jA' \
  --header 'x-api-key: <client_id>' \
```


### Request Payload

```java
{
  "taskNames": [
    "TestProductEk_9232469964_de-DE"
  ],
  "packageType": "WSXZ",
  "allAssets": true
}
```


### Successful response

```java
{
  "exportRequestStatusList": [
    {
      "taskName": "TestProductEk_9232469964_de-DE",
      "exportRequestId": "ouO5hroKuVxZLSXj6RoBMckxgsDZonJJ",
      "status": "REQUESTED"
    }
  ]
}
```

## Export package status API

This API check status of export package by passing export request id returned by export package api.
This api returns signed url of package if package is ready.This signed url is then used to download package.
Expiry time of signed url is 15 mins.

### Request URL

```java
curl --request POST \
  --url  https://ali-service-stage.adobe.io/tie/api/v1/translation-package/status?tenantId=<tenant_id> \
  --header 'Authorization: Bearer eyJhbGci...O_meqYghG0IX5jA' \
  --header 'x-api-key: <client_id>' \
```


### Request Payload

```java
{
  "exportRequestDtoList": [
    {
      "taskName": "TestProductEk_9232469964_de-DE",
      "exportRequestId": "ouO5hroKuVxZLSXj6RoBMckxgsDZonJJ"
    }
  ]
}
```


### Successful response

```java
{
  "status": "READY_TO_DOWNLOAD",
  "packageDownloadUrl": "https://tiestoragestg.blob.core.windows.net/tie-stage/translation-package/TestProductEk_9232469964_de-DE/ouO5hroKuVxZLSXj6RoBMckxgsDZonJJ/TestProductEk_9232469964_de-DE.wsxz?sv=2021-08-06&spr=https&se=2024-10-06T22%3A33%3A17Z&sr=b&sp=r&sig=7Yki8hGrjpK315Bqq0ZaUfSUO%2BHtfy3x%2FzgHlHsyhJw%3D"
}
```

## Import package API

This import package API upload the translated package back to CATSI.
This api takes translated package file.

### Request URL

```java
curl --request POST \
  --url  https://ali-service-stage.adobe.io/tie/api/v1/translation-package/import?tenantId=,tenant_id.&taskName=<task_name> \
  --header 'Authorization: Bearer eyJhbGci...O_meqYghG0IX5jA' \
  --header 'x-api-key: <client_id>' \
```


### Request Payload

```java

```


### Successful response

```java
{"importRequestId":"RZsTANGW55i76eRGCkKx60YYf6Gac9TX"}
```

## Import package status API

This api track status of import package request. This api takes import request id in it's payload.
Import request id is returned in response of import package api

### Request URL

```java
curl --request POST \
  --url  https://ali-service-stage.adobe.io/tie/api/v1/translation-package/import/status?tenantId=<tenant_id> \
  --header 'Authorization: Bearer eyJhbGci...O_meqYghG0IX5jA' \
  --header 'x-api-key: <client_id>' \
```


### Request Payload

```java
{
    "importRequestId" : "juVMtL2Is7goOCe2eQB0f8LPpQbx39E4",
    "taskName" : "TestHelpEKALI_1727425378__fr-FR"
}
```


### Successful response

```java
{
    "status": "IMPORTED_SUCCESSFULLY"
}
```
