#!/bin/sh
UUID=${UUID:-'f03b1c67-4b80-47bc-b17f-0ecf55abc6aa'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
