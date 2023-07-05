#!/bin/bash -e

from=$(maidenhead $1)
fromLat=$(echo "$from" | awk '{print $1}')
fromLng=$(echo "$from" | awk '{print $2}')

to=$(maidenhead $2)
toLat=$(echo "$to" | awk '{print $1}')
toLng=$(echo "$to" | awk '{print $2}')

cat <<EOS
{
 startLat: $fromLat,
 startLng: $fromLng,
 endLat: $toLat,
 endLng: $toLng,
 color: 'yellow'
},
EOS
