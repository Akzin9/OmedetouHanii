function Started() {
    let remove_Init_Msg = document.getElementById("InitialMsg")
    let remove_Div_Click = document.getElementById("ClickMePls")

    remove_Init_Msg.style = "display: none;"
    remove_Div_Click.style = "display: none;"

    // adição da parte dois

    let Change_BackGround = document.querySelector("body#BodyH")
    let Show_video = document.querySelector("video#Video")
    let ButtonPlay = document.querySelector("button#Play")
    let ButtonPos = document.getElementById('Button_pos')
    let Show_P = document.querySelector("p#explain")
    let Show_TextPT2 = document.querySelector("p#textPT2")
    let Show_FButton = document.querySelector("button#finalbutton")
    let Change_background_div_mom = document.querySelector("div#Div_Mom")

    Change_BackGround.style = ""
    Change_background_div_mom.style = "display: initial;"
    Show_FButton.style = "display: initial;"
    ButtonPos.style = "display: initial;"
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
    let Remove_ButtonPos = document.getElementById('Button_pos')
    let Remove_P = document.querySelector("p#explain")
    let Remove_PT2End = document.querySelector("div#PT2End")
    let Remove_TextPT2 = document.querySelector("p#textPT2")
    var Remove_Div_Mom = document.getElementById("Div_Mom")
    let Show_Final_Video = document.querySelector("video#vdFinal")
    let Show_Final_Div = document.querySelector("div#final")

    Remove_Div_Mom.style = "display: none; overflow: hidden;"
    Remove_PT2End.style = "display: none;"
    remove_finalB.style = "display: none;"
    Remove_video.style = "display: none;"
    Remove_ButtonPlay.style = "display: none;"
    Remove_ButtonPos.style = "display: none;"
    Remove_P.style = "display: none;"
    Remove_TextPT2.style = "display: none;"

    // adição final

    Change_BackGround.style = "width: 100%; height: 100%;"
    Show_Final_Div.style = "display: initial; height: 100%; width: 100%;"
    Show_Final_Video.style = "display: initial;"
    Show_Final_Video.play()
    Show_Final_Video.volume = (0.20)
}