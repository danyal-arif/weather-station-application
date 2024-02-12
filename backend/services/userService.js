import User from "../models/User.js"

export const addUser = async (user) => {
    const newUser = new User(user)
    return await newUser.save()
}

export const getUser = async (filters) => {
    return await User.findOne(filters).lean()
}

export const getUsers = async (filters) => {
    return await User.find(filters).lean()
}

export const updateUser = async (id, newUser) => {
    return await User.updateOne({_id: id}, newUser)
}
