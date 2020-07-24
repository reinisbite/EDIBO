#! /bin/bash

for i in {0..10};
do echo $((i)) $((i*i)) >>a.dat;
	sleep 1;
done

