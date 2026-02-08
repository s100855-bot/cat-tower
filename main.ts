let mySprite = sprites.create(img`
    e e e . . . . e e e . . . . 
    c 1 1 c . . c 1 1 c . . . . 
    c b 1 1 f f 1 1 b c . . . . 
    c 3 b 1 1 b 1 b 3 c . . . . 
    f b 3 1 1 1 1 3 b f . . . . 
    e 1 1 1 1 1 1 1 1 e . . . . 
    e 1 f 1 1 1 1 f 1 e . b f b 
    f 1 1 f 1 1 f 1 1 f . f 1 f 
    f b 1 1 b b 1 1 2 f . f 1 f 
    . f 2 2 2 2 2 2 b b f f 1 f 
    . f b 1 1 1 1 1 1 b b 1 b f 
    . f 1 1 1 1 1 b 1 1 f f f . 
    . f 1 f f f 1 f f 1 f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.player1.moveSprite(mySprite, 75, 50)
tiles.setCurrentTilemap(tilemap`level1`)
scene.setBackgroundColor(9)
scene.cameraFollowSprite(mySprite)
