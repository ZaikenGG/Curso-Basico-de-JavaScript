```js
class student {
    constructor({
        name,
        email,
        username,
        points,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCurses = [],
        learningPaths = []
    }) {
        this.name = name
        this.email = email
        this.username = username
        this.points = points
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        }
        this.approvedCurses = approvedCurses
        this.learningPaths = learningPaths
    }
}


class learningPath {
    constructor({
        name,
        curses
    }) {
        this.name = name
        this.curses  = curses
    }
}

const escuelaWeb = new learningPath({
    name: 'Desarrollo web',
    curses: [
        'Curso HTML',
        'Curso CSS',
        'Curso JavaScript'
    ]
})

const escuelaData = new learningPath({
    name: 'Desarrollo DATA',
    curses: [
        'Curso Data',
        'Curso Data Visual',
    ]
})

const escuelaGame = new learningPath({
    name: 'Desarrollo web',
    curses: [
        'Curso Data',
        'Curso Data Visual',
        'Curso JavaScript'
    ]
})

const erick = new student({
    name: 'Erick',
    username: 'zaikengg',
    email: 'erickkim1214@gmail.com',
    points: 100,
    instagram: 'arti_code_',

    learningPaths: {
        escuelaWeb,
        escuelaData
    }
})
console.log(erick);
```