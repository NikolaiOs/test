export function makeBooks() {
    let arr = [];
    const length = 25;


    for (let i = 0; i < length; i++) {
        let item = {
            id: i,
            name: 'Book name' + i,
            author: 'Author name' + (i + 1),
            cover: 'Images/cover.jpeg',
            description: 'Брошенный за решетку на три долгих года, неразговорчивый парень по прозвищу Тень терпеливо ждет того дня, когда он сможет вернуться домой, в городок Игл‑Пойнт штата Индиана. Он больше не боится того, что может принести завтрашний день, и хочет лишь воссоединиться с любимой женой Лорой и начать новую жизнь.'
        }
        arr.push(item);
    }
    return arr;
}




export const filter = (array, finder) => {
    return array.filter(item => item.name.includes(finder) || item.author.includes(finder))
}