function Started() {
    let remove_Init_Msg = document.getElementById("InitialMsg")
    let remove_Div_Click = document.getElementById("ClickMePls")

    remove_Init_Msg.style = "display: none;"
    remove_Div_Click.style = "display: none;"

    // adição da parte dois

    let Change_BackGround = document.querySelector("body#BodyH")
    let Show_video = document.querySelector("video#Video")
    let ButtonPlay = document.querySelector("button#Play")
    let Show_P = document.querySelector("p#explain")
    let Show_TextPT2 = document.querySelector("p#textPT2")

    Change_BackGround.style = "background-image: url(../src/BackgroundOmedetou.gif); background-size: 120% 130%; background-repeat: no-repeat;"
    Show_video.style = "display: initial;"
    ButtonPlay.style = "display: initial;"
    Show_P.style = "display: initial;"
    Show_TextPT2.style = "display: initial;"
    Show_video.play()
    Show_video.volume = (0.25)

}

// botão de play
function Play() {
    let Show_video = document.querySelector("video#Video")
    Show_video.play()
    Show_video.volume = (0.25)
}

function chest() {
    let remove_finalB = document.querySelector("button#finalbutton")
    let Change_BackGround = document.querySelector("body#BodyH")
    let Remove_video = document.querySelector("video#Video")
    let Remove_ButtonPlay = document.querySelector("button#Play")
    let Remove_P = document.querySelector("p#explain")
    let Remove_TextPT2 = document.querySelector("p#textPT2")
    let Show_Final_Video = document.querySelector("video#vdFinal")
    let Show_Final_Div = document.querySelector("div#final")

    remove_finalB.style = "display: none;"
    Remove_video.style = "display: none;"
    Remove_ButtonPlay.style = "display: none;"
    Remove_P.style = "display: none;"
    Remove_TextPT2.style = "display: none;"

    // adição final

    Change_BackGround.style = ""
    Show_Final_Div.style = "display: initial;"
    Show_Final_Video.style = "display: initial;"
    Show_Final_Video.play()
    Show_Final_Video.volume = (0.20)
}