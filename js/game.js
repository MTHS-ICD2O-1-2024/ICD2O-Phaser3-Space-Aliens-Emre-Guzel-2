/* global Phaser*/

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: Apirl 11 2025
// This file contains the JS functions for index.html

// Setting the window 
const config = {
  type: Phaser.AUTO,
  width: 1920,
  length: 1080,
  backgroundColor: 0x5f6e7a
}

const game = new Phaser.Game(config)
console.log(game)