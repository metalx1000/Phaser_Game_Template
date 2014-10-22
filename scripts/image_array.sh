#!/bin/bash

array="data/images.js"

echo -n "[" >$array
ls res/*.png|while read file
do
    item="$(echo -n "$file"|cut -d\/ -f2|cut -d\. -f1)"
    echo -n "\"$item\"," >> $array
done

echo -n "]" >> $array

sed -i 's/,]/]/g' $array
