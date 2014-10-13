#!/bin/bash

echo "Updating MANIFEST file for offline mode..."

echo "CACHE MANIFEST" > site.manifest &&
echo "" >> site.manifest &&
echo "# version $(date +%s)" >> site.manifest && 
find . -type f -name "*" \
    ! -path "./.git/*" \
    ! -path "./site.manifest"\
    ! -path "$0" \
    ! -path "./misc/*" >> site.manifest

echo "MANIFEST has been updated."
