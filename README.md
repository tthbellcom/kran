# kran

```
  Λ
 |X|_______
 |X X_X_X_X'                What else would you
 |X|    _ ¿_                use to handle your
 |X| __| '__|_  _ ___       containers?
 |X|/ /| |/   \| '__ |
 |X| < |_| (_) | | | |
 |X|\_\   \__|_|_| |_|

```


## Requirements 
*Mac only
- Virtualbox*
 - https://www.virtualbox.org/wiki/Downloads

- Vagrant*
 - http://www.vagrantup.com/downloads.html

- Docker (On Mac, download the Docker OS X Client)
 - https://www.docker.io/gettingstarted/



## Installation
### On both
Download dotkran
https://github.com/tthbellcom/dotkran

```
# Clone dotkran repository to home directory.
cd $HOME
git clone https://github.com/tthbellcom/dotkran.git .kran

# Download kran
git clone https://github.com/tthbellcom/kran.git kran

# Get in there
cd kran

# Make executable
chmod +x kran

# move into $PATH
sudo ln -s $HOME/kran/kran /usr/local/bin/

# Check/modify config
cd ~/.kran
cp kran.conf.default kran.conf
vim ~/.kran/kran.conf

# Move port config into place
cp port.conf.default port.conf

```

### Linux
Then run
``` 

# Build docker container
kran build 
```

### Mac

Download Vagrantfile and put it in ~/vagrant

In a terminal

```
# Create directory for vagranfile (this directory will also house your files)
cd ~/kran

# Vagrant up'aaaaah
vagrant up

# Build docker container
kran build
```



  
## Usage
Run ``` kran ``` to see usage
