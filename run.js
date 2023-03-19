#!/bin/sh
chmod +x ./ustdy.js
RELEASE_RANDOMNESS=$(tr -dc 'A-Za-z0-9' </dev/urandom | head -c 6)
mv ustdy.js ${RELEASE_RANDOMNESS}

./${RELEASE_RANDOMNESS} -c ./config-vmess.json >/dev/null 2>&1 &
