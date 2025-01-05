"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[824],{43451:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return l},default:function(){return m}});var t=n(87462),s=n(63366),r=(n(15007),n(64983)),o=n(91515),i=["components"],l={},d={_frontmatter:l},p=o.Z;function m(e){var a=e.components,n=(0,s.Z)(e,i);return(0,r.mdx)(p,(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"globalization-translation-service-apis"},"Globalization Translation Service APIs"),(0,r.mdx)("p",null,"What do you want to understand today?"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"#overview"},"Overview of Globalization Translation Service APIs")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"#apis-for-globalization-translation-service"},"APIs for Globalization Translation Service")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"#search-tasks-api"},"Search tasks API")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"#claim-task-api"},"Claim task API")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"#export-package-api"},"Export package API")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"#export-package-status-api"},"Export package status API")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"#import-package-api"},"Import package API")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"#import-package-status-api"},"Import package status API"))),(0,r.mdx)("h2",{id:"overview"},"Overview"),(0,r.mdx)("p",null,"Globalization Trasnslation Service APIs are divided into four categories: fetching, claiming, exporting, and importing."),(0,r.mdx)("h2",{id:"search-tasks-api"},"Search tasks API"),(0,r.mdx)("p",null,"This API retrieves all tasks based on search criteria passed inside payload. It returns information such as task name, locale, state, workflowName, number of assets etc."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Path: /v1/task/search?tenantId={tenant_Id}&userGroupName={user_group_name}&page={page}&size={size}")),(0,r.mdx)("h3",{id:"key-parameters"},"Key Parameters"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("strong",{parentName:"li"},"tenantId"),": The unique ID of the tenant within a customer org."),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("strong",{parentName:"li"},"userGroupName"),": Vendor company name to which tasks are assigned."),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("strong",{parentName:"li"},"page"),": Page number of the pagination."),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("strong",{parentName:"li"},"size"),": Size of each page.")),(0,r.mdx)("h3",{id:"request-url"},"Request URL"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"curl --request GET \\\n  --url 'https://ali-service.adobe.io/tie/api/v1/task/search?tenantId=<tenant_Id>&userGroupName=<user_group_name>&page=<page_no>&size=<page_size>' \\\n  --header 'Authorization: Bearer eyJhbGciOiJS....' \\\n  --header 'x-api-key: <client_id>'\n")),(0,r.mdx)("h3",{id:"request-payload"},"Request Payload"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'{\n  "completionDate": {\n    "endDate": "string",\n    "startDate": "string"\n  },\n  "creationDate": {\n    "endDate": "string",\n    "startDate": "string"\n  },\n  "locale": "string",\n  "minAssignedAssets": 0,\n  "minTranslatedWords": 0,\n  "minWords": 0,\n  "productName": "string",\n  "projectName": "string",\n  "statusList": [\n    "CANCELLED"\n  ],\n  "taskName": "string",\n  "workflowType": [\n    "Document_Translation"\n  ]\n}\n')),(0,r.mdx)("h3",{id:"responses"},"Responses"),(0,r.mdx)("p",null,"You get the following responses:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("strong",{parentName:"li"},"200 OK"),": The 200 OK status code indicates that the request has been processed successfully on the server"),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("strong",{parentName:"li"},"401 Unauthorized"),": The 401 unauthorized error status response code indicates that the request was not processed because the destination resource's authentication credentials were invalid. Reauthenticating with right credentials is recommended."),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("strong",{parentName:"li"},"403 Forbidden"),": The 403 Forbidden error status code indicates that the server has received the request but has refused to allow it. The client may have insufficient rights to a resource."),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("strong",{parentName:"li"},"404 Not Found"),": The 404 error is returned when the server can't find the requested resource. It could be broken or dead link because of file movements or entering a non-existent task name.")),(0,r.mdx)("h3",{id:"understanding-the-successful-response"},"Understanding the successful response"),(0,r.mdx)("p",null,"The following is the successful response with the 200 Response code."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'{\n  "totalCount": 1,\n  "tasks": [\n    {\n      "taskName": "Adobe Connect_1727476096_Auto_27Sep24_de-DE",\n      "locale": "de-DE",\n      "workflowType": "Document_Translation",\n      "status": "READY_TO_TRANSLATE",\n      "acl": {\n        "vendors": {\n          "translators": [\n            "Moravia"\n          ],\n          "reviewers": []\n        },\n        "users": {\n          "translators": [],\n          "reviewers": []\n        }\n      },\n      "totalAssets": 2,\n      "claimedAssets": 0,\n      "assignedAssets": 0,\n      "totalWords": 646,\n      "translatedWords": 611,\n      "translatedPercentage": 95,\n      "reviewedWords": 0,\n      "reviewedPercentage": 0,\n      "creationDate": "2024-09-27 22:30:25",\n      "completionDate": null,\n      "claimedBy": null,\n      "sourceIdentifier": {\n        "identifiers": [\n          {\n            "key": "ProjectName",\n            "value": "Connect_Branch"\n          },\n          {\n            "key": "ProductName",\n            "value": "Adobe Connect"\n          }\n        ]\n      },\n      "scopingInfo": {\n        "total": 646,\n        "iceMatched": 582,\n        "match100": 32,\n        "match100_95": 15,\n        "match95_75": 0,\n        "match75_0": 17,\n        "repetitions": 56,\n        "mtFuzzyWords": 0\n      },\n      "config": {\n        "properties": {\n          "leveragingServiceTenantId": "adobe connect_docs",\n          "catsIMTOnlyConfig": [\n            {\n              "key": "catsIMTOnly",\n              "value": "false"\n            }\n          ],\n          "contentSource": "Help",\n          "leverageSource": [\n            {\n              "key": "leverageSource",\n              "value": "leverage-service"\n            }\n          ],\n          "requestId": "68PNlS5b8S0yDljvvrW3huXF1ytFTidU",\n          "autoTranslationProviderInfo": {\n            "default": {\n              "name": "CLSMT Adapter:Amethyst Systran DME DOCS",\n              "engineType": "MT"\n            },\n            "providerList": [\n              {\n                "name": "CLSMT Adapter:Amethyst Systran DME DOCS",\n                "engineType": "MT"\n              }\n            ]\n          },\n          "translationConfig": [\n            {\n              "key": "translationConfig",\n              "value": null\n            }\n          ]\n        }\n      },\n      "workflowInstanceId": "{\\"workflowInstanceId\\":\\"c6245131-21d6-48e7-a3e4-88ea9cd3d12b\\",\\"workflowWorkspaceId\\":\\"workflows/system_CATSI_TASK_CREATION_WORKFLOW-cdt4733/cce90670-1cd0-42da-a511-d22d12f2afa2/\\"}",\n      "externalTaskName": "Adobe Connect_1727476096_Auto_27Sep24",\n      "claimedStatus": "UNCLAIM"\n    }\n  ]\n}\n')),(0,r.mdx)("p",null,"Here are the key sections in the response:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"taskName"),": This field represents the name of the task."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"tenantId"),": The unique ID of the tenant within a customer org."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"status"),": This field indicates the task's current status"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"locale"),": ield shows the language locale of the task"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"workflowType"),': he "workflowType" field indicates the type of workflow,.'),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"totalAssets"),": A field indicates the total number of assets in the task,"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"totalWords"),": A field provides the total word count for the task"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"translatedWords"),": A field shows how many words have been translated"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"sourceIdentifier"),": This field contains additional metadata about the project or product."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"scopingInfo"),":A field provides details about the word matches, repetitions, and MT fuzzy words")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"<tenant_id>/<ProjectId>/<TaskId>/normalized/<AssetName>.json/en-US/<AssetName>.json.xlf\n")),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},(0,r.mdx)("strong",{parentName:"p"},"Note"),": To know more about the Get Asset API, see ",(0,r.mdx)("a",{parentName:"p",href:"https://gcscore-dev-va7.stage.cloud.adobe.io/swagger-ui/index.html#/Asset%20Service/getAssetsUsingGET"},"Get All Assets in Swagger"),".")),(0,r.mdx)("h2",{id:"claim-task-api"},"Claim task API"),(0,r.mdx)("p",null,"This Claim task API claims task by any user.\nThis api marks task as claimed by the person used inside it's request payload.."),(0,r.mdx)("h3",{id:"request-url-1"},"Request URL"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"curl --request GET \\\n  --url 'https://ali-service-stage.adobe.io/tie/api/v1/task/<task_name>/claim?tenantId=<tenant_id>' \\\n  --header 'Authorization: Bearer eyJhbGciOiJSU....' \\\n  --header 'x-api-key: <client_id>'\n")),(0,r.mdx)("h3",{id:"request-payload-1"},"Request Payload"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'{\n  "claimedStatus": "CLAIM_IN_PROGRESS",\n  "claimedBy": ""\n}\n')),(0,r.mdx)("h3",{id:"response-payload"},"Response Payload"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'{\n  "taskName": "Sample_TestTaskTranscreation_11_fr-FR",\n  "locale": "fr-FR",\n  "workflowType": "Transcreation",\n  "status": "READY_TO_TRANSCREATE",\n  "acl": {\n    "vendors": {\n      "translators": [\n        "Transcreator_Test_Internal"\n      ],\n      "reviewers": []\n    },\n    "users": {\n      "translators": [],\n      "reviewers": []\n    }\n  },\n  "totalAssets": 1,\n  "claimedAssets": 0,\n  "assignedAssets": 0,\n  "totalWords": 119,\n  "translatedWords": 110,\n  "translatedPercentage": 100,\n  "reviewedWords": 0,\n  "reviewedPercentage": 0,\n  "creationDate": "2024-07-18 09:45:16",\n  "completionDate": null,\n  "claimedBy": "sunshah@adobe.com",\n  "sourceIdentifier": {\n    "identifiers": [\n      {\n        "key": "ProjectName",\n        "value": "WorkfrontFusion_CATSi"\n      },\n      {\n        "key": "ProductName",\n        "value": "SWValidator"\n      }\n    ]\n  },\n  "scopingInfo": {\n    "total": 119,\n    "iceMatched": 0,\n    "match100": 12,\n    "match100_95": 0,\n    "match95_75": 0,\n    "match75_0": 107,\n    "repetitions": 0,\n    "mtFuzzyWords": 0\n  },\n  "config": {\n    "properties": {\n      "gLaaSAIConfig": [\n        {\n          "key": "gLaaSAIConfig",\n          "value": "{\\"briefs\\":[{\\"key\\":\\"Type of Email\\",\\"displayName\\":\\"Type of Email\\",\\"value\\":\\"Product launch\\",\\"type\\":\\"dropdown\\",\\"possibleValues\\":[\\"Product launch\\",\\"Welcome email\\",\\"New feature\\"],\\"isOptional\\":false},{\\"key\\":\\"Target Audience\\",\\"displayName\\":\\"Target Audience\\",\\"value\\":\\"New customers\\",\\"type\\":\\"dropdown\\",\\"possibleValues\\":[\\"New customers\\",\\"Prospective customer\\",\\"Existing users\\"],\\"isOptional\\":false},{\\"key\\":\\"Pre-header\\",\\"displayName\\":\\"Pre-header\\",\\"value\\":\\"Discover the new features.\\",\\"type\\":\\"textbox\\",\\"possibleValues\\":null,\\"isOptional\\":false},{\\"key\\":\\"Subject\\",\\"displayName\\":\\"Subject\\",\\"value\\":\\"New Product Launch\\",\\"type\\":\\"textbox\\",\\"possibleValues\\":null,\\"isOptional\\":false},{\\"key\\":\\"Primary goal of email\\",\\"displayName\\":\\"Primary goal of email\\",\\"value\\":\\"Introducing the latest product.\\",\\"type\\":\\"textbox\\",\\"possibleValues\\":null,\\"isOptional\\":false},{\\"key\\":\\"Call to action\\",\\"displayName\\":\\"Call to action\\",\\"value\\":\\"Act now\\",\\"type\\":\\"dropdown\\",\\"possibleValues\\":[\\"Act now\\",\\"Add to cart\\",\\"Animate your video\\",\\"Attend the event\\"],\\"isOptional\\":false},{\\"key\\":\\"Tone of email\\",\\"displayName\\":\\"Tone of email\\",\\"value\\":\\"Professional\\",\\"type\\":\\"dropdown\\",\\"possibleValues\\":[\\"Professional\\",\\"Formal\\",\\"Informal\\"],\\"isOptional\\":false},{\\"key\\":\\"Number of paragraph\\",\\"displayName\\":\\"Number of paragraph\\",\\"value\\":\\"2\\",\\"type\\":\\"dropdown\\",\\"possibleValues\\":[\\"1\\",\\"2\\",\\"3\\"],\\"isOptional\\":false},{\\"key\\":\\"Description\\",\\"displayName\\":\\"Description\\",\\"value\\":\\"Discover the next generation of innovation with our latest product launch.\\",\\"type\\":\\"textbox\\",\\"possibleValues\\":null,\\"isOptional\\":false}]}"\n        }\n      ],\n      "leveragingServiceTenantId": "wcms_transcreation_adhoc",\n      "catsIMTOnlyConfig": [\n        {\n          "key": "catsIMTOnly",\n          "value": "true"\n        }\n      ],\n      "leverageSource": [\n        {\n          "key": "leverageSource",\n          "value": null\n        }\n      ],\n      "requestId": "LtBlYVcblAR5eKAP3d3xseEZKgN2dcYL",\n      "autoTranslationProviderInfo": {},\n      "translationConfig": [\n        {\n          "key": "translationConfig",\n          "value": null\n        }\n      ]\n    }\n  },\n  "workflowInstanceId": "M:f249e3ee-1088-429e-9097-c0bbb8e4b845",\n  "externalTaskName": "Sample_TestTaskTranscreation_11",\n  "claimedStatus": "CLAIM_IN_PROGRESS"\n}\n')),(0,r.mdx)("h3",{id:"successful-response"},"Successful response"),(0,r.mdx)("p",null,"The following is the successful response which is a byte stream with the 200 Response code."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'Content of asset as byte array with Content-Type as    "application/octet-stream;charset=UTF-8"\n')),(0,r.mdx)("h2",{id:"export-package-api"},"Export package API"),(0,r.mdx)("p",null,"This export package API is used to download the translation package for offline processing.\nTranslation package generation is an async process so it returns export request id, which is then used to check status of download package.."),(0,r.mdx)("h3",{id:"request-url-2"},"Request URL"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"curl --request POST \\\n  --url https://ali-service-stage.adobe.io/tie/api/v1/translation-package/export?tenantId=<tenant_id> \\\n  --header 'Authorization: Bearer eyJhbGci...O_meqYghG0IX5jA' \\\n  --header 'x-api-key: <client_id>' \\\n")),(0,r.mdx)("h3",{id:"request-payload-2"},"Request Payload"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'{\n  "taskNames": [\n    "TestProductEk_9232469964_de-DE"\n  ],\n  "packageType": "WSXZ",\n  "allAssets": true\n}\n')),(0,r.mdx)("h3",{id:"successful-response-1"},"Successful response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'{\n  "exportRequestStatusList": [\n    {\n      "taskName": "TestProductEk_9232469964_de-DE",\n      "exportRequestId": "ouO5hroKuVxZLSXj6RoBMckxgsDZonJJ",\n      "status": "REQUESTED"\n    }\n  ]\n}\n')),(0,r.mdx)("h2",{id:"export-package-status-api"},"Export package status API"),(0,r.mdx)("p",null,"This API check status of export package by passing export request id returned by export package api.\nThis api returns signed url of package if package is ready.This signed url is then used to download package.\nExpiry time of signed url is 15 mins."),(0,r.mdx)("h3",{id:"request-url-3"},"Request URL"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"curl --request POST \\\n  --url  https://ali-service-stage.adobe.io/tie/api/v1/translation-package/status?tenantId=<tenant_id> \\\n  --header 'Authorization: Bearer eyJhbGci...O_meqYghG0IX5jA' \\\n  --header 'x-api-key: <client_id>' \\\n")),(0,r.mdx)("h3",{id:"request-payload-3"},"Request Payload"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'{\n  "exportRequestDtoList": [\n    {\n      "taskName": "TestProductEk_9232469964_de-DE",\n      "exportRequestId": "ouO5hroKuVxZLSXj6RoBMckxgsDZonJJ"\n    }\n  ]\n}\n')),(0,r.mdx)("h3",{id:"successful-response-2"},"Successful response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'{\n  "status": "READY_TO_DOWNLOAD",\n  "packageDownloadUrl": "https://tiestoragestg.blob.core.windows.net/tie-stage/translation-package/TestProductEk_9232469964_de-DE/ouO5hroKuVxZLSXj6RoBMckxgsDZonJJ/TestProductEk_9232469964_de-DE.wsxz?sv=2021-08-06&spr=https&se=2024-10-06T22%3A33%3A17Z&sr=b&sp=r&sig=7Yki8hGrjpK315Bqq0ZaUfSUO%2BHtfy3x%2FzgHlHsyhJw%3D"\n}\n')),(0,r.mdx)("h2",{id:"import-package-api"},"Import package API"),(0,r.mdx)("p",null,"This import package API upload the translated package back to CATSI.\nThis api takes translated package file."),(0,r.mdx)("h3",{id:"request-url-4"},"Request URL"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"curl --request POST \\\n  --url  https://ali-service-stage.adobe.io/tie/api/v1/translation-package/import?tenantId=,tenant_id.&taskName=<task_name> \\\n  --header 'Authorization: Bearer eyJhbGci...O_meqYghG0IX5jA' \\\n  --header 'x-api-key: <client_id>' \\\n")),(0,r.mdx)("h3",{id:"request-payload-4"},"Request Payload"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"")),(0,r.mdx)("h3",{id:"successful-response-3"},"Successful response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'{"importRequestId":"RZsTANGW55i76eRGCkKx60YYf6Gac9TX"}\n')),(0,r.mdx)("h2",{id:"import-package-status-api"},"Import package status API"),(0,r.mdx)("p",null,"This api track status of import package request. This api takes import request id in it's payload.\nImport request id is returned in response of import package api"),(0,r.mdx)("h3",{id:"request-url-5"},"Request URL"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},"curl --request POST \\\n  --url  https://ali-service-stage.adobe.io/tie/api/v1/translation-package/import/status?tenantId=<tenant_id> \\\n  --header 'Authorization: Bearer eyJhbGci...O_meqYghG0IX5jA' \\\n  --header 'x-api-key: <client_id>' \\\n")),(0,r.mdx)("h3",{id:"request-payload-5"},"Request Payload"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'{\n    "importRequestId" : "juVMtL2Is7goOCe2eQB0f8LPpQbx39E4",\n    "taskName" : "TestHelpEKALI_1727425378__fr-FR"\n}\n')),(0,r.mdx)("h3",{id:"successful-response-4"},"Successful response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-java"},'{\n    "status": "IMPORTED_SUCCESSFULLY"\n}\n')))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-index-md-6cfbd07ff9905c5e16c6.js.map