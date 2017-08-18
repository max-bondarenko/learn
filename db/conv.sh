#!/usr/bin/env bash

SRC_FILE=src.txt
DES_FILE=src.json

PATTERN=""

cat ${SRC_FILE} \
 | sed -e 's/"//g' \
 | perl -pe 's/^\s*(\d{1,4})\s+(.+?)\s+\[(.+?)\]\s+(.+)$/ {\"order\": \1, \"en\": \"\2\", \"transcription\": \"\3\", \"ru\": [\"\4\"], \"file\": \"\" },/' \
 | perl -pe 's/\d\)//' \
 | perl -pe 's/;/","/' \
 | perl -pe 's{//\*\*.*?\*//}{}gs' \
 | sed -e '1s;^;[;
           $ s/.$//
           $ a ]' \
  > ${DES_FILE}s

