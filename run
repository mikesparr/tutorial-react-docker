#!/usr/bin/env bash
#

set -o nounset \
    -o errexit \
    -o verbose \
    -o xtrace


# Set environment values if they exist as arguments
if [ $# -ne 0 ]; then
  echo "===> Overriding env params with args ..."
  for var in "$@"
  do
    export "$var"
  done
fi

echo "===> ENV Variables ..."
env | sort

echo "===> User"
id

echo "===> Building ..."
npm run build --production

echo "===> Running ... "
exec serve -s build