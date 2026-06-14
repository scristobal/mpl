  test:http_requests_total
  | sample d
  | where code >= 500
  | group using sum

