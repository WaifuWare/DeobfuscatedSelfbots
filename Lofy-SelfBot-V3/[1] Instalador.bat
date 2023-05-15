@echo off
color 4
title Lofy SelfBot V3
echo.
echo.
echo                   Bem vindo ao instalador do Lofy Selfbot V3
echo                   Voce esta prestes a instalar todos os requisitos
echo                   Caso tenha alguma duvida me chame no discord
echo                   Em caso de duvida entre no nosso grupo do discord
echo.
echo.
echo.
echo.
echo.
echo.
echo.
pause nul
cls
color 5
echo.
echo.
echo                   Nesta parte pressione enter ate a parte final
echo.
echo.
    call npm init
    cls
    color 5
    call npm install node-fetch@2.6.1
    cls
    color 5
    call npm install discord.js@12
    cls
    color 5
    call npm install chalk@4.1.1
    cls
    color 5
    call npm install colors
    cls
    color 5
    echo.
    echo.
    echo                   Prontinho agora voce pode fechar o arquivo.
    echo.
    echo.
pause nul
exit