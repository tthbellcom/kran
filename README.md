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
cd ~
git clone https://github.com/tthbellcom/dotkran.git .kran

# Download kran
curl -o kran https://raw.githubusercontent.com/tthbellcom/kran/master/kran

# Make executable
chmod +x kran

# Copy into $PATH
sudo cp kran /usr/local/bin/

```

### Linux
Then run
``` 
# Check/modify config
vim ~/.kran/kran.conf

# Build docker container
kran build 
```

### Mac

Download Vagrantfile and put it in ~/vagrant

In a terminal

```
# Create directory for vagranfile (this directory will also house your files)
cd ~
mkdir vagrant 

# Download vagrant file and put it in a relevant directory
cd vagrant
curl -o Vagrantfile https://raw.githubusercontent.com/tthbellcom/kran/master/Vagrantfile

# Vagrant up'aaaaah
vagrant up

# Check/modify config
vim ~/.kran/kran.conf

# Build docker container
kran build
```



  
## Usage
Run ``` kran ``` to see usage
