import axios from "axios";
export default {

    page_loader(context, payload) {
        context.commit('page_loader', payload)
    },

    alertEvent(context, payload) {
        eventBus.$emit('alertRequest', payload)
        // context.commit('alertEvent', payload)
    },

    errorEvent(context, payload) {
        eventBus.$emit('errorEvent', payload)
        // context.commit('alertEvent', payload)
    },
    errorReset(context) {
        context.commit('errors', [])
    },

    // GET
    // Get items
    getItems(context, payload) {
        // console.log(payload);

        var model = payload.model
        var update = payload.update
        context.commit('page_loader', true)
        context.commit('loading', true)
        return new Promise((resolve, reject) => {
            axios.get(model).then((response) => {
                context.commit('loading', false)
                context.commit('page_loader', false)
                context.commit(update, response.data)
                resolve(response)
            }).catch((error) => {
                reject(error);
                context.commit('page_loader', false)
                context.commit('loading', false)
                if (error.response.status === 500) {
                    eventBus.$emit('errorEvent', error.response.statusText)
                    return
                } else if (error.response.status === 401 || error.response.status === 409) {
                    eventBus.$emit('reloadRequest', error.response.statusText)
                } else if (error.response.status === 422) {
                    if (error.response.data.errors) {
                        context.commit('errors', error.response.data.errors)
                    }
                    eventBus.$emit('errorEvent', error.response.data.message)
                    return
                }
            })
        })
    },


    // Get Single items
    showItem(context, payload) {
        // console.log(payload);

        var model = payload.model
        var update = payload.update
        var id = payload.id
        context.commit('page_loader', true)
        context.commit('loading', true)
        return new Promise((resolve, reject) => {
            axios.get(model + '/' + id).then((response) => {
                context.commit(update, response.data)
                context.commit('page_loader', false)
                context.commit('loading', false)
                resolve(response)
            }).catch((error) => {
                reject(error);
                context.commit('page_loader', false)
                context.commit('loading', false)
                if (error.response.status === 500 || error.response.status === 405) {
                    eventBus.$emit('errorEvent', error.response.statusText)
                    return
                } else if (error.response.status === 401 || error.response.status === 409) {
                    eventBus.$emit('reloadRequest', error.response.statusText)
                } else if (error.response.status === 422) {
                    if (error.response.data.errors) {
                        context.commit('errors', error.response.data.errors)
                    }
                    eventBus.$emit('errorEvent', error.response.data.message)
                    return
                }
            })
        })
    },


    nextPage(context, payload) {

        var path = payload.path
        var page = payload.page
        var update = payload.update
        console.log(update);
        context.commit('page_loader', true)
        context.commit('loading', true)
        return new Promise((resolve, reject) => {
            axios.get(path + `?page=` + page)
                .then((response) => {
                    console.log(response.data);
                    context.commit('loading', false)
                    context.commit(update, response.data)
                    context.commit('page_loader', false)
                    resolve(response)
                }).catch((error) => {
                    console.log(error);
                    reject(error);

                    context.commit('page_loader', false)
                    context.commit('loading', false)
                    if (error.response.status === 500) {
                        eventBus.$emit('errorEvent', error.response.statusText)
                        return
                    } else if (error.response.status === 401 || error.response.status === 409) {
                        eventBus.$emit('reloadRequest', error.response.statusText)
                    } else if (error.response.status === 422) {
                        if (error.response.data.errors) {
                            context.commit('errors', error.response.data.errors)
                        }
                        eventBus.$emit('errorEvent', error.response.data.message)

                    } else {
                        eventBus.$emit('errorEvent', 'Something went wrong')
                    }
                })
        });
    },



    nextPagePost(context, payload) {

        var path = payload.path
        var page = payload.page
        var update = payload.update
        var data = payload.data
        context.commit('page_loader', true)
        context.commit('loading', true)
        return new Promise((resolve, reject) => {
            axios.post(path + `?page=` + page, data)
                .then((response) => {
                    // console.log(response.data);
                    context.commit('loading', false)
                    context.commit(update, response.data)
                    context.commit('page_loader', false)
                    resolve(response)
                }).catch((error) => {
                    console.log(error);
                    reject(error);

                    context.commit('page_loader', false)
                    context.commit('loading', false)
                    if (error.response.status === 500) {
                        eventBus.$emit('errorEvent', error.response.statusText)
                        return
                    } else if (error.response.status === 401 || error.response.status === 409) {
                        eventBus.$emit('reloadRequest', error.response.statusText)
                    } else if (error.response.status === 422) {
                        if (error.response.data.errors) {
                            context.commit('errors', error.response.data.errors)
                        }
                        eventBus.$emit('errorEvent', error.response.data.message)

                    } else {
                        eventBus.$emit('errorEvent', 'Something went wrong')
                    }
                })
        });
    },




    // Delete
    deleteItem(context, payload) {
        context.commit('loading', true)
        context.commit('page_loader', true)
        var headers = {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
        return new Promise((resolve, reject) => {
            axios.delete(payload, { headers: headers }).then((response) => {
                context.commit('loading', false)
                context.commit('page_loader', false)
                resolve(response)
            }).catch((error) => {
                reject(error);
                context.commit('page_loader', false)
                context.commit('loading', false)
                if (error.response.status === 500) {
                    eventBus.$emit('errorEvent', error.response.statusText)
                    return
                } else if (error.response.status === 401 || error.response.status === 409) {
                    eventBus.$emit('reloadRequest', error.response.statusText)
                } else if (error.response.status === 422) {
                    if (error.response.data.errors) {
                        context.commit('errors', error.response.data.errors)
                    }
                    eventBus.$emit('errorEvent', error.response.data.message)
                    return
                }
            })
        });
    },
    //Multiple Delete
    deleteItems(context, payload) {
        // context.commit('loading', true)
        context.commit('page_loader', true)
        var model = payload.model
        var data = payload.data

        // console.log(data);

        var headers = {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
        return new Promise((resolve, reject) => {
            axios.delete(model, data, { headers: headers }).then((response) => {
                context.commit('page_loader', false)
                resolve(response)
            }).catch((error) => {
                reject(error);
                context.commit('page_loader', false)
                if (error.response.status === 500) {
                    eventBus.$emit('errorEvent', error.response.statusText)
                    return
                } else if (error.response.status === 401 || error.response.status === 409) {
                    eventBus.$emit('reloadRequest', error.response.statusText)
                } else if (error.response.status === 422) {
                    if (error.response.data.errors) {
                        context.commit('errors', error.response.data.errors)
                    }
                    eventBus.$emit('errorEvent', error.response.data.message)
                    return
                }
            })
        });
    },


    // Post Items
    postItems(context, payload) {
        // console.log(payload);
        context.commit('errors', [])
        context.commit('page_loader', true)

        var model = payload.model
        var data = payload.data
        var headers = {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }


        console.log(headers);

        // var data = payload['data']
        // console.log(data);
        // var update = payload['update']
        context.commit('loading', true)
        return new Promise((resolve, reject) => {
            axios.post(model, data, { headers: headers }).then((response) => {
                context.commit('page_loader', false)
                context.commit('loading', false)
                eventBus.$emit('alertRequest', 'Created')
                // console.log(response.data);
                // context.commit(update, response.data)
                resolve(response)
            }).catch((error) => {
                // console.log(error.response.data.errors);
                reject(error);

                context.commit('page_loader', false)
                context.commit('loading', false)
                if (error.response.status === 500 || error.response.status === 405) {
                    eventBus.$emit('errorEvent', error.response.statusText)
                    return
                } else if (error.response.status === 401 || error.response.status === 409) {
                    eventBus.$emit('reloadRequest', error.response.statusText)
                } else if (error.response.status === 422) {
                    if (error.response.data.errors) {
                        context.commit('errors', error.response.data.errors)
                    }
                    eventBus.$emit('errorEvent', error.response.data.message)
                    return
                }
            })
        });
    },


    // Patch Items
    patchItems(context, payload) {
        context.commit('page_loader', true)
        // console.log(payload);

        var model = payload.model
        var data = payload.data
        var id = payload.id

        var headers = {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }

        context.commit('loading', true)
        return new Promise((resolve, reject) => {
            axios.patch(model + '/' + id, data, { headers: headers }).then((response) => {
                context.commit('page_loader', false)
                eventBus.$emit('alertRequest', 'Updated')
                context.commit('loading', false)
                resolve(response)
            }).catch((error) => {
                console.log(error.response);
                // console.log(error.response.message);
                reject(error);
                context.commit('page_loader', false)
                context.commit('loading', false)
                if (error.response.status === 500 || error.response.status === 405) {
                    eventBus.$emit('errorEvent', error.response.statusText)
                    return
                } else if (error.response.status === 401 || error.response.status === 409) {
                    eventBus.$emit('reloadRequest', error.response.statusText)
                } else if (error.response.status === 422) {
                    if (error.response.data.errors) {
                        context.commit('errors', error.response.data.errors)
                    }
                    eventBus.$emit('errorEvent', error.response.data.message)
                }
            })
        });

    },


    searchItems(context, payload) {
        // console.log(payload);
        // context.commit('page_loader', true)
        context.commit('errors', [])

        var model = payload.model
        var update = payload.update
        var search = payload.search
        context.commit('loading', true)
        return new Promise((resolve, reject) => {
            axios.get(model + '/' + search).then((response) => {
                context.commit('page_loader', false)
                context.commit('loading', false)

                context.commit(update, response.data)
                resolve(response)
            }).catch((error) => {
                console.log(error);
                reject(error);

                context.commit('page_loader', false)
                context.commit('loading', false)
                if (error.response.status === 500) {
                    eventBus.$emit('errorEvent', error.response.statusText)
                    return
                } else if (error.response.status === 401 || error.response.status === 409) {
                    eventBus.$emit('reloadRequest', error.response.statusText)
                } else if (error.response.status === 422) {
                    if (error.response.data.errors) {
                        context.commit('errors', error.response.data.errors)
                    }
                    eventBus.$emit('errorEvent', error.response.data.message)
                    return
                }
            })
        });
    },


    // Post Items
    filterItems(context, payload) {
        // console.log(payload);
        // context.commit('page_loader', true)
        context.commit('errors', [])
        context.commit('loading', true)

        var model = payload.model
        var update = payload.update
        var data = payload.data

        context.commit('loading', true)
        return new Promise((resolve, reject) => {
            // context.commit('page_loader', false)
            axios.post(model, data).then((response) => {
                context.commit('loading', false)
                context.commit(update, response.data)
                // eventBus.$emit('alertRequest', 'Created')
                // console.log(response.data);
                resolve(response)
            }).catch((error) => {
                // console.log(error.response.data.errors);
                // context.commit('page_loader', false)
                reject(error);

                context.commit('loading', false)
                if (error.response.status === 500 || error.response.status === 405) {
                    eventBus.$emit('errorEvent', error.response.statusText)
                    return
                } else if (error.response.status === 401 || error.response.status === 409) {
                    eventBus.$emit('reloadRequest', error.response.statusText)
                } else if (error.response.status === 422) {
                    if (error.response.data.errors) {
                        context.commit('errors', error.response.data.errors)
                    }
                    eventBus.$emit('errorEvent', error.response.data.message)
                    return
                }
            })
        });
    },
    updateStatus(context, payload) {
        context.commit('UpdateSalestatus', payload)
    },
    updateNotyEvent(context, payload) {
        context.commit('updateNotificationEvent', payload)
    },

    resetItems(context, payload) {
        context.commit('ResetItem', payload)
    }
}
