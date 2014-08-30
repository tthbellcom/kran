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
- docker
  - http://docker.io

*Mac only
- Virtualbox*
  - https://www.virtualbox.org/wiki/Downloads
- Boot2docker

## Installation
See INSTALL.md

## Usage
Run ``` kran ``` to see usage

# krog
Supposed to make it easier to write scripts for the containers

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

executed with (from sites www dir).
```
krog install-drupal sitename
```
