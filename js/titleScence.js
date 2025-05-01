/* global Phaser */

// Copyright (c) 2025 Emre Guzel All rights reserved
//
// Created by: Emre Guzel
// Created on: Apr 30 2025
// This is the Title Scene

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'titleScene' })
    //Setup
    this.titleSceneBackgroundImage = null
    this.titleSceneText = null
    this.titleSceneTextStyle = {
      font: "200px Times",
      fill: "#fde4b9",
      align: "center",
    }
  }
  // Setting the background 
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }
  // Setting the IMG
  preload() {
    console.log("Title Scene")
    this.load.image("titleSceneBackground", "assets/aliens_screen_image.jpg")
  }
  // Setting the IMG directoins 
  create(data) {
    this.titleSceneBackgroundImage = this.add.sprite(
      0,
      0,
      "titleSceneBackground").setScale(2.75)
    this.titleSceneBackgroundImage.x = 1920 / 2
    this.titleSceneBackgroundImage.y = 1080 / 2

    // Setting the text
    this.titleSceneText = this.add
      .text(1920 / 2, 1080 / 2 + 350, "Space Aliens", this.titleSceneTextStyle)
      .setOrigin(0.5)
  }

  update(time, delta) {
    if (time > 6000) {
      this.scene.switch("menuScene")
    }
  }
}

export default TitleScene
