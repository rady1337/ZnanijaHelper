var empty_text = document.querySelector(".sg-layout__box");
var answers = document.querySelectorAll(".sg-text.js-answer-content.brn-rich-content");
var image = document.querySelector("#answers > div > article > div.brn-kodiak-answer__attachments > div > div > div.sg-content-box__content.sg-content-box__content--spaced-bottom > div > div > div.brn-main-attachment.js-attachment-image-wrapper");

try {
    var check_img = image.toString();
    if (check_img.match('<img') + 1) {
	image.style.margin = "10px";
	image.style.border = "5px outset red";
	image.style.padding = "10px";
	empty_text.append(image);
    }
} catch(e) {
    console.log(e);
}


for (var answer of answers) {
    answer.style.margin = "10px";
    answer.style.border = "5px outset red";
    answer.style.padding = "10px";
    empty_text.append(answer);
}














