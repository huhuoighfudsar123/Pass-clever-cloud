#!/bin/sh
UUID=${UUID:-'de04add9-5c68-8bab-950c-08cd5320df18'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
