(disable-warning
 {:linter :wrong-arity
  :function-symbol 'amazonica.aws.dynamodbv2/query
  :arglists-for-linting
  '([config & rest])
  :reason "amazonica.aws.dynamodbv2/query gives just [query-request] as parameter."})
(disable-warning
 {:linter :wrong-arity
  :function-symbol 'amazonica.aws.dynamodbv2/batch-write-item
  :arglists-for-linting
  '([config & rest])
  :reason "amazonica.aws.dynamodbv2/batch-write-item gives just [query-request] as parameter."})
(disable-warning
 {:linter :wrong-arity
  :function-symbol 'amazonica.aws.dynamodbv2/put-item
  :arglists-for-linting
  '([config & rest])
  :reason "amazonica.aws.dynamodbv2/put-item gives just [query-request] as parameter."})
(disable-warning
 {:linter :wrong-arity
  :function-symbol 'amazonica.aws.dynamodbv2/delete-item
  :arglists-for-linting
  '([config & rest])
  :reason "amazonica.aws.dynamodbv2/delete-item gives just [query-request] as parameter."})
