#!/bin/sh

#########################################################################
#
# Script to prepare the word bank of Voice of America Special English
#
# 1. Copy source code of this wiki article:
#       https://simple.wikipedia.org/w/index.php?title=Wikipedia:VOA_Special_English_Word_Book&action=edit
#    and save it as `voa.wiki.txt` or some other filename locally.
# 2. Run this script, pipe that wiki file into it, and it will filter out
#    the wiki markup to give just the words.
#
#    The script does remove some valid lines, but that is ok for my purpose.
#
#    ./voa-process.sh < voa.wiki.txt
#
# 3. Once you make this list, ensure that every line is unique.  Use the
#    `uniq` command.
#
#########################################################################

cat \
  | grep -v '==' \
  | grep -vE '^$' \
  | sed 's/^\* \[\[//' \
  | sed 's/\]\].*//' \
  | sed 's/^.*|//' \
  | sed '/^\* /d' \
  | sed '/ /d' \
  | sed 's/\(.*\)/"\1",/'
