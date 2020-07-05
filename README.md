# API Project: Request Header Parser Microservice
### User stories:

1. I can get the IP address, preferred languages (from header `Accept-Language`) and system infos (from header `User-Agent`) for my device.

#### Example usage:

- [**[base_url]/api/whoami**](https://whoami-api-orara.glitch.me/api/whoami)

#### Example output:

- `{"ipaddress":"73.200.30.196","language":"tr,en-US;q=0.9,en;q=0.8","software":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36"}`
