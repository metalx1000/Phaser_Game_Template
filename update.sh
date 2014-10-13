#!/bin/bash

echo "CACHE MANIFEST\n\n# version $(date +%s)" > site.manifest && 
find . -type f -name "*" ! -path "./.git/*" ! -path "./site.manifest" ! -path "./misc/*" >> site.manifest
