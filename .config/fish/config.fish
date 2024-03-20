if status is-interactive
    # Commands to run in interactive sessions can go here
function fish_greeting
    echo Ahoy!
    echo The time is (set_color yellow; date +%T; set_color normal) and this machine is called $hostname
end
    set -U fish_greeting
    neofetch | lolcat
    starship init fish | source

    alias docked="sh /home/abush/.screenlayout/docked.sh"
end
