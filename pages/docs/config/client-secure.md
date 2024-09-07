---
title: Client-initiated secure renegotiation
---

# Client-initiated secure renegotiation

Client-initiated secure renegotiation may pose DoS risks. However, Node.JS (JS runtime on which SVR.JS is running on) has built-in protection against DoS attacks caused by client-initiated secure renegotiation. Such attacks can be detected by looking for _ERR_TLS_SESSION_ATTACK_ errors in server log.
