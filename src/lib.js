const axios = require('axios')

const lib = {
    api: {
        getTodos(url) {
            return new Promise(function (resolve, reject) {
                return axios(url)
                    .then(function (response) {
                        resolve(response.data)
                    })
                    .catch(reject)
            })
        }
    },
    domHelpers: {
        handleTodos(todosJson) {

        },
        async handleLoad() {
            const todosUrl = `${process.env.API_URL}/todos`
            try {
                const todosJson = await lib.api.getTodos(todosUrl)
            } catch (error) {
                alert(error)
            }
        }
    },
    dom: {
        onLoad(todosUrl) {
            document.addEventListener('DOMContentLoaded', lib.domHelpers.handleLoad)
        }
    }
}

module.exports = lib