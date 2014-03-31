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

# krog
Supposed to make it easier to write scripts for the containers

## Installation
Link into $PATH like kran

Writing a krog hook, each line is prefixed with one of the 4 following keywords.
Lines without one of these, will be ignored.

```
# Execute command locally
RUN

# Execute command in container
SSH 

# Copy a file to the container
ADD

# Write a message for the user
MSG
```

Variables available in a kran hook
```
$1 to $4, first to fourth argument (after hook name)
$ARGS, all arguments (after hook name)

```

Sample (download and install drupal):
~/.krog/hooks/install-drupal:
```
# Telling the user what will happen
MSG Download and install drupal
# Delete old public_html and download drupal to public_html
SSH cd /var/www && rm -r public_html && drush dl drupal --drupal-project-rename=public_html
# run drush site-intall give site name from first argument
SSH cd /var/www/public_html && drush -y site-install standard --db-url=mysql://db:db@localhost/db --site-name=$1
```

executed with (from kran dir).
```
krog install-drupal sitename
```
