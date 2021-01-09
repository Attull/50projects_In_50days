const tagsEl=document.getElementById('tags')
const textarea=document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e)=>{
    createTags(e.target.value)

    if(e.key ==='Enter'){
        setTimeout(()=>{
            e.target.value=''
        },10)

        randomSelect()
    }
})

function createTags(input){
    const tags=input.split(',').filter(tag =>tag.trim()!=='').map(tag => tag.trim())

    tagsEl.innerHTML=''            //make it blank
 
    tags.forEach(tag => {
        const tagel=document.createElement('span')
        tagel.classList.add('tag')
        tagel.innerText=tag
        tagsEl.appendChild(tagel)
    })
}

function randomSelect(){
    const times=30

    const interval=setInterval(()=>{
        
        const randomTag=pickRandomTag()

        highLightTag(randomTag)

        setTimeout(() =>{
            unHighLightTag(randomTag)
        },100)

    },100);

}

function pickRandomTag(){
    const tags=document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highLightTag(tag){
    tag.classList.add('highlight')
}

function unHighLightTag(tag){
    tag.classList.remove('highlight')
}