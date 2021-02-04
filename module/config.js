export const cpr = {};

cpr.attackTypes = {
    none: "",
    rangedSS: "cpr.attack.rangedSS",
    rangedAimed: "cpr.attack.rangedAimed",
    rangedAutofire: "cpr.attack.Autofire",
    rangedSuppress: "cpr.attack.rangedSuppress",
    rangedShell: "cpr.attack.rangedShell",
    rangedThrow: "cpr.attack.rangedThrow",
    meleeBrawl: "cpr.attack.meleeBrawl",
    meleeGrab: "cpr.attack.meleeGrab",
    meleeChoke: "cpr.attack.meleeChoke",
    meleeThrow: "cpr.attack.meleeThrow",
    meleeMartialAttack: "cpr.attack.meleeMartialAttack",
    martialRecovery: "cpr.attack.martialRecovery",
    meleeMartialSpecial = {
        aikido = {
            disarmCombo: "cpr.attack.akido.disarmCombo",
            ironGrip: "cpr.attack.akido.ironGrip",
        },
        karate = {
            armourBreak: "cpr.attack.karate.armourBreak",
            boneBreak: "cpr.attack.karate.boneBreak"
        },
        judo = {
            counterThrow: "cpr.attack.judo.counterThrow",
            grabEscape: "cpr.attack.judo.grabEscape"
        },
        taikwondo = {
            pressurePoint: "cpr.attack.taikwondo.pressurePoint",
            flyKick: "cpr.attack.taikwondo.flyKick"
        }
    }

}
