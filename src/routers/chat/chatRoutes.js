const getModule = moduleName => {
    let components = {
        chat : () => import(/* webpackChunkName : Chat */ "../../pages/chat/Chat.vue")
    }

    return components[moduleName]
}

const componentHandler = (moduleName) => {
    let currHandler;
    currHandler = getModule(moduleName)
    return currHandler();
}

let getHealthCareRoutes = () => {
    return {
        path : '/chat',
        name : 'Chat',
        component : () => componentHandler('chat')
    }
}

let healthCareRoutes = getHealthCareRoutes();

export default healthCareRoutes;