#!/bin/bash

echo "Updating Image Array File..."
array="data/images.js"

echo -n "[" >$array
ls res/*.png|while read file
do
    item="$(echo -n "$file"|cut -d\/ -f2|cut -d\. -f1)"
    echo -n "\"$item\"," >> $array
done

echo -n "]" >> $array

sed -i 's/,]/]/g' $array


echo "Updating MANIFEST file for offline mode..."

echo "CACHE MANIFEST" > site.manifest &&
echo "" >> site.manifest &&
echo "# version $(date +%s)" >> site.manifest && 
find . -type f -name "*" \
    ! -path "./.git/*" \
    ! -path "./site.manifest"\
    ! -path "./scripts/*.sh"\
    ! -path "$0" \
    ! -path "./misc/*"|sed 's/ /%20/g' >> site.manifest

echo "MANIFEST has been updated."
