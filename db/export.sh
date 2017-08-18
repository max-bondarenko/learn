#!/usr/bin/env bash
DES_FILE=src.json

mongoimport --db test --collection simple --jsonArray --file ${DES_FILE}