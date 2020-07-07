#! /bin/bash

for i in {0..100};

do echo $((i)) $((i*i)) >> c.dat;
	sleep 1;
done


