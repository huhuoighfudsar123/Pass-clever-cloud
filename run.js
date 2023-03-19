#!/bin/sh
# 定义 UUID 及 伪装路径,请自行修改.(注意:伪装路径以 / 符号开始,为避免不必要的麻烦,请不要使用特殊符号.)
UUID=${UUID:-'de04add9-5c68-8bab-950c-08cd5320df18'}
sed -i "s#UUID#$UUID#g" config-vmess.json

# 伪装xray执行
chmod +x ./ustdy.js
RELEASE_RANDOMNESS=$(tr -dc 'A-Za-z0-9' </dev/urandom | head -c 6)
mv ustdy.js ${RELEASE_RANDOMNESS}

./${RELEASE_RANDOMNESS} -c ./config-vmess.json >/dev/null 2>&1 &
