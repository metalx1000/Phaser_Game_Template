#!/bin/bash

echo "This may overwrite some files"
echo "Do you want to continue?(y/N)"
read continue

if [ $continue != "y" ]||[ $continue != "Y" ];
then
  echo "Exiting..."
  exit 
fi

function exit(){
  echo "Somthing went wrong."
  echo "Exiting..."
  exit 
}

wget "https://github.com/metalx1000/Phaser_Game_Template/archive/master.zip" && unzip master.zip || exit()
rm Phaser_Game_Template-master/LICENSE 
rm Phaser_Game_Template-master/README.md
mv Phaser_Game_Template-master/* ./
rm Phaser_Game_Template-master -fr
