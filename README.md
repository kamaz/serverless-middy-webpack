Building Repository
===================

```shell
serverless create --template aws-nodejs --path service-1
cd services/service-1
yarn init
yarn add @middy/core @middy/http-error-handler @middy/http-event-normalizer @middy/http-header-normalizer @middy/http-json-body-parser @middy/sqs-json-body-parser @middy/ssm @middy/validator
yarn add -D serverless-webpack serverless webpack

serverless create --template aws-nodejs --path service-2
cd services/service-2
yarn init
yarn add @middy/core @middy/http-error-handler @middy/http-event-normalizer @middy/http-header-normalizer @middy/http-json-body-parser @middy/sqs-json-body-parser @middy/ssm @middy/validator
yarn add -D serverless-webpack serverless webpack
```

Reproduce steps
===============

```shell
yarn
cd services/service-2
yarn sls package
```
