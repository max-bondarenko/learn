#!/bin/sh
DIR="$(dirname "$(realpath "$0")")"
PID_FILE=./tmp/mongo.pid
PID=`cat $PID_FILE`
cd $DIR

if [ -e ${PID_FILE} ]; then
    if [ "stop" = $1 ]; then
        kill -15 $PID && rm $PID_FILE;
    else
        exit 0;
    fi

else (
    mongod -f ./db/mongo.config.yaml &
    echo  $! > $PID_FILE
    )

fi



