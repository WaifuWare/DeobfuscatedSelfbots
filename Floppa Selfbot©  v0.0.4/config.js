
const token = "" // Your token
const prefix = ";" // Selfbot prefix
const rpc = true // true if you want the rpc, false if you dont
const autodel = true // true if you want to automatically delete embed (cuz discord TOS), false if you dont
const massblacklist = false // IN DEV                  true if you want to use a blacklist for massping, false if you dont
const masslist = [] // IN DEV                          massping blacklist
const messagelogger = false // IN DEV                  log message in console
const messageloggerGuild = [""] // IN DEV              Array where you can add guild to log

module.exports= {
    token, prefix, autodel, massblacklist, masslist, rpc, messagelogger, messageloggerGuild
}
        