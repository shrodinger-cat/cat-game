namespace SpriteKind {
    export const Food_important = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (Level == 5) {
        game.gameOver(true)
        game.setGameOverEffect(true, effects.dissolve)
    } else {
        Level += 1
        load_level()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `,img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e b f b . 
        f d d f d d f d d f f d f . 
        f b d d b b d d 2 b f d f . 
        . f 2 2 2 2 2 2 d b d b f . 
        . f d d d d d d d f f f . . 
        . f d b d f f f d f . . . . 
        . . f f f f . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 b f f d f 
        . f 2 2 2 2 2 2 d b b d b f 
        . f d d d d d d d f f f f . 
        . . f d b d f d f . . . . . 
        . . . f f f f f f . . . . . 
        `],
    100,
    true
    )
})
function load_level () {
    if (Level == 1) {
        scene.setBackgroundColor(6)
        tiles.setCurrentTilemap(tilemap`level1`)
        mySprite = sprites.create(img`
            . . . . e e e . . . . e e e 
            . . . . c d d c . . c d d c 
            . . . . c b d d f f d d b c 
            . . . . c 3 b d b d d b 3 c 
            . . . . f b 3 d d d d 3 b f 
            . . . . e d d d d d d d d e 
            b f b . e d f d d d d f d e 
            f d f . f d d f d d f d d f 
            f d f . f 2 d d b b d d b f 
            f d f f b b 2 2 2 2 2 2 f . 
            f b d b b d d d d d d b f . 
            . f f f d d b d d d d d f . 
            . . . f d f f d f f f d f . 
            . . . f f . . f f . . f f . 
            `, SpriteKind.Player)
        controller.moveSprite(mySprite, 100, 0)
        mySprite.ay = 200
        scene.cameraFollowSprite(mySprite)
        for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
            tiles.placeOnTile(mySprite, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
            mySprite2 = sprites.create(img`
                . . b b b b . . 
                . b 5 5 5 5 b . 
                b 5 d 3 3 d 5 b 
                b 5 3 5 5 1 5 b 
                c 5 3 5 5 1 d c 
                c d d 1 1 d d c 
                . f d d d d f . 
                . . f f f f . . 
                `, SpriteKind.Food)
            animation.runImageAnimation(
            mySprite2,
            [img`
                . . b b b b . . 
                . b 5 5 5 5 b . 
                b 5 d 3 3 d 5 b 
                b 5 3 5 5 1 5 b 
                c 5 3 5 5 1 d c 
                c d d 1 1 d d c 
                . f d d d d f . 
                . . f f f f . . 
                `,img`
                . . b b b . . . 
                . b 5 5 5 b . . 
                b 5 d 3 d 5 b . 
                b 5 3 5 1 5 b . 
                c 5 3 5 1 d c . 
                c 5 d 1 d d c . 
                . f d d d f . . 
                . . f f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . b 5 d 1 5 b . 
                . b 5 3 1 5 b . 
                . c 5 3 1 d c . 
                . c 5 1 d d c . 
                . . f d d f . . 
                . . . f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . . b 1 1 b . . 
                . . b 5 5 b . . 
                . . b d d b . . 
                . . c d d c . . 
                . . c 3 3 c . . 
                . . . f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . b 5 1 d 5 b . 
                . b 5 1 3 5 b . 
                . c d 1 3 5 c . 
                . c d d 1 5 c . 
                . . f d d f . . 
                . . . f f . . . 
                `,img`
                . . . b b b . . 
                . . b 5 5 5 b . 
                . b 5 d 3 d 5 b 
                . b 5 1 5 3 5 b 
                . c d 1 5 3 5 c 
                . c d d 1 d 5 c 
                . . f d d d f . 
                . . . f f f . . 
                `],
            100,
            true
            )
            tiles.placeOnTile(mySprite2, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
    }
    if (Level == 2) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Food)
        tiles.setCurrentTilemap(tilemap`level0`)
        for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
            tiles.placeOnTile(mySprite, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
            mysprite3 = sprites.create(img`
                . . b b b b . . 
                . b 5 5 5 5 b . 
                b 5 d 3 3 d 5 b 
                b 5 3 5 5 1 5 b 
                c 5 3 5 5 1 d c 
                c d d 1 1 d d c 
                . f d d d d f . 
                . . f f f f . . 
                `, SpriteKind.Food)
            animation.runImageAnimation(
            mysprite3,
            [img`
                . . b b b b . . 
                . b 5 5 5 5 b . 
                b 5 d 3 3 d 5 b 
                b 5 3 5 5 1 5 b 
                c 5 3 5 5 1 d c 
                c d d 1 1 d d c 
                . f d d d d f . 
                . . f f f f . . 
                `,img`
                . . b b b . . . 
                . b 5 5 5 b . . 
                b 5 d 3 d 5 b . 
                b 5 3 5 1 5 b . 
                c 5 3 5 1 d c . 
                c 5 d 1 d d c . 
                . f d d d f . . 
                . . f f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . b 5 d 1 5 b . 
                . b 5 3 1 5 b . 
                . c 5 3 1 d c . 
                . c 5 1 d d c . 
                . . f d d f . . 
                . . . f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . . b 1 1 b . . 
                . . b 5 5 b . . 
                . . b d d b . . 
                . . c d d c . . 
                . . c 3 3 c . . 
                . . . f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . b 5 1 d 5 b . 
                . b 5 1 3 5 b . 
                . c d 1 3 5 c . 
                . c d d 1 5 c . 
                . . f d d f . . 
                . . . f f . . . 
                `,img`
                . . . b b b . . 
                . . b 5 5 5 b . 
                . b 5 d 3 d 5 b 
                . b 5 1 5 3 5 b 
                . c d 1 5 3 5 c 
                . c d d 1 d 5 c 
                . . f d d d f . 
                . . . f f f . . 
                `],
            100,
            true
            )
            tiles.placeOnTile(mysprite3, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
        game.splash("level 2")
    }
    if (Level == 3) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Food)
        tiles.setCurrentTilemap(tilemap`level6`)
        for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
            tiles.placeOnTile(mySprite, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
            mysprite3 = sprites.create(img`
                . . b b b b . . 
                . b 5 5 5 5 b . 
                b 5 d 3 3 d 5 b 
                b 5 3 5 5 1 5 b 
                c 5 3 5 5 1 d c 
                c d d 1 1 d d c 
                . f d d d d f . 
                . . f f f f . . 
                `, SpriteKind.Food)
            animation.runImageAnimation(
            mysprite3,
            [img`
                . . b b b b . . 
                . b 5 5 5 5 b . 
                b 5 d 3 3 d 5 b 
                b 5 3 5 5 1 5 b 
                c 5 3 5 5 1 d c 
                c d d 1 1 d d c 
                . f d d d d f . 
                . . f f f f . . 
                `,img`
                . . b b b . . . 
                . b 5 5 5 b . . 
                b 5 d 3 d 5 b . 
                b 5 3 5 1 5 b . 
                c 5 3 5 1 d c . 
                c 5 d 1 d d c . 
                . f d d d f . . 
                . . f f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . b 5 d 1 5 b . 
                . b 5 3 1 5 b . 
                . c 5 3 1 d c . 
                . c 5 1 d d c . 
                . . f d d f . . 
                . . . f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . . b 1 1 b . . 
                . . b 5 5 b . . 
                . . b d d b . . 
                . . c d d c . . 
                . . c 3 3 c . . 
                . . . f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . b 5 1 d 5 b . 
                . b 5 1 3 5 b . 
                . c d 1 3 5 c . 
                . c d d 1 5 c . 
                . . f d d f . . 
                . . . f f . . . 
                `,img`
                . . . b b b . . 
                . . b 5 5 5 b . 
                . b 5 d 3 d 5 b 
                . b 5 1 5 3 5 b 
                . c d 1 5 3 5 c 
                . c d d 1 d 5 c 
                . . f d d d f . 
                . . . f f f . . 
                `],
            100,
            true
            )
            tiles.placeOnTile(mysprite3, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
        game.splash("level 3")
    }
    if (Level == 4) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Food)
        tiles.setCurrentTilemap(tilemap`level`)
        for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
            tiles.placeOnTile(mySprite, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
            mysprite3 = sprites.create(img`
                . . b b b b . . 
                . b 5 5 5 5 b . 
                b 5 d 3 3 d 5 b 
                b 5 3 5 5 1 5 b 
                c 5 3 5 5 1 d c 
                c d d 1 1 d d c 
                . f d d d d f . 
                . . f f f f . . 
                `, SpriteKind.Food)
            animation.runImageAnimation(
            mysprite3,
            [img`
                . . b b b b . . 
                . b 5 5 5 5 b . 
                b 5 d 3 3 d 5 b 
                b 5 3 5 5 1 5 b 
                c 5 3 5 5 1 d c 
                c d d 1 1 d d c 
                . f d d d d f . 
                . . f f f f . . 
                `,img`
                . . b b b . . . 
                . b 5 5 5 b . . 
                b 5 d 3 d 5 b . 
                b 5 3 5 1 5 b . 
                c 5 3 5 1 d c . 
                c 5 d 1 d d c . 
                . f d d d f . . 
                . . f f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . b 5 d 1 5 b . 
                . b 5 3 1 5 b . 
                . c 5 3 1 d c . 
                . c 5 1 d d c . 
                . . f d d f . . 
                . . . f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . . b 1 1 b . . 
                . . b 5 5 b . . 
                . . b d d b . . 
                . . c d d c . . 
                . . c 3 3 c . . 
                . . . f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . b 5 1 d 5 b . 
                . b 5 1 3 5 b . 
                . c d 1 3 5 c . 
                . c d d 1 5 c . 
                . . f d d f . . 
                . . . f f . . . 
                `,img`
                . . . b b b . . 
                . . b 5 5 5 b . 
                . b 5 d 3 d 5 b 
                . b 5 1 5 3 5 b 
                . c d 1 5 3 5 c 
                . c d d 1 d 5 c 
                . . f d d d f . 
                . . . f f f . . 
                `],
            100,
            true
            )
            tiles.placeOnTile(mysprite3, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
        game.splash("level 4")
    }
    if (Level == 5) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Food)
        tiles.setCurrentTilemap(tilemap`level4`)
        for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
            tiles.placeOnTile(mySprite, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
            mysprite3 = sprites.create(img`
                . . b b b b . . 
                . b 5 5 5 5 b . 
                b 5 d 3 3 d 5 b 
                b 5 3 5 5 1 5 b 
                c 5 3 5 5 1 d c 
                c d d 1 1 d d c 
                . f d d d d f . 
                . . f f f f . . 
                `, SpriteKind.Food_important)
            animation.runImageAnimation(
            mysprite3,
            [img`
                . . b b b b . . 
                . b 5 5 5 5 b . 
                b 5 d 3 3 d 5 b 
                b 5 3 5 5 1 5 b 
                c 5 3 5 5 1 d c 
                c d d 1 1 d d c 
                . f d d d d f . 
                . . f f f f . . 
                `,img`
                . . b b b . . . 
                . b 5 5 5 b . . 
                b 5 d 3 d 5 b . 
                b 5 3 5 1 5 b . 
                c 5 3 5 1 d c . 
                c 5 d 1 d d c . 
                . f d d d f . . 
                . . f f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . b 5 d 1 5 b . 
                . b 5 3 1 5 b . 
                . c 5 3 1 d c . 
                . c 5 1 d d c . 
                . . f d d f . . 
                . . . f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . . b 1 1 b . . 
                . . b 5 5 b . . 
                . . b d d b . . 
                . . c d d c . . 
                . . c 3 3 c . . 
                . . . f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . b 5 1 d 5 b . 
                . b 5 1 3 5 b . 
                . c d 1 3 5 c . 
                . c d d 1 5 c . 
                . . f d d f . . 
                . . . f f . . . 
                `,img`
                . . . b b b . . 
                . . b 5 5 5 b . 
                . b 5 d 3 d 5 b 
                . b 5 1 5 3 5 b 
                . c d 1 5 3 5 c 
                . c d d 1 d 5 c 
                . . f d d d f . 
                . . . f f f . . 
                `],
            100,
            true
            )
            tiles.placeOnTile(mysprite3, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
        game.splash("level 5")
    }
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        b f b . e d f d d d d f d e 
        f d f . f d d f d d f d d f 
        f d f . f 2 d d b b d d b f 
        f d f f b b 2 2 2 2 2 2 f . 
        f b d b b d d d d d d b f . 
        . f f f d d b d d d d d f . 
        . . . f d f f d f f f d f . 
        . . . f f . . f f . . f f . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.vehicle.roadHorizontal, function (sprite, location) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food_important, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        b f b . e d f d d d d f d e 
        f d f . f d d f d d f d d f 
        f d f . f 2 d d b b d d b f 
        f d f f b b 2 2 2 2 2 2 f . 
        f b d b b d d d d d d b f . 
        . f f f d d b d d d d d f . 
        . . . f d f f d f f f d f . 
        . . . f f . . f f . . f f . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        . b f b e d f d d d d f d e 
        . f d f f d d f d d f d d f 
        . f d f b 2 d d b b d d b f 
        . f b d b d 2 2 2 2 2 2 f . 
        . . f f f d d d d d d d f . 
        . . . . f d f f f d b d f . 
        . . . . f f . . f f f f . . 
        `,img`
        . . . . . . . . . . . . . . 
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        b f b . e d f d d d d f d e 
        f d f . f d d f d d f d d f 
        f d f f b 2 d d b b d d b f 
        f b d b b d 2 2 2 2 2 2 f . 
        . f f f f d d d d d d d f . 
        . . . . . f d f d b d f . . 
        . . . . . f f f f f f . . . 
        `],
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
let mysprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let Level = 0
Level = 1
load_level()
