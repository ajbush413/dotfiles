#!/usr/bin/env bash

ffplay -nodisp -autoexit /opt/dtos-sounds/win2000.ogv &
/home/abush/.screenlayout/Qtile.sh
picom --experimental-backends --config /home/abush/.config/picom/picom.conf &
volumeicon &
nm-applet &
dunst &
nitrogen --restore &
