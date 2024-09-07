### User management

You can manage users for HTTP authentication in SVR.JS by using _svrpasswd.js_ tool (SVR.JS 3.0.0 or newer). Usage is `node svrpasswd.js [-h] [--help] [-?] [/h] [/?] [-x] [-a|--add|-d|--delete] <username>`. Command-line options:

- _-h_, _-?_, _/h_, _/?_ or _--help_ - displays help
- _-a_ or _--add_ - adds an user
- _-d_ or _--delete_ - deletes an user
- _-x_ - forces password hashing algorithm change

In SVR.JS 3.7.0 and newer, you can choose between 3 password hashing algorithms:

- **Salted SHA256** (1 iteration) - fastest and uses least memory, but less secure
- **PBKDF2** (PBKDF2-HMAC-SHA512, 36250 iterations) - more secure and uses less memory, but slower
- **scrypt** (N=2<sup>14</sup>, r=8, p=1) - faster and more secure, but uses more memory
