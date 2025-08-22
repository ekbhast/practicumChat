const tmpl = `
<div class="{{wrapperClassName}}">
    <div class="chat__button">
        <button class="button">
            <span>{{buttonText}}</span>
        </button>
    </div>

    <ul class="{{chatListClassName}}">
        {{chatListItems}}
    </ul>
</div>
`;

const CHAT_NAMES = [
    'Название чата 1',
    'Название чата 2',
    'Название чата 3'
]

const  chat = {
    wrapperClassName: 'chat_wrapper',
    buttonText: 'Добавить чат',
    chatListClassName: 'chat_list',
    chatListItems: CHAT_NAMES.map(item => (
        `<li class="chat__item">${item}</li>`
    )),
}

function parser(tmpl, data) {
    let result = tmpl;
    for (let key in data) {
        console.log(key);
        const regExp = new RegExp(`{{${key}}}`, "g");
        result = result.replace(regExp, data[key]);
    }
    return result;
}

const html = parser(tmpl, chat);
console.log(html);