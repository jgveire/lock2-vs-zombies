sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.ashes, 100)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    fireball = sprites.createProjectileFromSprite(img`
. . 5 . 
5 5 5 5 
. . 5 . 
`, lock2, 200, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    lock2.destroy(effects.disintegrate, 500)
    info.changeLifeBy(-1)
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    fireball = sprites.createProjectileFromSprite(img`
. . 5 . . . . . 
5 5 5 5 . . . . 
. . 5 . . . . . 
. . . . . . . . 
. . . . . 5 . . 
. . . 5 5 5 5 . 
. . . . . 5 . . 
. . . . . . . . 
. . 5 . . . . . 
5 5 5 5 . . . . 
. . 5 . . . . . 
`, lock2, 200, 0)
})
let zombie: Sprite = null
let fireball: Sprite = null
let lock2: Sprite = null
lock2 = sprites.create(img`
. d d d d . 
. d e e d . 
d d d d d . 
d d d e d . 
d d d e d . 
8 8 8 d 2 . 
4 4 4 8 4 d 
4 4 4 4 4 . 
4 4 4 4 . . 
4 4 4 4 . . 
`, SpriteKind.Player)
lock2.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(1)
info.setScore(0)
controller.moveSprite(lock2, 200, 200)
game.onUpdateInterval(500, function () {
    zombie = sprites.create(img`
. . 6 6 . . 
. 6 f 1 6 . 
6 6 1 1 6 . 
1 6 6 6 6 . 
f 6 2 6 e . 
. . e e e e 
. e e e e e 
. 6 e e e 8 
. . 8 . 8 8 
. . 8 . . 6 
. e e . e e 
`, SpriteKind.Enemy)
    zombie.setVelocity(-100, 0)
    zombie.setPosition(180, Math.randomRange(8, 112))
})
