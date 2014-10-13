#!/bin/bash
#sets up a basic webserver for game testing

#random port selected
port=$(( ( RANDOM % 1000 )  + 8000 ))

echo "Starting server and browser..."
echo "Press <Ctrl+C> to stop server."
xdg-open "http://localhost:$port" &
busybox httpd -p $port -f
