#!/bin/sh
DIR="$(dirname "$(realpath "$0")")"
PID_FILE=./tmp/mongod.pid
PID=
cd $DIR

if [ -e ${PID_FILE} ]; then (
    PID=`cat $PID_FILE` ;
    if [ "stop" = "$1" ]; then
        kill -15 $PID && rm $PID_FILE && echo stopped;
    else
        echo "running pid: $PID"; exit 0;
    fi
    )
else (
    mongod -f ./db/mongo.config.yaml &
    echo  $! > $PID_FILE
    )
fi



