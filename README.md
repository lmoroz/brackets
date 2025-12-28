# Info

Этот репозиторий был создан в рамках обучения в **EPAM Rolling Scopes School (Frontend)**.

На момент прохождения курса у меня уже было более 16 лет опыта в web-разработке. Основная часть этого опыта — фриланс и работа в небольших локальных командах, где я часто была единственным разработчиком и отвечала за все технические решения.

Цель участия в школе:
- систематизировать и дополнить уже имеющиеся знания и навыки
- закрыть пробелы в современных frontend-подходах
- освоить корпоративные практики разработки
- научиться работать в условиях командной разработки, code review и формализованных процессов

-------------------

# Brackets

## Task

Implement function `check(str, bracketsConfig)`, that for given brackets sequence will return `true` if it is correct and `false` otherwise

In the second param there is `bracketsConfig` - the array of pairs open-closed brackets. Each subarray includes only 2 elements - opening and closing bracket

```js
check('()', [['(', ')']]) // -> true
check('((()))()', [['(', ')']]) // -> true
check('())(', [['(', ')']]) // -> false
check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
check('[(])', [['(', ')'], ['[', ']']]) // -> false
check('[]()', [['(', ')'], ['[', ']']]) // -> true
check('[]()(', [['(', ')'], ['[', ']']]) // -> false

// special case: opening and closing bracket can be the same :)

check('||', [['|', '|']]) // -> true
check('|()|', [['(', ')'], ['|', '|']]) // -> true
check('|(|)', [['(', ')'], ['|', '|']]) // -> false
check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true
```

Write your code in `src/index.js`

## Prepare and test
1. Install [Node.js](https://nodejs.org/en/download/)   
2. Fork this repository: https://github.com/Shastel/brackets/  
3. Clone your newly created repo: https://github.com/<%your_github_username%>/brackets/  
4. Go to folder `brackets`  
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)  
6. Run npm test in command line  
7. You will see the number of passing and failing tests you 100% of passing tests is equal to 100p in score  

## Submit to [rs app](https://app.rs.school)
1. Open [rs app](https://app.rs.school) and login
2. Go to [submit task page](https://app.rs.school/course/submit-task?course=rs-2019-q3)
3. Select your task (brackets)
4. Press submit button and enjoy 

credits [@yankouskia](https://github.com/yankouskia/)
