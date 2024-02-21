def on_up_pressed():
    if mySprite.vy == 0:
        mySprite.vy = -150
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_overlap_tile(sprite, location):
    game.game_over(True)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile
    """),
    on_overlap_tile)

def on_left_pressed():
    animation.run_image_animation(mySprite,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_released():
    animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
    mySprite.set_image(img("""
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
    """))
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

def on_left_released():
    animation.stop_animation(animation.AnimationTypes.ALL, mySprite)
    mySprite.set_image(img("""
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
    """))
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_right_pressed():
    animation.run_image_animation(mySprite,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

mySprite: Sprite = None
scene.set_background_color(9)
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(mySprite, 100, 0)
tiles.set_current_tilemap(tilemap("""
    level1
"""))
mySprite.ay = 200
scene.camera_follow_sprite(mySprite)
tiles.place_on_random_tile(mySprite, assets.tile("""
    myTile0
"""))