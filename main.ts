let donout: Sprite = null
function make_dunout () {
    donout = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    donout,
    [img`
        . . . f f f b b f f f . . . . . 
        . . a f f f 3 d f f f b . . . . 
        . a a f 1 f 3 3 f 1 f d b . . . 
        . a 3 f f f 3 3 f f f d d b . . 
        b a 3 3 3 3 b 3 3 3 3 3 d 3 b . 
        b a 3 3 3 3 3 a a 3 3 3 3 3 b . 
        b 4 a d f f 3 3 f f 3 3 3 3 3 b 
        b 4 a d 3 f f f f a b 3 3 3 3 b 
        e 4 4 a d 3 3 3 3 3 3 3 3 3 3 b 
        e 4 4 4 a d 3 3 3 3 3 3 3 3 3 a 
        . e 4 4 4 a d d 3 3 3 3 3 3 3 a 
        . e e 4 4 4 a a d d d 3 3 3 a a 
        . . e e 4 4 4 4 a a a a a a e . 
        . . . e e b f 4 4 4 b b e e . . 
        . . . . . e f e e e e e e . . . 
        . . . . . . f f . . . . f f . . 
        `],
    500,
    true
    )
}
