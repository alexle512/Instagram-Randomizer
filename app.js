function loadALlComments() {
    var load_more = document.querySelector('.Z4IfV._0mzm-.sqdOP.yWX7d')


setInterval(() => {
    if (document.querySelector('.Z4IfV._0mzm-.sqdOP.yWX7d') == null) {
    clearInterval()
}
load_more.click()
    }, 300)

}

function randomizeWinner() {
    var participants = []

    var comments = document.querySelectorAll('.gElp9')

    for (var i=0; i<comments.length; i++) {
        var comment = comments[i]
        var commenter = comment.querySelectorAll('.FPmhX.notranslate.TlrDj')[0].title

        if (commenter !== 'ashley_chloe') {
          participants.push(commenter)
    }
  }

for (var i=0; i<participants.length; i++) {
    console.log(participants[i])
}

console.log('Participants: ' + participants)
console.log('Number of Entries: ' + participants.length) 
}


