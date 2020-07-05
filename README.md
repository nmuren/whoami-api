# API Project: Timestamp Microservice

### User stories:

1. The API endpoint is `GET [project_url]/api/timestamp/:date_string?`
2. A date string is valid if can be successfully parsed by `new Date(date_string)` (JS) . Note that the unix timestamp needs to be an **integer** (not a string) specifying **milliseconds**. In our test we will use date strings compliant with ISO-8601 (e.g. `"2016-11-20"`) because this will ensure an UTC timestamp.
3. If the date string is **empty** it should be equivalent to trigger `new Date()`, i.e. the service uses the current timestamp.
4. If the date string is **valid** the api returns a JSON having the structure
   `{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }`
   e.g. `{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}`.
5. If the date string is **invalid** the api returns a JSON having the structure `{"error" : "Invalid Date" }`.

#### Example usage:

- [**[project url]/api/timestamp/**](https://timestamp-api-orara.glitch.me/api/timestamp/)
- [**[project url]/api/timestamp/2020-07-01**](https://timestamp-api-orara.glitch.me/api/timestamp/2020-07-01)
- [**[project url]/api/timestamp/1593746173079**](https://timestamp-api-orara.glitch.me/api/timestamp/1593746173079)

#### Example output:

- {"unix":1593746173079,"utc":"Fri, 03 Jul 2020 03:16:13 GMT"}
