#!/usr/bin/env bash 

ffplay -nodisp -autoexit /opt/dtos-sounds/win2000.ogv &
#festival --tts $HOME/.config/qtile/welcome_msg &
# lxsession &
/usr/lib/polkit-gnome/polkit-gnome-authentication-agent-1 &
picom &
sh /home/vintalorian/.screenlayout/docked.sh &
# /usr/bin/emacs --daemon &
# conky -c $HOME/.config/conky/qtile/doom-one-01.conkyrc
nm-applet &
dunst &
onedrivegui &
flameshot &
volumeicon &

### UNCOMMENT ONLY ONE OF THE FOLLOWING THREE OPTIONS! ###
# 1. Uncomment to restore last saved wallpaper
# xargs xwallpaper --stretch < ~/.cache/wall &
# 2. Uncomment to set a random wallpaper on login
# find /usr/share/backgrounds/dtos-backgrounds/ -type f | shuf -n 1 | xargs xwallpaper --stretch &
# 3. Uncomment to set wallpaper with nitrogen
nitrogen --restore &
#sleep 2 && killall msm_kde_notifier && killall matray &
